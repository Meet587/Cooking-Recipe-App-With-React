import React from 'react'
import Recipe from './Recipe'

export default function Header(props) {
    const {
        name
    } = props
  return (
    <div className='header'>
        <form action="">
            <div className='header__searchbar'>
                <input type="text" placeholder='Search here'
                    value={''}
                    onChange={e => searchRecipe(e.target.value)} />
            </div>
        </form>
    </div>
  )
}
