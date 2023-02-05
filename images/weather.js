const API_KEY ='509236b530fb4065bef184627212112'
const searchTemperature=()=>{
    const city = document.getElementById("city-name").value
    const url = 'https://api.weatherapi.com/v1/current.json=${city}&appid=${API_KEY}'
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}
const setInnerText =(id , text)=>{
   document.getElementById(id).innerText = text
}
const displayTemperature = temperature =>{
    console.log(temperature)
   setInnerText('city',temperature.name)
   setInnerText('weather',temperature.weather[0].main)
   setInnerText('temp',temperature.main.temp)

   const url ="http:\\openweathermap.org/img/wn/50n@2x.png"
   const imgIcon = document.getElementById("image-icon")
   imgIcon.setAttribute('src',url)
}