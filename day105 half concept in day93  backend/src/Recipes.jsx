import { memo } from 'react'

const Recipes = ({ing}) => {
    console.log("Recipes component rendered");
  return (
    <div>Recipes</div>
  )
}

export default memo(Recipes)