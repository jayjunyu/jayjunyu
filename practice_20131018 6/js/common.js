var test = 0;
var message = 'Hello';

console.log(test,message)

//123
var num = 0;
num = 1 + 1;
num +=2;//num = num + 2;
num -=2;//num = num - 2;
num *=2;//num = num * 2;
num /=2;//num = num / 2;
console.log(num);

console.log(10 % 3)

var num2 = 'test' + 10 +'%';
console.log(num2)

var num3 = 0;
num3++; // num3 +=1
++num3;
num3++;
num3++;
num3++;
num3--; // num3 -= 1;
--num3;
console.log(num3)

var boo1 = true;
console.log(boo1)
//typeof 型を調べる
console.log(typeof boo1)
console.log(typeof num)
console.log(typeof message)
var num4 = '10'
console.log(num4 +10)//文字列と数字の計算はしてくれない
//文字列を数値に変換したい場合
console.log(parseInt(num4) + 10)

//比較演算子
var a = 100;
var b = 50;
var c = 50;

console.log(a === b);
console.log(a !==b);
console.log(c > b);
console.log(c < b);
console.log(c >= b);
console.log(c <= b);

//論理演算子
console.log(a > b && b === c)
console.log(a > b || b !==c)

console.log(ture && ture)//左と右どっちも正しければture
console.log(ture || false)//片方でも正しければture

var boo12 = !(a ===b);
console.log(boo12)


