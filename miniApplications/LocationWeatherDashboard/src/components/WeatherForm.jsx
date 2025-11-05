import { useState } from "react";
import WeatherData from "./WeatherData";
import './WeatherForm.css';

const WeatherForm = () => {
  let [city, setCity] = useState("");
  let [error, setError] = useState("");
  let [searchClicked, setSearchClicked] = useState(false);
  let [locClicked, setLocClicked] = useState(false);
  let [isListening, setIsListening] = useState(false);
  function handleCitySearch(event) {
    setCity(event.target.value);
    setError("");
  }
  function handleSearchButton() {
    if (city.trim().length === 0) {
      setSearchClicked(false);
    } else {
      setSearchClicked(true);
    }
  }

  let [lat, setLat] = useState(null);
  let [long, setLong] = useState(null);

  function handleGetCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        setLocClicked(true);
        // console.log(lat, long)
      },
      (error) => {
        alert("Error: " + error.message);
      }
    );
  }

  function resetSearchClicked() {
    setSearchClicked(false);
  }

  function resetLocationClick() {
    setLocClicked(false);
  }

  function resetCity() {
    setCity("");
  }

  function handleVoiceSearch() {
    // getting the constructor
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    // checking if this feature is supported in the browser
    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    // configuring the object
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false; //means we will only get the final transcript (no half-baked, mid-sentence updates)

    // when listening starts
    recognition.onstart = () => {
      setIsListening(true);
    };

    // starts listening
    recognition.start();

    // getting the voice transcript and getting the city name
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      // console.log("You said: " + transcript)

      // matching cities
      const match = transcript.match(/weather in (.+)/i);
      // match will be an array which will be like ['weather in paris' , 'paris']
      const cityName = match ? match[1] : transcript; // here we take the city's name if the match array exists or else we take just whatever the user said

      setCity(cityName);
      setSearchClicked(true);
      setIsListening(false);
    };

    // in case if the listening ends without any result , the onresult function will not run, so we have to set isListening to false when the listening ends
    recognition.onend = () => {
      setIsListening(false);
    };

    //catching things like mic blocked, no speech, network issues.
    recognition.onerror = (event) => {
      // console.error("Speech recognition error: " + event.error)
      setIsListening(false);
      alert("Sorry! You were not audible. Try again :(");
    };
  }

  let cardBgStyle = {
    background: "rgba(255, 223, 93, 0.2)",
    backdropFilter: "blur(10px) saturate(150%)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  };

  return (
    <div className="d-flex justify-content-center align-items-start min-vh-100 py-5">
      <div className="card w-50 shadow p-4" style={cardBgStyle}>
        <div className="card-body">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter city..."
                value={city}
                onChange={handleCitySearch}
              />{" "}
              &nbsp;&nbsp;
              <button
                className="btn btn-outline-secondary rounded rounded-3"
                type="button"
                onClick={handleSearchButton}
              >
                Search
              </button>
              &nbsp;&nbsp;
              <button
                className="btn btn-outline-info rounded rounded-3"
                type="button"
                onClick={handleGetCurrentLocation}
              >
                Use Current Loc
              </button>
              &nbsp;&nbsp;
              <button
                className="btn btn-outline-danger rounded rounded-3"
                type="button"
                onClick={handleVoiceSearch}
              >
                <i
                  className={`fa fa-microphone ${
                    isListening ? "listening" : ""
                  }`}
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </form>
        </div>

        <h1 className="text-center">{city.toUpperCase()}</h1>
        <WeatherData
          place={city}
          clicked={searchClicked}
          resetSearch={resetSearchClicked}
          cityReset={resetCity}
          setError={setError}
          error={error}
          lat={lat}
          long={long}
          locClicked={locClicked}
          setLocClicked={setLocClicked}
          resetLocationClick={resetLocationClick}
        />
      </div>
    </div>
  );
};

export default WeatherForm;
