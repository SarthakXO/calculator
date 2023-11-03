interface NumberProps {
  value: string;
}

const Buttons = (props: NumberProps) => {
  return (
    <div className="flex border-2 p-10 transition-all duration-500 hover:bg-blue-500 hover:text-black">
      {props.value}
    </div>
  );
};

export default Buttons;
