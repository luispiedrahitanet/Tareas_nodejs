const inquirer = require('inquirer')
require('colors')

const preguntas = [
    {
        type: 'list',
        name: 'opcion',     // nombre del objeto que devuelve el menú
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completa tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            }
        ]
    }
]

const inquirerMenu = async()=>{
    
    console.clear()
    console.log('=========================='.green)
    console.log('  SELECCIONE UNA OPCION'.white)
    console.log('==========================\n'.green)
 
    const { opcion } = await inquirer.prompt(preguntas)     // desestructuramos el objeto 'opción', que devuelve la opción seleccionada

    return opcion
}


const pausa = async()=>{
    const pregunta = [
        {
            type: 'input',
            name: 'enter',
            message: `\nDe ${'ENTER'.green} para continuar \n`
        }
    ]

    await inquirer.prompt(pregunta)

}


const leerInput = async( message ) => {
    const question = {
        type: 'input',
        name: 'desc',
        message,
        validate( value ){
            if( value.length === 0 ){
                return 'Por favor ingrese un valor'
            }
            return true
        }
    }

    const { desc } = await inquirer.prompt(question)
    return desc

}

const listadoTareasBorrar = async( tareas = [] )=>{

    const choices = tareas.map( (tarea, indice) => {
        const idx = `${indice + 1}.`.green

        return{
            value: tarea.id,
            name: `${idx} ${tarea.descripcion}`
        }
    })

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    })
    
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt( preguntas )

    return id
}

const confirmar = async ( mensaje ) => {
    
    const pregunta = [
        {
            type: 'confirm',
            name: 'ok',
            message: mensaje
        }
    ]

    const { ok } = await inquirer.prompt( pregunta )
    return ok
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar
}