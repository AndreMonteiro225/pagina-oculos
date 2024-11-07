import Image from "next/image";
import styles from "@/componentes/SecaoCapa/SecaoCapa.module.css";
import capa from "../../../public/capa.png";


export default function SecaoCapa() {
    return (
        <div className={styles.SecaoCapa}>
        <p>preços baixos e</p>
        <h1>Óculos de grau e de sol</h1>
        <p>Você só encontra aqui</p>
        </div>
    )
}