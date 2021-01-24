import React, { useState } from "react";
import "./styles.css";

var emojiDic = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  " 😀": " Grinning Face",
  "😃": " Grinning Face with Big Eyes",
  "😄 ": "Grinning Face with Smiling Eyes",
  "😁 ": "Beaming Face with Smiling Eyes",
  "😆": " Grinning Squinting Face",
  "😅": " Grinning Face with Sweat",
  "🤣 ": "Rolling on the Floor Laughing",
  "😂": " Face with Tears of Joy",
  "🙂": " Slightly Smiling Face",
  "🙃": " Upside-Down Face",
  "😉 ": "Winking Face",
  "😊 ": "Smiling Face with Smiling Eyes",
  "😇 ": "Smiling Face with Halo",
  "🥰 ": "Smiling Face with Hearts",
  "😍 ": "Smiling Face with Heart-Eyes",
  "🤩": " Star-Struck",
  "😘": " Face Blowing a Kiss",
  "😗 ": "Kissing Face",
  "☺️ ": "Smiling Face",
  "😚 ": "Kissing Face with Closed Eyes",
  "😙 ": "Kissing Face with Smiling Eyes",
  "🥲": " Smiling Face with Tear",
  "😋 ": "Face Savoring Food",
  "😛": " Face with Tongue",
  "😜": " Winking Face with Tongue",
  "🤪 ": "Zany Face",
  "😝 ": "Squinting Face with Tongue",
  "🤑": " Money-Mouth Face",
  "🤗 ": "Hugging Face",
  "🤭 ": "Face with Hand Over Mouth",
  "🤫 ": "Shushing Face",
  "🤔 ": "Thinking Face",
  "🤐 ": "Zipper-Mouth Face",
  "🤨 ": "Face with Raised Eyebrow",
  "😐": " Neutral Face",
  "😑": " Expressionless Face",
  "😶": " Face Without Mouth",
  "😏": " Smirking Face",
  "😒": " Unamused Face",
  "🙄 ": "Face with Rolling Eyes",
  "😬 ": "Grimacing Face",
  "🤥 ": "Lying Face",
  "😌 ": "Relieved Face",
  "😔 ": "Pensive Face",
  "😪": " Sleepy Face",
  "🤤": " Drooling Face",
  "😴 ": "Sleeping Face",
  "😷": " Face with Medical Mask",
  "🤒": " Face with Thermometer",
  "🤕": " Face with Head-Bandage",
  "🤢": " Nauseated Face",
  "🤮": " Face Vomiting",
  "🤧": " Sneezing Face",
  " 🥵 ": "Hot Face",
  "🥶": " Cold Face",
  "🥴": " Woozy Face",
  "😵 ": "Dizzy Face",
  "🤯": " Exploding Head",
  "🤠 ": "Cowboy Hat Face",
  "🥳 ": "Partying Face",
  "🥸 ": "Disguised Face",
  "😎": " Smiling Face with Sunglasses",
  "🤓 ": "Nerd Face",
  "🧐": " Face with Monocle",
  "😕": " Confused Face",
  "😟": " Worried Face",
  "🙁": " Slightly Frowning Face",
  "☹️": " Frowning Face",
  "😮": " Face with Open Mouth",
  "😯": " Hushed Face",
  "😲": " Astonished Face",
  "😳 ": "Flushed Face",
  "🥺": " Pleading Face",
  "😦 ": "Frowning Face with Open Mouth",
  "😧": " Anguished Face",
  "😨": " Fearful Face",
  "😰": " Anxious Face with Sweat",
  "😥 ": "Sad but Relieved Face",
  "😢": " Crying Face",
  "😭": " Loudly Crying Face",
  "😱": " Face Screaming in Fear",
  "😖": " Confounded Face",
  "😣": " Persevering Face",
  "😞": " Disappointed Face",

  "❤️": "love",
  "😑": "annoyance"
};
var emojis = Object.keys(emojiDic);
export default function App() {
  const [mean, setMeaning] = useState("");
  function emojiClickHandler(emoji) {
    var meaning = emojiDic[emoji];
    if (meaning === undefined) {
      setMeaning("is not in our dictionary");
    } else {
      setMeaning(meaning);
    }
  }
  function onChangeHandler(event) {
    var emoji = event.target.value;
    var meaning = emojiDic[emoji];
    if (meaning === undefined) {
      setMeaning("is not in our dictionary");
    } else {
      setMeaning(meaning);
    }
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input style={{ fontSize: "3rem" }} onChange={onChangeHandler}></input>
      <h2>Meaning of this : {mean}</h2>
      <ul>
        {emojis.map((item) => {
          return (
            <span
              style={{
                cursor: "pointer",
                fontSize: "2rem",
                padding: "0px 0.5rem"
              }}
              key={item}
              onClick={() => emojiClickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
