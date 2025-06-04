import React from "react";

function Form() {
  return (
    <div className="wrapper">



      <main className="main">
        <AboutUs />
        <ConfirmationForm />
      </main>

    </div>
  );
}

function AboutUs() {
  return (
    <section className="about-us">
      <h2 className="about-us__title title">Форма Підтвердження</h2>
    </section>
  );
}

function ConfirmationForm() {
  return (
    <section className="confirmation-form">
      <div className="form-container">
        <h2 className="form-title">Підтвердження присутності</h2>
        <form>
          <div className="form-group">
            <label htmlFor="group">Група</label>
            <input
              type="text"
              id="group"
              name="group"
              placeholder="Наприклад: ОІ-21"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Ініціали</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Наприклад: Жила Д.А."
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Предмет</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Наприклад: Алгоритми"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="day">День тижня</label>
            <select id="day" name="day" required>
              <option value="">Оберіть день</option>
              <option value="Понеділок">Понеділок</option>
              <option value="Вівторок">Вівторок</option>
              <option value="Середа">Середа</option>
              <option value="Четвер">Четвер</option>
              <option value="П’ятниця">П’ятниця</option>
            </select>
          </div>
          <div className="form-bottom__file">
            <label className="form-bottom__label" htmlFor="file">
              <div className="form-bottom__label-icon"></div>
              <p className="form-bottom__text">
                Завантажте, будь ласка, фото-доказ для підтвердження
              </p>
            </label>
            <input className="form-bottom__input" type="file" id="file" />
          </div>
          <button type="submit" className="submit-btn">
            Підтвердити
          </button>
        </form>
      </div>
    </section>
  );
}



export default Form;
