import { UseFetch } from "../hooks/use-fetch";
import { GET_FLIGHT_API_URL } from "../utils/endpoint";

const getFindFlight = (dep_date?:number, arr_date?:number) => {
    const depDate = dep_date || '2024-02-01'; // Gantilah dengan nilai default yang sesuai jika page tidak ada
    const arrDate = arr_date || '2024-02-04'; // Gantilah dengan nilai default yang sesuai jika limit tidak ada

    const { loading, error, data, meta, fetchData } = UseFetch(
         `${GET_FLIGHT_API_URL}?dep=dps&arr=cgk&dateDep=${depDate}&dateArr=${arrDate}&flightClass=economy&isAroundTrip=true`
    );

    const task = data
    const findFlightData = meta
    return { loading, error, task, findFlightData, fetchData};
}

export {
    getFindFlight
}