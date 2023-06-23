import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://nlw-spacetime-back-end.vercel.app/',
})
