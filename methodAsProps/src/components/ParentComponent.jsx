import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const parentName = "PARENT";
    const greetParent = (childName) => {
        alert(`Hello ${parentName} from ${childName} `)
    }
  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent greetHandler={greetParent} />
    </div>
  )
}

export default ParentComponent
