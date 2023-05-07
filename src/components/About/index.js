import Header from '../Header'
import './index.css'

const About = () => (
  <div className="app-container">
    <div className="card-container">
      <Header />
      <div className="about-container">
        <div className="about-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
            alt="about"
            className="about-image"
          />
          <h1 className="about-heading">About</h1>
        </div>
        <p className="para">I Love to create! I am a frontend web developer</p>
      </div>
    </div>
  </div>
)

export default About
