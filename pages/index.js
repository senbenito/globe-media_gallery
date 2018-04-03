import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>GLOBE Media Gallery</h1>
    <ul>
      {props.media.map(medium => (
        <li key={medium.id}>
          <Link as={`/media/${medium.id}`} href={`/media?id=${medium.id}`}>
            <a>{medium.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://images-api.nasa.gov/search')
  const data = await res.json()

  console.log(`Media data fetched. Count: ${data.length}`)

  data.medium = []
  data.map(e=>{
     data.medium.push(e.show)
  })

  return {
    media: data.medium,
  }
}

export default Index
