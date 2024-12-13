import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="container-fluid mt-3 bg-secondary">
        <h1 className="text-center p-3">MY CARD</h1>
        <div className="row ">
          <div class="col p-3  text-white">
            <div className="card" style={{ width: 400 }}>
              <img
                className="card-img-top"
                src="../bootstrap4/img_avatar1.png"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <a href="#" className="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div class="col p-3  text-white">
            <div className="card" style={{ width: 400 }}>
              <img
                className="card-img-top"
                src="../bootstrap4/img_avatar1.png"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div className="card-body">
                <h4 className="card-title">Naveen</h4>
                <p className="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <a href="#" className="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div class="col p-3 text-white">
            <div className="card" style={{ width: 400 }}>
              <img
                className="card-img-top"
                src="../bootstrap4/img_avatar1.png"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div className="card-body">
                <h4 className="card-title">Bablu</h4>
                <p className="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <a href="#" className="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
