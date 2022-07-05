import { IInstitucion } from "./iinstitucion";

export interface ILocalidad {
    name: string,
    id_provincia: number,
    instituciones: Array<IInstitucion>
}
