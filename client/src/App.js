import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import VillagePost from './components/VillagePost';
import History from './components/History';
import Health from './components/Health';
import ContactUs from './components/ContactUs';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Culture from './components/Culture';
import Education from './components/Education';
import Travelism from './components/Travelism';
import Business from './components/Business';
import Agriculture from './components/Agriculture';
import Sports from './components/Sports';
import Footer from './components/Footer';
const sections = [
  { title: '', url: '' },
  { title: 'History', url: '/History '},
  { title: 'Culture', url: '/Culture' },
  { title: 'Education', url: '/Education' },
  { title: 'Health', url: '/Health' },
  { title: 'Agriculture', url: '/Agriculture' },
  { title: 'Sports', url: '/Sports' },
  { title: 'Business', url: '/Business' },
  { title: 'Travelism', url: '/Travelism' },
];

const villagePost = {
  title: 'My Village',
  description:
    "A group of families, that lives at one place and follow their own culture",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…'
};

function App() {
  return (
    <div className="App">     
       <Router>
       <Navbar style={{position: 'fixed'}} title="My-Village" sections={sections}  />
       <VillagePost post={villagePost} />
       <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/Home" element={<VillagePost post={villagePost}/>} /> 
        <Route exact path="/History" element={<History/>} /> 
        <Route exact path="/ContactUs" element={<ContactUs/>} />   
        <Route exact path="/signIn" element={<SignIn />} />
        <Route exact path="/signUp" element={<SignUp />}  />
        <Route exact path="/Culture" element={<Culture />} />
        <Route exact path="/Education" element={<Education/>} />
        <Route exact path="/Health" element={<Health />} />
        <Route exact path="/Sports" element={<Sports/>} />
        <Route exact path="/Agriculture" element={<Agriculture/>} />
        <Route exact path="/Travelism" element={<Travelism/>} />
        <Route exact path="/Business" element={<Business/>}/>
      </Routes>
      <Footer title='Footer' description='Something here to give the footer a purpose! Copyright © Your Website 2022.'></Footer>
    </Suspense>
  </Router>
       
       
      
    </div>
  );
}

export default App;
