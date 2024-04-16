import LayoutClient from "../../components/layout-clients/layout"
import Hero from "../../components/layout-clients/part/hero"
import DownloadApp from "../../section/clients/download-app"
import WhyUs from "../../section/clients/why-us"
import WebSlider from "../../section/clients/web-slider"
import { useSelector } from "react-redux"
import { CounterState } from "../../store/clients/client.slice"
import InputField from  "../../components/layout-clients/part/inputfield"
import Slide1 from "../../assets/slider/slider-1.png"
import Slide2 from "../../assets/slider/slider-2.png"
import Slide3 from "../../assets/slider/slider-3.png"

const HomePage = () => {

  let slides = [
    Slide1,
    Slide2,
    Slide3,
    Slide2,
  ];

  const dataClient = useSelector((state: { client: CounterState }) => state?.client?.profileClient)

  return (
    <LayoutClient dataClient={dataClient}>
        <Hero />
        <InputField/>
        <div className="w-[100%] px-12 lg:px-32 m-auto">
          <WebSlider slides={slides} />
        </div>
        <DownloadApp />
        <WhyUs />
    </LayoutClient>
  )
}

export default HomePage