import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import AxiosHelper from '../../util/AxiosHelper'

const sponsoringFrom = (props) => {

    const [sponsors, setSponsors] = useState({ name: '', sentence: '', logo: '' });
    const [send, setSend] =  useState(false);
    const [errors, setErrors] = useState(false);
    console.log('sponsors.name', sponsors.name);

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
        setSponsors({...sponsors, [e.target.name]: e.target.value})

    }
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
                <label htmlFor="logo">Import your logo</label>
                <input
                onChange={handleChange}
                type="file"
                name="logo"
                value={sponsors.logo || ''}/>
            </div>
            <button type="submit">Submit your sponsoring</button>
        </form>
        { send === true ? <div>Your message has been sent</div> : <p>no</p>}
        
        </Fragment>

    )
};
export default sponsoringFrom;