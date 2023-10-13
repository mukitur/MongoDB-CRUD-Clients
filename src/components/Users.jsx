import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  console.log(users);

  // Handle Delete
  const handleDeleteUser = (_id) => {
    console.log('delete', _id);

    // Delete  id  send to db
    fetch(`http://localhost:5500/users/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert('Delete successfully');
          //   remove deleted data from ui
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };

  return (
    <div>
      <h2>Total {users.length} Users Found</h2>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} {user.email} : {user._id}
            <Link to={`/update/${user._id}`}>
              <button>Update </button>
            </Link>
            <button onClick={() => handleDeleteUser(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
