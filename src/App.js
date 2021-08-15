import "./styles.css";
import React, { useState } from "react";
var emojis = {
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "🥡": "Takeout box",
  "❤️": "Love",
  "😴": "Sleepy",
  "😎": "Cool",
  "🤒": "Sick",
  "👿": "Angry",
  "🥰": "Feeling loved",
  "😑": "Annoyance"
};
const emoArr = Object.keys(emojis);
// console.log(emoArr);
export default function App() {
  var [text, setText] = useState("");

  function clickEmo(emoji) {
    return setText(emojis[emoji]);
  }

  function inputHandler(event) {
    var newText = event.target.value;
    var ans = emojis[newText];
    if (newText === "") {
      return setText("Your Translation will appear here! 😁");
    }
    if (ans === undefined) {
      return setText(ans);
    } else {
      return setText(ans);
    }
    // console.log(emojis[newText]);
  }
  function defT(text) {
    if (text === "") {
      return "Your Translation will appear here! 😁";
    } else if (text === undefined) {
      return "We dont have this emoji rn 😐";
    } else {
      return text;
    }
  }
  return (
    <div className="App">
      <h1>Know Your Emojis</h1>
      <input
        placeholder="Type your emojis here!"
        style={{ marginBottom: "10px" }}
        onChange={inputHandler}
        className="input-bar"
      />

      <h3
        style={{
          fontSize: "25px",
          color: "#1E40AF",
          fontFamily: "'Trebuchet MS', sans-serif"
        }}
      >
        {defT(text)}
      </h3>
      <div>
        <h2>Emojis we know rn 👇</h2>
        {emoArr.map((items) => {
          return (
            <span
              key={items}
              onClick={() => clickEmo(items)}
              style={{ cursor: "pointer", margin: "10px", fontSize: "2rem" }}
            >
              {items}
            </span>
          );
        })}
      </div>
    </div>
  );
}
