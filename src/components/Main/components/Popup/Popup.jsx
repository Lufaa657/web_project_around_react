import './Popup.css';

export default function Main({ children, onClose }) {
  return (
    <div className="popup popup_opened">
      <div className="popup__container">
        <button className="popup__close" onClick={onClose} />
        {children}
      </div>
    </div>
  );
}