import { IEstudio } from "./iestudio";

export interface IInstitucion {
    id: number,
    name: string,
    estudios: Array<IEstudio>,
    id_localidad: number
}
