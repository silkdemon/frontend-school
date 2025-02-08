import '../styles/Header.css'; // Импортируем стили

const Header = () => {
  return (
    <header>
      <img
        src="/assets/raif-logo.svg"
        alt="raiffeisen logo"
        className="header-logo"
      />
      <div className="header-content">
        <div className="header-name">
          <p>Валентин Костин</p>
        </div>
        <div className="header-avatar">
          <img
            src="/assets/profile-header-avatar.svg"
            alt="your avatar with beard and cool glasses"
          />
        </div>
        <div className="header-exit">
          <img src="/assets/exit.svg" alt="exit button" />
        </div>
      </div>
    </header>
  );
};

export default Header;