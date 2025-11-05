import "./App.css";
import WeatherForm from "./components/WeatherForm";

function App() {
  return (
    <div className="childOfRoot">
      <h1 className="climaroo-title text-center mt-4">
        <span className="climaroo-kick">Clima</span>
        <span className="climaroo-roo">roo</span>
        <span className="climaroo-mascot" aria-hidden>
          🦘
        </span>
      </h1>

      <WeatherForm />
    </div>
  );
}

export default App;
