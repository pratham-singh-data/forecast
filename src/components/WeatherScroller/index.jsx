import React from 'react'
import { ForecastCard } from '../ForecastCard'
import "./style.css"

export const WeatherScroller = ({forecast}) => {
    console.log(forecast)

  return (
    <div className='scroller'>
        {forecast.map((entry, index) => <ForecastCard key={index} data={entry}/>)}
    </div>
  )
}
