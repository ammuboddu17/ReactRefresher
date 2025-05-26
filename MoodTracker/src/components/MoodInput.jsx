import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMood } from '../store/moodSlice.js';

// List of emojis for mood selection
const emojis = ['😀', '🙂', '😐', '😔', '😢'];

const MoodInput = () => {
  // State for selected emoji and user intention text
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [intention, setIntention] = useState('');
  const dispatch = useDispatch();

  // Handle emoji button click
  const handleSelect = (emoji) => setSelectedEmoji(emoji);

  // Handle text input change
  const handleInputChange = (e) => setIntention(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // Only submit if both emoji and intention are provided
    if (!selectedEmoji || !intention.trim()) return;
    // Dispatch mood entry to Redux store
    dispatch(addMood({
      date: new Date().toISOString().slice(0, 10), // Save today's date
      emoji: selectedEmoji,
      intention: intention.trim(),
    }));
    // Reset form fields
    setSelectedEmoji('');
    setIntention('');
  };

  return (
    <form className="mood-form" onSubmit={handleSubmit}>
      <h2>How are you feeling today?</h2>
      <div className="emoji-row">
        {/* Render emoji buttons */}
        {emojis.map((emoji) => (
          <button
            type="button"
            key={emoji}
            onClick={() => handleSelect(emoji)}
            className={`emoji-btn${selectedEmoji === emoji ? ' selected' : ''}`}
          >
            {emoji}
          </button>
        ))}
      </div>
      {/* Text input for user intention */}
      <input
        type="text"
        className="intention-input"
        placeholder="Why do you feel this way?"
        value={intention}
        onChange={handleInputChange}
        required
      />
      <br />
      {/* Submit button is disabled if form is incomplete */}
      <button
        type="submit"
        className="submit-btn"
        disabled={!selectedEmoji || !intention.trim()}
      >
        Submit
      </button>
    </form>
  );
};

export default MoodInput;