import { useEffect, useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import '../index.css';

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState('');

  useEffect(() => {
    api.getUserInfo().then(setCurrentUser).catch(console.error);
    api.getCardList().then(setCards).catch(console.error);
  }, []);

  const handleOpenPopup = (type) => setPopup(type);
  const handleClosePopup = () => setPopup('');

  const handleUpdateUser = async ({ name, about }) => {
    const newData = await api.setUserInfo({ name, about });
    setCurrentUser(newData);
    handleClosePopup();
  };

  const handleUpdateAvatar = async ({ avatar }) => {
    const newData = await api.setUserAvatar({ avatar });
    setCurrentUser(newData);
    handleClosePopup();
  };

  const handleAddPlaceSubmit = async ({ name, link }) => {
    const newCard = await api.addCard({ name, link });
    setCards([newCard, ...cards]);
    handleClosePopup();
  };

  const handleCardLike = async (card) => {
    const newCard = await api.changeLikeCardStatus(card._id, !card.isLiked);
    setCards(state => state.map(c => c._id === card._id ? newCard : c));
  };

  const handleCardDelete = async (card) => {
    await api.deleteCard(card._id);
    setCards(state => state.filter(c => c._id !== card._id));
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}>
      <div className="page__content">
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          popup={popup}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}