import React from "react"
import axios from 'axios'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchFieldValue: '',
      results: [],

    }

    this.updateSearchFieldValue = this.updateSearchFieldValue.bind(this)
    this.submitSearch = this.submitSearch.bind(this)
  }

  updateSearchFieldValue(event) {
    console.log(event.target.value)
    this.setState({searchFieldValue: event.target.value})
  }

  submitSearch() {
    const searchQuery = this
    axios.get(`/api/search?query=${searchQuery.state.searchFieldValue}`).then(res => {
      const results = res
      searchQuery.setState({results})
    })
  }

  render() {
    return(
      <div>
        <input type="text" onChange={this.updateSearchFieldValue} />
        <button onClick={this.submitSearch}>Search</button>

      </div>
    )
  }
}

export default SearchForm
