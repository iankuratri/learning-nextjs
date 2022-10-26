const UserList = ({ users }) => {
  return (
    <div>
      <h1>List of users</h1>

      <ol>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
