# Resumo das atividades e resolução dos exercícios da Aula 08 #

### 01 - Campo de texto e botão ###
    *Aula mostra como criar as tags no mundo HTML:
        -"<input/>" (abre um campo para digitação);
        -"<button></button>" (abre um botão "clicável" e entre a tag se coloca o que se quer que contenha no botâo);
    *Mostra também como acessar as tag's do mundo HTML, no mundo JS (entre as tags <script>):
        - declara uma variável "input" e utiliza a função "document.querySelector()" para inserir aquilo que está no mundo HTML na variável "input". A função receberá como parâmetro o nome da tag (input) que desejamos utilizar: "document.querySelector("input")". Isso permite que se usa a tag <input/> no mundo JS;
        - Para saber qual o valor que está inserido na variável, utilizaremos o "input.value".
    *Mostra, por fim, como acessar a tag "<button></button>" a uma função (no caso "verifica()" ):
        - declaras uma variável chamada "button" e daremos ao "document.querySelector()" o parâmetro button - o nome da tag HTML;
        - utiliza o "button.onclick()" para associar ao botão a execução da função "verifica()". Para isso, chama-se a função "verifica()" SEM os parênteses, pois queremos que as informações da função fique vinculada ao clique do botão (on click). O clicar no botão substitui o comando da função (os"()").


### 03 - Dando tchau no clique de um botão ####     
    Exercício pede para vincular o botão criado com um determinada função.