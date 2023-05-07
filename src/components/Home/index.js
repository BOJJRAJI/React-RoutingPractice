import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="app-container">
    <div className="card-container">
      <Header />
      <div className="home-container">
        <div className="home-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png "
            alt="home"
            className="home-image"
          />
          <h1 className="home-heading">Home</h1>
        </div>
      </div>
    </div>
  </div>
)

export default Home
