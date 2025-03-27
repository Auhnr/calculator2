import useStore from "./store/UseStore";
import "./App.css";

function Calculator() {
  const { input, result, history, setInput, calculate, clear } = useStore();

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  return (
    <div className="calculator-container">
      <div className="display">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите выражение"
        />
        <div className="result">Результат: {result}</div>
      </div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "+", "="].map((btn) => (
          <button
            key={btn}
            className={`btn ${btn === "=" ? "calculate" : ""}`}
            onClick={btn === "=" ? calculate : () => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
        <button className="btn clear" onClick={clear}>
          C
        </button>
      </div>
      <div className="history">
        <h3>История:</h3>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <Calculator />
    </div>
  );
}

export default App;
