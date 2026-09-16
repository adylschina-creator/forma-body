import { Container } from '../../ui/Container'
import './Includes.css'

const items = [
  {
    number: '01',
    title: 'Домашние тренировки',
    text: 'Готовые занятия, которые можно выполнять дома без сложного оборудования.',
  },
  {
    number: '02',
    title: 'Понятная система',
    text: 'Пошаговая программа на 8 недель — ты всегда знаешь, что делать дальше.',
  },
  {
    number: '03',
    title: 'Поддержка',
    text: 'Чтобы не бросить после первой недели и продолжать двигаться к своей цели.',
  },
]

export function Includes() {
  return (
    <section className="includes" id="includes">
      <Container>
        <div className="includes__layout">
          <div className="includes__heading">
            <span className="includes__eyebrow">Что внутри</span>

            <h2 className="includes__title">
              Всё необходимое,
              <br />
              чтобы начать.
            </h2>
          </div>

          <div className="includes__list">
            {items.map((item) => (
              <article className="includes__item" key={item.number}>
                <span className="includes__number">
                  {item.number}
                </span>

                <div className="includes__content">
                  <h3 className="includes__item-title">
                    {item.title}
                  </h3>

                  <p className="includes__text">
                    {item.text}
                  </p>
                </div>

                <span className="includes__arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}