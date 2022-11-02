import axios from 'axios';

export const API = 'https://ms-discord-upy5mhs63a-rj.a.run.app';

class TodoService {
  constructor() {
    API = 'https://ms-discord-upy5mhs63a-rj.a.run.app';
  }

  async getTodos(email) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${API}/todos?email=${email}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getHeaders() {
    return {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
  }

  async addTodo(todo) {
    const headers = this.getHeaders();
    console.log(headers);
    return new Promise((resolve, reject) => {
      axios
        .post(`${API}/todos`, todo, headers)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async updateTodo(todo) {
    const headers = this.getHeaders();
    return new Promise((resolve, reject) => {
      axios
        .patch(`${API}/todos`, todo, headers)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async deleteTodo(id) {
    const headers = this.getHeaders();
    return new Promise((resolve, reject) => {
      axios
        .delete(`${API}/todos/${id}`, headers)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default TodoService;