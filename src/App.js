import logo from './profile.jpeg';
import './App.css';
import Pdf from './resume.pdf';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { ImageBackground, Image, View, StyleSheet } from 'react-native';


function App() {

  return (
   <div className = 'top'>
		<div className='container'>
			<h1 className = 'title'> 
				Hey there!
			</h1>
			{/*<img src={logo} className="pic" alt="me" />*/}
			<p className = 'Bio'>
				My name is Ivan Cheng. I recently graduated in 2022 from the University 
				of British Columbia with a B.ASc in Electrical Engineering.
				<br/><br/>
				I'm starting at Amazon this fall as a software engineer. 
				Previously, I've worked at UBC as a research intern, focusing on HTOL testing of FETs. 
				I've also worked at Echoflex Solutions as an embedded engineering intern, developing sensors for their aquaponics system.
				<br/><br/>
				In my free time, I enjoy music, photography, and trips to IKEA. 
				<br/><br/>
			</p>	
			<a href={Pdf} without rel="noopener noreferrer" target="_blank">
			  <button className = "button" trailingIcon="picture_as_pdf" label="Resume">
				Resume
			  </button>
		   </a>
		</div>
	</div>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'top',
  }
})