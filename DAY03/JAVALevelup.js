let num = Number(prompt("정수를 입력해주세요: "));
let sec = num%60;
let totalmin = (num - sec)/60;
let min = totalmin %60;
let hour = (totalmin - min) / 60;
let 초= sec<10 ? `0${sec}` : `${sec}`;
let 분= min<10 ? `0${min}` : `${min}`;
let 시= hour<10 ? `0${hour}` : `${hour}`;
console.log(`${시}:${분}:${초}`);