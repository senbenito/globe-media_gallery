import Layout from '../components/Layout'
import Galleria from '../components/Galleria'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const galleriaTheme = () => (
  Galleria
  .loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/themes/classic/galleria.fullscreen.min.js')
  .run('.galleria', {
    transition: 'fade',
    imageCrop: true,
  })
)

const Index = (props) => (
  <Layout>
    <h1>GLOBE Media Gallery</h1>
    <div className={'galleria'}>
      {props.media.map(medium => (
        <Link as={`/media/${medium.data[0].nasa_id}`} href={`/media?id=${medium.data[0].nasa_id}`}>
          <a><img src={`https://images-assets.nasa.gov/image/${medium.data[0].nasa_id}/${medium.data[0].nasa_id}~thumb.jpg`}/></a>
        </Link>
      ))}
    </div>
    <Galleria onLoad={galleriaTheme}/>
    <style jsx global>{`
      .galleria{
        max-width: 700px;
        height: 100px;
        background: white;
      }
    `}</style>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://images-api.nasa.gov/search?q=globe')
  const data = await res.json()

  // console.log(`Media data fetched. Count: ${data.collection.items.length}`)
  console.log(data.collection.items);

  return {
    media: data.collection.items
  }
}

export default Index
