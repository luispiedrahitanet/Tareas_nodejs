const { guardarDB, leerDB } = require('./helpers/guradarArchivo')
const {
    inquirerMenu, 
    pausa, 
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require('./helpers/inquirer')
const Tareas = require('./models/tareas')
require('colors')


// funcion principal
const main = async()=>{
    
    let opt = ''
    const tareas = new Tareas()     // instancia para crear nuevas tareas
    
    const tareasDB = leerDB()     //Leyendo las tareas guardadas en el archivo json
    
    if( tareasDB ){
        // TODO. Cargar tareas
        tareas.cargarTareasAlArray( tareasDB )
    }

    do {
        // imprime el menú
        opt = await inquirerMenu()

        switch (opt) {
            case '1':   // Crear tarea
                const desc = await leerInput('Descripcion:')
                tareas.crearTarea( desc )
                break;
        
            case '2':   // Listar tareas
                tareas.listadoCompleto()
                break;
            case '3':   // Listar tareas completados
                tareas.listarPendientesCompletadas()
                break;
            case '4':   // Listar tareas pendientes
                tareas.listarPendientesCompletadas(false)
                break;
            case '5':   // Completadas | Pendientes
                const ids = await mostrarListadoChecklist( tareas.listadoArr )
                tareas.cambiarCompletadas( ids )
                break;
            
            case '6':   // Borrar
                const id = await listadoTareasBorrar( tareas.listadoArr )
                if( id !== '0' ){
                    const ok = await confirmar('¿Estás seguro de eliminar esta tarea?')
                    if( ok ){
                        tareas.borrarTarea( id )
                        console.log( '===> Tarea borrada exitosamente <===' )
                    }
                }
                break;
    }


        guardarDB(tareas.listadoArr)

        await pausa()
        
    } while ( opt !== '0' );

}

main()