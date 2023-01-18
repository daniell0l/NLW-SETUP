import "./styles/global.css";

import { Habit } from "./components/Habist";

function App() {
  return (
    <div>
      <Habit completed={2} />
      <Habit completed={4} />
      <Habit completed={8} />
    </div>
  );
}

export default App;
