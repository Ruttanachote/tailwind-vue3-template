export default function auth ({ next, store }){
  if (localStorage.activeUser) {
    return next({name: 'home'})
  } 
  return next()
}