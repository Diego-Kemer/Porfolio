import { IEstudio } from "./iestudio";
import { ITrabajo } from "./itrabajo";

export interface IUser {
    foto_portada: string,
    dni: string,
    edad: number,
    estudios: Array<IEstudio>,
    fecha_nac: Date,
    idusuario: number,
    lastname: string,
    nacionalidad: string,
    name: string,
    sobre_mi: string,
    trabajos: Array<ITrabajo>
}
