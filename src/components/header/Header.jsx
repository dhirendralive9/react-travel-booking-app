import { faBed, faPlane, faCar, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="headerContainer">
            <div className="headerList">
                     <div className="headerListItem active">
                     <FontAwesomeIcon icon={faBed} />
                     <span>Stays</span>
                     </div>
                      <div className="headerListItem">
                     <FontAwesomeIcon icon={faPlane} />
                     <span>Flights</span>
                     </div>
                     <div className="headerListItem">
                     <FontAwesomeIcon icon={faCar} />
                     <span>Car rentals</span>
                   </div>
                      <div className="headerListItem">
                     <FontAwesomeIcon icon={faBed} />
                      <span>Attractions</span>
                      </div>
                     <div className="headerListItem">
                      <FontAwesomeIcon icon={faTaxi} />
                      <span>Airport taxis</span>
                    </div>
            </div>
            <h1 className="headerTitle">Book Hotels around the world,with best price.</h1>
            <p className="headerDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sunt nostrum, nam optio fuga doloribus eligendi commodi maiores natus necessitatibus</p>
            <button className="headerBtn">Sign in / Register</button>
      </div>
    </div>
  )
}

export default Header