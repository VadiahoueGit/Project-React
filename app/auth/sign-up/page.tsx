// 'use client'
// import React, {useState} from 'react'
// import Link from "next/link";
// import {Input} from "@/components/ui/input";
// import {Button} from "@/components/ui/button";
// import Image from "next/image";
// import {Label} from "@/components/ui/label";
// import {Typography} from "@/components/ui/typography";
// import {objectByIdOf, routeByName} from "@/lib/utils/helpers";
// import countries from '@/data/countries.json';
// import {cn} from "@/lib/utils";
// import {useForm} from 'react-hook-form';
// import {useMask} from "@react-input/mask";
// import * as Yup from "yup";
// import {InferType} from "yup";
// import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
// import {yupResolver} from "@hookform/resolvers/yup";
// import {useRouter} from "next/navigation";
// import axios from 'redaxios';
// import {AiOutlineLoading3Quarters} from "react-icons/ai";
// import {UseRegister} from "@/hooks/use_authentification";
// import {useMutation} from "react-query";
// import companyLogo from "@/public/assets/img/company/logo-sans-text.svg";

// const RegisterSchema = Yup.object({
//     username: Yup.string(),
//     password: Yup.string().required().min(8).max(255),
//     confirmPassword: Yup.string().required().oneOf([Yup.ref('password')], 'Passwords must match'),
//     civilite: Yup.string().required(),
//     emailAddress: Yup.string().required(),
//     givenName: Yup.string().required(),
//     surname: Yup.string().required(),
//     localNumber: Yup.string().required(),
//     prefixNumber: Yup.string().required(),
//     countryCode: Yup.string().required()
// })

// function Page() {
//     const [date, setDate] = useState("")
//     const [load, setLoad] = useState(false);
//     const router = useRouter()
//     const {data:dataRegister,isLoading:loadRegister, isError,error, mutateAsync: handleRegister} = UseRegister()
//     const {
//         control,
//         handleSubmit,
//         getValues,
//         setValue,
//         register,
//         setError,
//         formState: {errors},
//     } = useForm<InferType<typeof RegisterSchema>>({
//         defaultValues: {
//             username: "",
//             password: "",
//             confirmPassword: "",
//             civilite: "",
//             emailAddress: "",
//             givenName: "",
//             surname: "",
//             localNumber: "",
//             prefixNumber: "",
//             countryCode: ""
//         },
//         resolver: yupResolver(RegisterSchema)
//     });
//     const onSubmit = async (data: any) => {
//         // setLoad(true)
//         console.log(data)
//         data.localNumber = data.localNumber.replace(/[^\d]/g, '')
//         data.username = data.emailAddress
//         try {
//             // const res = await axios.post('https://64ce-154-73-100-142.ngrok-free.app/api/v1/auth/inscription', data)
//             const user = await handleRegister(data)
//             console.log(user)
//             console.log(data)
//             console.log(dataRegister)
//             router.push(routeByName("auth.successSignup"))

//         } catch (e: any) {
//             console.log(e.data.message)
//             const errorRes = e.data.message
//             console.log(errorRes.data.json)
//             const data = JSON.parse(errorRes.data.json)
//             console.log(data)
//             // console.log(e.data.json)
//             alert(data.message)
//         }
//     };

//     console.log("test", objectByIdOf(getValues("countryCode"), countries, "iso")?.mask, date)

//     const inputRef = useMask({
//         onMask: (event) => event.detail.value,
//         mask: objectByIdOf(getValues("countryCode"), countries, "iso")?.mask ?? "__",
//         showMask: false,
//         replacement: {_: /\d/}
//     });
//     console.log(errors)
//     return (
//         <div className="flex w-full grow flex-col justify-center">
//             <div className="">
//                 <div className="flex flex-col justify-center items-center mt-3">
//                     <div className="">
//                         <Link href={"/"}>
//                             <Image src={companyLogo} alt="logo du site" width={60} height={60}/>
//                         </Link>
//                     </div>

//                     <Typography variant="h2" className="text-slate-900 mt-3">Bienvenue chez votre assureur</Typography>
//                 </div>
//                 <form method="POST" onSubmit={handleSubmit(onSubmit)}>
//                     <div className="mt-10">
//                         <div className="mb-2">
//                             <Label htmlFor="login" className="ml-3">Numéro de téléphone</Label>
//                             <div
//                                 className={cn("flex focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary focus-within:rounded-md")}>
//                                 <select
//                                     defaultValue={getValues("countryCode")}
//                                     onChange={(e: any) => {
//                                         let countryInfo = objectByIdOf(e.target.value, countries, "iso")
//                                         setValue("countryCode", countryInfo.iso)
//                                         setValue("prefixNumber", countryInfo.code)
//                                         setDate(countryInfo.iso)
//                                     }}
//                                     className="text-sm bg-white border border-r-0 border-slate-200 rounded-l-md ring-offset-white px-2 font-sans text-slate-900">
//                                     <option disabled value="">+000</option>
//                                     {countries.map(country => (
//                                         <option key={country.code}
//                                                 value={country.iso}>{country.flag2} {country.code}</option>
//                                     ))}
//                                 </select>

//                                 <Input name="phone"
//                                        placeholder="Entrer votre contact"
//                                        type="text"
//                                        id="localNumber"
//                                        noBorder
//                                        value={getValues("localNumber")}
//                                        ref={inputRef}
//                                        onChange={(e: any) => {
//                                            console.log(e.target.value)
//                                            setValue("localNumber", e.target.value)
//                                        }}
//                                 />
//                             </div>
//                             {errors?.localNumber && <Typography variant="small"
//                                                                 className="text-red-400 mt-1 ml-3">{errors?.localNumber.message}</Typography>}

//                         </div>
//                         <div className="mb-2">
//                             <Label htmlFor="surname" className="ml-3">Civilité</Label>
//                             <Select onValueChange={(e) => setValue("civilite", e)} defaultValue={getValues("civilite")}>
//                                 <SelectTrigger className="w-full">
//                                     <SelectValue placeholder="Selectionner la civilité"/>
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     <SelectItem value="Mr">Monsieur</SelectItem>
//                                     <SelectItem value="Mrs">Madame</SelectItem>
//                                     <SelectItem value="Dr">Docteur</SelectItem>
//                                     <SelectItem value="Ms">Mademoiselle</SelectItem>
//                                 </SelectContent>
//                             </Select>
//                             {errors?.civilite && <Typography variant="small"
//                                                              className="text-red-400 mt-1 ml-3">{errors?.civilite.message}</Typography>}

//                         </div>
//                         <div className="mb-2">
//                             <Label htmlFor="surname" className="ml-3">Nom</Label>
//                             <Input name="login"
//                                    placeholder="Entrer votre nom"
//                                    type="text"
//                                    id="surname"
//                                    register={register}
//                             />
//                             {errors?.surname && <Typography variant="small"
//                                                             className="text-red-400 mt-1 ml-3">{errors?.surname.message}</Typography>}

//                         </div>
//                         <div className="mb-2">
//                             <Label htmlFor="givenName" className="ml-3">Prénoms</Label>
//                             <Input name="login"
//                                    placeholder="Entrer votre prénoms"
//                                    type="text"
//                                    id="givenName"
//                                    register={register}
//                             />
//                             {errors?.givenName && <Typography variant="small"
//                                                               className="text-red-400 mt-1 ml-3">{errors?.givenName.message}</Typography>}
//                         </div>
//                         <div className="mb-2">
//                             <Label htmlFor="emailAddress" className="ml-3">E-mail</Label>
//                             <Input name="login"
//                                    placeholder="Entrer votre e-mail"
//                                    type="email"
//                                    id="emailAddress"
//                                    register={register}
//                             />
//                             {errors?.emailAddress && <Typography variant="small"
//                                                                  className="text-red-400 mt-1 ml-3">{errors?.emailAddress.message}</Typography>}
//                         </div>

//                         <div className="mb-2">
//                             <Label htmlFor="password" className="ml-3">Mot de passe</Label>
//                             <Input name="password"
//                                    placeholder="Entrer votre mot de passe"
//                                    id="password"
//                                    autoComplete="new-password"
//                                    password
//                                    type="password"
//                                    register={register}
//                             />
//                             {errors?.password && <Typography variant="small"
//                                                              className="text-red-400 mt-1 ml-3">{errors?.password.message}</Typography>}
//                         </div>
//                         <div className="mb-2">
//                             <Label htmlFor="confirmPassword" className="ml-3">Confirmer votre mot de passe</Label>
//                             <Input name="confirmPassword"
//                                    placeholder="Confirmer votre mot de passe"
//                                    id="confirmPassword"
//                                    autoComplete="confirm-password"
//                                    password
//                                    type="password"
//                                    register={register}
//                             />
//                             {errors?.confirmPassword && <Typography variant="small"
//                                                                     className="text-red-400 mt-1 ml-3">{errors?.confirmPassword.message}</Typography>}
//                         </div>

//                         <Button
//                             disabled={loadRegister}
//                             type="submit"
//                             className="font-secondary mx-auto mt-5 w-full flex justify-center">
//                             {
//                                 loadRegister ?
//                                     <>
//                                         <AiOutlineLoading3Quarters size={20} className="animate-spin"/>
//                                         <span className="ml-3">Processing...</span>
//                                     </>
//                                     : "S'inscrire"
//                             }
//                         </Button>
//                         <Typography variant="small" className="mt-3">Vous avez un compte ? <Link
//                             href={routeByName("auth.login")}
//                             className="font-semibold text-primary">Se connecter</Link></Typography>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Page
