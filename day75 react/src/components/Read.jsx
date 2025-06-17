
const Read = (props) => {
    const users = props.users;
    const setuser = props.setUsers
    
     const renderUser = users.map((user, idx) => {
    return <li key={idx}>{user.name}</li>;
  });
  return (
    <div>
      <h2>Users Data</h2>
      <ol>{renderUser}</ol>
    </div>
  );
};

export default Read;
