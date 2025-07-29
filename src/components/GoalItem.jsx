import { useState } from "react";

function GoalItem({ goal, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(goal.title);
  const [editedAmount, setEditedAmount] = useState(goal.amount);

  function handleDeposit() {
    const updatedGoal = {
      ...goal,
      progress: goal.progress + 10
    };

    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedGoal)
    })
      .then((r) => r.json())
      .then(onUpdate);
  }

  function handleDelete() {
    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: "DELETE"
    }).then(() => onDelete(goal.id));
  }

  function handleSaveEdit() {
    const updatedGoal = {
      ...goal,
      title: editedTitle,
      amount: parseFloat(editedAmount)
    };

    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedGoal)
    })
      .then((r) => r.json())
      .then((updated) => {
        onUpdate(updated);
        setIsEditing(false);
      });
  }

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type="number"
            value={editedAmount}
            onChange={(e) => setEditedAmount(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{goal.title}</h3>
          <p>Target: ${goal.amount}</p>
          <p>Progress: ${goal.progress}</p>
          <button onClick={handleDeposit}>Deposit $10</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
}

export default GoalItem;
