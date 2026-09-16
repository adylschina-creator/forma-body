import { Container } from '../../ui/Container'
import './Result.css'

const results = [
  'Больше энергии в течение дня',
  'Сильнее и выносливее тело',
  'Более подтянутый силуэт',
  'Привычка регулярно двигаться',
]

export function Result() {
  return (
    <section className="result">
      <Container>
        <div className="result__layout">
          <div className="result__heading">
            <span className="result__eyebrow">Результат</span>

            <h2 className="result__title">
              Не про идеальное тело.
              <br />
              Про ощущение себя.
            </h2>
          </div>

          <div className="result__content">
            <p className="result__intro">
              Регулярные тренировки помогают не только менять тело.
              Они постепенно меняют отношение к себе и своему состоянию.
            </p>

            <ul className="result__list">
              {results.map((item, index) => (
                <li className="result__item" key={item}>
                  <span className="result__item-number">
                    0{index + 1}
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}