export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "73c9e38894mshef9b82341968e87p156c3bjsnff26200d26f9",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

//process.env.REACT_APP_RAPID_API_KEY,
