function NavBar() {
  return (
    <nav className="navbar">
      <a className="navbar__brand" href="/">
        Rockstar Games
      </a>
      <ul className="navbar__list">
        <li className="navbar__item"><a className="navbar__link" href="/">Home</a></li>
        <li className="navbar__item"><a className="navbar__link" href="/games">Games</a></li>
        <li className="navbar__item"><a className="navbar__link" href="/about">About</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;