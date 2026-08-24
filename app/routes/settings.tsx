import { Link, Outlet } from "react-router";

function Settings() {
  return (
    <>
      <h1>Settings Page</h1>
      <p>This is the Settings Page</p>
      <nav>
        <Link to="app">App</Link>
        <Link to="profile">Profile</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Settings;