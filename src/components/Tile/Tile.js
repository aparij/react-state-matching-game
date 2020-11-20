import React from 'react'

import './Tile.css'

const Tile = (props) => {

  const color = props.selected || props.matched ? {backgroundColor: props.color}: null;

  return (
    <div style={color} className='Tile'>
      {props.selected || props.matched ? <svg {...props.svg}/>: null }
    </div>
  )
}

export default Tile
