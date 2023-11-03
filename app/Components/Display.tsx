interface calculatorProps {
  numberOne: string;
  numberTwo: string;
  symbol: string;
  output: string;
}

const Display = (props: calculatorProps) => {
  return (
    <div className="flex border-2 p-10 w-[450px] overflow-hidden justify-center">
      {props.numberOne}
    </div>
  );
};

export default Display;
