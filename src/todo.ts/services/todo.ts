import axios, { AxiosPromise } from 'axios';

export interface TodoSpec {
  id: number;
  name: string;
  complated: boolean;
}

export const getTodos = (): AxiosPromise<TodoSpec[]> => {
  return axios.get('/api/v1/todos');
};
