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

