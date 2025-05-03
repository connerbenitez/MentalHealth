import NavBar from "../components/NavBar";

export default function View() {
  // get user name from local storage
  const loggedInUserEmail = JSON.parse(localStorage.getItem("authToken")).email;
  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
  const user = storedUsers.find((u) => u.email === loggedInUserEmail);

  // Get today's date
  const today = new Date();
  // Format the date as year-month-day
  const formattedDate = today.toISOString().split('T')[0];
  console.log(formattedDate); // Example output: "2023-03-15"

  // get user data from local storage
  const allData = JSON.parse(localStorage.getItem("data") || "[]");
  const todaysData = allData.find((u) => u.date === formattedDate);
  // get Entry data from localStorage
  const loggedInUserEmail = JSON.parse(localStorage.getItem("authToken")).email;
  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
  const user = storedUsers.find((u) => u.email === loggedInUserEmail);

  // note: entries are stored in this format: date1': {entry}, 'date2': {entry}
  const entries = user.entries;

    <NavBar/>
    <h1>Welcome {user.name}</h1>
    <h1>Todo: View Entries</h1>
    {/* <p>date : {todaysData.date}</p>
    <p>mood : {todaysData.mood}</p>
    <p>activity level : {todaysData.activity}</p>
    <p>caloric intake : {todaysData.calories}</p>
    <p>hours of sleep : {todaysData.sleep}</p>
    <p>stress level : {todaysData.stress}</p> */}
  
  </>

  console.log(entries);

  return (
    <>
      <NavBar />
    <h1>Your Entries</h1>
    <p>{JSON.stringify(entries)}</p>
    </>
  );
}
