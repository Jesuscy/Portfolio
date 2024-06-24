import { Formacion } from '../comon/Formacion'
import { Navbar } from '../comon/Navbar'
import { Proyectos } from '../comon/Proyectos'
import '../index.css'

export const Home = () => {
  return (
    <>
    <Navbar/>
    <Formacion/>
    <Proyectos/>
    </>
    )
}
