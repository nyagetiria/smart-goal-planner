function GoalItem({ goal, onDelete, onUpdate }) {
  function handleDelete() {
    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: "DELETE"
    }).then(() => onDelete(goal.id));
  }

  function handleDeposit() {
    const updatedGoal = {
      ...goal,
      progress: goal.progress + 10
    };

    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ progress: updatedGoal.progress })
    })
      .then((r) => r.json())
      .then(onUpdate);
  }

  return (
    <div className="goal-item">
      <h3>{goal.title}</h3>
      <p>Target: ${goal.amount}</p>
      <p>Progress: ${goal.progress}</p>
      <button onClick={handleDeposit}>Deposit $10</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default GoalItem;
