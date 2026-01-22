// src/components/Main/Main.jsx
import { useContext } from 'react';
import Card from './components/Card/Card';
import EditProfile from './components/EditProfile/EditProfile';
import EditAvatar from './components/EditAvatar/EditAvatar';
import NewCard from './components/NewCard/NewCard';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import './Main.css';

export default function Main({
  cards,
  onCardLike,
  onCardDelete,
  popup,
  onOpenPopup,
  onClosePopup,
  onAddPlaceSubmit
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div
          className="profile__avatar"
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
          onClick={() => onOpenPopup('avatar')}
        />
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__about">{currentUser.about}</p>
          <button
            className="profile__edit-button"
            onClick={() => onOpenPopup('profile')}
          />
        </div>
        <button
          className="profile__add-button"
          onClick={() => onOpenPopup('place')}
        />
      </section>

      <section className="cards container">
        <ul className="cards__list">
          {cards.map(card => (
            <Card
              key={card._id}
              card={card}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>

      {/* Popups */}
      {popup === 'profile' && (
        <div className="popup popup_opened">
          <div className="popup__container">
            <button className="popup__close" onClick={onClosePopup} />
            <EditProfile onClose={onClosePopup} />
          </div>
        </div>
      )}

      {popup === 'avatar' && (
        <div className="popup popup_opened">
          <div className="popup__container">
            <button className="popup__close" onClick={onClosePopup} />
            <EditAvatar onClose={onClosePopup} />
          </div>
        </div>
      )}

      {popup === 'place' && (
        <div className="popup popup_opened">
          <div className="popup__container">
            <button className="popup__close" onClick={onClosePopup} />
            <NewCard onClose={onClosePopup} onAddPlaceSubmit={onAddPlaceSubmit} />
          </div>
        </div>
      )}
    </main>
  );
}