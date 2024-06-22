import './home.css'
import SocialIcons from '../../ui/SocialIcons'
import Button1 from '../../ui/Button1'

const Home = () => {
  return (
    <div>

      <section className="home_section">

          <h1 className="home_hero">Hola! Soy Sebastian</h1>
          

          <div className="loader">
            <div className="home_description glitch">Desarrollador Web, Desarrollador Movil y Mentor</div>
          </div>

          <SocialIcons></SocialIcons>
          <Button1></Button1>

          

      </section>



    </div>
  )
}

export default Home