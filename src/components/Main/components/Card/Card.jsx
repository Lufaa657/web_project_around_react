export default function Card({ card }) {
  const { name, link, isLiked } = card;
  return (
    <li className="card">
      <img src={link} alt={name} className="card__image" />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={`card__like-button ${isLiked ? 'card__like-button_active' : ''}`}
        />
      </div>
    </li>
  );
}