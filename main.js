import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const App = () => {
  const [time, setTime] = React.useState("~:~");
  const [leader, setLeader] = React.useState("Пока нет");

  React.useEffect(() => {
    let counter = 60;
    const interval = setInterval(() => {
      counter--;
      const min = String(Math.floor(counter / 60)).padStart(2, "0");
      const sec = String(counter % 60).padStart(2, "0");
      setTime(`${min}:${sec}`);
      if (counter <= 0) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>👑 Царь Горы</h1>
      <h2>{time}</h2>
      <p>Текущий лидер:<br/><b>{leader}</b></p>
      <button onClick={() => setLeader("Вы!")}>Сделать ставку (1 Star)</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
