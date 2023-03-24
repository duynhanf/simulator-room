import { Tooltip } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Tooltip title="This is Tooltip">
        <button>Test Tooltip</button>
      </Tooltip>
    </div>
  );
}

export default App;
