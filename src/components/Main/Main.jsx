import { useContext } from 'react';
import Card from './components/Card/Card';
import EditProfile from '../EditProfile';
import EditAvatar from '../EditAvatar';
import NewCard from '../NewCard';
import ImagePopup from '../ImagePopup';
import Popup from '../Popup';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './Main.css';

export default function Main({
  cards,
  onCardLike,
  onCardDelete,
  popup,
  onOpenPopup,
  onClosePopup,
  onAddPlaceSubmit,
  selectedCard,
  onCardClick
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
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>

      {/* Popups con Popup genérico */}
      {popup === 'profile' && (
        <Popup onClose={onClosePopup}>
          <EditProfile onClose={onClosePopup} />
        </Popup>
      )}

      {popup === 'avatar' && (
        <Popup onClose={onClosePopup}>
          <EditAvatar onClose={onClosePopup} />
        </Popup>
      )}

      {popup === 'place' && (
        <Popup onClose={onClosePopup}>
          <NewCard onClose={onClosePopup} onAddPlaceSubmit={onAddPlaceSubmit} />
        </Popup>
      )}

      {selectedCard && (
        <ImagePopup card={selectedCard} onClose={onClosePopup} />
      )}
    </main>
  );
}