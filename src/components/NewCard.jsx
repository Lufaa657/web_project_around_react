import { useState } from 'react';
import './NewCard.css';

export default function NewCard({ onClose, onAddPlaceSubmit }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({ name, link });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit} noValidate>
      <h3 className="popup__title">New place</h3>
      <label className="popup__label">
        <input
          className="popup__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Title"
          required
        />
      </label>
      <label className="popup__label">
        <input
          className="popup__input"
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Image link"
          required
        />
      </label>
      <button className="button popup__button" type="submit">Create</button>
    </form>
  );
}