import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
// require('dotenv').config();


function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([])
  const changeHandler = (e) => {
    setSearch(e.target.value);
  }
  const SubmitHandler = async (e) => {
    e.preventDefault(); // prevent page reload

    // getting photo details from flickr api
    try {
      await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${process.env.REACT_APP_API_KEY}&tags=${search}&per_page=10&format=json&nojsoncallback=1`).then((res) => {

        setData(res.data.photos.photo);  // set data to state variable data 
        console.log(res.data.photos.photo);
      })
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Navbar/>
      <section class="py-5 my-3 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Gallery snapshots</h1>
            <p class="lead text-body-secondary">Gallery snapshots is an online platform where you can search for and discover a vast collection of images. Whether you're looking for beautiful landscapes, stunning portraits, or captivating abstracts, you'll find a wide variety of images to choose from.</p>
            <form onSubmit={SubmitHandler} className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search Images here..." aria-label="Search Images here..." value={search} onChange={changeHandler} />
              {/* <input className="btn btn-outline-primary" type="submit" value={}>Search</input> */}
              <input className='btn btn-primary' type="submit" name='Search' />
            </form> 
          </div>
        </div>
      </section>
      <div className='container'>
        <center>
          
          {data.length >= 1 ?
            <Gallery data={data} />
            : <h3>No images loaded</h3>}
        </center>

      </div>
    </>
  );
}

export default App;
