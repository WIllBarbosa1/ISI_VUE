import axios from 'axios';

const baseURL = 'https://backend-seucaneco.herokuapp.com';

const instance = axios.create({
  baseURL,
  headers: { 'Constent-Type': 'application/json' },
});

export async function getShows() {
  return instance.get('/shows');
}

export async function deleteShow(id) {
  return instance.delete(`/shows/${id}`);
}

// eslint-disable-next-line camelcase
export async function editShow(id, nome_atracao, data, hora) {
  return instance.put(`/shows/${id}`, {
    nome_atracao,
    data,
    hora,
  });
}

// eslint-disable-next-line camelcase
export async function createShow(nome_atracao, data, hora) {
  return instance.post('/shows', {
    nome_atracao,
    data,
    hora,
  });
}

export default instance;
