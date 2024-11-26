import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Topo from "@/componentes/Topo";
import SecaoCapa from "@/componentes/SecaoCapa";
import Cards from "@/componentes/SecaoProdutos"
import SecaoSobre from "@/componentes/SecaoSobre";
import SecaoContatos from "@/componentes/SecaoContatos";
import Rodape from "@/componentes/Rodape";

export default function Home() {
  return (
    <>
      <Head>
        <title>Óticas vida</title>
        <meta name="description" content=""/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <>
      <Topo/>
      </>
      <>
      <SecaoCapa/>
      </>
      <>
        <Cards/>
      </>
      <>
      <SecaoSobre/>
      </>
      <>
      <SecaoContatos/>
      </>
      <>
        <Rodape/>
      </>
        
    </>
  );
}
