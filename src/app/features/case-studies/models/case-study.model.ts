import { LocalizedText } from '../../../shared/models/localized-text.model';
import { Project } from '../../projects/models/project.model';

export interface CasesStudy {
  _id: string;
  project: Pick<
    Project,
    | '_id'
    | 'title'
    | 'slug'
    | 'shortDescription'
    | 'category'
    | 'technologies'
    | 'thumbnail'
    | 'liveUrl'
    | 'repositoryUrl'
  >;
  context: LocalizedText;
  role: LocalizedText;
  goal: LocalizedText;
  architecture: LocalizedText;
  challenges: LocalizedText;
  solution: LocalizedText;
  results: LocalizedText;
}
