# Resumo das atividades e resolução dos exercícios da Aula 03 #

### 02 - Formulários mais complexos ###
    Nessa aula vimos o <textarea>, para entradas de texto de mais de uma linha. Foi mostrado o <input> do tipo "radio" e como agrupar vários <input> do tipo "radio", impedindo que mais de um <input> seja selecionado. Foi mostrado também o <input> do tipo "checkbox" e por fim demonstrou que podemos criar um <input> dentro de um <label>, assim associando-os.


### 03 - Campos complexos ###
    Exercício destaca e define as seguintes propriedades:
        - A propriedade "id" serve somente como um identificador para o item. Serve também para que eu possa fazer a conexão entre o <label> e aquele <input> específico.
        - A propriedade "name" só pode ser "preenchida" uma única vez, por isso que, quando eu seleciono um dos itens, ele desmarca o outro, mantendo somente um selecionado.
        - A propriedade "value" serve para criarmos o valor que meu <input> vai ter. É diretamente relacionada ao conteúdo daquele <input>, e não ao grupo dele.


### 04 - CSS para formulários complexos ###
    Aula mostrou as personalizações do CSS para ajustar o HTML.


### 06 - Hierarquia no CSS ###
    Aula mostra a hierarquias que o CSS segue (usando como exemplo o <p>arágrafo da linha 41 do HTML), quando:
        -selecionamos no CSS um seletor de tag (p {}), sendo esse o mais fraco na ordem, ou;
        -selecionamos dois seletores de tag (form p {}) ou;
        -quando se inclui a classe (.teste {}) ou; 
        -quando se cria um marcador com a tag <p> com a classe teste (p.teste {}) ou;
        -quando se usa o identificador (#teste {}) ou por fim;
        -quando o estilo inline é no próprio HTML, quando adiciona-se a propriedade, por exemplo (style="color: COR"), sendo esse o mais forte de todos na ordem, respectivamente.


### 08 - Selecionando opções ###
    Aula vios a tag <select>, que é seletor, um campo de seleção de um item e o <option>, que representa cada opção do seletor.