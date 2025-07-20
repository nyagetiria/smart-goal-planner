import { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    title: "",
    targetAmount: "",
    balance: 0,
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newGoal = { ...formData, targetAmount: parseFloat(formData.targetAmount), balance: 0 };

    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGoal),
    })
      .then((r) => r.json())
      .then((data) => {
        onAddGoal(data);
        setFormData({ title: "", targetAmount: "", balance: 0 });
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Goal Title" required />
      <input name="targetAmount" type="number" value={formData.targetAmount} onChange={handleChange} placeholder="Target Amount" required />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
