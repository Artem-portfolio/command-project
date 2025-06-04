import React, { useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { Routes, Route, Link } from 'react-router-dom'

// Firebase config з твоїми даними
const firebaseConfig = {
  apiKey: 'Твій ключ',
  authDomain: 'твій-домен.firebaseapp.com',
  projectId: 'твій-проєкт-id',
  storageBucket: 'твій-bucket.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
}

import Swiper from 'swiper'
import { Pagination, EffectFade, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'

import Home from './Home'
import Form from './Form'
import Contacts from './Contacts'

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

function Header() {
  const [isRightsideActive, setIsRightsideActive] = useState(false)
  const [isLoginModalActive, setIsLoginModalActive] = useState(false)
  const [isSignUpModalActive, setIsSignUpModalActive] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  React.useEffect(() => {
    if (
      isRightsideActive ||
      isLoginModalActive ||
      isSignUpModalActive ||
      isMobileNavOpen
    ) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [
    isRightsideActive,
    isLoginModalActive,
    isSignUpModalActive,
    isMobileNavOpen,
  ])

  function handleLoginSubmit(event) {
    event.preventDefault()
    // Here you can process login form data
    // For now, maybe just close the modal or log something
    console.log('Login form submitted')
    setIsLoginModalActive(false)
  }

  function handleSignUpSubmit(event) {
    event.preventDefault()
    // Process signup form data here
    console.log('Sign-up form submitted')
    setIsSignUpModalActive(false)
  }

  function openRightside() {
    console.log('Clicked!') // ← додай це
    setIsRightsideActive(true)
  }
  function closeRightside() {
    setIsRightsideActive(false)
  }

  function toggleLoginModal() {
    setIsLoginModalActive((prev) => !prev)
  }
  function toggleSignUpModal() {
    setIsSignUpModalActive((prev) => !prev)
  }
  function closeLoginModal() {
    setIsLoginModalActive(false)
  }
  function closeSignUpModal() {
    setIsSignUpModalActive(false)
  }

  function openLoginModal() {
    setIsLoginModalActive(true)
  }

  function toggleMobileNav() {
    setIsMobileNavOpen((prev) => !prev)
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-link">
                  <Link className="nav__list-link" to="/form">
                    Форма
                  </Link>
                </li>
                <li className="header__nav-link">
                  <Link className="nav__list-link" to="/contacts">
                    Контакти
                  </Link>
                </li>
              </ul>

              <Link className="header__logo" to="/">
                <img
                  className="header__logo-img logo"
                  src="./img/icons/logos/logo.png"
                  alt="Logo"
                />
              </Link>

              <ul className="header__btns">
                <button
                  id="login-form"
                  className="btn-login"
                  onClick={openLoginModal}
                >
                  Увійти
                </button>
                <button
                  id="signup-form"
                  onClick={toggleSignUpModal}
                  className="btn-signup"
                >
                  Зареєструватись
                </button>
              </ul>
            </nav>
            <button className="header__btn" onClick={openRightside}>
              <picture>
                <source
                  srcSet="./img/rightside/rightside-icon.svg"
                  type="image/webp"
                />
                <img src="./img/rightside/rightside-icon.svg" alt="" />
              </picture>
            </button>
          </div>
        </div>

        {isRightsideActive && (
          <div className="header-rightside">
            <div className="rightside__inner">
              <div className="rightside__logo">
                <picture>
                  <source
                    srcSet="./img/icons/logos/logo.webp"
                    type="image/webp"
                  />
                  <img
                    className="logo"
                    src="./img/icons/logos/logo.png"
                    alt="Logo"
                  />
                </picture>
              </div>
              <h1 className="rightside__title title">Як працює система?</h1>
              <p className="rightside__text">
                Студент заповнює коротку форму з даними про себе та пару. Після
                відправки інформація потрапляє до журналу викладача.
              </p>
              <picture>
                <source
                  srcSet="./img/rightside/rightside-main-img.svg"
                  type="image/webp"
                />
                <img
                  className="rightside__img"
                  src="./img/rightside/rightside-main-img.svg"
                  alt=""
                />
              </picture>
            </div>
            <button className="rightside-close" onClick={closeRightside}>
              <picture>
                <source srcSet="./img/icons/close.svg" type="image/webp" />
                <img src="./img/icons/close.svg" alt="" />
              </picture>
            </button>
          </div>
        )}

        {/* Модальне вікно Увійти */}
        {isLoginModalActive && (
          <div className="modal-overlay modal-login">
            <div className="modal">
              <button
                className="modal-close modal-close--login"
                onClick={toggleLoginModal}
              >
                X
              </button>
              <h2>Увійти</h2>
              <form id="login-form" onSubmit={handleLoginSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Електронна пошта</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Введіть email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Пароль</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Введіть пароль"
                    required
                  />
                </div>
                <button type="submit" className="btn-submit">
                  Увійти
                </button>
              </form>
              {/* Інші кнопки */}
            </div>
          </div>
        )}

        {/* Модальне вікно Реєстрація */}
        {isSignUpModalActive && (
          <div className="modal-overlay modal-signup">
            <div className="modal">
              <button
                className="modal-close modal-close--signup"
                onClick={toggleSignUpModal}
              >
                X
              </button>
              <h2>Реєстрація</h2>
              <form id="signup-form" onSubmit={handleSignUpSubmit}>
                <div className="form-group">
                  <label htmlFor="register-email">Електронна пошта</label>
                  <input
                    type="email"
                    id="register-email"
                    placeholder="Введіть email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="register-password">Пароль</label>
                  <input
                    type="password"
                    id="register-password"
                    placeholder="Введіть пароль"
                    required
                  />
                </div>
                <button type="submit" className="btn-submit">
                  Зареєструватися
                </button>
              </form>
              {/* Інші кнопки */}
            </div>
          </div>
        )}
      </header>

      <button className="mobile-nav-btn" onClick={toggleMobileNav}>
        <div
          className={`nav-icon ${isMobileNavOpen ? 'nav-icon--active' : ''}`}
        ></div>
      </button>

      <div
        className={`mobile-nav ${isMobileNavOpen ? 'mobile-nav--open' : ''}`}
      >
        <ul className="mobile-nav__list">
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/contacts">Контакти</Link>
          </li>
          <li>
          <Link to="/form">Форма</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__textbox">
            <h4 className="footer__title">
              Система підтвердження присутності студентів
            </h4>
            <p className="footer__text">
              Виникли питання? Напиши нам на пошту, і ми радо відповімо!
            </p>
            <div className="footer__mail">
              <a href="mailto:ouremailaddress@email.com">
                ouremailaddress@email.com
              </a>
            </div>
            <form className="footer__form">
              <div className="footer__input">
                <input placeholder="Введіть свій email..." />
              </div>
              <button className="footer__btn" type="submit">
                Надіслати
              </button>
            </form>
          </div>

          <nav className="footer__nav">
            <ul className="footer__nav-list footer__nav-list--social">
              <li className="footer__nav-item">
                <picture>
                  <source
                    srcSet="./img/icons/socials/facebook.svg"
                    type="image/webp"
                  />
                  <img src="./img/icons/socials/facebook.svg" alt="Facebook" />
                </picture>
                <a href="#" className="footer__nav-link">
                  Facebook
                </a>
              </li>
              <li className="footer__nav-item">
                <picture>
                  <source
                    srcSet="./img/icons/socials/instagram.svg"
                    type="image/webp"
                  />
                  <img
                    src="./img/icons/socials/instagram.svg"
                    alt="Instagram"
                  />
                </picture>
                <a href="#" className="footer__nav-link">
                  Instagram
                </a>
              </li>
              <li className="footer__nav-item">
                <picture>
                  <source
                    srcSet="./img/icons/socials/Pinterest.svg"
                    type="image/webp"
                  />
                  <img
                    src="./img/icons/socials/Pinterest.svg"
                    alt="Pinterest"
                  />
                </picture>
                <a href="#" className="footer__nav-link">
                  Pinterest
                </a>
              </li>
              <li className="footer__nav-item">
                <picture>
                  <source
                    srcSet="./img/icons/socials/whatsapp.svg"
                    type="image/webp"
                  />
                  <img src="./img/icons/socials/whatsapp.svg" alt="WhatsApp" />
                </picture>
                <a href="#" className="footer__nav-link">
                  WhatsApp
                </a>
              </li>
              <li className="footer__nav-item">
                <picture>
                  <source
                    srcSet="./img/icons/socials/youtube.svg"
                    type="image/webp"
                  />
                  <img src="./img/icons/socials/youtube.svg" alt="Youtube" />
                </picture>
                <a href="#" className="footer__nav-link">
                  Youtube
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  React.useEffect(() => {
    // Ініціалізація Swiper, якщо потрібно (встановити swiper npm пакет)
    const swiper = new Swiper('.swiper', {
      modules: [Pagination, EffectFade, Autoplay],
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      simulateTouch: false,
    })
  }, [])

  return (
    <>
      <Header />

      <Footer />
    </>
  )
}
