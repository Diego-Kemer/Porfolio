import { ILocalidad } from "./ilocalidad";

export interface IProvincia {
    id: number,
    name: string,
    localidades: Array<ILocalidad>
}
