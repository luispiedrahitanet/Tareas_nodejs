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
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completa tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]

const inquirerMenu = async()=>{
    
    console.clear()
    console.log('=========================='.green)
    console.log('  SELECCIONE UNA OPCION'.green)
    console.log('==========================\n'.green)
 
    const { opcion } = await inquirer.prompt(preguntas)     // desestructuramos el objeto 'opción', que devuelve la opción seleccionada

    return opcion
}


const pausa = async()=>{
    const pregunta = [
        {
            type: 'input',
            name: 'enter',
            message: `De ${'ENTER'.green} para continuar \n`
        }
    ]

    await inquirer.prompt(pregunta)

}


module.exports = {
    inquirerMenu,
    pausa
}