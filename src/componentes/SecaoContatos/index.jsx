import Image from "next/image";
import styles from "@/componentes/SecaoContatos/SecaoContatos.module.css";
import local from "../../../public/local.png";
import telefone from "../../../public/telefone.png";
import email from "../../../public/email.png";
import facebook from "../../../public/fb.png";
import insta from "../../../public/ig.png";
import twitter from "../../../public/tt.png";

export default function SecaoContatos() {
  return (
    <div className={styles.secaoContatos} id="SecaoContatos">

      <div className={styles.containerFaleConosco}>
        <h3>Fale Conosco</h3>
        <p>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato
          através de nossas redes sociais ou da central de atendimento.
        </p>
      </div>
      
      <div className={styles.containerIcones}>

      <div className={styles.containerContato}>
        <h3>Contato</h3>

        <div className={styles.cardIcones}>
          <Image src={local} />
          <p>Nova Iguaçu, RJ</p>
        </div>

        <div className={styles.cardIcones}>
          <Image src={telefone} />
          <p>(21)99999-9999</p>
        </div>

        <div className={styles.cardIcones}>
          <Image src={email} />
          <p>contato@oticavida.com</p>
        </div>
      </div>

      <div className={styles.containerRedesSociais}>
        <h3>Nossas Redes Sociais</h3>

        <div className={styles.cardIcones}>
          <Image src={facebook} />
          <p>/oticavida</p>
        </div>

        <div className={styles.cardIcones}>
            <Image src={insta}/>
            <p>oticaVidarj</p>
        </div>

        <div className={styles.cardIcones}>
            <Image src={twitter}/>
            <p>oticaVidarj</p>
        </div>
      </div>
      </div>
    </div>
  );
}
