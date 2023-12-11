import { PointGeo } from './PointGeo';
import { IsString, IsBoolean,  IsNotEmpty } from 'class-validator';
/**
 * Classe Toilette
 */
export class Toilette {
    /**
     * Commune de la toilette
     */
    @IsString()
    @IsNotEmpty()
    Commune: string;
    /**
     * Adresse de la toilette
     */
    @IsString()
    @IsNotEmpty()
    Code_Postal: string;
    /**
     * Point géographique de la toilette
     */
    PointGeo: PointGeo;
    /**
     * Identifiant de la toilette
     */
    @IsString()
    @IsNotEmpty()
    Id: string;
    /**
     * Longitude de la toilette
     */
    @IsString()
    Longitude: string;
    /**
     * Horaires d'ouverture de la toilette
     */
    @IsString()
    OpeningHours: string;
    /**
     * Flag pour savoir si la toilette est favorite
     */
    @IsBoolean()
    @IsNotEmpty()
    isFavorite: boolean = false;
    /**
     * URL de l'image de la toilette
     */
    @IsString()
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