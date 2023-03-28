import axios from "axios"

const URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "04a9c4ed01415fb2eb508b93cb8eedbf"

const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: { q: query, units: "metric", APPID: API_KEY },
  })

  return data
}

export default fetchWeather
