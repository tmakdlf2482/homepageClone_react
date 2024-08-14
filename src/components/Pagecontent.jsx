import React from 'react';

function Pagecontent({item}) {
  return (
    <div className="w3-quarter">
      <img src={item.img} style={ {width: '100%'} } />
        <h3>{item.title}</h3>
        <p>{item.content}</p>
    </div>
  );
}

export default Pagecontent;