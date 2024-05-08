import React, { Component } from "react";
import {
  Card

} from "react-bootstrap";
import { Button } from '@material-ui/core';
import { useState } from "react";
import Form from "./Form.js";
import KursVse from "./KursVse";




export default class FirstComponent_1 extends Component {

/*  state = {
    cc1: undefined,
    exchangedate1: undefined,
    r0301: undefined,
    rate1: undefined,
    txt1: undefined,
    data1: undefined,
    error: undefined

  }  */
  
  /* state = {
      activity1: undefined,
      type1: undefined,
      participants1: undefined,
      price1: undefined,
      link1: undefined,
      key1: undefined,
      accessibility1: undefined,
      data1: undefined,
      error: undefined
    } */

/*gettingKurs1 = async (e1) => {
    e1.preventDefault();
    const api_url1 = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
    const data1 = await api_url1.json();
    console.log(data1);

    this.setState({
      cc1: data1[4].cc,
      exchangedate1: data1[4].exchangedate,
      r0301: data1[4].r030,
      rate1: data1[4].rate,
      txt1: data1[4].txt,
      data1: data1,
      error: ""
    });

  }*/

/* componentDidMount() {

      console.log('KAKOGO FIGA NE RABOTAET METOD TUT')
} */

state = {
  adult: undefined,
  backdrop_path: undefined,
  genre_ids: undefined,
  id: undefined,
  original_language: undefined,
  original_title: undefined,
  overview: undefined,
  popularity: undefined,
  poster_path: undefined,
  release_date: undefined,
  title: undefined,
  video: undefined,
  vote_average: undefined,
  vote_count: undefined
  
  
}

async componentDidMount() {
// when react first renders then it called componentDidMount()

/*   const api_url1 = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
const data1 = await api_url1.json();
console.log(data1);

this.setState({
  cc1: data1[4].cc,
  exchangedate1: data1[4].exchangedate,
  r0301: data1[4].r030,
  rate1: data1[4].rate,
  txt1: data1[4].txt,
  data1: data1,
  error: ""
});
console.log(this.state);   */


/* const api_url1 = await fetch(`http://www.boredapi.com/api/activity?json`);
const data1 = await api_url1.json();
console.log(data1);

this.setState({
  activity1: data1.activity,
  type1: data1.type,
  participants1: data1.participants,
  price1: data1.price,
  link1: data1.link,
  key1: data1.key,
  accessibility1: data1.accessibility,
  data1: data1,
  error: ""
});
console.log(this.state); */


/* let data1 = [];
for (let i = 0; i < 6; i++)
{
  const api_url1 = await fetch(`http://www.boredapi.com/api/activity?json`);
  const item = await api_url1.json();
  //console.log(item);
  data1.push({item});
}
console.log(data1);


this.setState({
 activity1: data1[4].item.activity,
 type1: data1[4].item.type,
 participants1: data1[4].item.participants,
 price1: data1[4].item.price,
 link1: data1[4].item.link,
 key1: data1[4].item.key,
 accessibility1: data1[4].item.accessibility,
 data1: data1,
 error: ""
});
console.log(this.state);  */

const api_url1 = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4e5548c37fdfda0975c70c0688c24955`);
const data1 = await api_url1.json();
console.log(data1);
const randomInt = Math.floor(Math.random() * 19);

this.setState({
  adult1: data1.results[randomInt].adult,
  backdrop_path1: data1.results[randomInt].backdrop_path,
  genre_ids1: data1.results[randomInt].genre_ids,
  id1: data1.results[randomInt].id,
  original_language1: data1.results[randomInt].original_language,
  original_title1: data1.results[randomInt].original_title,
  overview1: data1.results[randomInt].overview,
  popularity1: data1.results[randomInt].popularity,
  poster_path1: data1.results[randomInt].poster_path,
  release_date1: data1.results[randomInt].release_date,
  title1: data1.results[randomInt].title,
  video1: data1.results[randomInt].video,
  vote_average1: data1.results[randomInt].vote_average,
  vote_count1: data1.results[randomInt].vote_count,
  data1: data1,
  error: ""
});
console.log(this.state);  

}

  render() {
    //const { addSlide, removeSlide, slideData, setSwiperInst } = this.props;
  
    return (
    <div className="flex-container">
      {/*<h4>Choose fresh ideas to do</h4>*/}
{/*      <p>&nbsp;</p>  */}
          <div className="flex-child magenta">
    
          

      <Form kursMethod1={this.gettingKurs1}

          //  data1={this.state.data1}

         adult1={this.state.adult1}
         backdrop_path1={this.state.backdrop_path1}
         genre_ids1={this.state.genre_ids1}
         id1={this.state.id1}
         original_language1={this.state.original_language1}
         original_title1={this.state.original_title1}
         overview1={this.state.overview1}
         popularity1={this.state.popularity1}
         poster_path1={this.state.poster_path1}
         release_date1={this.state.release_date1}
         title1={this.state.title1}
         video1={this.state.video1}
         vote_average1={this.state.vote_average1}
         vote_count1={this.state.vote_count1}
         error={this.state.error}
         data1={this.state.data1}

       />

      <>
{/*  НАША БыВШАЯ С Т А Т И К А
{[

  'Secondary',
  'Success',

  'Warning',
  'Info',
  'Light',
  'Dark',
].map((variant) => (
  <Card
    bg={variant.toLowerCase()}
    key={variant}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem', display: 'inline-block', margin: '15px'}}
    className="mb-3"
  >
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>{variant} Card Title </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
))}

*/}

{
  <KursVse
  /* cc1={this.state.cc1}
   exchangedate1={this.state.exchangedate1}
   r0301={this.state.r0301}
   rate1={this.state.rate1}
   txt1={this.state.txt1}
   error={this.state.error}
      data1={this.state.data1}   */

       /*  addSlide={addSlide}
         removeSlide={removeSlide}
         slideData={slideData}
         setSwiperInst={setSwiperInst} */

        /* activity1={this.state.activity1}
         type1={this.state.type1}
         participants1={this.state.participants1}
         price1={this.state.price1}
         link1={this.state.link1}
         key1={this.state.key1}
         accessibility1={this.state.accessibility1}
         error={this.state.error}
            data1={this.state.data1}   */

         adult1={this.state.adult1}
         backdrop_path1={this.state.backdrop_path1}
         genre_ids1={this.state.genre_ids1}
         id1={this.state.id1}
         original_language1={this.state.original_language1}
         original_title1={this.state.original_title1}
         overview1={this.state.overview1}
         popularity1={this.state.popularity1}
         poster_path1={this.state.poster_path1}
         release_date1={this.state.release_date1}
         title1={this.state.title1}
         video1={this.state.video1}
         vote_average1={this.state.vote_average1}
         vote_count1={this.state.vote_count1}
         error={this.state.error}
         data1={this.state.data1} 

   />
 }
     </>
     {/*БЫВШЕЕ ВЫПОЛНЕНИЕ МЕТОДА ЗАГРУЗКОЙ КАРТИНКИ <img src="logo192.png" alt="" onLoad={this.gettingKurs1}></img>*/}
       <p>&nbsp;</p>
    {/* <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>*/}
       
</div>
<div className="flex-child green">
       
             
             <div className="bb" style={{ background: '#023607' }}>Random Movie<br/>
             <img
     src={`https://image.tmdb.org/t/p/w500${this.state.backdrop_path1}`}
     alt="Movie Background"
     style={{
      margin: '2px 2px 2px 2px',
      width: '99%',    // Set the width of the image to 100% of the container
      height: '100%',   // Set the height of the image to 100% of the container
      objectFit: 'cover' // Use object-fit to cover the container
             }}
        />
             <p></p>
             <p><strong>{this.state.original_title1}</strong></p>
             <div style={{ margin: '1px 10px 5px 10px'}}>{this.state.overview1}</div><br/>
             <p><strong>Original Release:        </strong>{this.state.release_date1}</p>
             <p><strong>Vote Average:        </strong>{this.state.vote_average1}</p>
             <p><strong>Vote count:        </strong>{this.state.vote_count1}</p>
             <p><strong>Popularity:        </strong>{this.state.popularity1}</p>
             <p><strong>Original Language:        </strong>{this.state.original_language1}</p>
            <Card

//   bg={RandArray(myArray)}
//   border={RandArray(myArray)}
bg={'black'}


key={this.state.id1} //   key={dat1.item.key}  FOR TODO
text={'gray'}
//text={Card.background === 'light' ? 'black' : 'black'}
style={{ width: '18rem', display: 'inline-block', margin: '15px', borderWidth: '3px'}}
className="mb-3"
//   onClick={() => console.log('ZHOPA 1')}
//    onClick={() => console.log('НАЖАТА НАЖАТА')}

//  onClick={() => props.addSlide()}                  КЛІКАЄМО ПО КАРТОЧЦІ
>

<Card.Header style={{ color: 'white'}}>The Movie</Card.Header>

<Card.Body>


    <div>

       <img
     src={`https://image.tmdb.org/t/p/w300${this.state.poster_path1}`}
     alt="Movie Poster"
     style={{
     margin: '2px 2px 2px 2px',
     width: '100%',    // Set the width of the image to 100% of the container
     height: '100%',   // Set the height of the image to 100% of the container
     objectFit: 'cover' // Use object-fit to cover the container
            }}

        />

    </div>

        <Card.Text>
            <div style={{ display: 'inline-block',

             width: '100%', // Adjust the width as needed
             padding: '10px', // Adjust the padding as needed
             border: '1px #ccc',
             margin: '1px',
             backgroundColor: '#e3c684' }}>                     
                             <p>{this.state.title1}  <strong>({this.state.release_date1})</strong>
                       <div style={{ color: '#e3c684',
                                  display: 'inline-block',
                                  width: '30%', // Adjust the width as needed
                                  padding: '10px', // Adjust the padding as needed
                                  /*border: '1px solid #ccc',*/
                                  margin: '5px',
                                  backgroundColor: '#444444',
                                  borderRadius: '10px',
                                  marginLeft: '25px'  }}>
                                      <strong>{this.state.vote_average1}</strong>

                        </div>
                           {/*<button className="heart-button">
                              <span></span>to Favorite
                           </button>*/}
                  </p>

            </div>

        </Card.Text>

</Card.Body>

</Card>
                    {/*<Button color="primary" variant="contained">
                        CLEAR
                    </Button>*/}
             </div>
             {/*<div className="cc">Favorites -- 4<br/>
                    <Button color="primary" variant="contained">
                        Click Me
                    </Button>

             </div>*/}

<div className="bb" style={{ background: 'darkgrey' }}>The Movie of The Day<br/>
             <img
     src={`https://image.tmdb.org/t/p/w500${this.state.backdrop_path1}`}
     alt="Movie Background"
     style={{
      margin: '2px 2px 2px 2px',
      width: '99%',    // Set the width of the image to 100% of the container
      height: '100%',   // Set the height of the image to 100% of the container
      objectFit: 'cover' // Use object-fit to cover the container
             }}
        />
             <p></p>
             <p><strong>{this.state.original_title1}</strong></p>
             <div style={{ margin: '1px 10px 5px 10px'}}>{this.state.overview1}</div><br/>
             <p><strong>Original Release:        </strong>{this.state.release_date1}</p>
             <p><strong>Vote Average:        </strong>{this.state.vote_average1}</p>
             <p><strong>Vote count:        </strong>{this.state.vote_count1}</p>
             <p><strong>Popularity:        </strong>{this.state.popularity1}</p>
             <p><strong>Original Language:        </strong>{this.state.original_language1}</p>
            <Card

//   bg={RandArray(myArray)}
//   border={RandArray(myArray)}
bg={'black'}


key={this.state.id1} //   key={dat1.item.key}  FOR TODO
text={'gray'}
//text={Card.background === 'light' ? 'black' : 'black'}
style={{ width: '18rem', display: 'inline-block', margin: '15px', borderWidth: '3px'}}
className="mb-3"
//   onClick={() => console.log('ZHOPA 1')}
//    onClick={() => console.log('НАЖАТА НАЖАТА')}

//  onClick={() => props.addSlide()}                  КЛІКАЄМО ПО КАРТОЧЦІ
>

<Card.Header style={{ color: 'white'}}>The Movie</Card.Header>

<Card.Body>


    <div>

       <img
     src={`https://image.tmdb.org/t/p/w300${this.state.poster_path1}`}
     alt="Movie Poster"
     style={{
     margin: '2px 2px 2px 2px',
     width: '100%',    // Set the width of the image to 100% of the container
     height: '100%',   // Set the height of the image to 100% of the container
     objectFit: 'cover' // Use object-fit to cover the container
            }}

        />

    </div>

        <Card.Text>
            <div style={{ display: 'inline-block',

             width: '100%', // Adjust the width as needed
             padding: '10px', // Adjust the padding as needed
             border: '1px #ccc',
             margin: '1px',
             backgroundColor: '#e3c684' }}>                     
                             <p>{this.state.title1}  <strong>({this.state.release_date1})</strong>
                       <div style={{ color: '#e3c684',
                                  display: 'inline-block',
                                  width: '30%', // Adjust the width as needed
                                  padding: '10px', // Adjust the padding as needed
                                  /*border: '1px solid #ccc',*/
                                  margin: '5px',
                                  backgroundColor: '#444444',
                                  borderRadius: '10px',
                                  marginLeft: '25px'  }}>
                                      <strong>{this.state.vote_average1}</strong>

                        </div>
                           {/*<button className="heart-button">
                              <span></span>to Favorite
                           </button>*/}
                  </p>

            </div>

        </Card.Text>

</Card.Body>

</Card>
                    {/*<Button color="primary" variant="contained">
                        CLEAR
                    </Button>*/}
             </div>          
 
</div>
    </div>
    );
            }
          }
