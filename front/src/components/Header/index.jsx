import './style.css'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

const textoOpcoes = ['Categorias', 'Favoritos', 'Estante',]
const icones = ['/images/perfil.svg', '/images/sacola.svg']

export default function Header() {
  return (
    <header className='App-header'>
        <Link to='/'><Logo /></Link>
        <ul className='opcoes'>
          {textoOpcoes.map(texto => (
            <li key={texto} className='opcao'><Link to={`/${texto.toLowerCase()}`}><p>{texto}</p></Link></li>
          ))}
        </ul>

        <ul className='icones'>
          {icones.map(icone => (
            <li key={icone}><img src={icone}/></li>
          ))}
        </ul>
      </header>
  )
}