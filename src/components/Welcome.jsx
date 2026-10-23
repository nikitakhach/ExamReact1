import useToggle from "../hooks/useToggle";

export default function Welcome() {
  const [isVisible, toggle] = useToggle();

  return (
    <div>
      <button onClick={toggle}>ჩვენება & დამალვა</button>

      {isVisible && <p>კეთილი იყოს თქვენი მობრძანება ბიბლიოთეკაში</p>}
    </div>
  );
}
