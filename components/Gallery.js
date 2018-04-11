import React from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

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
        <h1>GLOBE Media Gallery</h1>
        {this.state.media.map((medium,i) => (
          (i%2 === 0) ?
          (<Link as={`/media/${medium.data[0].nasa_id}`}
            href={`/media?id=${medium.data[0].nasa_id}`}
            key={medium.data[0].nasa_id}>
              <a><div className="alert-primary">
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
      </div>
    )
  }
}
