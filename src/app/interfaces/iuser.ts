import { IEstudio } from "./iestudio";
import { ITrabajo } from "./itrabajo";

export interface IUser {
    dni: string,
    edad: number,
    estudios: Array<IEstudio>,
    fecha_nac: string,
    idusuario: number,
    lastname: string,
    nacionalidad: string,
    name: string,
    sobre_mi: string,
    trabajos: Array<ITrabajo>
}
