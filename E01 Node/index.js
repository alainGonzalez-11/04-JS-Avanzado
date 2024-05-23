// Ejemplo de funcion ejecutada con Node

function cuentaHastaCien(){
    const limite = 100;
    for (let index = 1; index <= limite; index++) {
        if (index%3 == 0 && index%5 == 0) {
            console.log(index + ' FizzBuzz')
        }
        else if (index%3 == 0) {
            console.log(index + ' Fizz')
        }
        else if (index%5 == 0) {
            console.log(index + ' Buzz')
        }
        else{
            console.log(index)

        }
        
    }
}

function evaluaDiasSemana() {
    const prompt = require('prompt-sync')({sigint: true});
    let dia = prompt('Ingresa un dia de la semana');
    console.l
    switch (dia.toLowerCase()) {
      case "lunes":
        console.log("Feliz inicio de semana");
        break;
      case "viernes":
        console.log("Ya se acabó la semana");
        break;
      case "sábado":
      case "sabado":
      case "domingo":
        console.log("Disfruta tu fin de semana");
        break;
      case "martes":
      case "miercoles":
      case "miércoles":
      case "jueves":
        console.log("Otro día, otro dolar");
        break;
      default:
        console.log("No ingresaste un día de la semana");
        break;
    }
  }

  function evaluaCalificaciones() {
    const prompt = require('prompt-sync')({sigint: true});
    let calificacion = prompt('Ingresa tu calificacion');
    if (/^\d+$/.test(calificacion)) {
      switch (parseInt(calificacion)) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          console.log("Reprobado");
          break;
        case 6:
        case 7:
        case 8:
          console.log("Regular");
          break;
        case 9:
          console.log("Bien");
          break;
        case 10:
          console.log("Excelente");
          break;
        default:
          console.log("El número está fuera de rango");
          evaluaCalificaciones();
      }
    } else {
      console.log("Valor no válido");
      evaluaCalificaciones();
    }
  }

cuentaHastaCien();

evaluaDiasSemana();
evaluaCalificaciones();
