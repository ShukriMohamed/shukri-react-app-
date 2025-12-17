function Dashboard({ isLoggedIn }) {
  return (
      <div>{isLoggedIn ? <p>fadlan diwan gali!</p> : <p>fadlan diwan gali.</p>}
          { isLoggedIn ? <p>yes true.</p> : <p>no false.</p>}
      
      
      </div>
  );
}
export default Dashboard;