"use client";
import { useEffect, useState } from "react";
import { cn } from "../../../utils"; // Or use your own cn join function

export function TypewriterEffect({ words, className, cursorClassName }) {
  const [displayedLetters, setDisplayedLetters] = useState("");
  const [currentWord, setCurrentWord] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentWord < words.length) {
      if (currentChar < words[currentWord].text.length) {
        const timeout = setTimeout(() => {
          setDisplayedLetters(
            (prev) =>
              prev + words[currentWord].text.charAt(currentChar)
          );
          setCurrentChar((prev) => prev + 1);
        }, 90);
        return () => clearTimeout(timeout);
      } else if (currentWord !== words.length - 1) {
        // Add a single space between words (not after the last)
        const timeout = setTimeout(() => {
          setDisplayedLetters((prev) => prev + " ");
          setCurrentWord((prev) => prev + 1);
          setCurrentChar(0);
        }, 125);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentChar, currentWord, words]);

  // Find out which "chunks" are colored (custom style)
  let lettersSoFar = 0;
  const spans = [];
  for (let w = 0; w < words.length; w++) {
    const wordText = words[w].text;
    const lettersToShow = Math.max(
      0,
      Math.min(wordText.length, displayedLetters.length - lettersSoFar)
    );
    if (lettersToShow > 0) {
      const shownPart = wordText.slice(0, lettersToShow);
      spans.push(
        <span
          key={w}
          className={cn(words[w].className)}
        >
          {shownPart}
        </span>
      );
      // Add a space after all but the last word IF space was revealed
      if (
        w < words.length - 1 &&
        displayedLetters[lettersSoFar + lettersToShow] === " "
      ) {
        spans.push(<span key={"space" + w}>&nbsp;</span>);
      }
    }
    lettersSoFar += lettersToShow;
    // If all letters shown, but not the space yet, break out
    if (lettersSoFar >= displayedLetters.length) break;
    // Add one for the space if present
    if (
      displayedLetters.length > lettersSoFar &&
      displayedLetters[lettersSoFar] === " "
    ) {
      lettersSoFar += 1;
    }
  }

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center font-mono",
        className
      )}
      style={{ letterSpacing: 0 }}
    >
      {spans}
      {/* Blinking Cursor */}
      <span
        className={cn(
          "inline-block align-baseline w-[3px] h-8 bg-blue-500 ml-2",
          cursorClassName
        )}
        style={{ animation: "blink 1s steps(1) infinite" }}
      />
      {/* Simple CSS keyframes for cursor */}
      <style>{`
        @keyframes blink {
          0%,100% { opacity: 1 }
          50% { opacity: 0 }
        }
      `}</style>
    </div>
  );
}
