import { LocalizedText } from "../../../shared/models/localized-text.model";
export interface Strengths {
    _id: string;
    name: LocalizedText;
    slug: string;
    isActive: boolean;
    order: number;
}