import { PointGeo } from './PointGeo';
/**
 * Classe Toilette
 */
export class Toilette {
    /**
     * Commune de la toilette
     */
    Commune: string;
    /**
     * Adresse de la toilette
     */
    Code_Postal: string;
    /**
     * Point géographique de la toilette
     */
    PointGeo: PointGeo;
    /**
     * Identifiant de la toilette
     */
    Id: string;
    /**
     * Longitude de la toilette
     */
    Longitude: string;
    /**
     * Horaires d'ouverture de la toilette
     */
    OpeningHours: string[];


/**
 * Constructeur de la classe Toilette
 * 
 * @param Commune 
 * @param Code_Postal 
 * @param PointGeo 
 * @param Id 
 * @param Longitude 
 * @param OpeningHours 
 */
    constructor(Commune: string, Code_Postal: string, PointGeo: PointGeo, Id: string, Longitude: string, OpeningHours: string[]) {
        this.Commune = Commune;
        this.Code_Postal = Code_Postal;
        this.PointGeo = PointGeo;
        this.Id = Id;
        this.Longitude = Longitude;
        this.OpeningHours = OpeningHours;
    }
}