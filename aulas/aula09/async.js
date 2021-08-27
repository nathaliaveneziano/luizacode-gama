function pegarUsuarios() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { nome: 'Islene', hobby: 'dormir' },
        { nome: 'Nathalia', hobby: 'ler' },
        { nome: 'Anne', hobby: 'comer' },
      ]);
    }, 5000);
  });
}

async function main() {
  var usuarios = await pegarUsuarios();
  console.log(usuarios);
}

// Principal
// main();

// ----------------------------------------------------------

function pegarId() {
  console.log('Buscando o ID');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 2000);
  });
}

function buscarEmail(id) {
  console.log('Buscando e email');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('anne@gmail.com');
    }, 3000);
  });
}

function enviarEmail(corpo, para) {
  console.log('Enviando email...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let emailEnviado = true;

      if (emailEnviado) {
        resolve({ email: para, tempo: '5s' });
      } else {
        reject(para);
      }
    }, 5000);
  });
}

// Encadeamento de Async
async function mainAsync() {
  const id = await pegarId();
  const email = await buscarEmail(id);

  try {
    await enviarEmail('Oieee, tudo bem?', email);
    console.log('O email foi enviado com sucesso para!');
    console.log('Encerrando a caiza de email!!!');
  } catch (e) {
    console.log(`Hove algum erro no envio para ${email}`);
  }
}

mainAsync();

// ----------------------------------------------------------

function somar(numA, numB) {
  let a = Number(numA);
  let b = Number(numB);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log('nao tem numero');
  } else {
    console.log(`O resultado foi: ${numA + numB}`);
  }
}

// somar(2, 2);
// somar(2, '2');

// ----------------------------------------------------------

function verificarString(palavra) {
  if (typeof palavra == 'string') {
    console.log('Parabens! vc informou uma palavra');
  } else {
    throw new Error('ihhhh! parametro invalido');
  }
}

// verificarString('taina');
// verificarString(2);

// try {
//   // fazer isso aqui
//   console.log(``)
// }
