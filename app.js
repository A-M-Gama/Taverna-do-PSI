function pesquisar() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa" para exibir os resultados.
    let section = document.getElementById("resultados-pesquisa");
  
    // Seleciona o elemento HTML com o ID "campo-pesquisa" para exibir os resultados.
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    // Inicializa uma string vazia para armazenar o HTML dos resultados.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    if (!campoPesquisa){
      alert("Insira algum tópico válido. Exemplo: RPG, Mestre, Dados, Psicologia...");
      return
    }

    // Itera sobre cada dado na lista de resultados.
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase(); // transforma o titulo em letras minusculas
      descricao = dado.descricao.toLowerCase(); // transforma a descricao em letras minusculas
      tags = dado.tags.toLowerCase(); // transforma as tags em letras minusculas
      campoPesquisa = campoPesquisa.toLowerCase(); // transforma o texto inserido da pesquisa em minuscula
      
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      // Constrói o HTML para cada resultado, incluindo título, descrição e link.
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
    } 
    
    if (!resultados){
      alert("Não encontramos nada relacionado");
      return
    }

    // Atribui o HTML gerado para a seção de resultados, atualizando a página.
    section.innerHTML = resultados;
  };
