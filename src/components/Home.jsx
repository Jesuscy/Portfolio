import { Formacion } from '../comon/Formacion'
import { Navbar } from '../comon/Navbar'
import { Presentacion } from '../comon/Presentacion'
import { Proyectos } from '../comon/Proyectos'
import '../index.css'

export const Home = () => {
  return (
    <>
    <div className='w-full flex flex-col bg-zinc-900'>
    <Navbar/>
    <Presentacion/>
    <Formacion/>
    <Proyectos/>
    </div>
    </>
    )
}
