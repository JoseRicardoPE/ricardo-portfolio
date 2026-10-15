export interface Technology {
    _id: string;
    name: string;
    slug: string;
    category: string;
    icon?: string;
    order: number;
    isActive: boolean;
    featured: boolean;
}