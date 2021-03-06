import ButtonEntrar from "../component/Home/ButtonEntrar.jsx";
import EsqueceuSenha from "../component/Home/EsqueceuSenha.jsx";
import '../style/home.css'
import Img1 from '../media/img1.webp'

function Home() {
  return (
    <section id="home">
      <article id="logomarca">
        <h1>Ebytr Tasks</h1>
        <img src={Img1} alt="logo inicial" />
      </article>
      <article id="menulogin">
        <section>
          <h1>Faça o login na sua conta</h1>
          <form action="/action_page">
            <div>
              <label htmlFor="login">Login *</label>
              <br />
              <input type="text" id="login"></input>
            </div>
            <br />
            <div>
              <label htmlFor="password">Senha *</label>
              <br />
              <input type="password" id="password"></input>
            </div>
            <div id="acessar">
              <ButtonEntrar/>
              <EsqueceuSenha/>
            </div>
          </form>
        </section>
      </article>
    </section>
  )
}

export default Home;