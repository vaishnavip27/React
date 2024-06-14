import MyButton from "./components/MyButton";
import "./styles/MyButton.css";
import image from "./images/photo-1.jpg";
import UserGreeting from "./UserGreeting";

function App() {
  const user = {
    name: "Vaishnavi Patil",
    imageSize: 90,
  };

  return (
    <div>
      <h1 className="heading">Welcome to my App</h1>
      <MyButton />
      <p>Hello there, this is Vaishnavi</p>
      <img src={image} alt="profile-image" class="photo-1" />
      <UserGreeting isLoggedIn={true} username="Vaishnavi patil" />
    </div>
  );
}

export default App;
