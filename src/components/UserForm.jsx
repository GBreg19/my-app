import "./user-card.css";

const UserForm = ({ data, onChange, onSubmit, error }) => {
  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={onChange}
            placeholder="Username"
            disabled={error}
          />
        </div>
        <div className="mt-3">
          <label>Age (Years)</label>
          <input
            type="number"
            name="age"
            value={data.age}
            onChange={onChange}
            placeholder="Age"
            disabled={error}
          />
        </div>
        <button>Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
