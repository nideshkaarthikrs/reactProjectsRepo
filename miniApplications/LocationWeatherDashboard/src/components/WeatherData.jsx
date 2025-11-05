import { useEffect, useState } from "react";
import Clear from "../assets/KangarooWeatherImages/Clear.png";
import Clouds from "../assets/KangarooWeatherImages/Clouds.png";
import Rain from "../assets/KangarooWeatherImages/Rain.png";
import Drizzle from "../assets/KangarooWeatherImages/Drizzle.png";
import Thunderstorm from "../assets/KangarooWeatherImages/Thunderstorm.png";
import Snow from "../assets/KangarooWeatherImages/Snow.png";
import Mist from "../assets/KangarooWeatherImages/Mist.png";
import Smoke from "../assets/KangarooWeatherImages/Smoke.png";
import Haze from "../assets/KangarooWeatherImages/Haze.png";
import Dust from "../assets/KangarooWeatherImages/Dust.png";
import Fog from "../assets/KangarooWeatherImages/Fog.png";
import Sand from "../assets/KangarooWeatherImages/Sand.png";
import Ash from "../assets/KangarooWeatherImages/Ash.png";
import Squall from "../assets/KangarooWeatherImages/Squall.png";
import Tornado from "../assets/KangarooWeatherImages/Tornado.png";

const WeatherData = (props) => {
  let [weather, setWeather] = useState({});
  let [forecast, setForecast] = useState([]);
  let [fact, setFact] = useState("");

  const apiKey = "b064d0ebd7bbf705ded75eaaf2469349";
  const styleMiddleText = {
    textAlign: "center",
    padding: "10px 20px",
    margin: "20px 0",
    borderRadius: "10px",
    color: "grey",
    backdropFilter: "blur(5px)",
    fontWeight: "500",
  };

  function climarooSpeaks(text) {
    if (!("speechSynthesis" in window)) return; // Safety check
    // Clear any stuck utterances
    window.speechSynthesis.cancel();
    // creating a new speech request object
    // SpeechSynthesisUtterance is a built-in browser API that represents something the computer can say.
    const utterance = new SpeechSynthesisUtterance(text);
    // configuring the language and accent it uses to speak
    utterance.lang = "en-US";
    utterance.volume = 1; // 0 to 1
    utterance.rate = 1; // Speed
    utterance.pitch = 1; // Tone

    // making it speak
    window.speechSynthesis.speak(utterance);
  }

  useEffect(() => {
    if (props.clicked && props.place) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.place}&appid=${apiKey}&units=metric`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("City not found");
          } else {
            props.setError("");
            return response.json();
          }
        })
        .then((data) => {
          setWeather(data);
          props.resetSearch();
          props.cityReset();
        })
        .catch((err) => {
          props.setError(err);
          props.resetSearch();
          props.cityReset();
          setWeather({});
        });
    }
  }, [props.clicked]);

  useEffect(() => {
    if (
      weather &&
      weather?.main?.temp &&
      weather?.weather?.[0]?.description &&
      weather?.name
    ) {
      let weatherText = `It’s ${weather.main.temp} degrees Celsius with ${weather.weather[0].description} in ${weather.name} today.`;
      console.log(weatherText);
      climarooSpeaks(weatherText);
    }

    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No fact :(");
        } else {
          return response.json();
        }
      })
      .then((data) => setFact(data["text"]))
      .catch((error) => {
        setFact(error);
      });
  }, [weather]);

  useEffect(() => {
    if (props.locClicked && props.lat && props.long) {
      // Current weather
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.long}&appid=${apiKey}&units=metric`
      )
        .then((response) => {
          if (!response.ok) throw new Error("City not found");
          return response.json();
        })
        .then((data) => {
          props.setError("");
          setWeather(data);
          props.setLocClicked(false); // reset after success
        })
        .catch((err) => {
          props.setError(err);
          setWeather({});
          props.setLocClicked(false); // reset after error
        });

      // 5-day forecast
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.long}&appid=${apiKey}&units=metric`
      )
        .then((res) => {
          if (!res.ok) throw new Error("Forecast not found");
          return res.json();
        })
        .then((data) => {
          let fiveDayForecasts = data.list.filter((item) =>
            item.dt_txt.includes("12:00:00")
          );
          setForecast(fiveDayForecasts);
        })
        .catch(() => setForecast([]));
    }
  }, [props.locClicked, props.lat, props.long]);

  useEffect(() => {
    if (props.clicked && props.place) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${props.place}&appid=${apiKey}&units=metric`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("City not found");
          }
          return res.json();
        })
        .then((data) => {
          // data.list -> array of 40 forecasts
          let fiveDayForecasts = data.list.filter((item) =>
            item.dt_txt.includes("12:00:00")
          );
          setForecast(fiveDayForecasts);
        })
        .catch((err) => setForecast([]));
    }
  }, [props.clicked]);

  function getBackgroundColor(weatherCondition) {
    switch (weatherCondition) {
      case "Clear":
        return "linear-gradient(135deg, #FFD93D, #FF7043)";
      case "Clouds":
        return "linear-gradient(135deg, #B0BEC5, #90A4AE)";
      case "Rain":
        return "linear-gradient(135deg, #4A90E2, #50A5F1)";
      case "Drizzle":
        return "linear-gradient(135deg, #81D4FA, #4FC3F7)";
      case "Thunderstorm":
        return "linear-gradient(135deg, #2C3E50, #34495E)";
      case "Snow":
        return "linear-gradient(135deg, #E0F7FA, #B2EBF2)";
      case "Mist":
        return "linear-gradient(135deg, #CFD8DC, #B0BEC5)";
      case "Smoke":
        return "linear-gradient(135deg, #757575, #BDBDBD)";
      case "Haze":
        return "linear-gradient(135deg, #FFE082, #FFD54F)";
      case "Dust":
        return "linear-gradient(135deg, #D7CCC8, #BCAAA4)";
      case "Fog":
        return "linear-gradient(135deg, #CFD8DC, #90A4AE)";
      case "Sand":
        return "linear-gradient(135deg, #FFE0B2, #FFCC80)";
      case "Ash":
        return "linear-gradient(135deg, #9E9E9E, #616161)";
      case "Squall":
        return "linear-gradient(135deg, #64B5F6, #1976D2)";
      case "Tornado":
        return "linear-gradient(135deg, #455A64, #263238)";
      default:
        return "#ffffff";
    }
  }

  const WeatherKangaroos = {
    Clear: [Clear, "Hop hop hooray! Sun’s out, roo’s out 🕶️"],
    Clouds: [Clouds, "Where’d my sun go? I can’t roo-lax without it…"],
    Rain: [Rain, "I need a roo-brella ASAP ☔"],
    Drizzle: [Drizzle, "Is this rain or the sky just spitting on me? 💧"],
    Thunderstorm: [
      Thunderstorm,
      "Crikey! That thunder nearly made me spill my roo-smoothie ⚡",
    ],
    Snow: [Snow, "Brrr… my paws are freezing, mate 🧣"],
    Mist: [Mist, "Can’t roo-member where I left my pouch in this fog…"],
    Smoke: [Smoke, "Cough cough… even a kangaroo needs fresh hops 🥴"],
    Haze: [Haze, "Everything’s blurry… did I hop into the wrong outback?"],
    Dust: [Dust, "Ugh… dust in the pouch again 🐾"],
    Fog: [Fog, "Can’t see my own tail! Too foggy for a proper hop 😵"],
    Sand: [Sand, "Who turned the beach into my backyard?!"],
    Ash: [Ash, "Ash everywhere… my fur’s turning grey 🦘💨"],
    Squall: [Squall, "Help! My ears are flapping like crazy in this wind 🌪️"],
    Tornado: [Tornado, "AHHH! This roo didn’t sign up for roller coasters 🎢"],
  };
  let weatherCard = (
    <div
      className="card shadow w-50 mx-auto mt-4 mb-4 text-center"
      style={{ background: getBackgroundColor(weather?.weather?.[0]?.main) }}
    >
      <div className="card-body">
        <h4 className="card-title">
          {weather?.name}, {weather?.sys?.country}
        </h4>
        <img
          src={`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
          alt={weather?.weather?.[0]?.description}
        />
        <h2 className="mt-2">{weather?.main?.temp}°C</h2>
        <p className="text-muted">
          <strong>
            {weather?.weather?.[0]?.main} - {weather?.weather?.[0]?.description}
          </strong>
        </p>
        <p>Feels like: {weather?.main?.feels_like}°C</p>
        <p>Humidity: {weather?.main?.humidity}%</p>
        <p>Wind: {weather?.wind?.speed} m/s</p>
        <img
          src={WeatherKangaroos[weather?.weather?.[0]?.main]?.[0]}
          alt="Climaroo"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            maxWidth: "100%",
          }}
          className="rounded rounded-5 border border-dark border-2"
        />
        <p>
          <strong>{WeatherKangaroos[weather?.weather?.[0]?.main]?.[1]}</strong>
        </p>
      </div>
    </div>
  );

  let forecasts = (
    <div
      className="card w-100 mx-auto shadow mt-4 p-3"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "15px",
      }}
    >
      {/* Card Header */}
      <h3 className="text-center" style={styleMiddleText}>
        Weather forecast of the next five days (12 P.M)
      </h3>

      {/* Forecast Boxes */}
      <div
        className="container mt-3"
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          paddingBottom: "10px",
        }}
      >
        <div className="d-flex flex-row">
          {forecast.map((item, index) => (
            <div
              key={index}
              className="card text-center shadow-sm mx-2"
              style={{
                minWidth: "120px",
                background: "rgba(0,0,0,0.3)",
                backdropFilter: "blur(5px)",
                borderRadius: "10px",
              }}
            >
              <div className="card-body p-2">
                <h6 className="card-title text-dark">
                  {new Date(item.dt_txt).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </h6>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt={item.weather[0].description}
                />
                <p className="mb-0 text-black">
                  {Math.round(item.main.temp)}°C
                </p>
                <small className="text-dark">{item.weather[0].main}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div>
        {weather?.main &&
          weather?.wind &&
          weather?.sys?.country &&
          weather?.name && (
            <>
              {weatherCard}
              {forecasts}
              <div className="container my-4">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 col-lg-8">
                    <div className="card text-center shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">Did-You-Roo?</h5>
                        <p className="card-text fs-5">{fact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        {props.error && <h2 className="text-center">{props.error.message}</h2>}
      </div>
    </>
  );
};

export default WeatherData;
