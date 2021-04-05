import { Usuario } from "./usuario";

export class UsuariosLista{

    private lista: Usuario[]= [];

    constructor(){}

    /* Agregar Usuario */
    public agregar(usuario:Usuario){

        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;

        
    }

    public actualizarNombre(id:string, nombre:string){

        for(let usuario of this.lista){
            if(usuario.id === id){
                usuario.nombre=nombre;
                break;
            }
        }

        console.log('====Actualizando Usuario=====');
        console.log(this.lista);
        
        
    }

    //Obtener lista de usuario
    public getLista(){
        return this.lista.filter(usuario => usuario.nombre !== 'sin nombre');
    }

    //Obtener un solo usuario de la lista
    
    public getUsuario(id:string){
        return this.lista.find(usuario =>{
            return usuario.id === id;
        });
    }

    //Obtener usuario en una sala en particular
    public getUsuariosEnSala (sala:string){
        return this.lista.filter(usuario =>{
            return usuario.sala === sala;
        });
    }

    //Borrar el usuario -> cuando deja el chat
    public borrarUsuario(id:string){

        const tempUsuario= this.getUsuario(id);

        this.lista= this.lista.filter(usuario=>{
            return usuario.id !== id;
        });

        return tempUsuario;
    }
}
