import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom"
import { useAuthValue } from '../context/AuthContext'
import { useAuthentication } from '../hooks/useAuthentication'

const Navbar = () => {
  const {logout} = useAuthentication()
  const {user} = useAuthValue()
  console.log(user)
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.links_list}>
          <NavLink to="/" className={styles.brand} activeClassName={styles.active}>
          <li><span>Life</span>Dev</li>
          </NavLink>
          <NavLink to="/login" className={styles.link} activeClassName={styles.active}>
          <li>Login</li>
          </NavLink>
          <NavLink to="/register" className={styles.link} activeClassName={styles.active}>
          <li>Register</li>
          </NavLink>
          {user && (
            <>
            <li>
              <NavLink to="/post/create" className={styles.link} activeClassName={styles.active}>
              New Post
              </NavLink>
            </li>
              <li>
              <NavLink to="/dashboard" className={styles.link} activeClassName={styles.active}>
              Dashboard
              </NavLink>
            </li>
            <li>
          <button onClick={logout} className={styles.exit}>Exit</button>
          </li>
          </>
          )}
        </ul>
      </nav>
    </>
  )
}

export default Navbar