import React, { useState, useEffect, useRef } from "react";
import { ref, set, onValue } from "firebase/database";
import { database } from './components/firebase/FireBase';
import Blob from "./components/Blob/Blob";
import ClickPanel from "./components/ClickPanel/ClickPanel";
import GitHubIcon from "./GitHubIcon.svg";  
import "./App.css";


function App() {
  const [count, setCount] = useState(null);
  const [message, setMessage] = useState("Click On Blob");        
  const bgColor = "var(--color-hover)";
  const textColor = "var(--color-text)";

  const messages = [
    "Ahoy! You've unlocked my secret stash of clicks!",
    "Yo-ho-ho! Swiped another click from ya, mate!",
    "Thanks for the loot! Your clicks are my treasure!",
    "Arrr, you've struck gold with that click!",
    "Sneaky and slick! Thanks for the click!",
    "I nabbed that click faster than a cat on a mouse!",
    "Cheers for the bounty, me heartie!",
    "You're making me richer by the click!",
    "Got it! Your click's safe with me!",
    "That click was music to me ears, keep 'em coming!",
    "What a steal! Thanks for that gem of a click!",
    "You clicked like a pro, matey! Thanks a ton!",
    "Swipe and thank ye! Your click's been pilfered!",
    "A fine click indeed! Swiped right under your nose!",
    "Clicks away! Thanks for contributing to the cause!",
    "Your generosity is unmatched, click captain!",
    "Ah, another click for the chest! You're too kind!",
    "Click-heist successful! You're the best accomplice!",        
  ];

  const messageTimeoutRef = useRef(null);

  useEffect(() => {
    const countRef = ref(database, "clicks/count");
    onValue(
      countRef,
      (snapshot) => {
        const data = snapshot.val();
        setCount(data || 0);
      },
      (error) => {
        console.error("Firebase read failed: ", error);
      }
    );
  }, []);

  const handleClick = () => {
    if (count === null) return;
    const newCount = count + 1;
    const countRef = ref(database, "clicks/count");
    set(countRef, newCount).catch((error) => {
      console.error("Firebase update failed: ", error);
    });
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
    clearTimeout(messageTimeoutRef.current);
    messageTimeoutRef.current = setTimeout(() => {
      setMessage("Click On Blob");
    }, 3000);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="Container">
        <Blob onClick={handleClick} count={count} />
        <ClickPanel
          message={message}
          bgColor="--color-info-bg"
          textColor="--color-info-text"
        />
        <a
          href="https://github.com/SandorGyorfi/Blob-the-Click-Thief"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="GitHubButton">
            <img
              src={GitHubIcon}
              alt="GitHub Icon"
              style={{ color: "--color-info-text" }}
            />
            Project Documentation
          </button>
        </a>
      </div>
      <div
        className="Info-Panel"
        style={{
          backgroundColor: "--color-info-bg",
          color: "--color-info-text",
        }}
      >
        <div className="marquee-container">
          <p>Click Blob, the sneaky friend, Each click it keeps until the end!
         Inits clicky home they hide, No restart, those clicks can't ride!</p>
        </div>
      </div>
    </div>
  );
}

export default App;