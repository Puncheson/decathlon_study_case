

import  Axios  from '../axios' ;

const ENDPOINT = '/user'

export const getUsers = async (query: {page: number, limit: number}): Promise<TUsers> => {
  try {
    return await Axios.get(`${ENDPOINT}?page=${query.page}&limit=${query.limit}`).then(
      ({ data }) => data
    );
  } catch (err) {
    return err;
  }
};


export const getUser = async (id:number | string): Promise<TUser[]> => {
    try {
      return await Axios.get(`${ENDPOINT}/${id}`).then(
        ({ data }) => data
      );
    } catch (err) {
      return err;
    }
  };

/* Types */
export type TUsers = {
  data: TUser[],
  total: number,
  page: number,
  limit: number
}


export type TUser = {
  firstName: string
  id: string
  lastName: string
  picture: string
  title: string
};