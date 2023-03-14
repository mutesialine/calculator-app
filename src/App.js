import Square from "./components/ui/Square"
import { useState } from "react";
const App = () => {
  const[inputValue,setInputValue]=useState('0')
  const[operand, setOperand]=useState(null)
  const [result, setResult]=useState(null)

  const handleNumberClick = (value) =>{
    if(inputValue === '0' || operand !==null){
      setInputValue(value)
    }
     else {
      setInputValue(inputValue.toString() + value.toString())}
  }

  const handleOperand = (operator) => {
    setOperand(operator)
    setResult(parseFloat(inputValue))
    setInputValue(inputValue);
  }
 const handleEqualClick = () =>{
  const number = parseFloat(inputValue)
    let res = null;
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
      case "%":
        res = result % number;
        break;
      default:
        res = number;
    }
    setResult(res);
    setInputValue(res.toString());
      setOperand(null);

 }

 const handleClearNumber = () =>{
  setInputValue('0')
  setOperand(null)
  setResult(null)
 }
  return (
    <div className="w-full max-w-lg mx-auto my-28">
      <div className="grid grid-cols-4">
        <Square
          styles="col-span-4 bg-gray-500 text-right"
          element={inputValue}
        />
        <Square element="Ac" handleClick={() => handleClearNumber()} />
        <Square element="+/-" handleClick={() => handleOperand("+/-")} />
        <Square element="%" handleClick={() => handleOperand("%")} />
        <Square
          styles="bg-orange-400"
          element="\"
          handleClick={() => handleOperand("/")}
        />
        <Square element="7" handleClick={() => handleNumberClick(7)} />
        <Square element="8" handleClick={() => handleNumberClick(8)} />
        <Square element="9" handleClick={() => handleNumberClick(9)} />
        <Square
          styles="bg-orange-400"
          element="*"
          handleClick={() => handleOperand("*")}
        />
        <Square element="4" handleClick={() => handleNumberClick(4)} />
        <Square element="5" handleClick={() => handleNumberClick(5)} />
        <Square element="6" handleClick={() => handleNumberClick(6)} />
        <Square
          styles="bg-orange-400"
          element="-"
          handleClick={() => handleOperand("-")}
        />
        <Square element="1" handleClick={() => setInputValue(1)} />
        <Square element="2" handleClick={() => handleNumberClick(2)} />
        <Square element="3" handleClick={() => handleNumberClick(3)} />
        <Square
          styles="bg-orange-400"
          element="+"
          handleClick={() => handleOperand("+")}
        />
        <Square
          styles="col-span-2"
          element="0"
          handleClick={() => handleNumberClick(0)}
        />
        <Square
          styles="col-span-1"
          element="."
          handleClick={() => handleOperand(".")}
        />
        <Square
          styles="col-span-1 bg-orange-400"
          element="="
          handleClick={() => handleEqualClick()}
        />
      </div>
    </div>
  );
}

export default App
