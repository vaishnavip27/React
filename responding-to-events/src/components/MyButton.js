export default function MyButton() {
  function handleClick() {
    alert("You clicked me!");
  }
  return <button onClick={handleClick}>TAP ME</button>;
}
