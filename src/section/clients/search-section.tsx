import InputField from "../../components/layout-clients/part/inputfield"

const SearchSection = () => {
  return (
    <div className=" shadow-sm items-center" >
      <div className="bg-blue-500 rounded-bl-[72px] rounded-br-[72px] grid grid-cols-2 items-center">
        <div className="flex flex-col ml-[50px]">  
          <h1 className="text-white text-[32px] font-semibold font-['Open Sans'] leading-10">
              Search Section
          </h1>
        </div>
      </div>
        <InputField/>
    </div>
  )
}

export default SearchSection