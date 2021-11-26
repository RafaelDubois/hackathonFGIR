import React from "react";
import "./Acceuil.css";
import { Link } from "react-router-dom";

const Acceuil = () => (
  <div className="container">
    <ul>
      <li>
        <Link to="/Hangman">Hang your artist</Link>
      </li>
      <li>
        <Link to="#">Read between the lyrics</Link>
      </li>
      <li>
        <Link to="#">the beat must go on</Link>
      </li>
    </ul>
  </div>
);

export default Acceuil;
