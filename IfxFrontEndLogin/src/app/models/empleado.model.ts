interface IEmpleado{
    id:string;
    nombres:string;
    apellidos:string;
    celular:string;
    email:string;
    entidadId:string;
    entidad:string;
}

export class EmpleadoModel implements IEmpleado{
    id:string;
    nombres:string;
    apellidos:string;
    celular:string;
    email:string;
    entidadId:string;
    entidad:string;
}