import React from "react";

const UserList = ({ data }) => {
  return (
    <div className="user-list">
      <ul className="p-6">
        {data.map((u) => {
          return (
            <React.Fragment key={u.id}>
              <li className=" mt-3 p-2 text-lg font-medium border border-slate-300 ">{`${u.name} (${u.age} years old)`}</li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
