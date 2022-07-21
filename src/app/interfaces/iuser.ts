import { IEstudio } from "./iestudio";
import { IProyecto } from "./iproyecto";
import { ITrabajo } from "./itrabajo";

export interface IUser {
    foto_portada: string,
    dni: string,
    edad: number,
    fecha_nac: Date,
    idusuario: number,
    lastname: string,
    nacionalidad: string,
    name: string,
    sobre_mi: string,
    estudios: Array<IEstudio>,
    trabajos: Array<ITrabajo>,
    proyectos: Array<IProyecto>
}
