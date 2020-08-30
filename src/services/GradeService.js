import http from '../http-common.js';

const create = (data) => {
  return http.post('/grade', data);
};

const getAll = () => {
  return http.get('/grade');
};

const get = (id) => {
  return http.get(`/grade/${id}`);
};

const findByName = (name) => {
  return http.get(`/grade?name=${name}`);
};

const update = (id, data) => {
  return http.put(`/grade/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/grade/${id}`);
};

const removeAll = () => {
  return http.delete(`/grade`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName,
};
