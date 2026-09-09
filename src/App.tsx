
import { Suspense, useState } from 'react'
import { Hero } from './Component/Hero'
import { Nav } from './Component/Nav'
import Players from './Component/Players/Players'
import type { Player } from './Type'
import { NewsLetter } from './Component/NewsLetter'
import { Footer } from './Component/Footer'


const PlayerPromise = async (): Promise<Player[]> => {
  const res = await fetch("Player.json")
  const data = await res.json()

  return data;
}



const PlayerPormise = PlayerPromise()
function App() {
  // const PlayerPormise = PlayerPromise()
  
  const [Coin, setCoin] = useState(3000000)

  return (
    <>
      <Nav Coin={Coin} setCoin={setCoin}></Nav>
      <Hero></Hero>
      <Suspense>
        <Players PlayerPormise={PlayerPormise} Coin={Coin} setCoin={setCoin}></Players>
      </Suspense>
      <NewsLetter></NewsLetter>
      <Footer></Footer>

    </>
  )
}

export default App
