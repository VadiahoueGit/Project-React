// 'use client'
// import React from 'react'
// import Link from "next/link";
// import companyLogo from "@/public/assets/img/company/logo-sans-text.svg";
// import {Button} from "@/components/ui/button";
// import Image from "next/image";
// import {Typography} from "@/components/ui/typography";
// import {routeByName} from "@/lib/utils/helpers";
// import {LuMailWarning} from "react-icons/lu";
// import {BsEnvelopeCheck} from "react-icons/bs";

// function Page() {

//     return (
//         <div className="flex w-full grow flex-col justify-center items-center">
//             <div className="">
//                 <div className="flex flex-col justify-center items-center">
//                     <div className="">
//                         <Link href={"/"}>
//                             <Image src={companyLogo} alt="logo du site" width={70} height={70}/>
//                         </Link>
//                     </div>
//                 </div>
//                 <form method="POST" onSubmit={() => {
//                 }}>
//                     <div className="mt-10 flex flex-col items-center">
//                         <Typography variant="h2" className="text-slate-900 text-center">
//                             Enregistrement effectué avec succès
//                         </Typography>
//                         <Typography variant="p" className="text-center">
//                             Vérifiez votre boite de réception pour confirmer votre adresse email.
//                         </Typography>
//                         <BsEnvelopeCheck size={90} className="text-primary"/>
//                         <Link href={routeByName("auth.login")}>
//                             <Button
//                                 variant="link" type="button"
//                                 className="mx-auto mt-5 w-full text-lg flex justify-center text-primary items-center gap-2">
//                                 Retour à la page de connexion
//                             </Button>
//                         </Link>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Page
