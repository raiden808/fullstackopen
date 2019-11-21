import React from 'react'

const Weather = ({weatherData}) => {

	let weatherRender;

	if(typeof weatherData !== "undefined"){
		weatherRender = 
			<>
				<p><b>Tempreture</b> {weatherData.current.temperature} Celsius</p>
				<img 
    				style={{ height: 100 }} 
    				src={weatherData.current.weather_icons[0]} 
    			/>
    			<p><b>Wind:</b>{weatherData.current.wind_speed} kph direction {weatherData.current.wind_dir}</p>
			</>

	}
	else{
		weatherRender =
			<>
				<p>
					No data
				</p>
			</>
	}
	return(
		<>
			{weatherRender}
		</>
	)
}

export default Weather