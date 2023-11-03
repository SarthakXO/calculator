import Image from "next/image";
import Buttons from "./Components/Buttons";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center p-10 gap-6 items-center">
      <div className="flex gap-6">
        <Buttons value={"1"} />
        <Buttons value={"2"} />
        <Buttons value={"3"} />
      </div>
      <div className="flex gap-6">
        <Buttons value={"4"} />
        <Buttons value={"5"} />
        <Buttons value={"6"} />
      </div>
      <div className="flex gap-6">
        <Buttons value={"7"} />
        <Buttons value={"8"} />
        <Buttons value={"9"} />
      </div>
    </div>
  );
}
