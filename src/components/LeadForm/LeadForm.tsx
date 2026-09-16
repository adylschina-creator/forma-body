import { FormEvent, useState } from 'react'
import './LeadForm.css'

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="lead-form__success">
        <span className="lead-form__success-label">Готово</span>

        <h2 className="lead-form__success-title">
          Спасибо!
        </h2>

        <p className="lead-form__success-text">
          Заявка отправлена. Скоро мы свяжемся с тобой
          и расскажем, как начать программу.
        </p>
      </div>
    )
  }

  return (
    <div className="lead-form">
      <div className="lead-form__heading">
        <span className="lead-form__eyebrow">
          Начни программу
        </span>

        <h2 className="lead-form__title">
          Твой первый шаг
          <br />
          начинается здесь.
        </h2>

        <p className="lead-form__text">
          Оставь свои данные, и мы отправим информацию
          о программе.
        </p>
      </div>

      <form className="lead-form__form" onSubmit={handleSubmit}>
        <label className="lead-form__field">
          <span>Имя</span>

          <input
            type="text"
            name="name"
            placeholder="Введите имя"
            required
          />
        </label>

        <label className="lead-form__field">
          <span>Email</span>

          <input
            type="email"
            name="email"
            placeholder="Введите email"
            required
          />
        </label>

        <button className="lead-form__submit" type="submit">
          Получить программу
        </button>
      </form>
    </div>
  )
}