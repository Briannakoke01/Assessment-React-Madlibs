import React from "react";

const stories = [
  {
    title: "A Day in the Park",
    template: "Once upon a time, a {adjective} {noun} decided to {verb} {adverb} in the park."
  },
  {
    title: "The Magical Adventure",
    template: "In a {adjective} forest, a {noun} decided to {verb} {adverb} on an adventure."
  }
];

function StorySelector({ onSelect }) {
  return (
    <div>
      <h2>Select a Story</h2>
      {stories.map((story, index) => (
        <button key={index} onClick={() => onSelect(story)}>
          {story.title}
        </button>
      ))}
    </div>
  );
}

export default StorySelector;
