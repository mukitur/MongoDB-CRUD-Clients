import { Link, useLoaderData } from 'react-router-dom';

const Update = () => {
  const loadedUser = useLoaderData();
  console.log(loadedUser);

  const handleupdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    console.log(updatedUser);

    // send updated date to server
    fetch(`http://localhost:5500/users/${loadedUser._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert('user updated successfully');
        }
      });
  };
  return (
    <div>
      <h2>Update {loadedUser.name} User</h2>
      <form onSubmit={handleupdate}>
        <input
          type="text "
          name="name"
          defaultValue={loadedUser.name}
          placeholder="Name"
        />
        <br />
        <input
          type="email "
          defaultValue={loadedUser.email}
          name="email"
          placeholder="Email"
        />
        <br />
        <input type="submit" value="Update" name="" id="" />
      </form>
      <Link to={'/users'}>
        <button>Go Back to Users</button>
      </Link>
    </div>
  );
};

export default Update;
