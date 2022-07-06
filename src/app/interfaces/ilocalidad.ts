import { IInstitucion } from "./iinstitucion";

export interface ILocalidad {
    id: number,
    name: string,
    instituciones: Array<IInstitucion>
}
