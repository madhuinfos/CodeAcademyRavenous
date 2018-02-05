import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component{
  render(){
    const x = this.props.businesses.map((business, i) => {
      return <Business key = {business.id} business = {business} />
    });
    return (
      <div className="BusinessList">
      {
        x
      }

      </div>
    );
  }
}

export default BusinessList;
