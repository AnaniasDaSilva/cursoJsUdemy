/*Luiz Otávio Miranda tem 30 anos , pesa 84 kg tem 1.8 de altura e seu IMC é 25.925925925925924*/
const nome = 'nany';
const sobrenome = 'Silva';
const idade = 53;
const peso = 93;
const alturaEmM= 1.80;
let imc; //peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal= peso/(alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

//template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}  kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);


