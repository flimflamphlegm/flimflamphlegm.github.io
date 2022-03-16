import logo from './profile.jpeg';
import './App.css';
import Pdf from './resume.pdf';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { ImageBackground, Image, View, StyleSheet } from 'react-native';


function App() {

  return (
	<View style={styles.container}>
		<View style={styles.item}>
			<div className='container'>
				<div className="App">
				  <header className="App-header">
					<h1> 
						Ivan Cheng
					</h1>
					<img src={logo} className="pic" alt="me" />
					<p>
					I'm a 4th year Electrical Engineering student currently studying at UBC.
				</p>
				<a href={Pdf} without rel="noopener noreferrer" target="_blank">
				  <button className = "button" trailingIcon="picture_as_pdf" label="Resume">
					Resume
				  </button>
			   </a>
				  </header>
				  
				</div>
				
		   </div>
		</View>
	</View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {
    width: '100%' // is 50% of container width
  }
})