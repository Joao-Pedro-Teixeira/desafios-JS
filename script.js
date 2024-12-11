//EX1
let preco = 100;
let desconto = 20;
let precoComDesconto = preco - (preco * (desconto / 100));
console.log(precoComDesconto); 

//EX2
let nome = "João";
let sobrenome = "Silva";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto); 

//EX3
let numerosArray = [1, 2, 3, 4, 5];  
for (let i = 0; i < numerosArray.length; i++) {
    console.log(numerosArray[i]);
}

//EX4
let frutas = ['maçã', 'banana', 'laranja'];
frutas.push('uva');
console.log(frutas); 

//EX5
let pessoa = {
    nome: "Maria",
    idade: 30,
    cidade: "São Paulo"
};
console.log(pessoa.nome);  
console.log(pessoa.idade); 

//EX6
pessoa.email = "maria@example.com";
console.log(pessoa); 

//EX7
let numerosMap = [1, 2, 3, 4, 5];  
let dobrado = numerosMap.map(num => num * 2);
console.log(dobrado); 

//EX8
let idades = [15, 22, 18, 30, 12];
let maioresQue18 = idades.filter(idade => idade > 18);
console.log(maioresQue18); 

//EX9
let cores = ['vermelho', 'verde', 'azul'];
cores.forEach(cor => {
    console.log(cor); 
});

//EX10
let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    especificacoes: {
        ano: 2020,
        cor: 'preto'
    }
};
console.log(carro.especificacoes.cor); 

//EX11
let usuario = { nome: 'João', idade: 30 };
let { nome: nomeUsuario, idade: idadeUsuario } = usuario;  
console.log(nomeUsuario, idadeUsuario);

//EX12
let animais = ['cachorro', 'gato', 'pássaro', 'gato'];
let countGatos = animais.filter(animal => animal === 'gato').length;
console.log(countGatos);
//EX13
let nota = 8;
let resultado = nota >= 7 ? "Aprovado" : "Reprovado";
console.log(resultado); 

//EX14
let texto = "Olá, mundo!";
let textoMinusculo = texto.toLowerCase();
console.log(textoMinusculo); 

//EX15
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arrayUnido = [...array1, ...array2];
console.log(arrayUnido); 

//EX16
let numerosShift = [10, 20, 30, 40]; 
numerosShift.shift();
console.log(numerosShift); 

//EX17
let Produto = { nome: 'Notebook', preco: 2500 };
if (Produto.hasOwnProperty('preco')) {
    console.log('A propriedade "preco" existe.');
} else {
    console.log('A propriedade "preco" não existe.');
}

//EX18
let numerosSoma = [10, 20, 30, 40, 50];  
let soma = 0;
for (let i = 0; i < numerosSoma.length; i++) {
    soma += numerosSoma[i];
}
console.log(soma); 

//EX19
let usuarioCopia = { nome: 'Maria', idade: 25 };
let copiaUsuario = Object.assign({}, usuarioCopia);
copiaUsuario.cidade = 'Rio de Janeiro';
console.log(usuarioCopia); 
console.log(copiaUsuario); 

//EX20
let numerosReduce = [1, 2, 3, 4];  
let produto = numerosReduce.reduce((total, num) => total * num, 1);
console.log(produto); 

