function Notification({ isLoggedIn }) {
  return <div>{isLoggedIn && <p>You are logged in!</p>}</div>;
}
export default Notification;