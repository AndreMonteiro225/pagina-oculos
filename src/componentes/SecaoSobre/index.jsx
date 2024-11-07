import Image from "next/image";
import styles from "@/componentes/SecaoSobre/SecaoSobre.module.css";
import fotoLoja from "../../../public/loja.png";
import fotoAtend from "../../../public/atendimento.png";

export default function SecaoSobre() {
    return (
        <>
        <div className={styles.container} id="SecaoSobre">
        <h3>Quem somos nós?</h3>
        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
        </div>
        <div className={styles.containerSecaoCard}>

        <div className={styles.card}>
            <Image src={fotoLoja} alt="Loja"/>
            <div className={styles.containerCard}>
            <h4>Nossas Filiais</h4>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.containerCard}>
            <h4>Atendimento flexível</h4>
            <p>Nossa equipe possui é treinada para te atender</p>
            </div>
            <Image src={fotoAtend} alt="Atendimento"/>
        </div>
        </div>
        
        
        </>
    );
}
