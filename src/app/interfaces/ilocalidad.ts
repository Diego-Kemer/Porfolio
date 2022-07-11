import { IInstitucion } from "./iinstitucion";
import { IProvincia } from "./iprovincia";

export interface ILocalidad {
    id: number,
    name: string,
    provincia: IProvincia
}
