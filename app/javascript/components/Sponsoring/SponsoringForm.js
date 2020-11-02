import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import AxiosHelper from '../../util/AxiosHelper'
import Dropzone from 'react-dropzone'



const sponsoringFrom = () => {

    const [sponsors, setSponsors] = useState({ name: '', sentence: '', logo: '' });
    const [send, setSend] =  useState(false);
    const [errors, setErrors] = useState(false);



    const isValid = (obj) =>{
        if ((obj) != undefined){

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
    // Get   sponsors message
    useEffect(() =>{
        // Get all of our riders from api
        // Update bikers in our state
        axios.get('/api/v1/sponsors.json')
        .then( resp => {
            setSponsors(resp.data)
        })
        .catch( resp => console.log(resp) )
    }, [])

    // Handle change
    const handleChange = (e) =>{
        e.preventDefault()
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

    // Create a sponsors message
    const handleSubmit = (e) => {

        // Prevent submit
        e.preventDefault()

         // Add Token
        AxiosHelper()

        const sponsors_msg = sponsors.data.attributes
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
        <form onSubmit={handleSubmit} encType="multipart/form-data">
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
            <Dropzone onDrop={onDrop}>
                {({getRootProps, getInputProps}) => (
                    <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    Click me to upload a file!
                    </div>
                )}
            </Dropzone>
            </div>
            <button type="submit">Submit your sponsoring</button>
        </form>
        { send === true ? <div>Your message has been sent</div> : <p>no</p>}
        
        </Fragment>

    )
};
export default sponsoringFrom;