import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CardProduct from './components/CardProduct';
import Filtres from './components/Filtres';

export default function UserPage() {
let { id } = useParams();
return (
<>
<Header/>

<main>

<Filtres/>
<CardProduct/>

</main>


<Footer/>



</>
);
}