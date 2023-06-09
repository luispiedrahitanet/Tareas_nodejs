const Tarea = require('./tarea')
/**
 * _listado:
 *   { uuid.123712-123123-2: { id:12, desc:asdf, completadoEn:92132} },
 *   { uuid.123712-123123-2: { id:12, desc:asdf, completadoEn:92132} },
 *   { uuid.123712-123123-2: { id:12, desc:asdf, completadoEn:92132} }
 */

class Tareas{
   
    constructor(){
        this._listado = {}
    }

    // retorna el listado de tareas en formato de array
    get listadoArr(){
        
        const listado = []

        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key]
            listado.push( tarea )
        })

        return listado
    }

    borrarTarea( id = '' ){
        
        if( this._listado[id] ){
            delete this._listado[id]
        }

    }

    cargarTareasAlArray( tareas = [] ){
        tareas.forEach( (tarea)=>{
            this._listado[tarea.id] = tarea
        })
    }


    listadoCompleto(){
        console.log()
       this.listadoArr.forEach( (tarea, indice)=>{
            const idx = `${indice + 1}`.green
            const {descripcion, completadoEn} = tarea
            const estado = completadoEn ? 'Completado'.green : 'Pendiente'.red
            console.log( `${idx} ${descripcion} :: ${estado} ` )
       }) 
    }


    listarPendientesCompletadas( completadas = true ){
        console.log()
        let contador = 0
        this.listadoArr.forEach( tarea =>{

            const {descripcion, completadoEn} = tarea
            const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red

            if(completadas){
                if( completadoEn ){     // Mostrar Completados
                    contador += 1
                    console.log( `${(contador + '.').green} ${descripcion} :: ${estado} :: ${completadoEn.green}` )
                }
            } else {
                if( !completadoEn ){    // Mostrar Pendientes
                    contador += 1
                    console.log( `${(contador + '.').green} ${descripcion} :: ${estado}` )
                }
            }
            
        })
    }

    
    crearTarea( desc = '' ){

        const tarea = new Tarea( desc )
    
        this._listado[tarea.id] = tarea
    }

    
    cambiarCompletadas( ids = [] ){

        ids.forEach( id => {
            const tarea = this._listado[id]
            if( !tarea.completadoEn ){
                tarea.completadoEn = new Date().toISOString()
            }
        });

        this.listadoArr.forEach( tarea => {
            if( !ids.includes(tarea.id) ) this._listado[tarea.id].completadoEn = null
        })

    }

}

module.exports = Tareas