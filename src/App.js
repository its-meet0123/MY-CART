import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { data } from "./component/userdata";

function App() {
  return (
    <>
      <Navbar />
      <div className="container col-lg-3">
         <div className="mb-4">
         {data.map((v,i)=>{
            return(
              <ProductItems pitems = {v} key={i} />
            );
           }
           )}
         </div>
      </div>

    </>
  );
}

export default App;

function ProductItems({pitems}) {
  return (
    <div className="container mt-3">
      <div className="card" style={{ width: 400 }}>
        <img
          className="card-img-top"
          src="../bootstrap4/img_avatar1.png"
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <h4 className="card-title">{pitems.title}</h4>
          <p className="card-text">
           {pitems.body}
          </p>
          <a href="#" className="btn btn-primary">
            See Profile
          </a>
        </div>
      </div>
      <br />
    </div>
  );
}
