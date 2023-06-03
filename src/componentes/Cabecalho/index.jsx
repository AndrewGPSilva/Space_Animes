import logo from './logo.png'
import search from './search.png'
import styles from './Cabecalho.module.scss'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do Space" className={styles.cabecalho__imagemlogo}/>
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text"
                    placeholder="Qual anime procura?"/>
                <img src={search} alt="Ícone de Lupa" />
            </div>
        </header>
    )
}