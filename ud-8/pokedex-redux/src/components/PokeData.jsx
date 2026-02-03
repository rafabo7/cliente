import { useSelector } from "react-redux"
import { selectSprites } from "../redux/pokedexSlice"
import './pokedata.css'
import Loading from "./Loading"

function PokeData(props) {

  const { data: sprite, status} = useSelector(selectSprites)
  

  return (
    <>
      <h2>PokeData</h2>
      <div className='poke-sprite'>
        {
          sprite && <img alt="pokemon image" src={sprite}  />
        }
        {
          status == 'loading' && <Loading />
        }
      </div>
    </>
  )
}

export default PokeData
