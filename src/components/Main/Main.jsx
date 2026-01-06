import { useState } from 'react';
import Popup from './components/Popup/Popup';
import NewCard from './components/NewCard/NewCard';
import EditProfile from './components/EditProfile/EditProfile';
import EditAvatar from './components/EditAvatar/EditAvatar';
import Card from './components/Card/Card';

const cards = [  ];

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup   = { title: 'Nuevo lugar',   children: <NewCard /> };
  const editProfilePopup = { title: 'Editar perfil', children: <EditProfile /> };
  const editAvatarPopup  = { title: 'Cambiar avatar', children: <EditAvatar /> };

  const handleOpenPopup  = (p) => setPopup(p);
  const handleClosePopup = ()   => setPopup(null);

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__info">
          <img src="./public/images/avatar.jpg" alt="Avatar" className="profile__avatar" />
          <div className="profile__details">
            <h1 className="profile__name">Jacques Cousteau</h1>
            <p className="profile__description">Explorador</p>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
          </div>
        </div>
        <button
          aria-label="Añadir tarjeta"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        />
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map(c => <Card key={c._id} card={c} />)}
        </ul>
      </section>

      {popup && (
        <Popup title={popup.title} onClose={handleClosePopup}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}