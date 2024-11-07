import Image from "next/image";
import styles from "@/componentes/SecaoProdutos/SecaoProdutos.module.css";
import card1 from "../../../public/oculos01.png";
import card2 from "../../../public/oculos02.png";
import card3 from "../../../public/oculos03.png";
import card4 from "../../../public/oculos04.png";


export default function Cards() {
    return (

        <>
        <div className={styles.topoProdutos} id="SecaoProdutos">
            <h3>Nossos produtos</h3>
            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
        </div>
        

        <div className={styles.secaoProdutos}>
            <div className={styles.card}>
            <h4>Óculos de grau</h4>
            <Image src={card1} alt="card1" />
            <p>R$ 500,00</p>
            </div>
            <div className={styles.card}>
            <h4>Óculos transition</h4>
            <Image src={card2} alt="card2" />
            <p>R$ 750,00</p>
            </div>
            <div className={styles.card}>
            <h4>Óculos de sol</h4>
            <Image src={card3} alt="card3" />
            <p>R$ 700,00</p>
            </div>
            <div className={styles.card}>
            <h4>Óculos infantil</h4>
            <Image src={card4} alt="card4" />
            <p>R$ 500,00</p>
            </div>
        </div>
        <div className={styles.secaoProdutosRodape}>
            <h3>Todos os nossos produtos incluem:</h3>
            <ul>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>
        </div>
        </>
    );
}