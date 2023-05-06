import Link from "next/link"
import styles from './Nav.module.css'

export default function Nav(){
    return (
        <nav className={styles.Nav}>
            <Link href="/">Home</Link>
            <Link href="/people">People</Link>
        </nav>
    )
}