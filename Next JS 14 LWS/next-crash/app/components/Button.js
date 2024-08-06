'use client'


const Button = () => {
  return (
    <div className="mt-5">
      <button
        className="bg-orange-500 p-2 rounded-md"
        onClick={() => console.log("clicked")}
      >
        Click here
      </button>
    </div>
  );
};

export default Button;
