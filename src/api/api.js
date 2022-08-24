import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public/',
})

export const itemsAPI = {
    getItems(offset = 210) {
        return instance.get(`characters?limit=9&offset=${offset}&apikey=2237c04bac4b813ebf6c1cb1ee2c41d9`);
    }
}
