import React from 'react'
import './Home.css'
import img from '../Companent/Group.png'
import img1 from '../Companent/Elli.png'
import img2 from '../Companent/Group2.png'
import img3 from '../Companent/Group1.png'
import ico from '../Companent/Group3.svg'
import ico1 from '../Companent/Group23.svg'
import ico2 from '../Companent/Group32.svg'
import icone from '../Companent/credit.svg'
import img7 from '../Companent/img.png'

const Home = () => {
  return (
    <div>
      <div className='afta'>
        <div>
          <h1>Покупайте фриланс-услуги в <span>два клика</span></h1>
        <p>Ворк — единица работы продавца, которую можно купить как товар в магазине </p>
        <div className='nayti'>
            <button>Что нужно сделать?</button>
            <button>Найти</button>
        </div>
        <p>Выберите рубрику, чтобы начать</p>
        <div className='nayti'>
          <p>Тексты и переводы </p>
          <p>Разработка</p>
          <p>Дизайн</p>
        </div>
        <div className='nayti'>
          <p>Аудио, видео монтаж </p>
          <p>SEO и оптимизация</p>
        </div>
        <div className='nayti'>
          <p>Бизнес и жизнь</p>
          <p>Соцсети и реклама</p>
          <button>Все категории</button>
        </div>
        </div>
        <img src={img} alt="" />
      </div>
      <h3 className='hi'>Актуальные ворки</h3>

      <div className='cards'>
        <div className='card'>
          <div className='card1' >
            <img src={img1} alt="" />
            <h3>Сделать дизайн интернет-магазина</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
          <button>Посмотреть</button>
        </div>

        <div className='card'>
          <div className='card1'>
            <img src={img1} alt="" />
            <h3>Сделать дизайн интернет-магазина</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
          <button>Посмотреть</button>
        </div>

        <div className='card'>
          <div className='card1'>
            <img src={img1} alt="" />
            <h3>Сделать дизайн интернет-магазина</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
          <button>Посмотреть</button>
        </div>

        <div className='card'>
          <div className='card1'>
            <img src={img1} alt="" />
            <h3>Сделать дизайн интернет-магазина</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
          <button>Посмотреть</button>
        </div>

        <div className='card'>
          <div className='card1'>
            <img src={img1} alt="" />
            <h3>Сделать дизайн интернет-магазина</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
          <button>Посмотреть</button>
        </div>

        <div className='card'>
          <h3 className='ash'>Смотреть все ворки</h3>
        </div>
      </div>

      <h3 className='hi'>Топ фрилансеров</h3>

      <div className='kard2'>

        <div className='kard'>
          <div className='kard1'>
            <img className='kard-img' src={img2} alt="" />
            <div>
              <p>Марина Королёва</p>
              <h4>Разработчик PHP  </h4>
              <p>Выполено проектов: 65</p>
              <img src={img3} alt="" />
            </div>
          </div>
          <button>Написать</button>
        </div>

        <div className='kard'>
          <div className='kard1'>
            <img className='kard-img' src={img2} alt="" />
            <div>
              <p>Марина Королёва</p>
              <h4>Разработчик PHP  </h4>
              <p>Выполено проектов: 65</p>
              <img src={img3} alt="" />
            </div>
          </div>
          <button>Написать</button>
        </div>

        <div className='kard'>
          <div className='kard1'>
            <img className='kard-img' src={img2} alt="" />
            <div>
              <p>Марина Королёва</p>
              <h4>Разработчик PHP  </h4>
              <p>Выполено проектов: 65</p>
              <img src={img3} alt="" />
            </div>
          </div>
          <button>Написать</button>
        </div>

        <div className='kard'>
          <div className='kard1'>
            <img className='kard-img' src={img2} alt="" />
            <div>
              <p>Марина Королёва</p>
              <h4>Разработчик PHP  </h4>
              <p>Выполено проектов: 65</p>
              <img src={img3} alt="" />
            </div>
          </div>
          <button>Написать</button>
        </div>

        <div className='kard'>
          <div className='kard1'>
            <img className='kard-img' src={img2} alt="" />
            <div>
              <p>Марина Королёва</p>
              <h4>Разработчик PHP  </h4>
              <p>Выполено проектов: 65</p>
              <img src={img3} alt="" />
            </div>
          </div>
          <button>Написать</button>
        </div>

        <div className='kard'>
          <h3>Посмотреть всех ТОП фрилансеров</h3>
        </div>
      </div>

      <div className='hii'>
        <h3>Как решать задачи на WorkTap?</h3>
        <p>Идеально подходит для бизнеса и частных лиц</p>
      </div>

      <div className='ico'>
        <div className='icon'>
        <img src={ico} alt="" />
        <h4>Выберите услугу</h4>
        <p>В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов.</p>
      </div>

      <div className='icon'>
        <img src={ico1} alt="" />
        <h4>Оплатите</h4>
        <p>Деньги будут перечислены продавцу после того, как он выполнит работу, и вы её одобрите. </p>
      </div>

      <div className='icon'>
        <img src={ico2} alt="" />
        <h4>Получите результат</h4>
        <p>Наш супермаркет гарантирует вам возврат средств в полном объёме в случае невыполнения заказа.</p>
      </div>
      </div>

      <div className='karti'>
        <div >
          <h2>Как WorkTap помогает бизнесу?</h2>
          <div className='kartich'>
            <img src={icone} alt="" />
            <p>Оплачивайте с р/с или карты компании</p>
          </div><br />
          <div className='kartich'>
            <img src={icone} alt="" />
            <p>Экономьте до 87% бюджета на фрилансе</p>
          </div><br />
           <div className='kartich'>
            <img src={icone} alt="" />
            <p>Экономьте до 75% времени на решении фриланс задач</p>
          </div><br />
          <p className='pi'>WorkTap — быстро, просто и безопасно!</p><br />
          <button>Начать!</button>
        </div>
        <img className='img1' src={img7} alt="" />
      </div>

      <div className='log'>
        <div>
          <h4>Топ категории</h4>
          <p>Тексты и переводы</p>
          <p>Разработка</p>
          <p>Дизайн</p>
          <p>Аудио, видео монтаж</p>
          <p>Соцсети и реклама</p>
          <p>Бизнес и жизнь</p>
          <p>SEO и оптимизация</p>
        </div>
        <div>
          <h4>О Проекте</h4>
          <p>О Нас</p>
          <p>Как Это Работает</p>
          <p>Политика Приватности</p>
          <p>Правила Пользования </p>
          <p>Пресса о нас</p>
        </div>
        <div>
          <h4>Поддержка</h4>
          <p>Контакты</p>
          <p>Политика Безопасности</p>
          <p>FAQ</p>
        </div>
        <div>
          <h4>Follow</h4>
        </div>
      </div>
        <p className='p'>Copyright @ 2021  |  WorkTap – Worktap.KZ. All Rights Reserved</p>


    </div>
  )
}

export default Home