let holaMundo="que tal mundo cruel";
console.log(holaMundo);
let soltero:boolean = true; // false
let decimal:number=6;
let nombres: string= "Harold";
let notas:number[]=[1,2,3,4];
let jaladas:Array<number> = [1,2,3];
let nombre:any= "asd";
//nombre= 12;
let usuario:UsuarioLogin ={
    nombre:"harold",
    apellido:"flores",
    direccion:"mitad del mundo"
};
interface UsuarioLogin {
    nombre:string,
    apellido:string,
    direccion?:string
}

class persona {
    nombre:string="usu";
    private apellido:string="flores";
    fechaNacimiento: Date;
    constructor(nombre?:string,apellido?:string,fechaNacimiento?:Date){
     /*   this.nombre=nombre;
        this.apellido=apellido;
        this.fechaNacimiento= fechaNacimiento;*/}
     public imprimirPersona():UsuarioLogin{
         console.log(this.nombre,this.apellido);
         this.imprimirNombre("leslie","arias");
         return{
             nombre: this.nombre,
             apellido: this.apellido
         }
        }
    private imprimirNombre(nombre:string,apellido?:string):void{
        if(apellido){
            console.log(nombre,apellido)
        }
        else{
            console.log(nombre)
        }
    }

}
let harold:persona = new persona();
//harold.nombre="Harold";
//console.log(harold.nombre);
harold.imprimirPersona();

