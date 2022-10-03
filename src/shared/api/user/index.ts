import { AxiosError } from 'axios';

import  Axios  from '../axios' ;

export const getUsers = async (): Promise<TUser | AxiosError> => {
  try {
    return await Axios.get(`/user`).then(
      ({ data }) => data
    );
  } catch (err) {
    return err;
  }
};

/* Types */

type TUser = {
  uid: string;
  name: string;
  email: string;
  roles: { code: string; name: string }[];
};