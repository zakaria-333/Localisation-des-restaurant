import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState, useEffect } from 'react';
import "../node_modules/leaflet/dist/leaflet.css";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';





function Search() {



  const icon = L.icon({ // create an icon object
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3179/3179068.png', // replace with the path to your icon
    iconSize: [25, 25],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
    shadowAnchor: [12, 41]
  });

  const [cities, setCities] = useState([]);
  const [zones, setZones] = useState([]);
  const [specialite, setSpecialite] = useState([]);
  const [bool, setBool] = useState(true);
  const [currentZoneId, setCurrentZoneId] = useState('');
  const [currentSpecialiteId, setCurrentSpecialiteId] = useState('');
  const [restaurant, setRestaurant] = useState([]);
  const [showMap, setTrue] = useState(false);
  const [variant, setVariant] = useState("");

  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const close = () => setShowA(false);
  




  useEffect(() => {
    fetch('https://dull-toad-threads.cyclic.app/api/cities/')
      .then(resultat => resultat.json())
      .then(data => setCities(data))
      .catch(error => console.log(error));
  }, []);

  function handleChange(e) {
    const cityId = e.target.value;
    const url1 = `https://dull-toad-threads.cyclic.app/api/zones/city/${cityId}`;
    const url2 = 'https://dull-toad-threads.cyclic.app/api/specialite/';
    fetch(url1)
      .then(resultat => resultat.json())
      .then(data => {
        setZones(data);
        setBool(false);
      })
      .catch(error => console.log(error));
    fetch(url2)
      .then(resultat => resultat.json())
      .then(data => setSpecialite(data))
      .catch(error => console.log(error));
  }

  function handleZoneChange(e) {
    try {
      setCurrentZoneId(e.target.value);
      
    }
    catch (error) {
      console.log(error.message)
    }
  }

  function handleSpecialiteChange(e) {
    setCurrentSpecialiteId(e.target.value);
   
    
  }



  function handleClick() {
    setRestaurant("");
    setShowA(false);
    

    var div = document.getElementById("monDiv");
    div.style.display = 'none';
    if (!currentSpecialiteId || !currentZoneId || currentSpecialiteId=='default' ||currentZoneId=='default') {

      div.style.display = "block";
      return;
    }
    setVariant("dark");
    div.style.display = "none";
    const url = `https://dull-toad-threads.cyclic.app/api/restaurant/${currentZoneId}/${currentSpecialiteId}`;
    console.log(url)
    fetch(url)
      .then(resultat => resultat.json())
      .then(data => {
        setRestaurant(data);
        setTrue(true);
        if (data.length === 0) {
          setShowA(true);
        }
      })
      .catch(error => console.log(error));
  }



  return (

    <div>
      <div className="container mb-6 overflow">
        <div className="row">
          <div className="col-md-4">
            <select className="form-select mb-2" onChange={handleChange}>
              <option defaultValue value={'default'}>Selectionner une ville</option>
              {cities.map((element) => (
                <option key={element._id} value={element._id}>
                  {element.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <select className="form-select mb-2" disabled={bool} onChange={handleZoneChange}>
              <option defaultValue value={'default'}>Selectionner une Zone</option>
              {zones.map((element) => (
                <option key={element._id} value={element._id}>
                  {element.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <select className="form-select mb-2" disabled={bool} onChange={handleSpecialiteChange}>
              <option defaultValue value={'default'}>Selectionner une specialité</option>
              {specialite.map((element) => (
                <option key={element._id} value={element._id}>
                  {element.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12 d-flex justify-content-center">
            <button type="button" className="btn btn-primary mb-2" onClick={handleClick}>Chercher</button>
          </div>
          <div id='monDiv' className="alert alert-danger text-center" role="alert" style={{ display: 'none' }}>
            Veuillez choisir tout les choix.
          </div>
        </div>
      </div>

      <div className="container md mb-6 overflow-auto">
        <div className="row justify-content-between">



          <div className='col-md-6 mb-4'>
            <Carousel variant={variant}>
              {Array.isArray(restaurant) ? (
                restaurant.map((element, index) => (
                  <Carousel.Item key={index}>
                    <Card>
                      <Card.Img variant="top" src={element.photo[0]} style={{ height: "300px" }} />
                      <Card.Body>
                        <Card.Title>{element.name}</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <div className="d-flex justify-content-center mb-5">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target={`#exampleModal${element._id}`}
                          >
                            Plus de details
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>

                ))
              ) : (
                <div></div>
              )}
            </Carousel>
            {Array.isArray(restaurant) ? (
              restaurant.map((element, index) => (
                <div
                  className="modal fade"
                  id={`exampleModal${element._id}`}
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" style={{ maxWidth: "800px" }}>
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          {element.name}
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <Carousel>
                          {element.photo.map((photo) => (
                            <Carousel.Item>
                              <img src={photo} style={{ borderRadius: '20px' }} className="d-block w-100" height={500} />
                            </Carousel.Item>
                          ))}
                        </Carousel>
                        <br />
                        <ul>
                          <li>Le nom : {element.name}</li>
                          <li>L'adresse : {element.adresse}</li>
                          <li>Le restaurant ouvre à : <strong>{element.ouvert} AM</strong> et ferme à : <strong>{element.fermé} PM</strong></li>
                        </ul>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

              ))
            ) : (
              <div></div>
            )}
          </div>



          <div className='col-md-5'>
            <Toast show={showA} onClose={close} bg={'info'} style={{width: 500}}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">ALERT</strong>
                <small>Maintenant</small>
              </Toast.Header>
              <Toast.Body>Il n'y a pas de tel restaurant dans cette zone</Toast.Body>
            </Toast>

            {showMap && restaurant.length > 0 ? (
              <MapContainer center={[33.34792313689969, -8.032412098586988]} zoom={8} style={{ height: '450px' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="Map data © OpenStreetMap contributors"
                />
                {restaurant.map(element => (
                  <Marker key={element.name} position={[element.latitude, element.longitude]} icon={icon}>
                    <Popup>
                      {element.name}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            ) : (
              <div>

              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  )
}

export default Search
