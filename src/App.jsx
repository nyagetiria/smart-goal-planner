import { useEffect, useState } from 'react';
import GoalList from './components/GoalList';
import { getGoals } from './services/goalService';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    getGoals()
      .then(data => setGoals(data))
      .catch(error => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="App">
      <h1>Smart Goal Planner</h1>
      <GoalList goals={goals} />
    </div>
  );
}

export default App;
