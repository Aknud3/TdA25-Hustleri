import GreyBox from "../components/GreyBox"
import Header from "../components/Header"
import InfoBox from "../components/InfoBox"
import LineBreak from "../components/LineBreak"
import infoBlue from '../assets/infoBlue.svg'
import infoRed from '../assets/infoRed.svg'


function App() {

  return (
    <>
      <Header />
      <div id="mainCont"
        className="px-[10rem] pb-24"
      >
        <GreyBox /> 
        <LineBreak></LineBreak>    
        <div className="flex space justify-center items-center gap-32">
          <InfoBox 
            color='text-mainBlue'
            bgColor='bg-lightBlue'
            icon={infoBlue}
            text='Jsme nezisková organizace zaměřená na rozvoj myšlení studentů i široké
          veřejnosti.'

          />
          <InfoBox 
            color='text-mainRed'
            bgColor='bg-lightRed'
            icon={infoRed}
            text='Naše aplikace ti umožní procvičovat piškvorky a stát se tím nejlepším!'
          />
        </div> 
      </div>
    </>
  )
}

export default App
