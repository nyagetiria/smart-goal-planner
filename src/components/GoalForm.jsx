import { useState, useEffect } from "react";

function GoalForm({ onSubmit, goal = null, onCancel }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (goal) {
      setTitle(goal.title);
      setAmount(goal.amount);
    }
  }, [goal]);

  function handleSubmit(e) {
    e.preventDefault();

    const updatedGoal = {
      ...goal,
      title,
      amount: parseFloat(amount)
    };

    const newGoal = {
      title,
      amount: parseFloat(amount),
      amountSaved: 0 
    };

    fetch(goal ? `http://localhost:3000/goals/${goal.id}` : "http://localhost:3000/goals", {
      method: goal ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(goal ? updatedGoal : newGoal)
    })
      .then((r) => r.json())
      .then(onSubmit);

    setTitle("");
    setAmount(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{goal ? "Edit Goal" : "Add a Goal"}</h2>
      <input
        type="text"
        placeholder="Goal title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">{goal ? "Update Goal" : "Add Goal"}</button>
      {goal && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}

export default GoalForm;
