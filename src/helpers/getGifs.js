const getGifs = async ({ category, limit = 10 }) => {
  const apiKey = "0BIFGjWk2IsqgJbAzAKQJqQpvIO4vRZJ";
  const baseUrl = "https://api.giphy.com/v1/gifs";

  const url = `${baseUrl}/search?api_key=${apiKey}&q=${category}&limit=${limit}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium?.url,
    };
  });
  return gifs;
};

export default getGifs;
