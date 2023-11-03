import React from "react";

interface NumberProps {
  value: string;
}

const Buttons = (props: NumberProps) => {
  return <div className="flex border-2 p-10">{props.value}</div>;
};

export default Buttons;
