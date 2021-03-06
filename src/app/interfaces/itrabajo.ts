import { ILenguaje } from "./ilenguaje";

export interface ITrabajo {
    id: number,
    fecha_inicio: string,
    fecha_fin: string,
    description: string,
    titulo: string,
    lenguajes: Array<ILenguaje>
}
