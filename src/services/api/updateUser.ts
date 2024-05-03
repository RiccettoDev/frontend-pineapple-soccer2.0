import { getUserLocalStorage } from "../../context/AuthProvider/util";
import { Api } from "../api";
import { AxiosResponse } from "axios";

const user = getUserLocalStorage()
const userId = user.id

export async function updateUser(userData: any) {
  try {
    const response: AxiosResponse = await Api.put(`/users/${userId}`, userData);
    if (response.status !== 200) {
      throw new Error('Erro ao atualizar usuário');
    }
    const updatedUser = response.data;
    return updatedUser;
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    throw error;
  }
}
