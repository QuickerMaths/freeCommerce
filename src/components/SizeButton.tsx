import React from "react";

interface Props {
  size: string;
  setChosenSize: React.Dispatch<React.SetStateAction<string>>;
  chosenSize: string;
}

const SizeButton: React.FC<Props> = ({ setChosenSize, size, chosenSize }) => {
  return (
    <button
      className="single-product__size-button"
      style={{ backgroundColor: `${chosenSize === size ? "black" : ""}` }}
      onClick={() => setChosenSize(size)}
    >
      {size}
    </button>
  );
};

export default SizeButton;
