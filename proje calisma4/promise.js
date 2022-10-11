// const todos = [
//   { title: "todo1", description: "konu tekrarı yapılacak" },
//   { title: "todo2", description: "alıştırmalar çözülecek" },
//   { title: "todo3", description: "ödev yapılacak" },
// ];

// function todoList() {
//   setTimeout(() => {
//     todos.forEach((item) => {
//       console.log(item);
//     });
//   }, 2000);
// }

// function newTodo(todo) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       todos.push(todo);
//       const eror = true;
//       if (!eror) {
//         resolve();
//       } else {
//         reject("Hata var..");
//       }
//     }, 3000);
//   });
// }

// newTodo({
//   title: "todo4",
//   description: "yeni görev",
// })
//   .then((response) => {
//     todoList();
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//   const p1 = Promise.resolve("P1");
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("ben 2. promisim");
//     }, 2000);
//   });
//   const p3 = 123112424;

//   Promise.all([p1, p2, p3]).then((promises) => {
//     console.log(promises);
//   });
// const basarili = Promise.resolve(42);
// console.log(basarili);
// const basarisiz = Promise.reject('Tüh ya');
// console.log(basarisiz);


// const sozVerdik = new Promise(function(resolve, reject){
//     if (herseyYolunda) {
//       resolve('İşlem tamam!');
//     } else {
//       reject('Bir sıkıntı var...');
//     }
//   })
  
//   sozVerdik.then(function(cevap){
//     console.log(cevap) // 'İşlem tamam!' yazısını basar
//   }).catch(function(hata){
//     console.log(hata) // 'Bir sıkıntı var...' yazısını basar
//   })

// const loginOlduMu = true;

// const promise_1 = () => {
//   const result = new Promise((resolve, reject) => {
//     if (loginOlduMu) {
//       resolve("login basarili");
//     } else {
//       reject("login BASARISIZ");
//     }
//   });
//   return result;
// };

// const makalesiVarMi = false;

// const promise_2 = () => {
//   const result = new Promise((resolve, reject) => {
//     if (makalesiVarMi) {
//       resolve("makaleler yüklendi");
//     } else {
//       reject("makalesi yok");
//     }
//   });
//   return result;
// };

// // promislerin calistirilmasi
// // senkron calistirilmasi
// // siraya sokulmasi

// promise_1()
//   .then((sonuc) => {
//     console.log(sonuc);
//     promise_2()
//       .then((makaleSonucu) => {
//         console.log(makaleSonucu);
//       })
//       .catch((makaleHata) => {
//         console.error(makaleHata);
//       });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const Montag1 = true;

const Promise_1 = () => {
    const result = new Promise((resolve, reject) => {
        if (Montag) {
            resolve("Aylik Kamp var")
        } else {
            reject("Aylik kamp yok")
        }
    })
    return result
}

Promise_1()
.then((sonuc)=>{
    console.log(sonuc);
}).catch((sonuc0) =>{
    console.error(kampvar)
})