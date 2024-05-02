const BASE_URL_BAR_AREA_CHARTS =
  "https://easyhome-lcvx.onrender.com/api/v1/dashboard/";
//easyhome-lcvx.onrender.com/api/v1/dashboard/applications/monthly
export async function getDataBarAreaCharts(route, timeType) {
  const url = `${BASE_URL_BAR_AREA_CHARTS}${route}/${timeType}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
