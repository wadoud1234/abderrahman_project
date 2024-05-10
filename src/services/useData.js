import { useQuery } from "@tanstack/react-query";
import { getDataBarAreaCharts } from "./apiCharts";

export function useDataAreaBarCharts(route, timeType) {
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: [route, timeType],
    queryFn: () => getDataBarAreaCharts(route, timeType),
  });

  return { isLoading, error, data, refetch };
}
