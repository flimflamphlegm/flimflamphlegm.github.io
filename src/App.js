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
		<h1 className = 'Bio'> 
			Ivan Cheng
		</h1>
		<div className='container'>
				<img src={logo} className="pic" alt="me" />
				<p className = 'Bio'>
				I'm a 4th year Electrical Engineering student currently studying at UBC.
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