import React from 'react';

import MenuItem from '../menu-item/MenuItem';
import { connect } from 'react-redux';
import './Directory.scss';

class Directory extends React.Component {

  render() {
    return (
      <div className='directory-menu'>
        {this.props.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} { ...otherProps } />
        ))}
      </div>
    );
  }
}



const mapStateToProps = state =>({
  sections: state.directory.sections  
})
export default connect(mapStateToProps)(Directory);