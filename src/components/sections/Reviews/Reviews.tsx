import { Container } from '../../ui/Container'
import './Reviews.css'

const reviews = [
  {
    text: 'Мне наконец удалось встроить тренировки в обычный день. Никаких двух часов в зале — просто открываю тренировку и занимаюсь.',
    name: 'Анна',
    info: '34 года',
  },
  {
    text: 'Понравилось, что программа начинается спокойно. Не было ощущения, что я должна сразу выдерживать огромную нагрузку.',
    name: 'Марина',
    info: '29 лет',
  },
  {
    text: 'Через несколько недель заметила, что стала сильнее и гораздо увереннее себя чувствую.',
    name: 'Екатерина',
    info: '31 год',
  },
]

export function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <Container>
        <div className="reviews__heading">
          <span className="reviews__eyebrow">Отзывы</span>

          <h2 className="reviews__title">
            Как это ощущается
            <br />
            в реальной жизни.
          </h2>
        </div>

        <div className="reviews__grid">
          {reviews.map((review) => (
            <article className="reviews__card" key={review.name}>
              <p className="reviews__text">
                «{review.text}»
              </p>

              <div className="reviews__author">
                <span className="reviews__name">
                  {review.name}
                </span>

                <span className="reviews__info">
                  {review.info}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}