import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Forma Body</span>

          <p className="footer__description">
            Домашние тренировки для сильного
            и уверенного тела.
          </p>
        </div>

        <div className="footer__links">
          <a href="#" aria-label="Instagram">
            Instagram
          </a>

          <a href="#" aria-label="Telegram">
            Telegram
          </a>

          <a href="mailto:hello@formabody.ru">
            Контакты
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2026 Forma Body</span>

        <span>Все права защищены</span>
      </div>
    </footer>
  )
}