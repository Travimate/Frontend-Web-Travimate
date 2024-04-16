export interface FlightData {
    flightDataId: string;
    stops: number;
    departure_airport: Airport;
    arrival_airport: Airport;
    airline_operator: string;
    flightClass: string;
    baseFare: BaseFare;
    airline: Airline[];
    route: Route[];
    dof: number[];
    departure_time: number[];
    arrival_time: number[];
    transit_time_minutes: number | null;
    total_flight_time_minutes: number;
    seat_left: number;
  }
  
  interface Airport {
    iata_code: string;
    airport_name: string;
    city: string;
    country: string;
  }
  
  interface BaseFare {
    id: string;
    childBaseFare: number;
    adultBaseFare: number;
  }
  
  interface Airline {
    iata_code: string;
    airline_name: string;
    imageUrl: string;
    cabinBaggage: number;
    baggage: number;
  }
  
  interface Route {
    code: string;
    operated_airline: Airline[];
    departure_airport: Airport;
    destination_airport: Airport;
    connecting_airport: Airport | null;
    flights: Flight[];
    stops: number;
  }
  
  interface Flight {
    flightID: string;
    flightNumber: string;
    dep: Airport;
    arr: Airport;
    airline: Airline;
    flightClass: string;
    dof: number[];
    departure_time: number[];
    arrival_time: number[];
    flight_time: number[];
    stock: number;
  }
  