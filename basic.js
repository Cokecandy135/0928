//1. 변수는 앞에 타입에 대한 구분없이 var 로 선언한다
//2. 문장의 끝은 항상 ; (세미콜론)으로 끝낸다
let name;

//3. = 을 사용해서 변수에 값을 입력하는데 문자열 입력시에는 앞뒤로 '(외따옴표) 또는 "(쌍따옴표)를 붙혀준다
name = '홍길동'; 
console.log('name:', name);

//4. 문자나 숫자 및 타입에 관계없이 변수는 var 로 선언한다
let num1;
num1 = 21;

//5. 변수의 선언과 동시에 값을 입력할 수 있다
let num2 = 3;

//6. 두 개의 변수를 더해서 다른 변수에 입력할 수 있다
let sum = num1 + num2;

//7. 숫자와 문자를 더할 경우 결과값은 문자가 된다. 아래 연산결과로 sum2 에는 "홍길동21"이 sum3에는 "이순신3"이 입력된다
let sum2 = name + num1;
let sum3 = '이순신' + 3;

console.log('sum:', sum);
console.log('sum2:', sum2);
console.log('sum3:', sum3);




