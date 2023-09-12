import React, { Component } from "react";
import { useCallback } from 'react';
import { useState } from "react";
import PropTypes from 'prop-types'
import {
  Card

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
               function RandArray(array){
                   var rand = Math.random()*array.length | 0;
                   var rValue = array[rand];
                   return rValue;
               }
               var myArray = ['secondary', 'success', 'warning', 'info', 'light', 'primary', 'danger'];
              
              
              
              


 export default function KursVse(props) {


//const handleClick = useCallback(()=>AddSlide(), []);

return (
  <div>
 
  <p>{ props.error }</p>
  { props.id1 &&             /* props.key1   */
    <div>
        <p>{<div><p>&nbsp;&nbsp;&nbsp;</p></div>}</p>
        <p>{


             props.data1.results.map(dat1 => (

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
                   
                

                   key={dat1.id} //   key={dat1.item.key}  FOR TODO
                   text={'black'}
                   //text={Card.background === 'light' ? 'black' : 'black'}
                   style={{ width: '18rem', display: 'inline-block', margin: '15px', borderWidth: '3px'}}
                   className="mb-3"
                //   onClick={() => console.log('ZHOPA 1')}
                //    onClick={() => console.log('НАЖАТА НАЖАТА')}

                  //  onClick={() => props.addSlide()}                  КЛІКАЄМО ПО КАРТОЧЦІ


                 >
                 <Card.Header>Header</Card.Header>
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

                  <Card.Title>ADULT: {dat1.adult} Card Title </Card.Title>
                      <Card.Text>
                  <p>BACKDROP_PATH: <strong>{dat1.backdrop_path}</strong></p>
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
                  <p>    </p>
                      </Card.Text>

                    </Card.Body> 
                  </Card>

              ))
        }</p>

    </div>
  }
  </div>
);
}
