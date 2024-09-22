import { ReactNode } from "react";

const FormButton = ({ children, classes }: { children: ReactNode, classes: string }) => {

    return (
        <button type="submit" className={`relative block uppercase px-[32px] py-16 rounded-[4px] border-1 border-primary bg-primary text-white text-14 lading-[16px] font-medium
                        after:transition-all after:absolute after:rounded-l-[4px] after:h-full after:w-0 after:left-0 after:top-0 after:bg-[#b70710] hover:after:w-[100%]
                        before:transition-all before:absolute before:rounded-r-[4px] before:h-full before:w-0 before:right-0 before:top-0 before:bg-[#b70710] hover:before:w-[100%]
                        ${classes}`}>
            {children}
        </button>
    )
}

export default FormButton