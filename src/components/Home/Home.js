import React from 'react'
import Photo from "../img/man1.png"

function Home() {
  return (
    <div className='Home'>

      <div className='container'>
        <div className=' Home__block'>
          <div>
            <h1 className='Home__bigTitle'>ОБУЧЕНИЕ С <br /> ГАРАНТИЕЙ</h1>
            <p className='Home__sentence'>Мы создаем легкие решения <br />
              сложных задач и проблем</p>
          </div>
          <img className='Home__img' src={Photo} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Home
