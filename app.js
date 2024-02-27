// const boyi = Number(prompt("Bo'yingizni kiriting : (sm)"))
// const vazn = Number(prompt("Vazningizni kiriting : (kg)"))

// const BMI = vazn / (boyi / 100) ** 2;

// if (BMI <= 18.5) {
//     console.log("Sizning vazningiz juda yengil . Iltimos vazn olishga harakat qiling !")
// } else if (BMI > 18.5 && BMI <= 24.9) {
//     console.log("Siz so'glomsiz !")
// }  else if (BMI > 24.9 && BMI <= 29.9) {
//     console.log("Sizda ortiqcha vazn bor . Iltimos sport bilan shug'ullaning !")
// } else {
//     console.log("Sizda semizlik kasalligi bor . Iltimos mutahasisga ko'rining !")
// }

////////////////////////////////////////////////////////////////////////////////

// const arr = ["Ahad", "Ahmad", "Ali", "Arslon"];

// arr.pop = "Alo";

// console.log(arr);

//////////////////////////////////////////

// let arr = [1, 2, 3];

// alert( arr ); // 1,2,3
// alert( String(arr) === '1,2,3' ); // true

//////////////////////////////////////////

// const numbers = [1,2,3,4,5]

// const result = Array.isArray(numbers)

// console.log(result)

////////////////////////////////////////////

// let numbers = [1, 2, 3, 4, 5];

// let reversedArray = numbers.reverse();

// console.log(reversedArray);

// // Output: [ 5, 4, 3, 2, 1 ]

//////////////////////////////////////////

// let languages = ["JavaScript", "Python", "C++", "Java", "Lua"];
// let reversedArray = languages.reverse();

// console.log("Reversed Array: ", reversedArray);

// console.log("Original Array: ", languages);

/////////////////////////////////////////////

// let fruits = ['Apple', 'Banana', 'Grape'];

// fruits.fill("Cherry");

// console.log(fruits);

///////////////////////////////////////////

// let language = ["JavaScript", "Python", "C", "C++"];

// language.fill("JavaScript", 1, 3);

// console.log(language);

/////////////////////////////////////////
// let names = ["Saidakbar", "Abubakr", "Abror", "Samandar", "Muhammadbilol"];

// const newNames = [];

// for (i = 0; i < names.length; i++) {
//   let result = names[i];
//   newNames.push(result);
// }
// console.log(names);
// console.log(newNames);

////////////////////////////////////////

// const number = [1 , 3 , 8 , 4 , 6 , 20 , 4 , 7, 7 , 10];
// const newNumbers = []

// for (i = 0; i < number.length; i++) {
//   let result = number[i];
//   newNumbers.push(result);
// }

//////////////////////////////////////

// let ism = prompt("Ismongizni kiriting :");
// let yosh = +prompt("Yoshingizni kiriting :");

// let yil = 2024 - yosh;
// let oy = yosh * 12;
// let hafta = yosh * 54;
// let kun = yosh * 365;
// let soat = kun * 24;
// let minut = soat * 60;
// let sekund = minut * 60;

// alert(
//   `${ism} Siz ${yil} yilda tug'ulgansiz . Va siz ${
//     oy
//   } oy , ${hafta} hafta , ${kun} kun , ${soat} soat , ${
//     minut
//   } daqiqa , ${sekund} soniya yashagansiz !`
// );

///////////////////////////////////////////////

// let kimKerak = prompt("Siz kimni izlayapsiz ?");

// const ismlar = ["Salim", "Said", "Ilhom"];

// if (ismlar.includes(kimKerak)) {
//   alert(`Ha bizda ${kimKerak} bor`);
// } else {
//   alert(`Bizda ${kimKerak} ismli inson yo'q`);
// }

/////////////////////////////////////////////

// const ismlar = ["Salim", "Said", "Ilhom"];

// for (let i = 0 ; i < ismlar.length ; i++){
//   result = ismlar[i] + "bek" ;
//   alert(result)
// }

/////////////////////////////////////////////

// const viloyatNomi = prompt("Qaysi viloyat kerak");

// switch (viloyatNomi) {
//   case "Namangan":
//     alert("Siz so'ragan viloyatda 3 066 100 nafar odam yashaydi");
//     break;
//   case "Andijon":
//     alert("Siz so'ragan viloyatda 3 705 000 nafar odam yashaydi");
//     break;
//   case "Farg'ona":
//     alert("Siz so'ragan viloyatda 3 162 340 nafar odam yashaydi");
//     break;
//   case "Toshkent":
//     alert("Siz so'ragan viloyatda 7 820 110 nafar odam yashaydi");
//     break;
//   case "Jizzax":
//     alert("Siz so'ragan viloyatda 2 041 000 nafar odam yashaydi");
//     break;
//   case "Sirdaryo":
//     alert("Siz so'ragan viloyatda 1 700 192 nafar odam yashaydi");
//     break;
//   case "Samarqand":
//     alert("Siz so'ragan viloyatda 3 005 926 nafar odam yashaydi");
//     break;
//   case "Buhoro":
//     alert("Siz so'ragan viloyatda 2 896 640 nafar odam yashaydi");
//     break;
//   case "Qashqadaryo":
//     alert("Siz so'ragan viloyatda 2 106 090 nafar odam yashaydi");
//     break;
//   case "Surhondaryo":
//     alert("Siz so'ragan viloyatda 2 009 800 nafar odam yashaydi");
//     break;
//   case "Navoyi":
//     alert("Siz so'ragan viloyatda 1 030 000 nafar odam yashaydi");
//     break;
//   case "Xorazm":
//     alert("Siz so'ragan viloyatda 3 490 970 nafar odam yashaydi");
//     break;
//   case "Nukus":
//     alert("Siz so'ragan viloyatda 4 876 689 nafar odam yashaydi");
//     break;
//   default:
//     alert("Bunday viloyat topilmadi ");
// }

/////////////////////////////////////////////

const login = prompt("20 ta elementdan iborat login yarating :");

if (login.length < 20) {
  alert(
    `Siz ${login.length} ta element kiritdingiz . yana ${
      20 - login.length
    } ta element kiriting !`
  );
} else if (login.length > 20) {
  alert(
    `Siz ${login.length} ta element kiritdingiz . ${
      login.length - 20
    } ta element olib tashlang !`
  );
} else {
  alert(`Login to'g'ri kiritildi !`);
}

/////////////////////////////////////////////