import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'

const Media =  (props) => (
    <Layout>
       <h1>{props.medium.collection.items[0].data[0].title}</h1>
       <p>{props.medium.collection.items[0].data[0].description}</p>
       <img src={props.medium.collection.items[0].links[0].href}/>
    </Layout>
)

Media.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://images-api.nasa.gov/search?q=&nasa_id=${id}`)
  const medium = await res.json()

  console.log(`Fetched media: ${medium.collection.items[0].data[0].title}`)

  return { medium }
}

export default Media
