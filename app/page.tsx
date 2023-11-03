"use client";
import Buttons from "./Components/Buttons";
import { useState } from "react";
import Display from "./Components/Display";

export default function Home() {
  const [firstNumber, setFirstNumber] = useState<string>("");

  const [secondNumber, setSecondNumber] = useState<string>("");

  const [operator, setOperator] = useState<string>(" ");

  const [result, setResult] = useState<string>(" ");

  const calculator = () => {
    if (operator == "+") {
      const a = Number(firstNumber);
      const b = Number(secondNumber);
      const c = a + b;

      setOperator(" ");
      setResult(String(c));
      setFirstNumber("");
      setSecondNumber("");
    } else if (operator == "-") {
      const a = Number(firstNumber);
      const b = Number(secondNumber);
      const c = a - b;

      setOperator(" ");
      setResult(String(c));
    } else if (operator == "X") {
      const a = Number(firstNumber);
      const b = Number(secondNumber);
      const c = a * b;

      setOperator(" ");
      setResult(String(c));
    } else if (operator == "/") {
      const a = Number(firstNumber);
      const b = Number(secondNumber);
      const c = a / b;

      setOperator(" ");
      setResult(String(c));
    }
  };

  const Operations = (symbol: string) => {
    if (symbol == "+") {
      setOperator("+");
    } else if (symbol == "-") {
      setOperator("-");
    } else if (symbol == "X") {
      setOperator("X");
    } else {
      setOperator("/");
    }
  };

  const numberSetter = (value: string) => {
    if (operator == " ") {
      setResult(" ");
      setFirstNumber(firstNumber + value);
    } else {
      setResult(" ");

      setSecondNumber(secondNumber + value);
    }
  };

  return (
    <div className=" flex flex-col justify-center p-10 gap-6 items-center mt-[15vh]">
      <Display
        symbol={operator}
        output={result}
        numberOne={firstNumber}
        numberTwo={secondNumber}
      />

      <div className="flex gap-6">
        <div
          onClick={() => {
            numberSetter("1");
          }}
        >
          <Buttons value={"1"} />
        </div>

        <div
          onClick={() => {
            numberSetter("2");
          }}
        >
          <Buttons value={"2"} />
        </div>

        <div
          onClick={() => {
            numberSetter("3");
          }}
        >
          <Buttons value={"3"} />
        </div>

        <div onClick={() => Operations("+")}>
          <Buttons value={"+"} />
        </div>
      </div>

      <div className="flex gap-6">
        <div
          onClick={() => {
            numberSetter("4");
          }}
        >
          <Buttons value={"4"} />
        </div>

        <div
          onClick={() => {
            numberSetter("5");
          }}
        >
          <Buttons value={"5"} />
        </div>

        <div
          onClick={() => {
            numberSetter("6");
          }}
        >
          <Buttons value={"6"} />
        </div>

        <div onClick={() => Operations("-")}>
          <Buttons value={"-"} />
        </div>
      </div>

      <div className="flex gap-6">
        <div
          onClick={() => {
            numberSetter("7");
          }}
        >
          <Buttons value={"7"} />
        </div>

        <div
          onClick={() => {
            numberSetter("8");
          }}
        >
          <Buttons value={"8"} />
        </div>

        <div
          onClick={() => {
            numberSetter("9");
          }}
        >
          <Buttons value={"9"} />
        </div>

        <div onClick={() => Operations("X")}>
          <Buttons value={"X"} />
        </div>
      </div>

      <div className="flex gap-6">
        <div
          onClick={() => {
            setFirstNumber("");
            setSecondNumber("");
            setOperator(" ");
            setResult(" ");
          }}
        >
          <Buttons value={"C"} />
        </div>

        <div
          onClick={() => {
            numberSetter("0");
          }}
        >
          <Buttons value={"0"} />
        </div>

        <div onClick={() => Operations("/")}>
          <Buttons value={"/"} />
        </div>

        <div onClick={calculator}>
          <Buttons value={"="} />
        </div>
      </div>
    </div>
  );
}
