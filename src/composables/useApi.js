import { ref } from "vue";
import axios from "axios";

const jokes = ref();

const api = axios.create({
  baseURL: "https://api.chucknorris.io/jokes/random",
});


export const useApi = () => {
  const getJokes = async () => {
    const response = await api.get("");
    jokes.value = response.data.value;
  };
  return {jokes, getJokes};
};
