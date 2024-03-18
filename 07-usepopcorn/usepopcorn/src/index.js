import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./StartRating";
import App from "./App-v3";
import "./index.css";
// import App from "./App";

// const Test = () => {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>the movie was rated {movieRating}</p>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["terrible", "bad", "okay", "good", "amazing"]}
    /> */}
    {/* <StarRating maxRating={5} className="test" color="red" defaultRating={4} /> */}
    {/* <App /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
