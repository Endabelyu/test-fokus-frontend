export const getAiResponse = async () => {
  const res = await fetch("/aiResponse.json");
  if (!res.ok) throw new Error("Failed to load ai response.json");
  return res.json();
};
