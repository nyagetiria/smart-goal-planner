function GoalCard({ goal }) {
  const { name, targetAmount, savedAmount, category, deadline } = goal;
  const percent = Math.min((savedAmount / targetAmount) * 100, 100).toFixed(1);

  return (
    <div style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem' }}>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Target: ${targetAmount}</p>
      <p>Saved: ${savedAmount}</p>
      <p>Deadline: {deadline}</p>
      <progress value={savedAmount} max={targetAmount}></progress>
      <p>{percent}% complete</p>
    </div>
  );
}

export default GoalCard;
