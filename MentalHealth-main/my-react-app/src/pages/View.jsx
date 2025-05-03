import NavBar from "../components/NavBar";

export default function View() {
  // get Entry data from localStorage
  const loggedInUserEmail = JSON.parse(localStorage.getItem("authToken")).email;
  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
  const user = storedUsers.find((u) => u.email === loggedInUserEmail);

  // note: entries are stored in this format: date1': {entry}, 'date2': {entry}
  const entries = user.entries;

  console.log(entries);

  return (
    <>
      <NavBar />
    <h1>Your Entries</h1>
    <p>{JSON.stringify(entries)}</p>
    </>
  );
}
