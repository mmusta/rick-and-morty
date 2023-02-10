export const ApiUrl = {
  RICK_AND_MORTY: "https://rickandmortyapi.com/api/character/"
};

export const ApiUrlFilter = {
  [ApiUrl.RICK_AND_MORTY]: {
    PAGE: "page"
  }
};

export const addQueryParams = (url, query) => {
  const searchParams = new URLSearchParams(query);
  return `${url}?${searchParams.toString()}`;
};
