import React, { useState } from "react";
import MadlibForm from "./MadlibForm";
import MadlibStory from "./MadlibStory";
import StorySelector from "./StorySelector";

function Madlib() {
  const [words, setWords] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);

  const handleFormSubmit = (formData) => {
    setWords(formData);
  };

  const handleStoryRestart = () => {
    setWords(null);
  };

  const handleStorySelect = (story) => {
    setSelectedStory(story);
  };

  return (
    <div>
      {!selectedStory && (
        <StorySelector onSelect={handleStorySelect} />
      )}
      {selectedStory && !words && (
        <MadlibForm onSubmit={handleFormSubmit} selectedStory={selectedStory} />
      )}
      {words && (
        <MadlibStory words={words} selectedStory={selectedStory} onRestart={handleStoryRestart} />
      )}
    </div>
  );
}

export default Madlib;
