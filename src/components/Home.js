import { Routes, Route, Link } from 'react-router-dom'


function Home() {
  function CollectionSlider() {
    return (
      <section className="collection">
        <div className="collection__slider swiper">
          <div className="swiper-wrapper">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="collection__item swiper-slide"
                style={{
                  backgroundImage: `url(./img/main-page/collection/main-collection-img-${num}.jpg)`,
                }}
              >
                <div className="collection__item-box">
                  <div className="collection__titlebox">
                    <h2 className="collection__item-title title">
                      Система підтвердження
                      <br /> присутності на парі
                    </h2>
                    <p className="collection__item-text">
                      Швидкий та зручний спосіб фіксації відвідування пар
                      студентами в реальному часі.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    )
  }

  function NewCollection() {
    const advantages = [
      {
        img: 'new-colection-1.svg',
        title: 'Жодних паперових журналів',
        text:
          'Уся інформація зберігається в електронному вигляді. Викладачу не потрібно вести журнали вручну — все вже в базі.',
      },
      {
        img: 'new-colection-2.svg',
        title: 'Миттєва фіксація присутності',
        text:
          'Сканування QR-коду або введення даних займає лише кілька секунд — присутність фіксується миттєво.',
      },
      {
        img: 'new-colection-3.svg',
        title: 'Автоматична аналітика',
        text:
          'Система підраховує кількість пропусків, обчислює відсотки відвідуваності та дозволяє бачити динаміку по кожному студенту.',
      },
      {
        img: 'new-colection-4.svg',
        title: 'Економія часу',
        text:
          'Жодних перекличок на початку пари — студенти відмічають присутність самостійно, а викладач починає одразу з матеріалу.',
      },
    ]

    return (
      <div className="new__collection-main">
        <div className="new-colection">
          <div className="container-fluid">
            <h1 className="new-colection__title title">Наші переваги</h1>
            <p className="new-colection__text">
              Система автоматичного підтвердження присутності — це сучасне
              рішення, яке спрощує облік відвідуваності, економить час та
              мінімізує помилки. Вона зручна як для студентів, так і для
              викладачів, забезпечуючи прозорість і швидкий доступ до
              статистики.
            </p>
            <div className="new-colection__items">
              {advantages.map(({ img, title, text }, i) => (
                <div className="new-colection__item" key={i}>
                  <picture>
                    <source
                      srcSet={`./img/main-page/new-collection/${img}`}
                      type="image/webp"
                    />
                    <img src={`./img/main-page/new-collection/${img}`} alt="" />
                  </picture>
                  <div className="new-colection__item-wrapper">
                    <div className="new-colection__item-inner">
                      <h4 className="new-colection__item-title title">
                        {title}
                      </h4>
                      <p className="new-colection__item-text">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  function Aesthetic() {
    return (
      <div className="aesthetic">
        <div className="aesthetic__mask">
          <picture>
            <source
              srcSet="./img/main-page/aesthetic/aesthetic-mask.webp"
              type="image/webp"
            />
            <img src="./img/main-page/aesthetic/aesthetic-mask.png" alt="" />
          </picture>
        </div>
        <div className="container">
          <div className="aesthetic__textbox">
            <h2 className="aesthetic__title title">
              Ефективний
              <br /> контроль відвідуваності
            </h2>
            <p className="aesthetic__text">
              Інтуїтивна система, що спрощує перевірку присутності та ведення
              обліку.
            </p>
          </div>
        </div>
      </div>
    )
  }

  function Blog() {
    return (
      <section className="blog">
        <div className="container">
          <h2 className="blog__title title">Останні новини</h2>
          <div className="blog__items">
            <a href="#" className="blog__item">
              <picture>
                <img
                  src="./img/main-page/blog/blog-2.jpg"
                  className="blog__item-img"
                  alt=""
                />
              </picture>
              <p className="blog__item-subtitle">
                Травень 20, 2025 |<span></span> Редакція сайту
              </p>
              <h3 className="blog__item-title">
                Львівська Політехніка впровадила нову систему відвідуваності:
                швидко, зручно, без черг
              </h3>
            </a>

            <a href="#" className="blog__item">
              <img
                src="./img/main-page/blog/blog-2.webp"
                className="blog__item-img"
                alt=""
              />
              <p className="blog__item-subtitle">
                Травень 25,2024 |<span></span> Редакція сайту
              </p>
              <h3 className="blog__item-title">
                Як система автоматичної реєстрації відвідуваності змінює
                студентське життя
              </h3>
            </a>
          </div>
        </div>
      </section>
    )
  }

  function HowWork() {
    return (
      <div className="how-work">
        <div className="container">
          <div className="how-work__title title">Як це працює</div>
          <div className="how-work__wrapper">
            <div className="how-work__items-top">
              <div className="how-work__item">
                <div className="how-work__item-box">
                  <h5 className="how-work__item-title">
                    Студент сканує QR-код в аудиторії
                  </h5>
                </div>
                <p className="how-work__item-text">
                  На початку заняття викладач виводить QR-код на екран або
                  розміщує його в аудиторії. Студент сканує код зі смартфона для
                  переходу до форми підтвердження присутності.
                </p>
              </div>
              <div className="how-work__item">
                <div className="how-work__item-box">
                  <h5 className="how-work__item-title">
                    Система ідентифікує користувача
                  </h5>
                </div>
                <p className="how-work__item-text">
                  Після сканування студент вводить групу, ініціали, предмет і
                  день тижня. Система перевіряє дані та фіксує час.
                </p>
              </div>
            </div>
            <div className="how-work__item how-work__item-bottom">
              <div className="how-work__item-box">
                <h5 className="how-work__item-title">
                  Дані фіксуються у журналі відвідуваності
                </h5>
              </div>
              <p className="how-work__item-text">
                Інформація миттєво потрапляє в електронний журнал. Доступ до неї
                мають викладач і адміністрація.
              </p>
            </div>
          </div>
          <Link to="/form" className="confirm-btn">
            Перейти до підтвердження присутності
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <CollectionSlider />
      <NewCollection />
      <Aesthetic />
      <HowWork />
      <Blog />
    </>
  )
}

export default Home
