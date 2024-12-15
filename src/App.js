import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/Navbar";
import { workers } from "./components/Users";
import { WorkerList } from "./components/Idcard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTwitter } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <>
      <Navbar />
      <FontAwesomeIcon icone = { faTwitter }/>
      <div className="container-fluid p-5 bg-secondary">
        <h1 className="text-center p-3">Worker's ID Cards</h1>
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


