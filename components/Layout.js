import Header from './Header'
import Gallery from './Gallery'


const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Gallery />
    <Header />
    {props.children}
  </div>
)

export default Layout
