// function adyaz(ad) {
//     setTimeout(() => {
//         console.log(ad);
//         ad()
//     }, 2000);
// }
// // adyaz("ramazan")

// function sonuc(gsfb) {
//     setTimeout(() => {
//         console.log(gsfb);
//     }, 3000);
// }
// // sonuc("0-0")

// // sonuc(adyaz)

// function loginOl(ikinciIslem) {
//   setTimeout(() => {
//     console.log("login başarılı..");
    
//   }, 2000);
// }
// function listele() {
//   setTimeout(() => {
//     console.log("ilanlar listelendi..");
// //     ikinciIslem();
// //   }, 1000);
// // }

// // // loginOl(listele);
// // listele(loginOl)

// function adYaz(ad, callback) {
//   setTimeout(() => {
//     console.log(ad);
//     callback();
//   }, 2000);
// }

// function soyadYaz(soyad) {
//   setTimeout(() => {
//     console.log(soyad);
//   }, 1000);
// }

// adYaz("İbrahim", soyadYaz);


const ikinci = (next) => {
    setTimeout(() => {
      console.log("ikinci");
      // .....
      next();
    }, 0);
  };
  
  const ucuncu = () => {
    const mesaj = () => console.log("ucuncu");
  
    setTimeout(mesaj, 1000);
  };
  
  ikinci(ucuncu);