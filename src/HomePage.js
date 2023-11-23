import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NewCarousel from './components/NewCarousel';
import { carouselImg } from './components/Data';



export default function HomePage() {

  return (
    <div className='container'>
<Header/>
<main>
<NewCarousel images={carouselImg} />
</main>
<Footer/>
  </div>
);

}