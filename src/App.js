import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import Rodape from "./components/Rodape";
import NotFound from "./components/NotFound";
import LivroDetalhes from "./components/LivroDetalhes";
import axios from "axios";

class App extends Component {
  state = {
    livros: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get("/api/todosOsLivros.json");
      this.setState({ livros: response.data });
    } catch (error) {
      console.log("Erro na requisição:", error);
    }
  }

  render() {
    return (
      <Router>
        <Topo />
        <Routes>
          <Route
            path="/"
            element={<Home livros={this.state.livros} />}
          />
          <Route
            path="/frontend"
            element={<Frontend livros={this.state.livros} />}
          />
          <Route
            path="/programacao"
            element={<Programacao livros={this.state.livros} />}
          />
          <Route
            path="/design"
            element={<Design livros={this.state.livros} />}
          />
          <Route
            path="/catalogo"
            element={<Catalogo livros={this.state.livros} />}
          />
          <Route
            path="/livro/:livroSlug"
            element={<LivroDetalhes livros={this.state.livros} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </Router>
    );
  }
}

export default App;
