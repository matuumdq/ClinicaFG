import { useParams } from 'react-router-dom'
import { tratamientos } from '../db'

const SingleTrat = () => {
    const { name } = useParams()
    console.log(name)

    const tratamiento = tratamientos.find((trat) => trat.name === name)
    console.log(tratamiento)

  return (
    <div>{tratamiento.name}</div>
  )
}

export default SingleTrat