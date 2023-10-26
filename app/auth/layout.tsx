import React, {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }:LayoutProps) => {
    return (
       <section className="h-screen">
           <div className="flex grow bg-slate-50 dark:bg-navy-900 h-full">
               <div className="grow place-items-center lg:grid bg-cover bg-center bg-[url('/assets/img/illustrtions/photo.jpg')]"></div>
               <main className="flex flex-col w-full lg:w-[40%] items-center bg-white overflow-auto px-5 md:px-8">
                   { children }
                   <div className="my-5 flex justify-center text-xs text-slate-400 dark:text-navy-300">
                       <a href="#">Avis de confidentialité</a>
                       <div className="mx-3 my-1 w-px bg-slate-200 dark:bg-navy-500"/>
                       <a href="#">Termes du contrat de service</a>
                   </div>
               </main>
           </div>
       </section>
    )
}

export default Layout
