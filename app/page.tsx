"use client";
import Buttons from "./Components/Buttons";
import { useState } from "react";
import Display from "./Components/Display";

export default function Home() {
  const [firstNumber, setFirstNumber] = useState<string>();
  const [secondNumber, setSecondNumber] = useState<string>();
  const [operator, setOperator] = useState<string>("");
  const changeFirstNumber = () => {};

  return (
    <div className=" flex flex-col justify-center p-10 gap-6 items-center mt-[15vh]">
      <Display />
      <div className="flex gap-6">
        <Buttons value={"1"} />
        <Buttons value={"2"} />
        <Buttons value={"3"} />
        <Buttons value={"+"} />
      </div>
      <div className="flex gap-6">
        <Buttons value={"4"} />
        <Buttons value={"5"} />
        <Buttons value={"6"} />
        <Buttons value={"-"} />
      </div>
      <div className="flex gap-6">
        <Buttons value={"7"} />
        <Buttons value={"8"} />
        <Buttons value={"9"} />
        <Buttons value={"X"} />
      </div>
      <div className="flex gap-6">
        <Buttons value={"."} />
        <Buttons value={"0"} />
        <Buttons value={"/"} />
        <Buttons value={"="} />
      </div>
    </div>
  );
}
