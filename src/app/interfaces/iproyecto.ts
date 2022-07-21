import { IUser } from "./iuser";

export interface IProyecto {
    id: Number;
    name: string;
    descrption: string;
    foto_portada: string;
    foto_uno: string;
    foto_dos: string;
    url: string;
    git_hub: string;
    usuario: IUser
}
