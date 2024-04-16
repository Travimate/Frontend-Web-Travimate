import LayoutClient from "../../components/layout-clients/layout";
import FlightCard from "../../components/layout-clients/part/flightcard";
import DateSlider from "../../components/layout-clients/part/dateslider";
import AirAsia from "../../assets/air-asia.svg";
import Citilink from "../../assets/citilink.svg";
import LionAir from "../../assets/lion-air.svg";
import Garuda from "../../assets/garuda-indonesia.svg";

import { useSelector } from "react-redux";
import { CounterState } from "../../store/clients/client.slice";
import { useCallback, useEffect, useState } from "react";
import { getFindFlight } from "../../services/flightApi";
import { useParams, useRouter } from "../../routes/hooks";
import { useLocation } from "react-router-dom";
import travimatev2 from "../../api/tavimatev2";
import { useDispatch } from "react-redux";
import { FlightData } from "../../types";
import { orderData } from "../../store/flights/flights.slice";

interface IDateObject {
  date: string;
  day: string;
}

const SearchPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [dateSelected, setDateSelected] = useState<
    IDateObject | null | undefined
  >();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [flight, setFlight] = useState<any>();
  const [searchParamsState, setSearchParamsState] = useState({
    dep: "",
    arr: "",
    dateDep: "",
    dateArr: "",
    flightClass: "",
    isAroundTrip: false,
  });

  const isRountrip = searchParamsState.isAroundTrip;

  const searchParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    // Mengambil nilai dari URL parameters saat komponen dimount
    const dep = searchParams.get("dep");
    const arr = searchParams.get("arr");
    const dateDep = searchParams.get("dateDep");
    const dateArr = searchParams.get("dateArr");
    const flightClass = searchParams.get("flightClass");
    const isAroundTrip = searchParams.get("isAroundTrip");

    // Mengupdate state dengan nilai-nilai yang didapat dari URL parameters
    setSearchParamsState({
      dep: dep || "",
      arr: arr || "",
      dateDep: dateDep || "",
      dateArr: dateArr || "",
      flightClass: "economy", // flightClass || '',
      isAroundTrip: isAroundTrip === "true" || false,
    });
  }, []);

  const handleToOrderDetasil = useCallback(() => {
    router.push("/flight/order-details");
    const payload = {
      data: flight,
      isDomestic: true,
      query: searchParamsState,
    };

    dispatch(orderData(payload));
  }, [searchParamsState, flight]);

  useEffect(()=>{
    if(searchParamsState.isAroundTrip && (flight?.length === 2) && !isLoading){
      setTimeout(() => {
        handleToOrderDetasil();
      }, 2000);
    } else if (!searchParamsState.isAroundTrip && (flight?.length === 1) && !isLoading) {
      setTimeout(() => {
        handleToOrderDetasil()
      }, 1000);
    }
  }, [handleToOrderDetasil]);

  const [saveDataFlight, setSaveDataFlight] = useState([]);

  const fetchDataFlight = useCallback(async () => {
    setIsLoading(true);

    let apiUrl = "";
    if (searchParamsState.isAroundTrip) {
      apiUrl = `/flight/find-journey?dep=${searchParamsState.dep}&arr=${searchParamsState.arr}&dateDep=${searchParamsState.dateDep}&dateArr=${searchParamsState.dateArr}&flightClass=${searchParamsState.flightClass}&isAroundTrip=${searchParamsState.isAroundTrip}`;
    } else {
      apiUrl = `/flight/find-journey?dep=${searchParamsState.dep}&arr=${searchParamsState.arr}&dateDep=${searchParamsState.dateDep}&flightClass=${searchParamsState.flightClass}&isAroundTrip=${searchParamsState.isAroundTrip}`;
    }

    // if(dateSelected)

    try {
      await travimatev2.get(apiUrl).then((res: any) => {
        if (res.data.status === 200) {
          setSaveDataFlight(res.data.data);
          setIsLoading(false);
        }
        console.log(res);
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [searchParamsState, dateSelected]);

  useEffect(() => {
    fetchDataFlight();
  }, [fetchDataFlight]);

  const dataClient = useSelector(
    (state: { client: CounterState }) => state?.client?.profileClient
  );

  const generateDates = () => {
    const startDate = new Date("2024-03-1");
    const endDate = new Date("2024-03-18");
    const dates = [];
    for (
      let date = startDate;
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      dates.push({
        date: date.toISOString().split("T")[0], // Format date to YYYY-MM-DD
        day: date.toLocaleDateString("id-ID", { weekday: "long" }), // Get full weekday name in Indonesian
      });
    }
    return dates;
  };

  const dates = generateDates();
  const index = dates.findIndex(
    (item) => item.date === searchParamsState.dateDep
  );

  return (
    <LayoutClient dataClient={dataClient}>
      <div id="section-a" className="items-center pt-12 px-12 bg-blue-100">
        <DateSlider
          dates={dates}
          index={index}
          setDateSelected={setDateSelected}
        />

        {isLoading ? (
          <div className="flex gap-2 justify-center py-8">
            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-500"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-500"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-500"></div>
          </div>
        ) : (
          <>
            {flight && (
              <div className="my-12">
                <hr border-2 my-2 />
                <p className="font-semibold mx-12 xl:text-2xl my-8">
                  Your Flight Selected
                </p>
                {flight?.map((item: FlightData) => (
                  <FlightCard setFlight={setFlight} data={item} />
                ))}
                <hr className="border-2 mt-8 border-l-gray-800" />
              </div>
            )}

            <div className="flex flex-col gap-5 pt-4 pb-12">
              {saveDataFlight?.length !== 0 && !isRountrip && (
                <>
                  {saveDataFlight[0]?.listOfFlight?.map((item: FlightData) => (
                    <FlightCard setFlight={setFlight} data={item} />
                  ))}
                </>
              )}
              {/* <FlightCard logo={Citilink} airplane={"Citilink"}/>
                <FlightCard logo={LionAir} airplane={"Lion Air"}/>
                <FlightCard logo={Garuda} airplane={"Garuda Indonesia"}/> */}
            </div>
          </>
        )}
      </div>
    </LayoutClient>
  );
};

export default SearchPage;
