import { SkipType } from "@/types/skip.types";
import { apiRequest } from "@/utils/axios-utils";

export const getSkips = async () => {
  const response = await apiRequest<SkipType[]>({
    url: "/skips/by-location?postcode=NR32&area=Lowestoft",
    method: "GET",
    showToast: true,
  });

  return response;
};
