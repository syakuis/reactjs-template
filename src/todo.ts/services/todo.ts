import axios, { AxiosPromise, AxiosResponse } from 'axios';

export interface TodoSpec {
  id: number;
  name: string;
  complated: boolean;
}

export type TodoAxiosResponseSpec = AxiosResponse<TodoSpec[]>;

export const getTodos = (): AxiosPromise<TodoSpec[]> => {
  return axios.get('/api/v1/todos');
};
