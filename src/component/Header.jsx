import React from 'react'
import Recipe from './Recipe'

export default function Header(props) {
    const {
        name
    } = props
  return (
    <div>
        <h1>searchbar</h1>
        <form action="">
            <div>
                <input type="text" placeholder='Search here'
                    value={''}
                    onChange={e => searchRecipe(e.target.value)} />
            </div>
        </form>
    </div>
  )
}
