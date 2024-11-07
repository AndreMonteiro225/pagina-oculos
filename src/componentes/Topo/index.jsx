import styles from './Topo.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../../public/logo.png";

export default function Topo() {
    return (
        <div className={styles.topo}>
            <Image src={Logo} alt='logomarca'/>
            <nav>
                <Link className={styles.links} href="#SecaoProdutos">Produtos</Link>
                <Link className={styles.links} href="#SecaoSobre">Sobre</Link>
                <Link className={styles.links} href="#SecaoContatos">Contato</Link>
            </nav>
        </div>
    );
}