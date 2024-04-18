const currentDate = new Date() // Obtém a data atual
const primeiroDiaDoMes = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  1
) // Cria um objeto Date para o primeiro dia do mês atual

const diaSemanaPrimeiroDia = primeiroDiaDoMes.getDay() // Obtém o dia da semana do primeiro dia do mês (0 a 6)

let diaSemanaTexto: any

switch (diaSemanaPrimeiroDia) {
  case 0:
    diaSemanaTexto = 0
    break
  case 1:
    diaSemanaTexto = 1
    break
  case 2:
    diaSemanaTexto = 2
    break
  case 3:
    diaSemanaTexto = 3
    break
  case 4:
    diaSemanaTexto = 4
    break
  case 5:
    diaSemanaTexto = 5
    break
  case 6:
    diaSemanaTexto = 6
    break
  default:
    diaSemanaTexto = 7
}

export const FirstDayMonth = diaSemanaTexto