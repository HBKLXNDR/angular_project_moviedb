import {IMovie} from "./imovie";

export interface IPackage {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
