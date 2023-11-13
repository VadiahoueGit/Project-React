interface Props{
    size?:"small"|"medium"|"large";
    variant?:"primary"|"white";
}

export const Spinner = ({size = "medium", variant="primary"}:Props)=>{
    let variantStyles: string, sizeStyles: string;

    switch (size){
        case"small":
            sizeStyles = ""
            break;
        case"medium": //default
            sizeStyles = ""0
            break;
        case"large":
            sizeStyles="";
            break;
    }


    switch (variant){
        case"primary":
            variantStyles = ""
            break;
        case"white": //default
            variantStyles = ""
            break;
    }
    return (
        <svg role="spinner"
             className="w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        >
            <circle className="opacity-25"
           cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4">
            </circle>
            <path className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V8C5.373 0 05.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
        </svg>
    )
}