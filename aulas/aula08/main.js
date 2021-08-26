// function enviarEmail(corpo, para, callback) {
//   // Function de Timeout
//   setTimeout(() => {
//     //   console.log(`
//     //   Para : ${para}
//     //   -------------------------
//     //   ${corpo}
//     //   -------------------------
//     //   De: fulaninho
//     // `);

//     let deuRuim = true;

//     if (deuRuim) {
//       callback(para, deuRuim);
//     } else {
//       callback(para);
//     }

//     callback(para);
//   }, 5000);
// }

// // PROGRAMA INICIA AQUI
// console.log('Iniciando envio de email...');

// // Exibindo dados do setTimeout
// enviarEmail('Oieee, tudo bem?', 'anne@gmail.com', (email, erro = false) => {
//   if (erro) {
//     console.log('Houve algum erro no envio!!!');
//   } else {
//     console.log(`O email foi enviado com sucesso para ${email}`);
//   }
// });

/* 
- Definicao de arrow function
Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors). definição da internet 
*/

// function enviarEmail(corpo, para, callback) {
//   // Criando uma Promise
//   return newPromise((resolve, reject) => {
//     setTimeout(() => {
//       let emailEnviado = false;

//       if (emailEnviado) {
//         resolve({ email: para, tempo: '5s' });
//       } else {
//         reject(para);
//       }
//     }, 5000);
//   });
// }

// dados = {
//   email: para,
//   tempo: '4s',
// };

// Exibindo as informacoes da Promise
enviarEmail('Oieee, tudo bem?', 'anne@gmail.com')
  .then((dados) => {
    console.log(`O email foi enviado com sucesso para ${dados.email}!`);
    console.log(`Duracao do envio foi ${dados.tempo}`);
  })
  .catch(() => {
    console.log(`Hove algum erro no envio para ${email}`);
  });

console.log('Encerrando a caixa de email...');

// --------------------------------------------------------- //

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

function enviarEmail(corpo, para, callback) {
  console.log('Enviando email...');
  return newPromise((resolve, reject) => {
    setTimeout(() => {
      let emailEnviado = false;

      if (emailEnviado) {
        resolve({ email: para, tempo: '5s' });
      } else {
        reject(para);
      }
    }, 5000);
  });
}

// Encadeamento de Promise
pegarId().then((id) => {
  buscarEmail(id).then((email) => {
    enviarEmail('Oieee, tudo bem?', email)
      .then(({ email, tempo }) => {
        console.log(`O email foi enviado com sucesso para ${dados.email}!`);
        console.log(`Duracao do envio foi ${dados.tempo}`);
      })
      .catch((email) => {
        console.log(`Hove algum erro no envio para ${email}`);
      });
  });
});
