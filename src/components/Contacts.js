import React from "react";

function Contacts() {
  return (
    <main className="main">
      <div className="contacts__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.3628051571004!2d24.011861876521127!3d49.835640171481295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7a31f0dccd%3A0x9869cc7025bc8e3f!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIgItCb0YzQstGW0LLRgdGM0LrQsCDQn9C-0LvRltGC0LXRhdC90ZbQutCwIg!5e0!3m2!1suk!2sua!4v1748704388910!5m2!1suk!2sua"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
      <div className="contact-us">
        <div className="container">
          <h2 className="contact-us__title title">Зв'яжіться з нами</h2>
          <div className="contact-us__inner">
            <div className="contact-us__socials">
              <a href="#" className="contact-us__socials-item">
                <picture>
                  <source
                    srcSet="./img/icons/socials/facebook.svg"
                    type="image/webp"
                  />
                  <img src="./img/icons/socials/facebook.svg" alt="Facebook" />
                </picture>
              </a>
              <a href="#" className="contact-us__socials-item">
                <picture>
                  <source
                    srcSet="./img/icons/socials/instagram.svg"
                    type="image/webp"
                  />
                  <img src="./img/icons/socials/instagram.svg" alt="Instagram" />
                </picture>
              </a>
              <a href="#" className="contact-us__socials-item">
                <picture>
                  <source
                    srcSet="./img/icons/socials/Pinterest.svg"
                    type="image/webp"
                  />
                  <img src="./img/icons/socials/Pinterest.svg" alt="Pinterest" />
                </picture>
              </a>
              <a href="#" className="contact-us__socials-item">
                <picture>
                  <source
                    srcSet="./img/icons/socials/whatsapp.svg"
                    type="image/webp"
                  />
                  <img src="./img/icons/socials/whatsapp.svg" alt="WhatsApp" />
                </picture>
              </a>
              <a href="#" className="contact-us__socials-item">
                <picture>
                  <source
                    srcSet="./img/icons/socials/youtube.svg"
                    type="image/webp"
                  />
                  <img src="./img/icons/socials/youtube.svg" alt="YouTube" />
                </picture>
              </a>
            </div>
            <p className="contact-us__text">
              Маєте запитання, ідеї або пропозиції? Ми завжди раді зворотному
              зв’язку! Заповніть форму нижче, напишіть нам на електронну пошту
              або зв’яжіться через соціальні мережі — і ми відповімо якнайшвидше.
            </p>
            <ul className="contact-us__list">
              <li className="contact-us__list-item">
                <a href="tel:+380600000000" className="contact-us__list-link">
                  +38 000 000 00 00
                </a>
              </li>
              <li className="contact-us__list-item">
                <a href="#" className="contact-us__list-link">
                  вулиця Степана Бандери, 12, Львів, Львівська область, 79000
                </a>
              </li>
            </ul>
            <div className="contact-us__mail">
              <a href="mailto:ouremailaddress@email.com">
                ouremailaddress@email.com
              </a>
            </div>
            <form className="contact-us__form">
              <div className="contact-us__form-inputs">
                <input
                  placeholder="Your name"
                  type="text"
                  className="contact-us__form-input"
                />
                <input
                  placeholder="Your e-mail"
                  type="text"
                  className="contact-us__form-input"
                />
              </div>
              <textarea
                placeholder="Your comment"
                className="contact-us__form-area"
              ></textarea>
              <button type="submit" className="contact-us__form-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contacts;
