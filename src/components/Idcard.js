import React from "react";
import { workers } from "./Users";

export function WorkerList({ workerid }) {
    return (
      <div className="col sm-3 mb-4  text-white">
        <div className="card" style={{ width: 400 }}>
          <img
            className="card-img-top"
            src="../bootstrap4/img_avatar1.png"
            alt="Card image"
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h4 className="card-title">{workerid.name}</h4>
            <div className="card-text">
              <p className="h5">Basic info</p>
              id={workerid.id},
              <br />
              username = {workerid.username},
              <br />
              email = {workerid.email}
            </div>
              <br/>
            <p className="h5">Address</p>
            <address>
              {workerid.address.street},{workerid.address.suite},
              {workerid.address.city},{workerid.address.zipcode}
            </address>
            <a href="#" className="btn btn-primary">
              See Profile
            </a>
          </div>
        </div>
      </div>
    );
  }