import './NavBar.css';

function NavBar() {
  return (
    <header className="siteHeaderContainer" aria-label="Main navigation">
      <div className="navbar__left">
        <a className="navbar__brand" href="/" aria-label="Rockstar Games Home">
          <svg viewBox="0 0 32 32" className="navbar__logo" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.61511 10.9978H12.5848C14.3845 10.9978 15.9421 10.4507 15.9421 8.44939C15.9421 6.86148 14.5745 6.52423 13.2595 6.52423H9.56608L8.61511 10.9978ZM24.3357 21.6949H30.6663L24.9533 25.6406L25.8771 31.8581L20.9272 28.1057L14.2842 32.0001L17.3902 25.4102C17.3902 25.4102 13.7775 21.6513 13.7803 21.6513C13.5374 21.3314 13.4563 20.5073 13.4563 20.1527C13.4563 19.7045 13.4849 19.2505 13.5155 18.7669C13.5503 18.2159 13.5875 17.6266 13.5875 16.9637C13.5875 15.3278 12.8632 14.4723 11.0925 14.4723H7.77269L6.32717 21.2249H1.33301L5.30462 2.66675H14.7029C18.1954 2.66675 20.861 3.52407 20.861 7.47735C20.861 10.2601 19.4884 12.2367 16.4605 12.6517V12.7051C17.8843 13.0428 18.4177 14.0037 18.4177 15.7946C18.4177 16.5095 18.3959 17.1369 18.3754 17.7271C18.3572 18.2511 18.34 18.7456 18.34 19.246C18.34 19.8873 18.507 20.9355 18.9277 21.6513H19.6215L23.3316 15.4672L24.3357 21.6949ZM23.5498 22.6019H27.7512L23.9634 25.217L24.6402 29.7765L20.9957 27.0111L16.3688 29.7218L18.4869 25.2341L15.9114 22.5578H20.1458L22.8244 18.093L23.5498 22.6019Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      <nav className="navbar__center" aria-label="Primary">
        <ul className="navbar__list">
          <li className="navbar__item"><a className="navbar__link" href="/">Games</a></li>
          <li className="navbar__item"><a className="navbar__link" href="/newswire">Newswire</a></li>
          <li className="navbar__item"><a className="navbar__link" href="/videos">Videos</a></li>
          <li className="navbar__item"><a className="navbar__link" href="/downloads">Downloads</a></li>
          <li className="navbar__item"><a className="navbar__link" href="https://store.rockstargames.com/" target="_blank" rel="noreferrer">Store</a></li>
          <li className="navbar__item"><a className="navbar__link" href="https://support.rockstargames.com/" target="_blank" rel="noreferrer">Support</a></li>
        </ul>
      </nav>

      <div className="navbar__actions">
        <a className="navbar__button foundry_17pcofy0 foundry_17pcofya" href="https://socialclub.rockstargames.com/rockstar-games-launcher">Get Launcher</a>
        <button className="navbar__icon foundry_a5x3kh0 foundry_a5x3kh9" type="button" aria-label="Open Search">
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path fill="currentColor" d="M7.334 2.667a4.667 4.667 0 1 0 0 9.333 4.667 4.667 0 0 0 0-9.333m-6 4.667a6 6 0 1 1 10.687 3.745l2.45 2.45a.667.667 0 0 1-.942.943l-2.45-2.45a6 6 0 0 1-9.745-4.688" fillRule="evenodd" clipRule="evenodd" />
          </svg>
        </button>
        <button className="navbar__icon foundry_a5x3kh0 foundry_a5x3kh9" type="button" aria-label="Open Player Menu">
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path fill="currentColor" d="M8 2.667A2.667 2.667 0 1 0 8 8a2.667 2.667 0 0 0 0-5.333m2.427 5.846a4 4 0 1 0-4.855 0A6 6 0 0 0 2 14a.667.667 0 0 0 1.333 0 4.667 4.667 0 0 1 9.334 0A.667.667 0 1 0 14 14a6 6 0 0 0-3.573-5.487" fillRule="evenodd" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default NavBar;