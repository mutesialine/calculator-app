const Square = ({ element, styles, onClick }) => {
  return (
    <div
      className={`py-6 px-2 text-4xl text-center font-bold cursor-pointer box-border border border-gray-500 bg-gray-200 ${styles}`}
      onClick={onClick}
    >
      {element}
    </div>
  );
};
export default Square;
