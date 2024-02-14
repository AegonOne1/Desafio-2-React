import './App.css'
import SocialButton from './componenets/socialButton'

function App() {

  const buttonsData = [
    {
        img: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-facebook-5.png' ,
        url: 'https://web.facebook.com/?locale=es_LA&_rdc=1&_rdr',
        ref: 'Icono de facebook',
    },
    {
        img: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-5.png',
        url: 'https://github.com/',
        ref: 'Icono de Github'
    },
    {
        img: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-5.png',
        url: 'https://cl.linkedin.com/',
        ref: 'Icono de Linkedin',
    }
]

  return (
    <>
    <h1>app</h1>
    <SocialButton buttons={buttonsData} />
    </>
  )
}

export default App
