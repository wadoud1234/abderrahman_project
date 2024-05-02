import { useQuery } from "@tanstack/react-query";
import { getDataBarAreaCharts } from "./apiCharts";

export function useDataAreaBarCharts(route) {
  const { isLoading, data, error } = useQuery({
    queryKey: [route],
    queryFn: () => getDataBarAreaCharts(route),
  });

  return { isLoading, error, data };
}
