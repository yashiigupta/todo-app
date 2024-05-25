import checkMark from '../assets/tickMark.jpeg';
import styles from '../styles/nav.module.css';
export default function NavBar()
{
  return (
    <div className={styles.navigationBar}>
      <img src = {checkMark} alt = "heading" className = {styles.check}/>
      <h1 className = {styles.heading}>To Do App</h1>
      <img src = {checkMark} alt = "heading" className = {styles.check}/>
    </div>
  )
}