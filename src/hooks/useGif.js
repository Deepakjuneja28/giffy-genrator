import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const API_KEY = "O3gjWR2b4syr6P6VqTCjmRUtkO2RXjxy";

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState("false");

  async function fetchData(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    console.log(imageSource);
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};
export default useGif;
