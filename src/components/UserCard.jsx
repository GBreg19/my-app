import React, { useState } from "react";
import UserForm from "./UserForm";
import "./user-card.css";
import UserList from "./UserList";
import ErrorModal from "./ErrorModal";

const UserCard = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    age: "",
  });
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, id: new Date().valueOf(), [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      inputValue.name.length < 1 ||
      inputValue.age.length < 1 ||
      inputValue.age < 0
    ) {
      setIsError(true);
    } else {
      setUsers([...users, inputValue]);
      setInputValue({ name: "", age: "" });
    }
  };

  return (
    <>
      <div className={`w-6/12 mx-auto mt-52 ${isError && "opacity-50"}`}>
        <UserForm
          data={inputValue}
          onChange={onChangeHandler}
          onSubmit={onSubmitHandler}
          error={isError}
        />
        {users.length > 0 && <UserList data={users} />}
      </div>
      {isError && (
        <ErrorModal
          inputValue={inputValue}
          setInputValue={setInputValue}
          error={setIsError}
        />
      )}
    </>
  );
};

export default UserCard;
