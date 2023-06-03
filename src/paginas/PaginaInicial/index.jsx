import banner from './fundo.jpg'
import styles from './PaginaInicial.module.scss'

import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import Rodape from 'componentes/Rodape';
import Galeria from 'componentes/Galeria';
import Populares from 'componentes/Populares';

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>Universo GEEK!</h1>
                        <img src={banner} alt="A terra vista do Espaço" className={styles.fundoimagem}/>
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    );
}