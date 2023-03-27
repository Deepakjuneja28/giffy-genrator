import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className=" text-white text-center mt-[40px]  text-3xl font-bold ">
        {" "}
        GIF'S GENERATOR
      </h1>

      <div className="flex justify-around w-full gap-y-10 mt-[30px] flex-wrap">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
