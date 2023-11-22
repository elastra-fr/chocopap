import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
export default function UserPage() {
let { id } = useParams();
return (
<>
<Header/>

<Footer/>



</>
);
}