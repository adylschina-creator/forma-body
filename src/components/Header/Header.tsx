import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__logo" href="#">
          Forma Body
        </a>

        <nav className="header__nav">
          <a href="#program">Программа</a>
          <a href="#includes">Что внутри</a>
          <a href="#reviews">Отзывы</a>
        </nav>

        <a className="header__button" href="#start">
          Начать
        </a>
      </div>
    </header>
  )
}