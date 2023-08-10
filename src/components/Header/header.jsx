import logo from '../../images/Logo.svg'
import './header.scss'

export default function Header() {
  return (
    <header className="header">
      <h1 style={{ contentVisibility: 'hidden' }}>Поиск Авиабилетов</h1>
      <div className="header_logo-wrapper">
        <img src={logo} alt="aviasales" className="header_logo" />
      </div>
    </header>
  )
}
