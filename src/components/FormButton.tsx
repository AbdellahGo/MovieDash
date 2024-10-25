import { ReactNode } from "react";
import { afterSlideStyles, beforeSlideStyles } from "../classes";

const FormButton = ({ children, classes }: { children: ReactNode, classes: string }) => {

    return (
        <button type="submit" className={`relative block uppercase px-[32px] py-16 rounded-[4px] border-1 border-primary bg-primary text-white text-14 lading-[16px] font-medium
                        ${afterSlideStyles}
                        ${beforeSlideStyles}
                        ${classes}`}>
            {children}
        </button>
    )
}

export default FormButton