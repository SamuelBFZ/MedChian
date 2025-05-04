import { RegistroMedico } from "./RegistroMedico";
import { ResultadoDeExamen } from "./resultadoExamen";

export interface Usuario {
    nombre: string;
    cedula: string | number;
    telefono: string;
    registros_medicos: RegistroMedico[];
    resultados_de_examenes: ResultadoDeExamen[];
}