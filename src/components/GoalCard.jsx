function GoalCard({ goal, onDelete, onUpdate }) {
  const { id, title, balance, targetAmount } = goal;

  function handleDeposit() {
    const newAmount = parseFloat(prompt("Enter deposit amount:"));
    if (!isNaN(newAmount)) {
      const updatedGoal = { ...goal, balance: balance + newAmount };

      fetch(`http://localhost:3000/goals/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedGoal),
      })
        .then((r) => r.json())
        .then(onUpdate);
    }
  }

  function handleDelete() {
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "DELETE",
    }).then(() => onDelete(id));
  }

  return (
    <div className="goal-card">
      <h3>{title}</h3>
      <p>Balance: ${balance}</p>
      <p>Target: ${targetAmount}</p>
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default GoalCard;
