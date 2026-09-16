import { Container } from '../../ui/Container'
import { Button } from '../../ui/Button'
import './CTA.css'

export function CTA() {
  return (
    <section className="cta" id="start">
      <Container>
        <div className="cta__inner">
          <div className="cta__content">
            <span className="cta__eyebrow">Начни сейчас</span>

            <h2 className="cta__title">
              Тело, в котором
              <br />
              тебе комфортно.
            </h2>

            <p className="cta__text">
              8 недель домашних тренировок,
              чтобы почувствовать себя сильнее,
              увереннее и энергичнее.
            </p>

            <div className="cta__action">
             <Button
  variant="primary"
  onClick={() => {
    document
      .getElementById('lead-form')
      ?.scrollIntoView({ behavior: 'smooth' })
  }}
>
  Начать программу
</Button>
            </div>
          </div>

          <div className="cta__price">
            <span className="cta__price-label">
              Стоимость программы
            </span>

            <span className="cta__price-value">
              4 990 ₽
            </span>

            <span className="cta__price-note">
              доступ ко всем материалам на 8 недель
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}