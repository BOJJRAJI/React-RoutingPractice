import Header from '../Header'
import './index.css'

const Contact = () => (
  <div className="app-container">
    <div className="card-container">
      <Header />
      <div className="contact-container">
        <div className="contact-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/contact-blog-img.png"
            alt="contact"
            className="contact-image"
          />
          <h1 className="contact-heading">Contact</h1>
        </div>
      </div>
    </div>
  </div>
)

export default Contact
