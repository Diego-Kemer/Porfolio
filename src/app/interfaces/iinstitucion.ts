import { IEstudio } from "./iestudio";

export interface IInstitucion {
    name: string,
    estudios: Array<IEstudio>,
    id_localidad: number
}
