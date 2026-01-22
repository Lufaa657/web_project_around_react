// src/components/Main/components/ImagePopup/ImagePopup.jsx
import './ImagePopup.css';

export default function ImagePopup({ card, onClose }) {
  if (!card) return null;
  return (
    <div className="popup popup_opened">
      <div className="popup__container">
        <button className="popup__close" onClick={onClose} />
        <img className="popup__image" src={card.link} alt={card.name} />
        <p className="popup__caption">{card.name}</p>
      </div>
    </div>
  );
}