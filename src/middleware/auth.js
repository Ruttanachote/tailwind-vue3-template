export default function auth ({ next, store }){
  if (localStorage.activeUser) {
    return next();
  } 
  return next({ name: "Login" });
}