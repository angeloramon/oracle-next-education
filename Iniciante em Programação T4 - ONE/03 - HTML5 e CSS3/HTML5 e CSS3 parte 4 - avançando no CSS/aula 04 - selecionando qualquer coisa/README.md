# Resumo das atividades e resolução dos exercícios da Aula 04 #

### 02 - Seletores avançados ###
    Nessa aula vimos seletores avançados do CSS:
    -O seletor ">", para acessar os filhos de determinado elemento. Por exemplo para acessar todos os <p> dentro de <main>:

        main > p {
        }
    
    -O seletor "+", para acessar o primeiro irmão de determinado elemento. Por exemplo, para acessar o primeiro <p> após um <img>:
    
        img + p {
        }
    
    -O seletor "~", para acessar todos os irmãos de determinado elemento. Por exemplo, para acessar todos os <p> após um <img>:

        img ~ p {
        }
    
    -O seletor "not", para acessar os elementos, exceto algum. Por exemplo, para acessar todos os <p> dentro de <main>, exceto o <p> que tem <id missao>:

        main p:not(#missao) {
        }


### 04 - Cálculos com CSS ###
    Nessa aula aprendemos como realizar cálculos dinâmicos de posicionamento de elementos no CSS, como altura e largura. Para que a o elemento sempre ocupe a medida correta em outros dispositivos, utilizamos a propriedade "calc". O calculo que desejamos realizar é escrito entre parênteses, em que inserimos o primeiro valor, o tipo de operção e o resultado esperado. Por exemplo: "width: calc(40% - 26px);"