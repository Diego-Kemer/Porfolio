import { ITrabajo } from "./itrabajo";

export interface ILenguaje {
    id: number,
    name: string,
    trabajos: Array<ITrabajo>
}
