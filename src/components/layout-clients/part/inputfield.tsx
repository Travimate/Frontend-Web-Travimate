import FlightCard from "./FlightCard"
import DateSlider from "./dateSlider"

const InputField = () => {
  return (
    <div id="section-a"className="items-center bg-blue-200">
    <DateSlider/>
    <FlightCard/>
    <FlightCard/>
    </div>
  )
}

export default InputField