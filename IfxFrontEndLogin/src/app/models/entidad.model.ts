import { EmpleadoModel } from './empleado.model';


interface IEntidad{

    id:string;
    razonSocial:string;
    empleados: EmpleadoModel[];
    telefono: string;
}

export class EntidadModel implements IEntidad{
    id:string;
    razonSocial:string;
    empleados: EmpleadoModel[];
    telefono: string;
}