import { useEffect, useState } from "react";

export function useToken() {
  const [token, setToken] = useState<string | null>(null);
  const saveToken = (data: string) => {
    localStorage.setItem("token", data);
    setToken(data);
  };
  useEffect(() => {
    const oldToken = localStorage.getItem("token");
    setToken(oldToken);
  }, []);

  return {
    saveToken: saveToken,
    token: token,
  };
}
