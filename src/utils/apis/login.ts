export async function loginApi(endpoint: string, data: Record<string, string>) {
  if (endpoint !== "/login") throw new Error("Invalid endpoint");
  if (!data) throw new Error("Invalid data");
  const { username, email, password } = data;
  if (!username || !password || !email) throw new Error("Invalid data");

  const token = JSON.stringify({ username, email });
  return token;
}
