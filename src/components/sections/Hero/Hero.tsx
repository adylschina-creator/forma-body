import { Container } from '../../ui/Container'
import { heroStats } from './Hero.data'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero__grid">
          <div className="hero__content">
            <span className="hero__eyebrow">
              Домашняя программа · 8 недель
            </span>

            <h1 className="hero__title">
              Тело,
              <br />
              в котором
              <br />
              тебе нравится быть.
            </h1>

            <p className="hero__subtitle">
              Домашние тренировки для женщин,
              которые хотят стать сильнее, подтянуть тело
              и снова чувствовать себя уверенно — без
              изнуряющих тренировок и жизни в режиме «надо».
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="#lead-form">
                Начать программу
              </a>

              <a className="btn btn--secondary" href="#program">
                Посмотреть программу
              </a>
            </div>

            <dl className="hero__stats">
              {heroStats.map((stat) => (
                <div className="hero__stat" key={stat.label}>
                  <dt className="hero__stat-value">
                    {stat.value}
                  </dt>

                  <dd className="hero__stat-label">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hero__visual">
            <div className="hero__visual-frame">
              <img
                className="hero__visual-image"
                src="https://images.unsplash.com/photo-1635367216109-aa3353c0c22e?auto=format&fit=crop&w=1200&q=80"
                alt="Женщина занимается тренировкой дома на коврике"
              />

              <div className="hero__visual-note">
                <span>01</span>
                <span>Move with intention</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}