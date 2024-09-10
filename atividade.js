
/*
const idadeMinima = 24;
const experienciaMinima = 3;
const certificado = "certificado";

var idade = 23;
var anosExperiencia = 2;
var certification = "certificado";

// Verifica idade
var exp1 = idade < idadeMinima ? "desclassificado" : "verificado";
console.log(exp1);

// Verifica experiência
var exp2 = anosExperiencia < experienciaMinima ? "desclassificado" : "verificado";
console.log(exp2);

// Verifica certificado
var exp3 = certification === certificado ? "verificado" : "desclassificado";
console.log(exp3);

// Verifica se todos os critérios foram aprovados
console.log(
    exp1 === "verificado" && exp2 === "verificado" && exp3 === "verificado" ? "aprovado" : "eliminado"
);
*/

// Exemplo de verificação de elegibilidade para uma vaga de emprego

// Dados do candidato

var idade = 28;

var experienciaAnos = 5;

var nivelEducacao = "superior";

var possuiCertificado = true;

// Critérios de elegibilidade

var idadeMinima = 18;

var experienciaMinimaAnos = 3;

var nivelEducacaoMinimo = "superior";

var certificadoObrigatorio = true;

// Verificação de elegibilidade

var elegivel =

  idade >= idadeMinima &&

  experienciaAnos >= experienciaMinimaAnos &&

  (nivelEducacao === nivelEducacaoMinimo || possuiCertificado) &&

  (!certificadoObrigatorio || possuiCertificado);

// Saída do resultado

console.log("Elegível para a vaga? " + elegivel);





