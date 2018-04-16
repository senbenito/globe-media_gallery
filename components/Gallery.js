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
      <div className="container">
        <div className="row">
          {this.state.media.map((medium,i) => (
            (i<3) ?
            (<Link as={`/media/${medium.data[0].nasa_id}`}
              href={`/media?id=${medium.data[0].nasa_id}`}
              key={medium.data[0].nasa_id}>
                <div className="col-sm"><a>
                  <img src={medium.links[0].href}/>
                </a></div>
            </Link>)
            :
            (<p key="text1">Hello!</p>)
          ))}
        </div>
      </div>
    )
  }
}
