import { Etablissement } from "./etablissement";

export class Bienfait {
    _id!:String;
    name!:String;
    description!:String;
    image!:String;
    etablissement= new Etablissement();
}
