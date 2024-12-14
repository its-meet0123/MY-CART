import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { workers } from "./components/Users";
import { WorkerList } from "./components/Idcard";

function App() {
  return (
    <>
      <Navbar />

      <div className="container-fluid p-5 bg-secondary">
        <h1 className="text-center p-3">MY CARD</h1>
        <div className="row">
          {workers.map((v, i) => {
            return <WorkerList workerid={v} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;


