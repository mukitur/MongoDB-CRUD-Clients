import './App.css';

function App() {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    // send server to server
    fetch('http://localhost:5500/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert('user added successfully');
          form.reset();
        }
      });
  };
  return (
    <>
      <h1>React CRUD Operation</h1>
      <form onSubmit={handleAddUser}>
        <input type="text " name="name" placeholder="Name" />
        <br />
        <input type="email " name="email" placeholder="Email" />
        <br />
        <input type="submit" value="Add User" name="" id="" />
      </form>
    </>
  );
}

export default App;
