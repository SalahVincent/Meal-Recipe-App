import ky from 'ky'

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/'
const api = ky.create({prefixUrl: BASE_URL})

export default api