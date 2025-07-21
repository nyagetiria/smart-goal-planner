import GoalItem from "./GoalItem";

function GoalList({ goals, onDelete, onUpdate }) {
  return (
    <div>
      <h2>My Goals</h2>
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          goal={goal}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default GoalList;
