import { provedores } from "../database/db.js"
import { v4 as uuidv4 } from 'uuid';


class ProvedoresController {
    mostrarTodos(){
        return({
            data : provedores.length === 0 ? null : provedores ,
            message : provedores.length === 0 ? "No se encontraron Resultados" : "lista De provedores mostrada exitosamente"
        })
    }
    mostrarUno(idprovedor){
        const provedorSeleccionado = provedores.filter(provedores => provedores.id === idprovedor)
    return({
        data : provedorSeleccionado.length === 0 ? null : provedorSeleccionado ,
        message : provedorSeleccionado.length === 0 ? "Provedor no encontrado" : "Provedor listado con exito"
    })
        }
    crearUno(nuevoProvedor){
        if (!nuevoProvedor.nombre || !nuevoProvedor.ubicacion) {
            return({
                data : null ,
                message : "Faltan datos indispensables"

            })
            
        }
        const AgregarProvedor = {
            id : uuidv4(),
            nombre : nuevoProvedor.nombre,
            ubicacion : nuevoProvedor.ubicacion,
        }
        provedores.push(AgregarProvedor)
        return ({
            data :{ 
                nuevoProvedor,
                provedores

        }
        })
    }
    editarUno(nuevoProvedor,idprovedor){
        for (let i = 0; i < provedores.length; i++) {
            if(provedores[i].id === idprovedor){
                provedores[i].nombre = !nuevoProvedor.nombre ? provedores[i].nombre : nuevoProvedor.nombre,
                provedores[i].ubicacion = !nuevoProvedor.ubicacion ? provedores[i].ubicacion : nuevoProvedor.ubicacion;
                return ({
                    data : {
                        provedoresActualizado : provedores[i],
                        provedores
                    },
                     message : "provedor actualizado con exito"
                })
            }
            
        }
        return({
            data : null ,
            message : "Provedor No Encontrado "
        })
    }
   eliminarUno(idprovedor){
    for (let i = 0; i < provedores.length; i++) {
         if(provedores[i].id === idprovedor){
                provedores.splice(i,1);
                return ({
                    data : {
                        provedores
                    },
                     message : "provedor eliminado con exito"
                })
            }
            
        }
        return({
            data : null ,
            message : "Provedor No Encontrado "
            
       
        
    })
   }
    }


const provedorescontroller = new ProvedoresController
export default provedorescontroller ;