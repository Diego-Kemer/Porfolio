import { IEstudio } from "./iestudio";
import { ILocalidad } from "./ilocalidad";

export interface IInstitucion {
    id: number,
    name: string,
    localidad: ILocalidad
}
