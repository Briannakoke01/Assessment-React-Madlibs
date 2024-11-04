import React, { useState } from "react";

function MadlibForm({ onSubmit, selectedStory }) {
  const [formData, setFormData] = useState({
    noun: "",
    verb: "",
    adjective: "",
    adverb: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every((val) => val.trim())) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Fill in the words for "{selectedStory.title}"</h2>
      <input type="text" name="noun" value={formData.noun} onChange={handleChange} placeholder="Noun" required />
      <input type="text" name="verb" value={formData.verb} onChange={handleChange} placeholder="Verb" required />
      <input type="text" name="adjective" value={formData.adjective} onChange={handleChange} placeholder="Adjective" required />
      <input type="text" name="adverb" value={formData.adverb} onChange={handleChange} placeholder="Adverb" required />
      <button type="submit">Generate Story</button>
    </form>
  );
}

export default MadlibForm;
