import React, { useState } from "react";

import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("");

  const { gif, loading, fetchData } = useGif(tag);

  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="w-[400px]  bg-blue-200 rounded-lg border border-black flex flex-col items-center gap-y-10 mt-[15px]  ">
      <h1
        className="mt-[15px] font-bold text-2xl underline text-black
      "
      >
        {" "}
        RANDOM {tag} GIF
      </h1>

      {loading ? (
        <Spinner></Spinner>
      ) : (
        <img src={gif} alt="" width="250px" height="100" />
      )}

      <input
        type="text"
        className="w-[250px] rounded-lg text-center "
        placeholder="Search"
        onChange={changeHandler}
        value={tag}
      />

      <button
        className="w-[150px] bg-black hover:bg-white hover:text-black text-white text-lg py-2 rounded-lg mb-[20px]"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
