import axios from "axios";

// Função para buscar repositórios do GitHub
export const fetchRepositories = async (username: string) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar repositórios", error);
    throw error;
  }
};
