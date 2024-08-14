import React, { useState } from 'react';
import './w3.css';
import './google.css';
import Sidebar from './components/Sidebar';
import Topmenu from './components/Topmenu';
import Pagecontent from './components/Pagecontent';
import Pagination from './components/Pagination';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [PhotoArr1, setPhotoArr1] = useState([
    { no: 1, img: 'images/sandwich.jpg', title: 'The Perfect Sandwich, A Real NYC Classic', content: 'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.',},
    { no: 2, img: 'images/steak.jpg', title: 'Let Me Tell You About This Steak', content: 'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.',},
    { no: 3, img: 'images/cherries.jpg', title: 'Cherries, interrupted', content: 'Lorem ipsum text praesent tincidunt ipsum lipsum. What else?',},
    { no: 4, img: 'images/wine.jpg', title: 'Once Again, Robust Wine and Vegetable Pasta', content: 'Lorem ipsum text praesent tincidunt ipsum lipsum.',},
  ]);

  const [PhotoArr2, setPhotoArr2] = useState([
    { no: 5, img: 'images/popsicle.jpg', title: 'All I Need Is a Popsicle', content: 'Lorem ipsum text praesent tincidunt ipsum lipsum.',},
    { no: 6, img: 'images/salmon.jpg', title: 'Salmon For Your Skin', content: 'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.',},
    { no: 7, img: 'images/sandwich.jpg', title: 'The Perfect Sandwich, A Real Classic', content: 'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.',},
    { no: 8, img: 'images/croissant.jpg', title: 'Le French', content: 'Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.',},
  ]);
  
  return (
    <>
      <Sidebar />
      <Topmenu />
      <div className="w3-main w3-content w3-padding" style={ {maxWidth: '1200px', marginTop: '100px'} }>
        <div className="w3-row-padding w3-padding-16 w3-center" id="food">
          {
            PhotoArr1.map((item, idx) => {
              return <Pagecontent key={item.no} item={item} />
            })
          }
        </div>
        <div className="w3-row-padding w3-padding-16 w3-center" id="food">
          {
            PhotoArr2.map((item, idx) => {
              return <Pagecontent key={item.no} item={item} />
            })
          }
        </div>
        
        <Pagination />
        <hr id="about" />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;