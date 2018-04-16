import Layout from '../components/Layout'
import './style.css'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import {Alert} from 'reactstrap'

const Index = (props) => (
  <Layout>
    <h1>GLOBE Media Gallery</h1>
    <div className="container">
      <div className="row">
      {props.media.map(medium => (
        <div className="col-md-4" key={medium.data[0].nasa_id}>
          <Link as={`/media/${medium.data[0].nasa_id}`} href={`/media?id=${medium.data[0].nasa_id}`}
          key={medium.data[0].nasa_id}>
            <img src={medium.links[0].href}/>
          </Link>
        </div>
      ))}
      </div>
    </div>
    <Alert color="danger">Danger!</Alert>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://images-api.nasa.gov/search?q=globe')
  const data = await res.json()

  console.log(`Media data fetched. Count: ${data.collection.items.length}`)
  // console.log(data.collection.items);

  return {
    media: data.collection.items.slice(0,4)
  }
}

export default Index
