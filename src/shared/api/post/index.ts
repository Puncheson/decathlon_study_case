import { AxiosError } from 'axios';

import  Axios  from '../axios' ;

const ENDPOINT = '/post'

export const getPosts = async (): Promise<TPosts> => {
  try {
    return await Axios.get(`${ENDPOINT}`).then(
      ({ data }) => data
    );
  } catch (err) {
    return err;
  }
};

//type
type TPosts = {
    data: TPost[],
    total: number,
    page: number,
    limit: number
}

export type TPost = {
    id: string,
    image: string
    likes: number,
    tags: string[],
    text: string,
    publishDate: string,
    owner:{
        id: string,
        title: string,
        firstName: string,
        lastName: string,
        picture: string
    }
}

