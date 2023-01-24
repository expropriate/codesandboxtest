/**
 * const,let
 */
// var val = "value";
// console.log(val);

// // var変数は上書き可能
// val = "value2";
// console.log(val);

// // var変数は再宣言可能
// var val = "value3";
// console.log(val);

// let val2 = "let";
// console.log(val2);

// val2 = "let2";
// console.log(val2);

// let val2 = "let";
// console.log(val2);

// const val3 = "const";
// console.log(val3);

// // val3 = "const2";

// const val3 = "const23";

// constで定義したobjectはプロパティの変更が可能
// const val4 = {
//   name: "aaa",
//   age: 22
// };
// val4.name = "bbbb";
// val4.address = "hh";
// console.log(val4);
//
// const val5 = ["aaa", "bbb"];
// val5[0] = "ccc";
// val5.push("ddd");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "aaaa";
// const age = 26;
// // 私の名前はaaaaです。年齢は26歳です。
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}歳です!`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来
// function func1(str) {
//   return str;
// }
// const func2 = function (str) {
//   return str;
// };
// console.log(func1("AAAAA"));

// // アロー関数
// const func3 = (str) => str;
// console.log(func3("BBBBBB"));

// const func4 = (num1, num2) => num1 + num2;
// console.log(func4(22, 33));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "aaa",
//   age: 26
// };
// const message = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です.`;
// console.log(message);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です!`;
// console.log(message2);

// const myPro = ["aaaaa", 26];
// const message = `私の名前は${myPro[0]}です。年齢は${myPro[1]}歳です!`;
// console.log(message);
// const [name, age] = myPro;
// const message2 = `私の名前は${name}です。年齢は${age}歳です.`;
// console.log(message2);

/**
 * デフォルト値
 */
// const sayHello = (name = "watasi") => console.log(`Hello! ${name}さん！`);
// sayHello();
// sayHello("omae");

/**
 * スプレッド構文
 */
// 配列の展開

// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const func4 = (num1, num2) => console.log(num1 + num2);
// func4(arr1[0], arr1[1]);
// func4(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const arr3 = [...arr1];
// console.log(arr3);

// const arr4 = [...arr1, ...arr2];
// console.log(arr4);

/**
 * mapやfilter
 */

// const nameArr = ["aa", "bb", "cc"];
// // for (let i = 0; i < nameArr.length; i++) {
// //   console.log(nameArr[i]);
// // }

// // const nameArr1 = nameArr.map((name) => {
// //   return name;
// // });
// // console.log(nameArr1);

// //nameArr.map((name, index) => console.log(name + index));

// // const numArr = [1,2,3,4,5];
// // const oddNumArr = numArr.filter((num)=>{
// //   return num % 2 === 1 ;
// // })
// // console.log(oddNumArr);

// const nameArrCustom = nameArr.map((name) => {
//   if (name === "cc") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(nameArrCustom);

/**
 * 参考演算子
 */
// 条件 ? trueの場合 : falseの場合
// const val = 1 > 0 ? "truedesu" : "falsedesu";
// console.log(val);

// const num = 1300;
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値で入力";
// console.log(formattedNum);

// const chkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100OVER" : "100UNDER";
// };
// console.log(chkSum(50));

/**
 * 論理演算し
 */
