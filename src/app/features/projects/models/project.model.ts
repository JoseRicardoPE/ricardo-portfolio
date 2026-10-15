export interface Project {
    _id: string,
    title: string,
    slug: string,
    shortDescription: {
        es: string;
        en: string;
    },
    category: string,
    technologies: readonly {
        _id: string;
        name: string;
        slug: string;
        category: string;
        icon: string;
    }[],
    thumbnail: string,
    liveUrl: string,
    repositoryUrl: string,
    featured: boolean,
    isActive: boolean,
    order: number
}
