import { styled } from "styled-components";
import PieChart from "./components/PieChart";
import bg from './assets/weathers.jpg'
import slider from './assets/slider.png'
import { BsPlusLg, BsToggle2Off, BsSunrise, BsSunset, BsSun, BsThermometerHigh } from 'react-icons/bs'
import { TbUmbrella, TbTemperatureCelsius, TbTemperatureFahrenheit, TbLocation } from 'react-icons/tb'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { FiMoreHorizontal, FiWind } from 'react-icons/fi'
import { LuDroplets, LuCloudRain } from 'react-icons/lu'
import FeelsLike from "./components/FeelsLike";


function App() {
  return (
    <Container>
      <Dashboard>
        <LeftSection>
          <Weather>
            <FirstIcons>
              <BsPlusLg className='plus'/>
              <img src={slider}/>
              <div className='temp-icons'>
                <TbTemperatureCelsius color="white" size="20"/>
                <BsToggle2Off className='toggle'/>
                <TbTemperatureFahrenheit color="white" size="20"/>
              </div>
            </FirstIcons>
            <PlaceSection>
              <div className="place">
                <span><TbLocation/>NewYork, USA</span>
                <span>Today 28 Sept</span>
              </div>
              <div className="time">
                <span><BsSunrise/>07:19</span>
                <span><BsSunset/>19:32</span>
              </div>
            </PlaceSection>
            <Temperature>
              <FaChevronLeft style={{cursor:"pointer", color:"#9DC3EF"}} size="20"/>
              <div class='temp-value'>
                <h1>27<TbTemperatureCelsius/></h1>
                <span><BsSun/>Sunny</span>
              </div>
              <FaChevronRight style={{cursor:"pointer", color:"#9DC3EF"}} size="20"/>
            </Temperature>
          </Weather>
        </LeftSection>

        <RightSection>
          <RightValue>
            <Header>
              <LeftHeader>
                <h3>Welcome back Isabella!</h3>
                <span>Check out today's weather information</span>
              </LeftHeader>
              <RightHeader>
                <FiMoreHorizontal size="25" style={{cursor:"pointer"}}/>
                <Profile src={bg}/>
              </RightHeader>
            </Header>

            <Chart>
              <ChartTitle>
                <h3>Upcoming hours</h3>
                <RainFilter>Rain Precipitation</RainFilter>
                <NextFilter>Next days <FaChevronRight/></NextFilter>
              </ChartTitle>
            </Chart>

            <WeatherFactors>
              <h3>More details of today's weather</h3>
              <Columns>
                <Wrap>
                  <WrapTitle>
                    <h5>Humidity</h5>
                    <LuDroplets className="col-icon"/>
                  </WrapTitle>
                  <h4>82% <span>bad</span></h4>
                </Wrap>

                <Wrap>
                  <WrapTitle>
                    <h5>Wind</h5>
                    <FiWind className="col-icon"/>
                  </WrapTitle>
                  <PieChart/>
                </Wrap>

                <Wrap>
                  <WrapTitle>
                    <h5>Precipitation</h5>
                    <LuCloudRain className="col-icon"/>
                  </WrapTitle>
                  <h4>1.4 cm</h4>
                </Wrap>

                <Wrap>
                  <WrapTitle>
                    <h5>UV Index</h5>
                    <BsSun className="col-icon"/>
                  </WrapTitle>
                  <h4>4 medium</h4>
                </Wrap>

                <Wrap>
                  <WrapTitle>
                    <h5>Feels Like</h5>
                    <BsThermometerHigh className="col-icon"/>
                  </WrapTitle>
                  <FeelsLike/>
                </Wrap>

                <Wrap>
                  <WrapTitle>
                    <h5>Chance Of Rain</h5>
                    <TbUmbrella className="col-icon"/>
                  </WrapTitle>
                  <h4>42%</h4>
                </Wrap>

              </Columns>
            </WeatherFactors>
          </RightValue>
        </RightSection>
      </Dashboard>
      <FeelsLike/>
    </Container>
  );
}

export default App;

const Container = styled.section`
  min-height: 100vh;
  background: #B4D7FE;
  overflow: hidden;
  display: grid;
  place-content: center;

`
const Dashboard = styled.div`
  height: 95vh;
  width: 70vw;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: url(${bg}) no-repeat;
  overflow: hidden;
`
const LeftSection = styled.div`
  height: 100%;
  width: 30%;
  color: #fff;
`
const Weather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap:40px;
  padding:50px;
`
const FirstIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size:30px;

  img{
    transform: scale(1.5);
    cursor:pointer;
  }
  .plus{
    color:#5D9CE5;
    padding: 5px;
    background: #fff;
    border-radius: 11px;
    cursor:pointer;
  }
  .temp-icons{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 5px;
  }
  .toggle{
    color: #fff;
    cursor:pointer;
  }
`
const PlaceSection = styled.div`
  display: flex;
  justify-content:space-between;
  pointer-events:none;
  .time,
  .place{
    display: flex;
    flex-direction: column;
    gap: 5px;
    span{
      display: flex;
      align-items:center;
      gap: 5px;
    }
  }

`
const Temperature = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;

  .temp-value{
    display: flex;
    flex-direction: column;
    justify-content:center;
    gap: 20px;
    pointer-events:none;

    h1{
      font-size:60px;
    }
    span{
      display: flex;
      align-items:center;
      gap: 5px;
      margin-left: 10px;
    }
  }
`

const RightSection = styled.div`
  height: 100%;
  flex:1;
  border-radius: 25px;
  background: #E4F1FF;
`
const RightValue = styled.div`
  padding:40px 50px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 30px;
  color:#3B3B3B;
  @media(max-width: 1500px){
    gap: 20px;
  }
`

const Header = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
`
const LeftHeader = styled.div`
  pointer-events:none;
`
const RightHeader = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`
const Profile = styled.img`
  width: 50px;
  height: 50px;
  background-size: cover;
  border-radius: 13px;
  cursor: pointer;
`
const Chart = styled.div`
  height: 300px;
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 30px;

  @media(max-width: 1500px) {
    height: 250px;
  }
`
const ChartTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:30px;
  h3{
    flex:1;
    pointer-events:none;
  }
`
const RainFilter = styled.div`
  background: #F1F1F1;
  padding: 5px 10px;
  border-radius: 13px;
  color: gray;
  cursor: pointer;
  transition: all 100ms ease-in-out;

  &:hover{
    color: black;
  }
`
const NextFilter = styled(RainFilter)`
  display:flex;
  align-items: center;
  gap: 5px;
`
const WeatherFactors = styled.div`
  h3{
    margin: 25px 0px;
    pointer-events:none;

    @media(max-width: 1500px){
      margin: 0px 0px 15px 0px;
    }
  }
`
const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;

  @media(max-width: 1500px){
    gap: 20px;
  }
`
const Wrap =styled.div`
    height: 150px;
    border-radius: 35px;
    overflow: hidden;
    background: #fff;
    padding: 15px 20px;
    display:flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    @media(max-width: 1500px){
      height: 120px;
    }

    h5{
      pointer-events:none;
    }
`
const WrapTitle = styled.div`
  width:100%;
  display:flex;
  justify-content: space-between;
  align-items: center;

  .col-icon{
    background:#5C9CE5;
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius:10px;
    color: white;

    @media(max-width: 1500px){
      width: 20px;
      height: 20px;
      border-radius:5px;
    }
  }
`