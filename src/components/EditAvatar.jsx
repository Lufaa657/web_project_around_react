import { useRef, useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import './EditAvatar.css';

export default function EditAvatar({ onClose }) {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateAvatar({ avatar: inputRef.current.value });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit} noValidate>
      <h3 className="popup__title">Change profile picture</h3>
      <label className="popup__label">
        <input
          className="popup__input"
          ref={inputRef}
          type="url"
          placeholder="Avatar image link"
          required
        />
      </label>
      <button className="button popup__button" type="submit">Save</button>
    </form>
  );
}