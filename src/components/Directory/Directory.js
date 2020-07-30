import React from 'react'
import './Directory.scss'
import MenuItem from '../MenuItem/MenuItem';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';

const Directory = ({ sections }) =>{
  return(
        <div className='directory-menu'>
        {
          sections.map( ({ id, title, imageUrl, linkUrl, size}) => {
          return <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} size={size}/>
          })            
        }               
        </div> 
  )    
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);