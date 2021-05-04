import { store } from "react-notifications-component";
import data from "./tests/mockData";

export const transformResToOptions = (res) => {
  if (!res) return [];
  return res.map((mov) => {
    return {
      Title: mov.Title,
      Year: mov.Year,
      Poster: mov.Poster,
      label: mov.Title,
      key: mov.imdbID,
    };
  });
};

export const getMovies = (keyword) => {
  if (process.env.NODE_ENV === "production") {
    return fetch(
      `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${keyword}&type=movie`
    )
      .then((res) => res.json())
      .then((json) => json.Search)
      .then((search) => transformResToOptions(search));
  } else {
    return new Promise((resolve, reject) => {
      resolve(transformResToOptions(data));
    });
  }
};

export const notify = (title, message, type) => {
  return store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "bottom",
    container: "bottom-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3200,
      onScreen: true,
    },
  });
};
