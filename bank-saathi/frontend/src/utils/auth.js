export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem("user");

  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
  return localStorage.getItem("user") !== null;
};

export const login = (user) =>{
  localStorage.setItem("currentUser" , JSON.stringify(user))
}

export const getCurrentUser = () =>{
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
}

export const logout = () =>{
  localStorage.removeItem("currentUser")
}