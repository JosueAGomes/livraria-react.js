import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const LivroDetalhes = ({ livros }) => {
  const { livroSlug } = useParams();
  const livro = livros.find((livro) => livro.slug === livroSlug);

  if (!livro) {
    return <NotFound />;
  }

  return (
    <main className="principal">
      <div className="pag-livro">
        <h2>{livro.titulo}</h2>
        <div className="livro">
          <img
            src={"/imagens/capas/" + livro.id + ".jpg"}
            alt={`Capa do livro ${livro.titulo}`}
          />
          <ul>
            <li>Id: {livro.id}</li>
            <li>ISBN: {livro.isbn}</li>
            <li>Título: {livro.titulo}</li>
            <li>Slug: {livro.slug}</li>
            <li>Autor: {livro.autor}</li>
            <li>Categoria: {livro.categoria}</li>
            <li>Ano: {livro.ano}</li>
            <li>Número de páginas: {livro.paginas}</li>
            <li>Preço: R${livro.preco},00</li>
          </ul>
          <hr />
          <h3>Descrição do livro</h3>
          <p>{livro.descricao}</p>
        </div>
      </div>
    </main>
  );
};

export default LivroDetalhes;
