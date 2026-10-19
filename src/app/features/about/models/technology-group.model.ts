import { Technology } from "../../technologies/models/technology.model";

export interface TechnologyGroup {
  category: string;
  technologies: readonly Technology[];
}