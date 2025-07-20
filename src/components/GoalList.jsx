import GoalCard from './GoalCard';

function GoalList({ goals }) {
  return (
    <div>
      <h2>Your Goals</h2>
      {goals.length === 0 ? (
        <p>No goals yet</p>
      ) : (
        goals.map(goal => <GoalCard key={goal.id} goal={goal} />)
      )}
    </div>
  );
}

export default GoalList;
