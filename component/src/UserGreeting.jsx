function UserGreeting(props) {
  if (props.isLoggedIn) {
    return <h2>Welcome {props.username}</h2>;
  } else {
    <h2>Please log in to continue</h2>;
  }
}

export default UserGreeting;
