import { Container } from '../../ui/Container'
import './Program.css'

const weeks = [
  {
    number: '01',
    title: 'Возвращаемся в движение',
    text: 'Мягко включаем тело в работу и формируем привычку тренироваться регулярно.',
  },
  {
    number: '02',
    title: 'Укрепляем тело',
    text: 'Постепенно увеличиваем нагрузку и работаем над силой и выносливостью.',
  },
  {
    number: '03',
    title: 'Подтягиваем силуэт',
    text: 'Добавляем более интенсивные тренировки и продолжаем укреплять мышцы.',
  },
  {
    number: '04',
    title: 'Закрепляем результат',
    text: 'Формируем устойчивую привычку и учимся продолжать тренировки самостоятельно.',
  },
]

export function Program() {
  return (
    <section className="program" id="program">
      <Container>
        <div className="program__heading">
          <span className="program__eyebrow">Программа</span>

          <h2 className="program__title">
            8 недель,
            <br />
            чтобы почувствовать разницу.
          </h2>

          <p className="program__intro">
            Не нужно тренироваться каждый день или проводить часы в зале.
            Программа построена так, чтобы постепенно встроить движение в
            обычную жизнь.
          </p>
        </div>

        <div className="program__list">
          {weeks.map((week) => (
            <article className="program__item" key={week.number}>
              <span className="program__number">{week.number}</span>

              <div className="program__content">
                <h3 className="program__item-title">{week.title}</h3>

                <p className="program__text">{week.text}</p>
              </div>

              <span className="program__meta">НЕДЕЛЯ</span>

              <span className="program__arrow">↗</span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}