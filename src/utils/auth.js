import Cookies from "js-cookie";

const hardcodedUser = {
  username: "admin@gmail.com",
  password: "123456",
};

export const login = (username, password) => {
  if (
    username === hardcodedUser.username &&
    password === hardcodedUser.password
  ) {
    Cookies.set("token", "authenticated", { expires: 1 }); // Set a cookie for 1 day
    return true;
  }
  return false;
};

export const logout = () => {
  Cookies.remove("token");
};

export const isAuthenticated = () => {
  return Cookies.get("token") === "authenticated";
};
