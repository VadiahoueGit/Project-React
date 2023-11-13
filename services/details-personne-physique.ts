import { BASE_URL } from "@/lib/axios";
import axios from "redaxios";

export const getDetailClientPhysique = async (id: any ) => {
    try {
        console.log({id})
      return await axios.get(BASE_URL + "/api/details/personnePhysique");
    } catch (e: any) {
      if (e.status === 400) {
        console.log("error");
      } else {
        throw new Error("error");
      }
    }
  };