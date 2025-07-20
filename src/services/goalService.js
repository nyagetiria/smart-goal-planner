const BASE_URL = 'http://localhost:3000/goals';

export const getGoals = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Failed to fetch goals');
  return res.json();
};
