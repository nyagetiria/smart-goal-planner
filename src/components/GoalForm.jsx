import { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const newGoal = {
      title,
      amount: parseFloat(amount),
      progress: 0
    };

    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal)
    })
      .then((r) => r.json())
      .then(onAddGoal);

    setTitle("");
    setAmount(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Goal</h2>
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
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
