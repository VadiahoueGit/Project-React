"use client"
import {ReactNode} from "react";
import {cn} from "@/lib/utils";

interface Props {
    children: ReactNode;
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span" | "address";
    theme?: "black" | "white" | "gray" | "primary" | "secondary" | "error" | "warning" | "success" ;
    weight?: "regular" | "medium";
    className?: string;
    variant?:
        "display"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "p"
        | "body-lg"
        | "body-base"
        | "small"
        | "body-xs"
}

export const Typography = ({
                               children,
                               variant = "p",
                               theme = "black",
                               className,
                               component: Component = "div"
                           }: Props) => {
    let variantStyle, colorStyle: string = ""

    switch (variant) {
        case "display" :
            variantStyle = "text-8xl"
            break;
        case "h1" :
            variantStyle = "text-7xl"
            break;
        case "h2" :
            variantStyle = "scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0";
            break;
        case "h3" :
            variantStyle = "text-lg md:text-3xl lg:text-5xl";
            break;
        case "h4" :
            variantStyle = "text-2xl md:text-3xl lg:text-4xl"
            break;
        case "h5" :
            variantStyle = "text-2xl md:text-3xl"
            break;
        case "p" : //DEFAULT
            variantStyle = "leading-7"
            break;
        case "body-lg" :
            variantStyle = "text-lg"
            break;
        case "body-base" :
            variantStyle = "text-base"
            break;
        case "small":
            variantStyle = "text-sm leading-none"
            break;
        case "body-xs":
            variantStyle = "text-xs"
            break;
    }

    switch (theme) {
        case "black":
            colorStyle = "text-neutral-800"
            break;
        case "white":
            colorStyle = "text-white"
            break;
        case "gray":
            colorStyle = "text-gray-700"
            break;
        case "primary":
            colorStyle = "text-primary"
            break;
        case "secondary" :
            colorStyle = "text-secondary"
            break;
        case "warning" :
            colorStyle = "text-warning"
            break;
        case "error" :
            colorStyle = "text-red-500"
            break;
        case "success" :
            colorStyle = "text-success"
            break;
    }
    return (
        <Component
            className={cn(variantStyle, className)}>{children}</Component>
    )
}
