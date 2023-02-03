const ErrorModal = ({ setInputValue, inputValue, error }) => {
  const onClickHandler = () => {
    error(false);
    setInputValue({ name: "", age: "" });
  };
  if (inputValue.name.length < 1 || inputValue.age.length < 1) {
    return (
      <div className="w-6/12 bg-white rounded absolute left-1/2 -translate-x-2/4 top-1/2 -translate-y-2/4">
        <div className="bg-violet-800 px-3 py-5">
          <h1 className="text-white font-bold text-3xl">Invalid input</h1>
        </div>
        <div className="px-3 pt-10">
          <p className="font-semibold pb-16">
            Please enter a valid name and age (non-empty values)
          </p>
          <button
            className="mt-3 bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-base leading-5 rounded font-semibold text-white; text-white float-right m-5"
            onClick={onClickHandler}
          >
            Okay
          </button>
        </div>
      </div>
    );
  }
  if (inputValue.age < 0) {
    return (
      <div className="w-6/12 bg-white rounded absolute left-1/2 -translate-x-2/4 top-1/2 -translate-y-2/4">
        <div className="bg-violet-800 px-3 py-5">
          <h1 className="text-white font-bold text-3xl">Invalid input</h1>
        </div>
        <div className="px-3 pt-10">
          <p className="font-semibold pb-16">
            Please enter a valid age (Above 0)
          </p>
          <button
            className="mt-3 bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-base leading-5 rounded font-semibold text-white; text-white float-right m-5"
            onClick={onClickHandler}
          >
            Okay
          </button>
        </div>
      </div>
    );
  }
};

export default ErrorModal;
