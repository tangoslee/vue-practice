import apiService from "@/services/api.service";

const API_URL = ""; //process.env.BASE_URL;

const todoService = {
  async getTodos() {
    const { data, statusText } = await apiService.get(
      `${API_URL}/api/todos.json`
    );
    return new Promise((resolve, reject) => {
      if (data) return resolve(data);
      return reject(statusText);
    });
  }
};

export default todoService;
