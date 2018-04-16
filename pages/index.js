import Layout from '../components/Layout'
import './style.css'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import {Alert} from 'reactstrap'

const Index = () => (
  <Layout>
    <h1>GLOBE Media Gallery</h1>
    <div>
      {props.media.map(medium => (
        <Link as={`/media/${medium.data[0].nasa_id}`} href={`/media?id=${medium.data[0].nasa_id}`}
        key={medium.data[0].nasa_id}>
          <a><img src={medium.links[0].href}/></a>
        </Link>
      ))}
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
