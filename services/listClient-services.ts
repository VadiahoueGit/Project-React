import { BASE_URL } from "@/lib/axios";
import axios from "redaxios";

export const getListeClient = async () => {
    try {
      return await axios.get(BASE_URL + "/api/listClients");
    } catch (e: any) {
      if (e.status === 400) {
        console.log("error");
      } else {
        throw new Error("error");
      }
    }
  };