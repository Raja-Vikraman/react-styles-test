import React from "react";
// import styleA from "./styles/A.scss";

import "./styles/A.scss";
import CompB from "./compB.js";

// function CompA() {
//   return (
//     <>
//       <h2 className={styleA["heading-color"]}>CompA </h2>
//       <CompB />
//     </>
//   );
// }
function CompA() {
  return (
    <>
      <h2 className="heading-color">CompA </h2>
      <CompB />
    </>
  );
}

export default CompA;
