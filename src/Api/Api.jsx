import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const MOVIE_API_BASE_URL = import.meta.env.VITE_MOVIE_API_BASE_URL; 

const client = axios.create({
  baseURL: BASE_URL,
});

const movieClient = axios.create({
  baseURL: MOVIE_API_BASE_URL,
});

export const fetchAppointment = async () => {
  const response = await client.get(`/appointments`);
  return response.data;
};

export const addAppointments = async (createAppointment) => {
  const response = await client.post(`/appointments`, createAppointment);
  return response.data;
};

export const fetchAvailableSlots = async () => {
  const response = await client.get(`/available-slots`);
  return response.data;
};

export const fetchMovies = async (searchTerm) => {
  const response = await movieClient.get(
    `/?apikey=${API_KEY}&type=movie&s=${searchTerm}`
  );
  return response.data;
};

export const fetchProductPrice = async () => {
  const response = await client.get(`/products`);
  return response.data;
};
