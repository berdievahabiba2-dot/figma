import React from 'react'
import imge from '../Companent/image.png'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <div className="contact">
      <h2>Мой <span>кошелек</span></h2>

      <div  className='moy'>
        <div className='mim'>
          <p>Чистый доход</p>
          <p>1 000 000 тенге</p>
        </div>
        <div className='mim'>
          <p>Выведено</p>
          <p>500 000 тенге</p>
        </div>
        <div className='mim'>
          <p>Куплено</p>
          <p>40 000 тенге</p>
        </div>
        <div className='mim'>
          <p>Ожидает разрешения</p>
          <p>50 000 тенге</p>
        </div>

        <div className='mim'>
          <p>Доступна сумма для вывода</p>
          <h5>250 000 тенге</h5>
          <p>Вывести средства на</p>
          <div className='img'>
            <img src={imge} alt="" />
            <img src={imge} alt="" />
            <img src={imge} alt="" />
          </div>
        </div>
      </div>

      <div className='data'>
        <p>История</p>
        <div className='date'>
          <p>Операция </p>
          <p>Дата операции</p>
          <p>Сумма</p>
          <p>Hash операции </p>
        </div>

        <div className='date'>
          <button>+</button>
          <p>Пополнение баланса</p>
          <p>22 октября, 2021 года</p>
          <p>150 000 тенге</p>
          <p>c2d5abbb5d87eb9d0378e187ff0e9df5a97adf68</p>
        </div>
         <div className='date'>
          <button>+</button>
          <p>Вывод средств</p>
          <p>15 октября, 2021 года</p>
          <p>300 000 тенге</p>
          <p>826ad6e3c5757747304a0c7aff4e00f6ffacd832</p>
        </div>
         <div className='date'>
          <button>+</button>
          <p>Покупка услуги</p>
          <p>14 сентября, 2021 года</p>
          <p>200 000 тенге</p>
          <p>987829a3bdb628cb8bb69d4ad1eedce6193792ac</p>
        </div>
      </div>
      
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

export default Contact