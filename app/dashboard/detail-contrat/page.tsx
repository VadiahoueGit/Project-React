"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { IconType } from "react-icons";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { GiRoyalLove } from "react-icons/gi";
import { PiHandCoins } from "react-icons/pi";
import { BsClipboard } from "react-icons/bs";
import { Typography } from "../../../components/ui/typography";

export default function page() {
  return (
    <div className="w-full px-14 py-14 gap-10 grid  grid-cols-2  ">
      <div className="  border ">
        <div className={cn("bg-[#FFA800]/20", `rounded-t-2xl px-2 py-4`)}>
          <div className=" items-center flex justify-between">
            <div className="flex gap-2">
              <div
                className={cn(
                  "bg-[#FFA800]",
                  `h-14 w-14  flex items-center justify-center rounded-full`
                )}
              >
                <BsClipboard color="white" size={25} />
              </div>
              <div className="">
                <Typography className="font-bold" variant="p">
                  NSIA RETRAITE
                </Typography>
                <Typography
                  className="text-muted-foreground text-sm"
                  variant="p"
                >
                  N° POLICE : 21601906
                </Typography>
              </div>
            </div>
            <div className="">
              <Typography className="text-muted-foreground pr-1" variant="p">
                Contrat mis en demeure
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-8">
          <div className="w-1/2 px-10 py-10 space-y-5">
            <div className="">
              <Typography className="font-bold" variant="p">
                Fractionnement
              </Typography>
              <Typography variant="small">Mensuelle</Typography>
            </div>
            <div>
              <Typography className="font-bold" variant="p">
                Type de police
              </Typography>
              <Typography variant="small">Epargne individuelle</Typography>
            </div>
            <div>
              <Typography className="font-bold" variant="p">
                Durée de la police
              </Typography>
              <Typography variant="small">10 ans</Typography>
            </div>
          </div>
          <div className="w-1/2 px-10 py-10 space-y-5 ">
            <div className="">
              <Typography className="font-bold" variant="p">
                Prime périodique
              </Typography>
              <Typography variant="small">10 000 fcfa</Typography>
            </div>
            <div>
              <Typography className="font-bold" variant="p">
                Date début
              </Typography>
              <Typography variant="small">01/01/2020</Typography>
            </div>
            <div>
              <Typography className="font-bold" variant="p">
                Date fin
              </Typography>
              <Typography variant="small">31/12/2023</Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="  border">
        <div className={cn("bg-[#0F1A3A]/10", `rounded-t-2xl px-2 py-4`)}>
          <div className=" items-center flex gap-2">
            <div
              className={cn(
                "bg-[#0F1A3A]",
                `h-14 w-14  flex items-center justify-center rounded-full`
              )}
            >
              <PiHandCoins color="white" size={25} />
            </div>
            <div className="">
              <Typography className="font-bold" variant="p">
                Béneficiaire(s)
              </Typography>
            </div>
          </div>
        </div>
        <div>
          <div className="px-5 py-5">
            <Typography className="font-bold" variant="p">
              11 - LASSURE
            </Typography>
            <Typography variant="small">
              S/Catégorie C,D,I,P,R et T / Repartition : 100.00%
            </Typography>
          </div>
          <div className="px-5 py-5">
            <Typography className="font-bold" variant="p">
              17 - LES ENFANTS NES OU A NAITRE
            </Typography>
            <Typography variant="small">Décès / Repartition : %</Typography>
          </div>
          <div className="px-5 py-5">
            <Typography className="font-bold" variant="p">
              19 - PERSONNE DESIGNE CI-APRES
            </Typography>
            <Typography variant="small">Décès / Repartition : %</Typography>
          </div>
        </div>
      </div>

      <div className=" border">
        <div className={cn("bg-[#FF318A]/10", `rounded-t-2xl px-2 py-4`)}>
          <div className=" items-center flex gap-2">
            <div
              className={cn(
                "bg-[#FF318A]",
                `h-14 w-14  flex items-center justify-center rounded-full`
              )}
            >
              <GiRoyalLove color="white" size={25} />
            </div>
            <div className="">
              <Typography className="font-bold" variant="p">
                Garanties souscrites
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 px-10 py-10 space-y-5">
            <ul className="list-disc list-inside">
              <li>Epargne Retraite</li>
              <li>Epargne Famille</li>
              <li>Epargne Décès</li>
            </ul>
          </div>
          <div className="w-1/2 px-10 py-10 space-y-5">
            <ul className="list-disc list-inside">
              <li>Epargne Imprévue</li>
              <li>Epargne Retraite</li>
              <li>Epargne Retraite</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
