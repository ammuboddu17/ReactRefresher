import React from 'react';
import { useSelector } from 'react-redux';

const MoodFeed = () => {
  const entries = useSelector((state) => state.mood.entries);

  return (
    <div className="mood-feed">
      <h2>Mood History</h2>
      {entries.length === 0 ? (
        <p className="empty-feed">No mood entries yet.</p>
      ) : (
        <ul className="feed-list">
          {entries.map((entry, idx) => (
            <li className="feed-item" key={idx}>
              <div className="feed-date"><strong>Date:</strong> {entry.date}</div>
              <div className="feed-emoji"><strong>Emoji:</strong> {entry.emoji}</div>
              <div className="feed-intention"><strong>Intention:</strong> {entry.intention}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoodFeed;