import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="app-container">
    <div className="card-container">
      <Header />
      <div className="container">
        <div className="notfound-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
            alt="not found"
            className="not-found-image"
          />
          <h1 className="notfound-heading">Not Found</h1>
        </div>
      </div>
    </div>
  </div>
)

export default NotFound
