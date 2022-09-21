// write your CatList component here
import React from 'react';

function CatList({ catPics }) {
  return (
    <div>
       { catPics.map((pic) => {
         return <img width={200} height={200} key={pic.id} alt='cat' src={pic.url}></img>
       })}
    </div>
  )
}

export default CatList;