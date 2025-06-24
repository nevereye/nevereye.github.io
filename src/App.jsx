import './App.css'
import Card from './Card'
import Footer from './Footer'
import Navbar from './Navbar'
import { useRef } from 'react'

function App() {
  const aboutRef = useRef(null)
  const galleryRef = useRef(null)
  const contactRef = useRef(null)

  const images = import.meta.glob('/public/gallery/*.{png,jpg,jpeg,svg}', { eager: true });
  const imageList = Object.values(images).map((image, index) => (
    <Card key={index} src={image.default} name={image.default} />
  ));

  return (
    <>
      <img className='banner_img' src="gallery/Red.png" />
      <Navbar aboutRef={aboutRef} galleryRef={galleryRef} contactRef={contactRef} />

      <div className='banner'>
        <img src="pfp.png" />
        <h1>nevereye</h1>
        <h2>Digital Artist / Web Devloper</h2>
      </div>

      <div className='body'>
        <div ref={aboutRef} className='about'>
          <h2>About Me</h2>
          <p>
            Welcome to my personal website where i share some of my work. I am nevereye, and I am a digital artist/web developer. This is where I put all my relevant experiences and work. 
            Currently this website is still under construction. 
          </p>
        </div>

        <div ref={galleryRef} className='gallery'>
          <h2>Gallery</h2>
          {imageList}
        </div>

        <div className='short_film'>
        </div>
      </div>

      <Footer contactRef={contactRef} />
    </>
  )
}

export default App
