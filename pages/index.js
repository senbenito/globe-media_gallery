import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>GLOBE Media Gallery</h1>
    <ul>
      {props.media.map(medium => (
        <li key={medium.data[0].nasa_id}>
          <Link as={`/media/${medium.data[0].nasa_id}`} href={`/media?id=${medium.data[0].nasa_id}`}>
            <a>
              <img src={`https://images-assets.nasa.gov/image/${medium.data[0].nasa_id}/${medium.data[0].nasa_id}~thumb.jpg`}/>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://images-api.nasa.gov/search?q=globe')
  const data = await res.json()

  console.log(`Media data fetched. Count: ${data.collection.items.length}`)
  // console.log(data.collection.items);

  return {
    media: data.collection.items
  }
}

export default Index
