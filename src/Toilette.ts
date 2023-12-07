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
    OpeningHours: string;
    /**
     * Flag pour savoir si la toilette est favorite
     */
    isFavorite: boolean = false;
    /**
     * URL de l'image de la toilette
     */
    ImageURL: string;


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
    constructor(Commune: string, Code_Postal: string, PointGeo: PointGeo, Id: string, Longitude: string, OpeningHours: string, isFavorite: boolean = false, ImageURL: string ) {
        this.Commune = Commune;
        this.Code_Postal = Code_Postal;
        this.PointGeo = PointGeo;
        this.Id = Id;
        this.Longitude = Longitude;
        this.OpeningHours = OpeningHours;
        this.isFavorite = isFavorite;
        this.ImageURL = ImageURL;
    }
}