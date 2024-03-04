import { ReactNode } from "react";



export const Wrapper = (props: { children: ReactNode }) => {
    return (
        <div className="container mx-auto py-4 px-4 min-h-screen">
            {props.children}
        </div>
    );
}
