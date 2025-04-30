import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate("/home");
  };
  const goToView = () => {
    navigate("/view");
  };
  const goToAdd = () => {
    navigate("/add");
  };
  const goLogout = () => {
    navigate("/logout");
  };

  return <>
    <ul className="nav-bar">
      <li><a onClick={goToHomepage}>Home</a></li>
      <li><a onClick={goToView}>View Entries</a></li>
      <li><a onClick={goToAdd}>Add an Entry</a></li>
      <li><a onClick={goLogout}>Logout</a></li>
    </ul>
  </>
}