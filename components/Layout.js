import Header from './Header'
import Galleria from './Galleria'

const galleriaTheme = () => (
  Galleria
  .loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/themes/classic/galleria.fullscreen.min.js')
  .run('.galleria', {
    transition: 'fade',
    imageCrop: true,
  })
)

const Layout = (props) => (
  <div>
    <Header />
    <div>
      {props.children}
    </div>
    <Galleria onLoad={galleriaTheme}/>
    <style jsx global>{`
      .galleria{
        max-width: 700px;
        height: 100px;
        background: white;
      }
    `}</style>
  </div>
)

export default Layout
