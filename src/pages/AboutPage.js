import React from "react";
import "./about.css";
export default function AboutPage() {
  return (
    <div className="containers">
      <div className="myInfo">
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            fontFamily: "cursive",
            color: "black",
          }}
        >
          M o j a P r i c a
        </h1>
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: "cursive",
            color: "black",
          }}
        >
          Započeo sam svoju programersku avanturu kada sam prvi put sreo
          računar. Osećao sam se kao da sam ponovno sreo starog prijatelja.
          Programiranje me privuklo svojom kreativnošću i mogućnošću rešavanja
          problema. U programiranju sam pronašao svoju strast i uživam u
          stvaranju novih digitalnih svetova i pronalaženju efikasnih rešenja.
          Iako je bilo izazova, nikada nisam izgubio strast prema ovom svetu.
          Sada je programiranje moj životni poziv, gde neprestano učim i rastem.
        </h1>
      </div>
      <div className="photo">
        <img style={{ borderRadius: "50%" }} src="myself.jpg"></img>
      </div>
    </div>
  );
}
