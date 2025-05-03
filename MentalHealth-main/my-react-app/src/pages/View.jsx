import NavBar from "../components/NavBar";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

export default function View() {
  const loggedInUserEmail = JSON.parse(localStorage.getItem("authToken")).email;
  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
  const user = storedUsers.find((u) => u.email === loggedInUserEmail);
  const entries = user.entries;

  // Convert entries object to array sorted by date
  const entryArray = Object.values(entries).sort((a, b) => new Date(a.date) - new Date(b.date));

  // Convert mood to numeric scale (optional based on your values)
  const moodNumeric = entryArray.map(entry => ({
    ...entry,
    mood: convertMoodToNumeric(entry.mood),
  }));

  return (
    <>
      <NavBar />
      <h1>Welcome {user.name}</h1>
      <h2>Daily Tracking Charts</h2>

      {/* Mood BarChart */}
      <MoodChart data={moodNumeric} />
      
      {/* Other LineCharts */}
      <Chart title="Activity Level" data={entryArray} dataKey="activityLevel" />
      <Chart title="Caloric Intake" data={entryArray} dataKey="caloricIntake" />
      <Chart title="Hours of Sleep" data={entryArray} dataKey="sleepHours" />
      <Chart title="Stress Level" data={entryArray} dataKey="stressLevel" />
    </>
  );
}

// Mood chart with a bar chart
function MoodChart({ data }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h3>Mood</h3>
      <ResponsiveContainer width="95%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="mood" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Line charts for other categories
function Chart({ title, data, dataKey }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h3>{title}</h3>
      <ResponsiveContainer width="95%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Convert mood to a numeric value (this is an example mapping)
function convertMoodToNumeric(mood) {
  switch (mood) {
    case "happy":
      return 3;
    case "okay":
      return 2;
    case "sad":
      return 1;
    default:
      return 0; // in case there's an unexpected value
  }
}
