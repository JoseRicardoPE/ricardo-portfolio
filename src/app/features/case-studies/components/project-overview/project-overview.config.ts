import { CasesStudy } from "../../models/case-study.model";

type OverviewField = keyof Pick<
    CasesStudy,
    | 'context'
    | 'role'
    | 'goal'
    | 'architecture'
    | 'challenges'
    | 'solution'
    | 'results'
>;

export const PROJECT_OVERVIEW_SECTIONS = [
    { key: 'context', label: 'caseStudy.overview.context' },
    { key: 'role', label: 'caseStudy.overview.role' },
    { key: 'goal', label: 'caseStudy.overview.goal' },
    { key: 'architecture', label: 'caseStudy.overview.architecture' },
    { key: 'challenges', label: 'caseStudy.overview.challenges' },
    { key: 'solution', label: 'caseStudy.overview.solution' },
    { key: 'results', label: 'caseStudy.overview.results' },
    
] as const satisfies ReadonlyArray<{
    key: OverviewField;
    label: string;
}>;