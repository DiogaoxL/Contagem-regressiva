import { useState } from 'react';


const useCountDown = (date) => {
 
  const [day , setDay] = useState()
  const [hour , setHour] = useState()
  const [minute , setMinute] = useState()
  const [second , setSecond] = useState()


const countdown = () => {
  const countDate = new Date(date).getTime();
  const now = new Date().getTime();
  const interval = countDate - now ;

  const secund = 1000

  const minute = secund * 60
  const hour = minute * 60
  const day = hour * 24

  const dayNumber = Math.floor(interval/day)
  const hourNumber = Math.floor((interval % day) / hour)
  const minuteNumber = Math.floor((interval % hour) / minute)
  const secundNumber = Math.floor((interval % minute)/ secund)

  setDay(dayNumber)
  setHour(hourNumber)
  setMinute(minuteNumber)
  setSecond(secundNumber)
}



 setInterval(countdown , 1000)

  return [day ,hour , minute , second];
};

export default useCountDown;