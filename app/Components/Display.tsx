interface calculatorProps {
  numberOne: string;
  numberTwo: string;
  symbol: string;
  output: string;
}

const Display = (props: calculatorProps) => {
  return (
    <div className="flex border-2 p-10 w-[450px] overflow-hidden justify-center">
      {props.output == " "
        ? props.symbol == " "
          ? props.numberOne
          : props.numberTwo
        : props.output}
    </div>
  );
};

export default Display;
