import React, { useState } from "react";
export default function Counter() {
  let [qwe, wer] = useState(7);

  console.log(qwe);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {qwe}</h2>
      <button
        onClick={() => {
          //   count++;
          wer(qwe + 1);
          console.log(qwe);
        }}
      >
        Up{" "}
      </button>
      <button
        onClick={() => {
          //   count--;
          wer(qwe - 1);
          console.log(qwe);
        }}
      >
        Down{" "}
      </button>
      <hr />{" "}
    </div>
  );
}
