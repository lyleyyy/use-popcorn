// import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StartRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StartRating color="blue" onSetRating={setMovieRating} />
//       <p>This movies was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StartRating size={24} color="red" className="test" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
