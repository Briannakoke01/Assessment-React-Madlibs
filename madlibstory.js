import React from "react";

function MadlibStory({ words, selectedStory, onRestart }) {
  const { noun, verb, adjective, adverb } = words;
  const storyTemplate = selectedStory.template
    .replace("{noun}", noun)
    .replace("{verb}", verb)
    .replace("{adjective}", adjective)
    .replace("{adverb}", adverb);

  return (
    <div>
      <h2>Your Madlib Story</h2>
      <p>{storyTemplate}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default MadlibStory;
