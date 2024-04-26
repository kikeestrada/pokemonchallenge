import { apiInstance } from "~/api";
import { Root } from "~/interfaces";
import { RootResponse } from "~/models/response";

export const getRootRequest = async (): Promise<Root> => {
  try {
    return apiInstance
      .get<RootResponse>("")
      .then(({ data }) => {
        return {
          ...data,
        };
      })
      .catch((error) => {
        throw new Error(`Response was not ok. ${error}`);
      });
  } catch (error) {
    throw new Error(`Error getting the root response: ${error}`);
  }
};
