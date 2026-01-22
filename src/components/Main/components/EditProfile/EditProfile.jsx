import { useState, useContext } from 'react';
import CurrentUserContext from '../../../../../contexts/CurrentUserContext';
import './EditProfile.css';

export default function Main({ onClose }) {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name || '');
  const [description, setDescription] = useState(currentUser.about || '');

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser({ name, about: description });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit} noValidate>
      <h3 className="popup__title">Edit profile</h3>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
      </label>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="About me"
          required
        />
      </label>
      <button className="button popup__button" type="submit">Save</button>
    </form>
  );
}