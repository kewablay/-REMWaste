"use client";

import { getSkips } from "@/services/getSkips.service";
import { useQuery } from "@tanstack/react-query";

export const useGetSkipsQuery = () => {
  return useQuery({
    queryKey: ["skips"],
    queryFn: () => getSkips(),
  });
};
