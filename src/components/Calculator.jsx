import Square from "../components/ui/Square";
import { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("0");
  const [operand, setOperand] = useState(null);
  const [result, setResult] = useState(null);
  const [track, setTrack] = useState(false);

  const handleNumberClick = (value) => {
    if (inputValue === "0") {
      setInputValue(value);
    } else {
      setInputValue(track ? value : inputValue.toString() + value);
      setTrack(false);
    }
  };

  const handleOperand = (operator) => {
    setOperand(operator);
    setResult(parseFloat(inputValue));
    setTrack(true);
  };

  const handleEqualClick = () => {
    const number = parseFloat(inputValue);
    let res = null;
    if (result !== null) {
      switch (operand) {
        case "+":
          res = result + number;
          break;
        case "-":
          res = result - number;
          break;
        case "*":
          res = result * number;
          break;
        case "/":
          res = result / number;
          break;
        default:
          res = number;
      }
    } else {
      res = number;
    }
    setResult(res);
    setInputValue(res.toString());
    setOperand(null);
  };

  const handleClearNumber = () => {
    setInputValue("0");
    setResult(null);
    setOperand(null);
    setTrack(false);
  };
  const handlesignNumber = () => {
    setInputValue((prevInput) => -prevInput);
  };

  const handleDecimal = () => {
    setInputValue((prevInputValue) => prevInputValue + ".");
  };
  const handlePercentage = () => {
    setInputValue(inputValue / 100);
  };

  const inputData = [
    { input: inputValue },
    { input: "Ac", handleClick: handleClearNumber },
    { input: "+/-", handleClick: handlesignNumber },
    { input: "%", handleClick: handlePercentage },
    { input: "/", handleClick: () => handleOperand("/") },
    { input: "7", handleClick: () => handleNumberClick(7) },
    { input: "8", handleClick: () => handleNumberClick(8) },
    { input: "9", handleClick: () => handleNumberClick(9) },
    { input: "*", handleClick: () => handleOperand("*") },
    { input: "6", handleClick: () => handleNumberClick(6) },
    { input: "5", handleClick: () => handleNumberClick(5) },
    { input: "4", handleClick: () => handleNumberClick(4) },
    { input: "-", handleClick: () => handleOperand("-") },
    { input: "3", handleClick: () => handleNumberClick(3) },
    { input: "2", handleClick: () => handleNumberClick(2) },
    { input: "1", handleClick: () => handleNumberClick(1) },
    { input: "+", handleClick: () => handleOperand("+") },
    { input: "0", handleClick: () => handleNumberClick(0) },
    { input: ".", handleClick: () => handleDecimal(".") },
    { input: "=", handleClick: handleEqualClick },
  ];

  return (
    <div className="grid grid-cols-4">
      {inputData.map((value, index) => (
        <Square
          element={value.input}
          key={index}
          onClick={value.handleClick}
          styles={
            index === 0
              ? "col-span-4 text-right bg-gray-500"
              : index === 17
              ? "col-span-2"
              : (index % 4 === 0 || index === inputData.length - 1) &&
                "bg-orange-500"
          }
        />
      ))}
    </div>
  );
};
export default Calculator;
