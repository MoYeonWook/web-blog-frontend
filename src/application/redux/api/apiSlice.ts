import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../../types/Post';
import { PostHeaderData } from '../../types/PostHeaderData';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/mock',
  }),
  endpoints: (builder) => ({
    getPostHeaders: builder.query<PostHeaderData[], void>({
      query: () => '/postHeaders.json',
    }),
    getPostById: builder.query<Post, number>({
      query: (id: number) => `/post/${id}.json`,
    }),
  }),
});

export { apiSlice };
export const { useGetPostHeadersQuery, useGetPostByIdQuery } = apiSlice;
