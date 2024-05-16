import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <header>
        <h1>Welcome to react JS!</h1>
      </header>
      <Outlet />
      <footer>
        <Link to='/login'>Employee Login</Link>
      </footer>
    </div>
  )
}
