import bunkerLogo from '../../shared/assets/logo.svg';
import backArrow from '../../shared/assets/exit.svg';
import defaultAvatar from '../../shared/assets/defaultAvatar.png';

import './Header.css';

function Header() {
  const guest = {
    name: 'guest',
    avatar: defaultAvatar,
  };

  return (
    <header className="header">
      <div className='header__main'>
        <a href="/" className="header__logo-link">
          <img
            className="header__logo"
            src={bunkerLogo}
            alt="Бункер"
          />
        </a>

        <nav aria-label="Основная навигация">
          <ul className="header__nav">
            <li className="header__nav-item">
              <a className="header__nav-link" href="/">
                Игра
              </a>
            </li>

            <li className="header__nav-item">
              <a className="header__nav-link" href="/rules">Правила</a>
            </li>

            <li className="header__nav-item">
              <a className="header__nav-link" href="/blog">Блог</a>
            </li>

            <li className="header__nav-item">
              <a className="header__nav-link" href="/community">Сообщество</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__user">

        <img
          className="header__avatar"
          src={guest.avatar}
          alt={`Аватар ${guest.name}`}
        />

        <p className="header__username">
          {guest.name}
        </p>

        <button
          className="header__logout"
          type="button"
          aria-label="Выйти из профиля"
        >
          <img
            className="header__logout-icon"
            src={backArrow}
            alt=""
          />
        </button>

      </div>

    </header>
  );
}

export default Header;