<<<<<<< HEAD
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import AxiosHelper from '../../util/AxiosHelper'
import Dropzone from 'react-dropzone'



const sponsoringFrom = (props) => {

    const [sponsors, setSponsors] = useState({ name: '', sentence: '', logo: '' });
    const [send, setSend] =  useState(false);
    const [errors, setErrors] = useState(false);
    console.log('sponsors.name', sponsors.name);

<<<<<<< HEAD


    const isValid = (obj) =>{
        if ((obj) != undefined){
=======
 const isValid = (obj) =>{
    if ((obj) != undefined){
>>>>>>> parent of 02f0e4f... Add amazon setup

        if (((obj.length) == 0) && (errors == true) ){
            console.log('1')
            return <p>Require field</p>
        }
    }
    if ((errors == true) && ((obj) == undefined)){
        console.log('2')
            return <p>Require field</p>
    }
 }
    


    useEffect(()=> {
    
        axios.get(`/api/v1/sponsors/`)
        .then( (resp) => {
            setSponsors(resp.data)
        })
        .catch( data => {
            console.log('Error', data)
        })
      }, [])

    const handleChange = (e) =>{
        e.preventDefault()
<<<<<<< HEAD
        if(e.target.name == 'logo'){
            console.log(e.target.files)
            setSponsors({...sponsors, [e.target.name]: e.target.files[0]});
           
        }else{
            setSponsors({...sponsors, [e.target.name]: e.target.value})
        }

    }
    // Handle Drop
    const onDrop = (acceptedFiles) => {
        console.log(acceptedFiles);
        
      }

=======
        setSponsors({...sponsors, [e.target.name]: e.target.value})

    }
>>>>>>> parent of 02f0e4f... Add amazon setup
    // Create a sponsors message
    console.log('Value sent before : ', send);
    const handleSubmit = (e) => {

        // Prevent submit
        e.preventDefault()

         // Add Token
        AxiosHelper()

        const sponsors_msg = parseInt(sponsors.data.attributes)
        axios.post('/api/v1/sponsors', { ...sponsors, sponsors_msg })
        .then( (resp) => {
            setSponsors({ name: '', sentence: '', logo: '' })
            setSend(true);
            setErrors(false);
            console.log(resp)
        })
        .catch(err => {
            // what now?
            console.log('Error : ', err);
            setErrors(true);
    })
  }
    return(
        <Fragment>
                    <h1>This is the Sponsoring view for Boulder Bike Tour</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <input
                onChange={handleChange}
                type="text"
                name="name"
                value={sponsors.name || ''}
                placeholder="Your Name or compagny name"/>
                {isValid(sponsors.name)}
            </div>
            <div>
                <input
                onChange={handleChange}
                type="text"
                name="sentence"
                placeholder="Your slogan"
                value={sponsors.sentence || ''}/>
                {isValid(sponsors.sentence)}
            </div>
            <div>
<<<<<<< HEAD
            <Dropzone onDrop={onDrop}>
                {({getRootProps, getInputProps}) => (
                    <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    Click me to upload a file!
                    </div>
                )}
            </Dropzone>
=======
                <label htmlFor="logo">Import your logo</label>
                <input
                onChange={handleChange}
                type="file"
                name="logo"
                value={sponsors.logo || ''}/>
>>>>>>> parent of 02f0e4f... Add amazon setup
            </div>
            <button type="submit">Submit your sponsoring</button>
        </form>
        { send === true ? <div>Your message has been sent</div> : <p>no</p>}
        
        </Fragment>

=======
import React from 'react'

const sponsoring = () => {
    return(
        <h1>This is the Sponsoring view for Boulder Bike Tour</h1>
>>>>>>> parent of bc5dbcc... Add active storage
    )
};
export default sponsoring;