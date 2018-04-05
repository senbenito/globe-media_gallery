import Link from 'next/link'
import Gallery from 'react-photo-gallery'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>GLOBE Media Gallery</h1>
    <Gallery photos={props.photos} columns={5} />

  </Layout>
)

let makeGalleryArray = (imageObj) => {
  return {nasa_id: imageObj.data[0].nasa_id,
    src: imageObj.links[0].href,
    width: 1,
    height: 1}
}

Index.getInitialProps = async function() {
  const res = await fetch('https://images-api.nasa.gov/search?q=globe')
  const data = await res.json()
  const photos = await data.collection.items.map(datum => makeGalleryArray(datum))

  console.log(`Media data fetched. Count: ${data.collection.items.length}`)

  return {
    media: data.collection.items,
    photos: photos
  }
}

export default Index
