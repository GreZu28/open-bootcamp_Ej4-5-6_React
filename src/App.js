import logo from "./logo.svg";
import "./App.css";
import Clock from "./hooks/Clock";
import ModifiedClock from "./hooks/ModifiedClock";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Clock />
                <hr />
                <ModifiedClock />
            </header>
        </div>
    );
}

export default App;
