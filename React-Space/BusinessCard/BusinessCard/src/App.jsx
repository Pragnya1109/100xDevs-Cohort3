import React from "react";
import "./Components/styles.css";
import BusinessCard from "./Components/BusinessCard";

export default function App() {
  const cardData = {
    name: "Pragnya Swain",
    description:
      "A passionate developer exploring the realms of creativity and technology.",
    interests: [
      "Coding",
      "Reading",
      "Writing",
      "Playing",
      "Cooking",
      "Painting",
    ],
    linkedin: "https://www.linkedin.com/in/pragnya1109",
    github: "https://github.com/pragnya1109",
  };

  return (
    <div>
      <BusinessCard
        name={cardData.name}
        description={cardData.description}
        interests={cardData.interests}
        linkedin={cardData.linkedin}
        twitter={cardData.twitter}
        otherSocialMedia={cardData.otherSocialMedia}
      />
    </div>
  );
}
