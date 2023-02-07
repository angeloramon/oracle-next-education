const textArea = document.querySelector("#texto");
const mensagem = document.querySelector(".right-container");


// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida para "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`

async function copiaTexto() {
    const textInput = document.getElementById('resposta').innerHTML;
    try {
      await navigator.clipboard.writeText(textInput);
      alert("Texto copiado!")
    } catch (error) {
      alert('Deu ruim. Tente outra vez.\n', error);
    }
  }
  
    
    

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.innerHTML = `<p id="resposta">${textoEncriptado}<p>
<button id="btn-copiar" onclick="copiaTexto()">Copiar</button>`;
    textArea.value = "";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.innerHTML = `<p id="resposta">${textoDesencriptado}<p>
    <button id="btn-copiar">Copiar</button>`;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}