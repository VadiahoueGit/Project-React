// 'use client'
// import React from 'react'
// import Link from "next/link";
// import companyLogo from "@/public/assets/img/company/logo-sans-text.svg";
// import {Input} from "@/components/ui/input";
// import {Button} from "@/components/ui/button";
// import Image from "next/image";
// import {Typography} from "@/components/ui/typography";
// import {routeByName} from "@/lib/utils/helpers";
// import { useForm } from 'react-hook-form';


// export interface forgotPasswordForm{
//     email: string
// }
// function Page() {
//     const { control, handleSubmit, register } = useForm<forgotPasswordForm>({
//         defaultValues:{
//             email:""
//         }
//     });
//     const onSubmit = (data: any) => {
//       console.log(data);
//     };
//     return (
//         <div className="flex w-full grow flex-col justify-center items-center">
//             <div className="">
//                 <div className="flex flex-col justify-center items-center">
//                     <div className="">
//                         <Link href={"/"}>
//                             <Image src={companyLogo} alt="logo du site" width={60} height={60}/>
//                         </Link>
//                     </div>
//                     <div className="mt-4 text-center flex flex-col items-center">
//                         <Typography variant="h2" className="text-slate-900">
//                             Réinitialiser votre mot de passe
//                         </Typography>
//                         <Typography variant="p" className="max-w-sm">
//                             Saisissez votre adresse e-mail enregistrée pour réinitialiser votre mot de passe.
//                         </Typography>
//                     </div>
//                 </div>
//                 <form method="POST" onSubmit={handleSubmit(onSubmit) }>
//                     <div className="mt-10">
//                         <div className="mb-2">
//                             <Input name="login"
//                                    placeholder="Entrer votre e-mail"
//                                    type="text"
//                                    id="email"
//                                    register={register}
//                             />
//                         </div>

//                         <Button
//                             type="submit"
//                             className="font-secondary mx-auto mt-5 w-full flex justify-center">
//                             Réinitialiser
//                         </Button>
//                         <Button
//                             variant="link"
//                             type="button"
//                             className="font-secondary mx-auto mt-5 w-full flex justify-center text-primary"
//                         >
//                             <Link href={routeByName("authentification.login")}>
//                                 Retour à la page de connexion
//                             </Link>
//                         </Button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Page
