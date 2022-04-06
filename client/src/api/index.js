import axios from 'axios'

const api = axios.create({
    baseURL: 'https://booklistapi.herokuapp.com',
})

export const insertMovie = payload => api.post(`/booklist/create`, payload)
export const getAllMovies = () => api.get(`/booklist`)
export const updateMovieById = (id, payload) => api.put(`/booklist/${id}`, payload)
export const deleteMovieById = id => api.delete(`/booklist/${id}`)
export const getMovieById = id => api.get(`/booklist/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis
