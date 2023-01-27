# Resumo das atividades e resolução dos exercícios da Aula 02 #

### 02 - Meta tag de Viewport ###
   Nessa aula foi falado sobre Design responsivo: como ajustar o estilo da nossa página de acordo com o tamanho da tela do dispositivo que a acesse, usando:
        -no HTML, na tag <meta> com propriedade e valor <name="viewport"> embutidas e para saber a largura do dispositivo usa a propriedade <content> com o valor <width=device-width>:
            "<meta name="viewport" content="width=device-width">"
        -no CSS a Media Queries "@media", que pergunta ao navegador qual é o tamanho da tela em questão, e com o valor do tipo de tela screen e a pesquisa. Todas as telas que tenham até 450, terão esse estilo diferente, reescrito.:
            @media screen and (max-width: 480px) {
                body {
                    "colocar o estilo que precisa ser entregue"
                }
            }            


### 04 -  ###
   