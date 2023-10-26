'use client'
import React, {useState} from 'react'
import Link from "next/link";
import companyLogo from "@/public/assets/img/company/MicrosoftTeams-image (5).png";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Label} from "@/components/ui/label";
import {Checkbox} from "@/components/ui/checkbox";
import { Typography } from '@/components/ui/typography';
import { useRouter } from 'next/navigation';
 import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from "@hookform/resolvers/yup"
 import * as yup from "yup"


const schema = yup
  .object({
    login: yup.string().required(),
    password: yup.string().required(),
  })
  .required()


function Page() {
    const router = useRouter()
    const { control, handleSubmit, register,  formState: { errors }, } = useForm<yup.InferType<typeof schema>>({
        defaultValues:{
            login:"",
            password:""
        },
    });

    const onSubmit = (data: any) => {
      console.log(data);
      router.push("/dashboard")
    };
    return (
        <div className="flex w-full grow flex-col justify-center">
            <div className="">
                <div className="flex flex-col justify-center items-center">
                    <div className="">
                        <Link href={"/sign-in"}>
                            <Image src={companyLogo} alt="logo du site" width={150} height={150}/>
                        </Link>
                    </div>
                    <div className="mt-4">
                        <Typography variant="h2" className="text-slate-900">
                            Connectez vous
                        </Typography>
                    </div>
                </div>
                <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-10">
                        <div className="mb-2">
                            <Label htmlFor="login" className="ml-3">E-mail</Label>
                            <Input name="login"
                                   placeholder="Entrer votre e-mail"
                                   type="text"
                                   id="login"
                                   register={register}

                            />
                        </div>
                        <div className="mb-2">
                            <Label htmlFor="password" className="ml-3">Mot de passe</Label>
                            <Input
                             name="password"
                                   placeholder="Entrer votre mot de passe"
                                   id="password"
                                   type="password"
                                   register={register}
                            />
                        </div>
                        {/* <div className="flex justify-between items-center">
                            <Link href={""}>
                                <Button variant="link" className="text-primary">
                                    Mot de passe oublié
                                </Button>
                            </Link>
                        </div> */}


                        <Button
                            type="submit"
                            value="submit"
                            className="mx-auto mt-5 w-full flex justify-center">
                            Se connecter
                        </Button>
                        {/* <Typography variant="small" className="mt-3">Pas encore de compte ? <Link
                            href={""}
                            className="font-semibold text-primary">S&apos;inscrire</Link></Typography> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Page
