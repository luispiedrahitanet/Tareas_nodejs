// const { prototype } = require('events')
// require('colors')

const mostrarMenu = ()=>{

    return new Promise(resolve => {
    
        console.log('=========================='.green)
        console.log('  SELECCIONE UNA OPCION'.green)
        console.log('==========================\n'.green)
    
        console.log(` ${ '1.'.green } Crear tarea`)
        console.log(` ${ '2.'.green } Listar tareas`)
        console.log(` ${ '3.'.green } Listar tareas completadas`)
        console.log(` ${ '4.'.green } Listar tareas pendientes`)
        console.log(` ${ '5.'.green } Completar tarea(s)`)
        console.log(` ${ '6.'.green } Borrar tarea`)
        console.log(` ${ '0.'.green } Salir\n`)
    
        //==== Creamos el Objeto interfaz de usuario para pedirle informacion
        const readline = require('readline').createInterface({      // libreria 'readline' viene por defecto en nodejs
            input: process.stdin,       // indica que debe esperar a que se ingrese informacion
            output: process.stdout    // para mostrar mensaje en la consola para pedir algo al usuario
        })
    
        //==== utilizamos el Objeto interfaz
        // Pedir información al usuario
        readline.question('Seleccione una opción: ',(opt)=>{    // ('mensaje','callback')
            readline.close()    // cierra el objeto 'readline' para que no se quede esperando mas información del usuario
            resolve(opt)
        })
            
    })

}


const pausa = ()=>{

    return new Promise(resolve => {
        
        //==== Creamos el Objeto interfaz de usuario para pedirle informacion
        const readline = require('readline').createInterface({      // libreria 'readline' viene por defecto en nodejs
            input: process.stdin,       // indica que debe esperar a que se ingrese informacion
            output: process.stdout    // para mostrar mensaje en la consola para pedir algo al usuario
        })

        //==== utilizamos el Objeto interfaz
        // Pedir información al usuario
        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`,(opt)=>{    // ('mensaje','callback')
            readline.close()    // cierra el objeto 'readline' para que no se quede esperando mas información del usuario
            resolve()
        })
       
    })
 
}

module.exports = {
    mostrarMenu,
    pausa
}