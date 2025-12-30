function App() {
  return (
    <div className="page__content">
      <header>
        <div className="header">
          <div className="header__top">
            <img src="images/Vector.png" alt="around" />
          </div>

          <div className="header__bottom">
            <div>
              <img
                className="header__bottom-imagen"
                src="images/image.jpg"
                alt="foto de perfil"
              />
            </div>

            <div>
              <div className="header__button-items">
                <h1 className="header__bottom-name">Jacques Cousteau</h1>
                <button className="header__bottom-editprofile"></button>
              </div>
              <p className="header__bottom-description">Explorador</p>
            </div>

            <button className="header__bottom-addbutton"></button>
          </div>
        </div>
      </header>

      <main>
        <section className="cards">
          <div className="cards__container">
            {/* Card 1 */}
            <div className="card">
              <button className="card__delete-button">
                <img
                  src="images/Trash.svg"
                  className="card__delete-imagen"
                  alt="trash icon"
                />
              </button>

              <img
                src="images/valledeRosemite2.jpg"
                alt="Valle de Yosemite"
                className="card__imagen"
              />

              <div className="card__container">
                <h2 className="card__tittle">Valle de Yosemite</h2>
                <button className="card__like-button">
                  <img
                    src="images/likebotton.svg"
                    alt="corazon"
                    className="like-icon"
                  />
                </button>
              </div>
            </div>

            {/* Aquí luego se mapearán más cards */}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer">
          <p className="footer__text">© 2024 Around The U.S.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
