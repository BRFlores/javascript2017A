/**
 * Created by ASUS on 13/06/2017.
 */

export interface PlanetaStarWarsInterface{
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
  imagenUrl?:string;
}
