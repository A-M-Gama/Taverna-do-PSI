let dados = [
    {
        titulo: "O que é Dungeons and Dragons",
        descricao: "De forma resumida o D&D é um jogo no estilo RPG (Role Playing Game, ou em português, Jogo de Interpretação de Papéis) é uma história interativa, onde os jogadores e o Mestre em conjunto poderão ir em aventuras, resolver mistérios e interagir livremente com o mundo a sua volta.  No livro da 5ª edição de Dungeons & Dragons, D&D é descrito como um exercício de criação colaborativa. Além disso, o D&D também pode ser chamado de RPG de mesa.",
        link:"https://pt.wikipedia.org/wiki/Dungeons_%26_Dragons",
        tags:"rpg, dnd, ttrpg, fantasia, jogo de mesa, roleplaying"
    },
    {
        titulo: "O Mestre",
        descricao: "Antes de definir e apresentar o mínimo necessário para iniciar sua aventura no mundo de D&D,um dos jogadores deve assumir o papel de Mestre, ou simplesmente DM (<i>Dungeon Master</i>), que será responsável por narrar e construir o mundo e NPCs (<i>Non-player characters</i>, personagens não-jogadores) e dar vida ao cenário que os jogadores podem interagir, ao mesmo tempo também deve servir como juiz nos momentos em que as regras forem testadas.",
        link:"https://dnd5ed.github.io/gm/",
        tags:"mestre, dm, narração, npc, regras, condução"
    },
    {
        titulo: "Os jogadores",
        descricao: "Os jogadores são os protagonistas do mundo que foi criado e terão liberdade para interagir com o mundo da forma que desejarem, desde que de acordo com as regras estabelecidas e também da dificuldade de suas ações. Sendo assim, quando os jogadores buscarem fazer atividades mais complexas, como acobracias e ataques, eles devem recorrer ao so de dados, o mais popular é o D20. ",
        link:"https://dnd5ed.github.io/ldj/",
        tags:"jogadores, personagens, aventura, interação"
    },
    {
        titulo: "Os dados",
        descricao: "Os dados servem como uma forma de equilibrar e dar um elemento de imprevisibilidade para o jogo, afinal se não fosse a sorte do resultado nos dados, as possibilidades seriam mais limitadas pois dependeriam apenas do interesse dos jogadores e nem sempre as coisas acontecem como desejamos. Como exemplo, o popular D20 é um dado de 20 faces onde em geral, os resultados 1 e 20 são marcantes, o 1 representando uma falha crítica (sua ação falhou) e o 20 um acerto crítico (sucesso na ação desejada).",
        link:"https://pt.wikipedia.org/wiki/Role-playing_game#Dados_e_demais_materiais",
        tags:"dados, aleatoriedade, mecânica, d20, sistema"
    },
    {
        titulo: "O roleplay (interpretando)",
        descricao: "O D&D é um jogo no estilo RPG (Role Playing Game, ou em português, Jogo de Interpretação de Papéis) é uma história interativa, onde os jogadores e o Mestre em conjunto poderão ir em aventuras, resolver mistérios e interagir livremente com o mundo a sua volta. No livro da 5ª edição de Dungeons & Dragons, D&D é descrito como 'um exercício de criação colaborativa'.",
        link:"https://pt.wikipedia.org/wiki/Role-playing_game",
        tags:"roleplay, interpretação, imersão, história, criação"
    },
    {
        titulo: "Os personagens",
        descricao:"Os personagens são a forma em que os jogadores irão interagir com o mundo e os personagens criados pelo mestre. Geralmente a criação destes vão da criatividade do jogador que deverá escolher uma raça (espécie), classe (profissão/forma de combate), atributos (como esse personagem interage), equipamentos e dar um background (história do personagem anterior ao inicio do jogo), que determinará os interesses e a motivação do personagem nas aventuras.",
        link:"https://dnd5ed.github.io/ldj/",
        tags:"personagens, criação, raça, classe, atributos, background"
    },
    {
        titulo: "As regras",
        descricao: "As regras são parte importante do RPG de mesa, é necessária uma base em que tanto jogadores e o mestre devem seguir para que as sessões (nome comum dado as partidas de RPG) não se tornem um caos completo entre os jogadores, pois estes devem seguir as mesmas regras. Porém, se abrimos um livro de D&D a quantidade de regras é muito grande e dificilmente lembraremos de todas, então não é incomum que o mestre tenha a iniciativa de modificar ou até criar regras que não estariam no livro, essa iniciativa geralmente busca dar fluidez e até mais liberdade aos jogadores, afinal o objetivo do jogo não é abrir um livro e ler regras.",
        link:"https://jogaod20.com/2023/10/16/dnd-ptbr/",
        tags:"regras, sistema, mecânica, balanceamento, modificação"
    },
    {
        titulo: "O jogo",
        descricao: "Um ponto importante de lembrar é que no D&D não existem vencedores ou perdedores, nem há uma disputa entre jogadores e o mestre, o objetivo é que todos participem na construção da história e se divirtam. Por fim, depois de entender o básico das regras e montar seu personagem, ou organizar o mundo se você for o mestre, chegou a hora de começar a aventura. Basta reunir alguns amigos ou procurar grupos on-line de jogadores e se aventurar nos mundos fantásticos da imaginação",
        link:"https://pt.wikipedia.org/wiki/Dungeons_%26_Dragons#Vis%C3%A3o_geral",
        tags:"jogo, sessão, aventura, diversão, comunidade"
    },
    {
        titulo: "Outros sistemas",
        descricao: "Outro ponto importante, agora que você entendeu o básico do RPG de mesa é que as possibilidades são infinitas, afinal o D&D é apenas uma forma de jogar, existem diversos sistemas com regras diferentes e cenários diversos, alguns conhecidos são Pathfinder, Call of Cthullhu e também temos exemplos brasileiros como a Ordem Paranormal e Tormenta, sistema brasileiro que completou 25 anos e possui um kit introdutório gratuito para quem deseja iniciar no mundo da fantasia do RPG de mesa",
        link:"https://jamboeditora.com.br/produto/tormenta20-kit-introdutorio/",
        tags:"sistemas, sistema, rpg, pathfinder, call of cthulhu, tormenta"
    },
    {
        titulo: "A Psicologia e o RPG",
        descricao:"Se você já entendeu o básico e como funciona o RPG de mesa, saiba que ele pode ir além de ser um jogo e se tornar uma ferramenta de desenvolvimento acadêmico e de habilidades sociais. Podendo ser realizado como uma forma de envolver mais os alunos para facilitar o aprendizado do conteúdo, como através da gamificação de atividades simples de casa ou também em empresas, com sistemas de pontos",
        link:"https://www.ip.usp.br/site/noticia/role-playing-game-pode-servir-como-ferramenta-para-o-desenvolvimento-de-habilidades-sociais/",
        tags:"rpg educacional, psicologia, aprendizado, gamificação, habilidades sociais, psicólogo, psicóloga, psi, terapia"
    }
];