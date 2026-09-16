import { Container } from '../../ui/Container'
import './ForWhom.css'

const points = [
  {
    number: '01',
    title: 'Если давно не тренировалась',
    text: 'Начни спокойно и без ощущения, что нужно сразу выдерживать жёсткие тренировки.',
  },
  {
    number: '02',
    title: 'Если хочется подтянуть тело',
    text: 'Короткие домашние тренировки помогут постепенно вернуть тонус и силу.',
  },
  {
    number: '03',
    title: 'Если нет времени на зал',
    text: 'Занимайся дома тогда, когда удобно тебе — без дороги и сложного оборудования.',
  },
]

export function ForWhom() {
  return (
    <section className="for-whom">
      <Container>
        <div className="for-whom__heading">
          <span className="for-whom__eyebrow">Для тебя, если</span>

          <h2 className="for-whom__title">
            Хочется заботиться о теле,
            <br />
            а не наказывать его.
          </h2>
        </div>

        <div className="for-whom__grid">
          {points.map((point) => (
            <article className="for-whom__card" key={point.number}>
              <span className="for-whom__number">{point.number}</span>

              <h3 className="for-whom__card-title">
                {point.title}
              </h3>

              <p className="for-whom__text">
                {point.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}