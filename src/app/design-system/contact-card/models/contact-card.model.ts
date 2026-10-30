import { IconName } from "../../icon/models/icon-name.model";

export interface ContactCard {
    id: string;
    icon: IconName;
    title: string;
    description: string;
    actionLabel: string;
    href: string;
    ariaLabel: string;
}