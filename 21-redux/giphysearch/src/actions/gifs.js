//ACTION CREATOR

export function fetchGifs(search) {
  return function(dispatch) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=c2357dd7b60146729fda7b08cbf4fe79&q=${search}`
    console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        dispatch({type:"FETCHED_GIFS", payload: json.data})
      })
  }
}

export function deleteGif(gif) {
  return {
    type: "DELETE_GIF",
    payload: gif
  }
}
