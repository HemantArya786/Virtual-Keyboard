import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [cursorPos, setCursorPos] = useState(0);
  const [isCaps, setIsCaps] = useState(false);
  const [isShift, setIsShift] = useState(false);

  const copyText = () => {
    // method 1 for copy text
    // const temp = document.createElement("input");
    // temp.type = "text";
    // temp.value = inputValue;

    // document.body.appendChild(temp);
    // temp.select();
    // document.execCommand("Copy");
    // document.body.removeChild(temp);

    // method 2 for copy text
    navigator.clipboard.writeText(inputValue);
  };

  const SelectKeyValue = (word) => {
    console.log(word, "key name");

    let newValue =
      inputValue.slice(0, cursorPos) +
      word +
      inputValue.slice(cursorPos, inputValue.length);
    setInputValue(newValue);
    setIsShift(false);
    setCursorPos(cursorPos + 1);
  };

  // useEffect(() => {
  //   console.log(cursorPos);
  // }, [cursorPos]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <h1 style={{ color: "red", fontFamily: "Roboto, sans-serif" }}>
          Virtual KeyBoard
        </h1>
      </div>
      <div>
        <textarea
          autoFocus={true}
          className="textareaSpace"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyUp={(e) => {
            console.log(e.key, " name");

            let foundBtn = null;
            const allBtns = document.querySelectorAll("button");
            allBtns.forEach((item) => {
              if (item.textContent == e.key) {
                foundBtn = item;
              }
            });

            if (foundBtn) {
              if (
                [
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "0",
                  "`",
                  "-",
                  "+",
                ].includes(foundBtn.textContent)
              ) {
                foundBtn.style.backgroundColor = "aqua ";
              } else {
                foundBtn.style.backgroundColor = "yellow";
              }

              setTimeout(() => {
                if (["1", "2", "3", "4"].includes(foundBtn.textContent)) {
                  foundBtn.style.backgroundColor = "aquamarine";
                } else {
                  foundBtn.style.backgroundColor = "white";
                }
              }, 500);
            }

            if (e.keyCode == 20) {
              setIsCaps(!isCaps);
            }

            if (e.keyCode == 16) {
              setIsShift(!isShift);
            }
            if (e.keyCode == 8) {
              setCursorPos(cursorPos - 1);
            } else {
              setCursorPos(cursorPos + 1);
            }
            const { selectionStart } = e.target;

            setCursorPos(selectionStart);
          }}
          onMouseUp={(e) => {
            const { selectionStart } = e.target;

            setCursorPos(selectionStart);
            // txt1.slice(0, 3) + "bar" + txt1.slice(3);
          }}
        />
      </div>

      <div>
        <button
          className="btnClass"
          onClick={() => SelectKeyValue(isShift ? "~" : "`")}
        >
          {isShift ? "~" : " `"}
        </button>
        <button
          className="btnClass"
          onClick={() => SelectKeyValue(isShift ? "!" : "1")}
        >
          {isShift ? "!" : 1}
        </button>
        <button
          className="btnClass"
          onClick={() => SelectKeyValue(isShift ? "@" : "2")}
        >
          {isShift ? "@" : "2"}
        </button>
        <button
          className="btnClass"
          onClick={() => SelectKeyValue(isShift ? "#" : "3")}
        >
          {isShift ? "#" : "3"}
        </button>
        <button
          className="btnClass"
          onClick={() => SelectKeyValue(isShift ? "$" : "4")}
        >
          {isShift ? "$" : "4"}
        </button>
        <button
          className="btnClass"
          onClick={() => SelectKeyValue(isShift ? "%" : "5")}
        >
          {isShift ? "%" : "5"}
        </button>
        <button
          className="btnClass"
          onClick={() => SelectKeyValue(isShift ? "^" : "6")}
        >
          {isShift ? "^" : "6"}
        </button>
        <button
          className="btnClass"
          onClick={() => SelectKeyValue(isShift ? "&" : "7")}
        >
          {isShift ? "&" : "7"}
        </button>
        <button
          className="btnClass"
          onClick={() => SelectKeyValue(isShift ? "*" : "8")}
        >
          {isShift ? "*" : "8"}
        </button>
        <button
          className="btnClass"
          onClick={() => SelectKeyValue(isShift ? "(" : "9")}
        >
          {isShift ? "(" : "9"}
        </button>
        <button
          className="btnClass"
          onClick={() => SelectKeyValue(isShift ? ")" : "0")}
        >
          {isShift ? ")" : "0"}
        </button>
        <button
          className="btnClass"
          onClick={() => SelectKeyValue(isShift ? "_" : "-")}
        >
          {isShift ? "_" : "-"}
        </button>
        <button
          className="btnClass"
          onClick={() => SelectKeyValue(isShift ? "=" : "+")}
        >
          {isShift ? "=" : "+"}
        </button>
        <button
          className="btnClass"
          onClick={() => SelectKeyValue(isShift ? "|" : "\\")}
        >
          {isShift ? "|" : "\\"}
        </button>
        <button
          className="backSpaceBtn"
          onClick={() => {
            const newValue =
              inputValue.slice(0, cursorPos - 1) +
              inputValue.slice(cursorPos, inputValue.length);
            setInputValue(newValue);
            console.log(cursorPos);

            if (cursorPos !== 0) {
              setCursorPos(cursorPos - 1);
            }
          }}
        >
          BackSpace
        </button>
      </div>

      <div>
        <button
          className="tabBtn"
          onClick={() => {
            SelectKeyValue("\t");
          }}
        >
          Tab
        </button>
        <button
          className="btnWord"
          onClick={() => {
            SelectKeyValue(isCaps || isShift ? "Q" : "q");
          }}
        >
          {isCaps || isShift ? "Q" : "q"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "W" : "w")}
        >
          {isCaps || isShift ? "W" : "W"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "E" : "e")}
        >
          {isCaps || isShift ? "E" : "e"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "R" : "r")}
        >
          {isCaps || isShift ? "R" : "r"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "T" : "t")}
        >
          {isCaps || isShift ? "T" : "t"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "Y" : "y")}
        >
          {isCaps || isShift ? "Y" : "y"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "U" : "u")}
        >
          {isCaps || isShift ? "U" : "u"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "I" : "i")}
        >
          {isCaps || isShift ? "I" : "i"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "O" : "o")}
        >
          {isCaps || isShift ? "O" : "o"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "P" : "p")}
        >
          {isCaps || isShift ? "P" : "p"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isShift ? "{" : "[")}
        >
          {isShift ? "{" : "["}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isShift ? "}" : "]")}
        >
          {isShift ? "}" : "]"}
        </button>
        <button className="enterBtn" onClick={() => SelectKeyValue("\n")}>
          Enter
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setIsCaps(!isCaps);
          }}
          style={{
            backgroundColor: isCaps ? "rgb(171, 171, 21)" : "yellow",
            height: "50px",
            width: "120px",
            borderRadius: "45px",
            fontSize: "17px",
            fontWeight: "bold",
            border: "none",

            fontFamily: "Roboto, sans-serif",
          }}
        >
          CapsLocks
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "A" : "a")}
        >
          {isCaps || isShift ? "A" : "a"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "S" : "s")}
        >
          {isCaps || isShift ? "S" : "s"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "D" : "d")}
        >
          {isCaps || isShift ? "D" : "d"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "F" : "f")}
        >
          {isCaps || isShift ? "F" : "f"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "G" : "g")}
        >
          {isCaps || isShift ? "G" : "g"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "H" : "h")}
        >
          {isCaps || isShift ? "H" : "h"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "J" : "j")}
        >
          {isCaps || isShift ? "J" : "j"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "K" : "k")}
        >
          {isCaps || isShift ? "K" : "k"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "L" : "l")}
        >
          {isCaps || isShift ? "L" : "l"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isShift ? ":" : ";")}
        >
          {isShift ? ":" : ";"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isShift ? "'" : ' " ')}
        >
          {isShift ? "'" : '"'}
        </button>
        <button className="copyBtn" onClick={copyText}>
          Copy
        </button>
      </div>
      <div>
        <button
          style={{
            backgroundColor: isShift ? "rgb(171, 171, 21)" : "yellow",
            height: "50px",
            width: "120px",
            borderRadius: "45px",
            fontSize: "17px",
            fontWeight: "bold",
            border: "none",

            fontFamily: "Roboto, sans-serif",
          }}
          onClick={() => {
            setIsShift(!isShift);
          }}
        >
          Shift
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isShift || isCaps ? "Z" : "z")}
        >
          {isShift || isCaps ? "Z" : "z"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "X" : "x")}
        >
          {isShift || isCaps ? "X" : "x"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "C" : "c")}
        >
          {isShift || isCaps ? "C" : "c"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isCaps || isShift ? "V" : "v")}
        >
          {isShift || isCaps ? "V" : "v"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isShift || isCaps ? "B" : "b")}
        >
          {isShift || isCaps ? "B" : "b"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isShift || isCaps ? "N" : "n")}
        >
          {isShift || isCaps ? "N" : "n"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isShift || isCaps ? "M" : "m")}
        >
          {isShift || isCaps ? "M" : "m"}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isShift ? "<" : ",")}
        >
          {isShift ? "<" : ","}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isShift ? ">" : ".")}
        >
          {isShift ? ">" : "."}
        </button>
        <button
          className="btnWord"
          onClick={() => SelectKeyValue(isShift ? "?" : "/")}
        >
          {isShift ? "?" : "/"}
        </button>
      </div>
      <div>
        <button className="spaceBtn" onClick={() => SelectKeyValue(" ")}>
          Space
        </button>
      </div>
    </div>
  );
}

export default App;
