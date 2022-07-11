import { IInstitucion } from "./iinstitucion";
import { IModalidad } from "./imodalidad";

export interface IEstudio {
    id: number,
    titulo: string,
    fecha_inicio: any,
    fecha_fin: any,
    modalidad: IModalidad,
    institucion: IInstitucion
}
