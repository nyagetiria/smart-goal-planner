import { useEffect, useState } from "react";
import GoalList from "./components/GoalList";
import GoalForm from "./components/GoalForm";
import './styles.css';



function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((r) => r.json())
      .then(setGoals);
  }, []);

  function addGoal(newGoal) {
    setGoals([...goals, newGoal]);
  }

  function deleteGoal(id) {
    setGoals(goals.filter((goal) => goal.id !== id));
  }

  function updateGoal(updatedGoal) {
    setGoals(goals.map((goal) =>
      goal.id === updatedGoal.id ? updatedGoal : goal
    ));
  }

  return (
    <div className="App">
      <h1>Smart Goal Planner</h1>
      <GoalForm onAddGoal={addGoal} />
      <GoalList
        goals={goals}
        onDelete={deleteGoal}
        onUpdate={updateGoal}
      />
    </div>
  );
}

export default App;
