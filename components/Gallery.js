import React from 'react'
import Masonry from 'react-masonry-component'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import {Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const masonryOptions = {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  percentPosition: true,
  gutter: 10
}

export default class Gallery extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      media: []
    }
    this.fetchImages = this.fetchImages.bind(this)
  }

  async fetchImages(){
    const res = await fetch('https://images-api.nasa.gov/search?q=globe')
    const data = await res.json()
    this.setState({
      media: data.collection.items.slice(0,4)
    })
    console.log(`Media data fetched. Count: ${data.collection.items.length}`)
  }

  componentWillMount() {
    this.fetchImages()
  }

  render(){
    return(
      <div>
        <style jsx>{`
          .grid {
            left: 40px !important;
          }
          /* fluid 5 columns */
          .grid-sizer,
          .grid-item {
            width: 20em;
            display: inline;
            position: static !important;
          }
          /* 2 columns wide */
          .grid-item--width2 { width: 40em; }
          img {width: inherit;}
        `}</style>
        <h1>GLOBE Media Gallery</h1>
        <Button onClick={this.fetchImages}>Bootstrap Button!</Button>
        <Masonry
          className={'grid'} // default ''
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
            {this.state.media.map((medium,i) => (
              (i%2 === 0) ?
              (<Link as={`/media/${medium.data[0].nasa_id}`}
                href={`/media?id=${medium.data[0].nasa_id}`}
                key={medium.data[0].nasa_id}>
                  <a><div className="grid-item">
                    <img src={medium.links[0].href}/>
                  </div></a>
              </Link>)
              :
              (<Link as={`/media/${medium.data[0].nasa_id}`}
                href={`/media?id=${medium.data[0].nasa_id}`}
                key={medium.data[0].nasa_id}>
                <a><div className="grid-item grid-item--width2">
                  <img src={medium.links[0].href}/>
                </div></a>
              </Link>)
            ))}
        </Masonry>
      </div>
    )
  }
}
