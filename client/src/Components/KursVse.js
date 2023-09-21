import React, { Component } from "react";
import { useCallback } from 'react';
import { useState } from "react";
import PropTypes from 'prop-types'
import {
  Card,
  Modal
} from "react-bootstrap";
import './HeartButton.css';

import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Button
} from "react-bootstrap";
//import IdeasInMyList_SLIDE_2 from './IdeasInMyList_SLIDE_2';
//import {testFunction} from './IdeasInMyList_SLIDE_2'
//import {addSlide} from './IdeasInMyList_SLIDE_2'
//import {addSlide} from './IdeasInMyList_SLIDE_2';
//const data1 = [1, 2, 3, 4, 5];
/*const data1 = [{r030: 36, txt: 'Австралійський долар', rate: 19.3653, cc: 'AUD', exchangedate: '29.11.21'},
               {r030: 124, txt: 'Канадський долар', rate: 21.235, cc: 'CAD', exchangedate: '29.11.21'},
               {r030: 156, txt: 'Юань Женьміньбі', rate: 4.2413, cc: 'CNY', exchangedate: '29.11.21'},
               {r030: 191, txt: 'Куна', rate: 4.0646, cc: 'HRK', exchangedate: '29.11.21'},
               {r030: 203, txt: 'Чеська крона', rate: 1.1921, cc: 'CZK', exchangedate: '29.11.21'}];*/


/*  const addSlide = require("./IdeasInMyList_SLIDE_2").addSlide;
const dataFromParent = require("./IdeasInMyList_SLIDE_2").dataFromParent;
function AddSlide() { return (
  console.log('НАЖАТО'),
  () => dataFromParent()
  //() => addSlide()
); }        */


            /*   async function Data11() {
                 //let data1 =  new Array();
                 //let api_url1=0;
                 var api_url1 = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
                 var data1 = await api_url1.json();
                 return(
                   data1
                 )
               }
               Data11();
               const data1 = Array(Data11());
               console.log(data1);                    */

               const movieList = [
                {
                  id: 1,
                  title: 'Movie 1',
                  description: 'This is the description of Movie 1.',
                },
                {
                  id: 2,
                  title: 'Movie 2',
                  description: 'This is the description of Movie 2.',
                },
                {
                  id: 3,
                  title: 'Movie 3',
                  description: 'This is the description of Movie 3.',
                },
              ];

               function RandArray(array){
                   var rand = Math.random()*array.length | 0;
                   var rValue = array[rand];
                   return rValue;
               }
               var myArray = ['secondary', 'success', 'warning', 'info', 'light', 'primary', 'danger'];
              
         
              


 export default function KursVse(props) {


//const handleClick = useCallback(()=>AddSlide(), []);

const [search, setSearch] = useState('');

const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };




  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (dat1) => {
    setSelectedMovie(dat1);
  };

  const handleClose = () => {
    setSelectedMovie(null);
  };


return (
  <div>
  
  {/*<div> 
                <FormControl
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Search movies'
                  className="mr-sm-2"
                />&emsp;
                <p></p>
                <Button variant="outline-info mt-1">Search</Button>

      <div>
      {props.data1.results.filter(dat1 => {
                return search.toLowerCase() === ''
                  ? dat1
                  : dat1.title.toLowerCase().includes(search);
              })
              .map(dat1 => (
                <div>
                  <p>{dat1.title}</p>
                  <p>{dat1.popularity}</p>
                  <p>{dat1.vote_average}</p>
                  <p>{dat1.original_language}</p>
                </div>
              ))}

      
      
      </div>   
               
  </div> */}

  <p>{ props.error }</p>
  { props.id1 &&             /* props.key1   */
    <div>
        <p>{<div><p>&nbsp;&nbsp;&nbsp;</p></div>}</p>
        <div> 
                <FormControl
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Search movies'
                  className="mr-sm-2"
                />&emsp;
                <p></p>
                <Button variant="outline-info mt-1">Search</Button>

      </div>
        <p>{        
             /*props.data1.results*/
             props.data1.results.filter(dat1 => {
              return search.toLowerCase() === ''
                ? dat1
                : dat1.title.toLowerCase().includes(search);
            })
             .map(dat1 => (

              /*   <Card
                    bg={RandArray(myArray)}
                    key={dat1.r030}
                    text={'black'}
                    //text={Card.background === 'light' ? 'black' : 'black'}
                    style={{ width: '18rem', display: 'inline-block', margin: '15px'}}
                    className="mb-3"
                  >
                  <Card.Header>Header</Card.Header>
                    <Card.Body>

                   <Card.Title>{dat1.txt} Название валюты: Card Title </Card.Title>
                       <Card.Text>
                   <p>Курс: <strong>{dat1.rate}</strong></p>
                   <p>Сокращенное имя валюты: <strong>{dat1.cc}</strong></p>
                   <p>Дата: {dat1.exchangedate}</p>
                   <p>    </p>
                       </Card.Text>
                     </Card.Body>
                   </Card>   */

                <Card

                //   bg={RandArray(myArray)}
                   border={RandArray(myArray)}
                   bg={'black'}
                

                   key={dat1.id} //   key={dat1.item.key}  FOR TODO
                   text={'gray'}
                   //text={Card.background === 'light' ? 'black' : 'black'}
                   style={{ width: '18rem', display: 'inline-block', margin: '15px', borderWidth: '3px'}}
                   className="mb-3"
                //   onClick={() => console.log('ZHOPA 1')}
                //    onClick={() => console.log('НАЖАТА НАЖАТА')}

                  //  onClick={() => props.addSlide()}                  КЛІКАЄМО ПО КАРТОЧЦІ
                  

                 >

<Card.Header style={{ color: 'white'}}>The Movie</Card.Header>
{isHovered ? (
        <Card.Body>
          <Card.Title>"{dat1.title}"</Card.Title>
          {/*<Card.Text>This content is displayed when hovering.</Card.Text>*/}
          <Card.Text><p>OVERVIEW: <strong>{dat1.overview}</strong></p></Card.Text>
          <img
src={`https://image.tmdb.org/t/p/w300${dat1.poster_path}`}
alt="Movie Poster"
style={{
margin: '2px 2px 2px 2px',
width: '100%',    // Set the width of the image to 100% of the container
height: '100%',   // Set the height of the image to 100% of the container
objectFit: 'cover' // Use object-fit to cover the container
}}                onClick={() => handleCardClick(dat1)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
/>
        </Card.Body>
      ) : (
<Card.Body>

{/*  <Card.Title>LINK: {dat1.item.link} Card Title </Card.Title>
   <Card.Text>
<p>PRICE: <strong>{dat1.item.price}</strong></p>
<p>ACTIVITY: <strong>{dat1.item.activity}</strong></p>
<p>TYPE: {dat1.item.type}</p>
<p>PARTICIPANTS: <strong>{dat1.item.participants}</strong></p>
<p>ACCESSIBILITY: {dat1.item.accessibility}</p>
<p>    </p>
   </Card.Text> */}
<div>

<img
src={`https://image.tmdb.org/t/p/w300${dat1.poster_path}`}
alt="Movie Poster"
style={{
margin: '2px 2px 2px 2px',
width: '100%',    // Set the width of the image to 100% of the container
height: '100%',   // Set the height of the image to 100% of the container
objectFit: 'cover' // Use object-fit to cover the container
}}                onClick={() => handleCardClick(dat1)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
/>

</div>


{/*<Card.Title>ADULT: {dat1.adult} Card Title </Card.Title>*/}
   <Card.Text>
   <div style={{ display: 'inline-block',
                 
                 width: '100%', // Adjust the width as needed
                 padding: '10px', // Adjust the padding as needed
                 border: '1px #ccc',
                 margin: '1px',
                 backgroundColor: '#e3c684' }}>                     
     <p>{dat1.title}  <strong>({dat1.release_date.substring(0, 4)})</strong>
       <div style={{ color: '#e3c684',
                     display: 'inline-block',
                     width: '30%', // Adjust the width as needed
                     padding: '10px', // Adjust the padding as needed
                     /*border: '1px solid #ccc',*/
                     margin: '5px',
                     backgroundColor: '#444444',
                     borderRadius: '10px',
                     marginLeft: '25px'  }}>
                     <strong>{dat1.vote_average}</strong>
                     
       </div>
       <button className="heart-button">
                         <span></span>to Favorite
       </button>
      
     </p>
  
   </div>
{/*<p>BACKDROP_PATH: <strong>{dat1.backdrop_path}</strong></p>
<p>GENRE_IDS: <strong>{dat1.genre_ids}</strong></p>
<p>ID: {dat1.id}</p>
<p>ORIGINaL_LANGUAGE: <strong>{dat1.original_language}</strong></p>
<p>ORIGINAL TITLE: {dat1.original_title}</p>
<p>OVERVIEW: <strong>{dat1.overview}</strong></p>
<p>POPULARITY: <strong>{dat1.popularity}</strong></p>
<p>POSTER_PATH: {dat1.poster_path}</p>
<p>RELEASE_DATE: <strong>{dat1.release_date}</strong></p>
<p>TITLE: {dat1.title}</p>
<p>VIDEO: {dat1.video}</p>
<p>VOTE_AVERAGE: <strong>{dat1.vote_average}</strong></p>
<p>VOTE_COUNT: {dat1.vote_count}</p>
<p>    </p>*/}
   </Card.Text>

 </Card.Body>
      )}
   </Card>
                  

              ))
        }</p>

    </div>
  }
{/*}  <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: '300px' }}
    >
      {isHovered ? (
        <Card.Body>
          <Card.Title>Howered Content</Card.Title>
          <Card.Text>This content is displayed when hovering.</Card.Text>
        </Card.Body>
      ) : (
        <Card.Body>
          <Card.Title>Normal Content</Card.Title>
          <Card.Text>This content is displayed by default.</Card.Text>
        </Card.Body>
      )}
    </Card> */}

<div className="App">
      <h1>Movie List</h1>
      <div className="card-container">
        {movieList.map((movie) => (
          <Card key={movie.id} style={{ width: '18rem' }} onClick={() => handleCardClick(movie)}>
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.description}</Card.Text>
              {/*<Button onClick={() => handleCardClick(movie)}>Details</Button>*/}
            </Card.Body>
          </Card>
        ))}
      </div>

      <Modal show={selectedMovie !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: '#023607', color: 'white' }} >
          {selectedMovie && (
            <>
              <h2>{selectedMovie.title}</h2>
              <img
     src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
     alt="Movie Background"
     style={{
      margin: '2px 2px 2px 2px',
      width: '99%',    // Set the width of the image to 100% of the container
      height: '100%',   // Set the height of the image to 100% of the container
      objectFit: 'cover' // Use object-fit to cover the container
             }}
        />
              {/*<p>{selectedMovie.description}</p>*/}
              {/* Add more details here */}
              <div style={{ margin: '1px 10px 5px 10px'}}>{selectedMovie.overview}</div><br/>
              <p><strong>Original Release:        </strong>{selectedMovie.release_date}</p>
              <p><strong>Vote Average:        </strong>{selectedMovie.vote_average}</p>
              <p><strong>Vote count:        </strong>{selectedMovie.vote_count}</p>
              <p><strong>Popularity:        </strong>{selectedMovie.popularity}</p>
              <p><strong>Original Language:        </strong>{selectedMovie.original_language}</p>

            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  </div>
);
}
