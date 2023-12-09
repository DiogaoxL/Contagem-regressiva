import Title from './components/Title'
import Counter from './components/Counter'
import NewYear from './assets/fogos.jpg'
import useCountDown from './hooks/useCountDown' 
import './App.css'

function App() {
   const [day ,hour , minute , second] = useCountDown("Jan 1 , 2024 00:00:00")
  return (
    
      <div className='App'style={{backgroundImage: `url(${NewYear})`}}>
        <div className="container">
          <Title title="contagem regressiva 2024" />
          <div className="countdown-container">
            <Counter title="dias" number={day}/>
            <Counter title="horas" number={hour}/>
            <Counter title="minutos" number={minute}/>
            <Counter title="segundos" number={second}/>
          </div>
        </div>
      </div>
     
    
  )
}

export default App
