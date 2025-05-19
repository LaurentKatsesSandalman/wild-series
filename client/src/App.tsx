import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Wild series</h1>
      </header>

      <main className="text-box">
        <Outlet />
      </main>
    </>
  );
}

export default App;
