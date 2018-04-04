import Header from './Header'
import Galleria from './Galleria'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const galleriaStyle = {
  maxWidth: 700,
  height: 400,
  background: '#000'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Galleria />
    <Header />
    <div className={galleriaStyle}>
      {props.children}
    </div>
  </div>
)

export default Layout
