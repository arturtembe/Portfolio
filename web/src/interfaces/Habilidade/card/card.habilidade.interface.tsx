import { ComponentProps } from "react";

export default interface CardHabilidadeInterface extends ComponentProps<'img'>{
    tecnologia?: string;
    to?: string;
}