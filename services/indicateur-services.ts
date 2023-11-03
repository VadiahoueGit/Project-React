import { BASE_URL } from "@/lib/axios";
import axios from "redaxios";

export const getIndicateurClient = async () => {
    try {
      return await axios.get(BASE_URL + "/api/clients/indicateurs");
    } catch (e: any) {
      if (e.status === 400) {
        console.log("error");
      } else {
        throw new Error("error");
      }
    }
  };