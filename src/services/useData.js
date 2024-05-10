import { useQuery } from "@tanstack/react-query";
import { getDataBarAreaCharts } from "./apiCharts";
import { validateArray } from "../utils/helpers";

export function useDataAreaBarCharts(route, timeType) {
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: [route, timeType],
    queryFn: async () => {
      try{
        const data = await getDataBarAreaCharts(route, timeType)

        return validateArray(data)
      }
      catch(e){
        return []
      }
    },
  });

  return { isLoading, error, data, refetch };
}
