import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addQueryParams, ApiUrl, ApiUrlFilter } from "../common";

const api = createApi({
  reducerPath: "rickandmorty",
  baseQuery: fetchBaseQuery({ baseUrl: ApiUrl.RICK_AND_MORTY }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (page) =>
        addQueryParams("", {
          [ApiUrlFilter[ApiUrl.RICK_AND_MORTY].PAGE]: page
        })
    })
  })
});

export const { useGetCharactersQuery } = api;

export default api;
