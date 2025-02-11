import * as leitor from 'readline-sync';

console.log("Digite a data e horário de início do evento:");
const diaInicio: number = Number(leitor.question("Dia: "));
const horaInicio: string = leitor.question("Hora de início (hh:mm:ss): ");

console.log("Digite a data e horário de término do evento:");
const diaTermino: number = Number(leitor.question("Dia: "));
const horaTermino: string = leitor.question("Hora de término (hh:mm:ss): ");

// Convertendo as horas, minutos e segundos de início e término em segundos
const inicioSegundos: number = calcularSegundos(horaInicio);
const terminoSegundos: number = calcularSegundos(horaTermino);

// Calculando a diferença em segundos entre o horário de término e o de início
const duracaoSegundos: number = terminoSegundos - inicioSegundos;

// Calculando a duração do evento em dias, horas, minutos e segundos
const duracaoDias: number = Math.floor(duracaoSegundos / (24 * 3600));
const duracaoHoras: number = Math.floor((duracaoSegundos % (24 * 3600)) / 3600);
const duracaoMinutos: number = Math.floor((duracaoSegundos % 3600) / 60);
const duracaoSegundosRestantes: number = duracaoSegundos % 60;

// Imprimindo a duração do evento
console.log("Duração do evento:", duracaoDias, "dias,", duracaoHoras, "horas,", duracaoMinutos, "minutos e", duracaoSegundosRestantes, "segundos");

// Função para converter uma string de horário (hh:mm:ss) em segundos
function calcularSegundos(horario: string): number {
  const partesHorario: string[] = horario.split(":");
  const horas: number = Number(partesHorario[0]);
  const minutos: number = Number(partesHorario[1]);
  const segundos: number = Number(partesHorario[2]);
  return horas * 3600 + minutos * 60 + segundos;
}