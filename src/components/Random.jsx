import React from "react";

import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-[400px]  bg-green-200 rounded-lg border border-black flex flex-col items-center gap-y-10 mt-[15px]  ">
      <h1
        className="mt-[15px] font-bold text-2xl underline text-black
      "
      >
        {" "}
        A RANDOM GIF'S
      </h1>

      {loading ? (
        <Spinner></Spinner>
      ) : (
        <img src={gif} alt="" width="250px" height="100" />
      )}

      <button
        className="w-[150px] bg-black hover:bg-white hover:text-black text-white text-lg py-2 rounded-lg mb-[20px]"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
