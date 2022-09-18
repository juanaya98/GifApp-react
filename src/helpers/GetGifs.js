export const GetGif = async ( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=6W2cMahIAx6syVJ3JsY6Q7qUx73a50uZ&q=${categoria}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map(img => ({
      id: img?.id,
      title: img?.title,
      url: img?.images?.original?.url,
    }));
    return gifs;
  };