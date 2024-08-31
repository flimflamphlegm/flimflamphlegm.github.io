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
				My name is Ivan Cheng. I graduated in 2022 from the University 
				of British Columbia with a B.ASc in Electrical Engineering.
				<br/><br/>
				I currently work at AWS as a software engineer in the Payments domain. 
				<br/><br/>
				In my free time, I enjoy music, photography, and trips to IKEA. 
				{/* <br/><br/> */}
			</p>
			<p>
				<a href={Pdf} without rel="noopener noreferrer" target="_blank">
					<button className = "button" trailingIcon="picture_as_pdf" label="Resume">
						Resume
					</button>
				</a>
				{" "}{" "}
				<a href="https://www.linkedin.com/in/ivanc-g/" without rel="noopener noreferrer" target="_blank">
					<button className = "button" trailingIcon="picture_as_pdf" label="LinkedIn">
						LinkedIn
					</button>
				</a>
			</p>	
			
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