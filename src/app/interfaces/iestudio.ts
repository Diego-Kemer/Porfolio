import { IInstitucion } from "./iinstitucion";
import { IUser } from "./iuser";

export interface IEstudio {
    id: number,
    titulo: string,
    fecha_inicio: any,
    fecha_fin: any,
    modalidad: string,
    institucion: IInstitucion,
    usuario: IUser
}
