import React from "react";
import { randomLength } from "../component_utils/methods";
import '../../stylesheets/root.scss'

class Categories extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  
  }

  componentDidMount(){
    this.props.fetchCategories()

  }

  handleSubmit(randomCategory){
    // e.preventDefault()

    this.props.playCategory(randomCategory[0])
    this.setState({
      category: ''
    })
  }

  render(){
 
  if (!this.props.deckCategories.length > 0) return null
  let length = this.props.deckCategories.length - 1
   let randomIndex = randomLength(0, length)
   let randomCategory = [this.props.deckCategories[randomIndex]]
  //  this.setState(randomCategory)
  //  console.log(this.state)
 
    return (
      <div>
        <div id="categories">
          {randomCategory.map(category => (          
            category.name   
          ))}
          
        </div>
        <button onClick={() => this.handleSubmit(randomCategory)}></button>
      </div>
    )
  }
}

export default Categories