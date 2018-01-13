export const apiKey      = "&api_key=9f5a8f10c0544a39c3123faa56891d08&";
export const queryUrl    = "https://api.themoviedb.org/3/search/movie?language=en-US&page=1&include_adult=false";
export const topRatedUrl = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const popularUrl  = "https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1";
export const soonUrl     = "https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1";

export const getMoviesbyApi = query => {
  return fetch(queryUrl + apiKey + `&query=${query}`)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("error while fetching, " + response.statusText);
    })
    .then(data => {
        return data.results;
    })
    .catch(err => console.log(err));
};

export const getPopularMovies = () => {
    return fetch(popularUrl + apiKey)
        .then(response => {
            if (response.ok) {
                return response.json();
        }
        throw new Error("error while fetching, " + response.statusText);
        })
        .then(data => {
            return data.results;
        })
        .catch(err => console.log(err));
};

export const getUpcomingMovies = () => {
    return fetch(soonUrl + apiKey)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("error while fetching, " + response.statusText);
        })
        .then(data => {
          return data.results;
        })
    .catch(err => console.log(err));
};

export const getTopRatedMovies = () => {
    return fetch(topRatedUrl + apiKey)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        throw new Error("error while fetching, " + response.statusText);
        })
        .then(data => {
          return data.results;
        })
    .catch(err => console.log(err));
};
