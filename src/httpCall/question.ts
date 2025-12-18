export const getQuestions = async () => {
  const res = await fetch("/question.json");
  if (!res.ok) throw new Error("Failed to load question.json");
  return res.json();
};
