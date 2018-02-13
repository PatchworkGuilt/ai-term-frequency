import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'
import { InputAndSaveTextArea } from '../Components/Inputs'
import { SearchResult } from '../Components/Search'
import { doSearch } from '../Actions/Search'


class _SearchForm extends Component {
    constructor(props){
        super(props)
        this.state = {searchTerm: ''}
    }

    onSearchTermUpdated = (value) => {
        this.setState({searchTerm: value})
    }

    onDoSearch = () => {
        this.props.doSearch(this.state.searchTerm)
    }

    render(){
        const { searchTerm } = this.state

        return (
            <div>
                <InputAndSaveTextArea
                    placeholder="One search term per line."
                    onChange={this.onSearchTermUpdated}
                    value={searchTerm}
                    onSave={this.onDoSearch}
                    buttonText="Search"
                />
            </div>
        )
    }
}

export const SearchForm = connect(null, { doSearch })(_SearchForm)


class _SearchResults extends Component {
    render() {
        const { searchResults } = this.props

        return (
            <div>
                {searchResults.map(({searchTerm, doc, termFreq}, index)=>{
                    return <SearchResult key={index} searchTerm={searchTerm} doc={doc} termFreq={termFreq} />                    
                })}
            </div>
        )

    }
}

const mapStateToProps = ({documents: {terms, documents}, search: { searchTerms }}) => {
    let searchResults = []
    if(searchTerms.length > 0){
        searchResults = searchTerms
            .map(term => {
                if(!terms[term]){
                    return {
                        searchTerm: term,
                        doc: null,
                        termFreq: 0
                    }
                }
                return {
                    searchTerm: term,
                    doc: documents[terms[term].documentId],
                    termFreq: terms[term].termFreq
                }
        })
    }

    return { searchResults }
}

export const SearchResults = connect(mapStateToProps, null)(_SearchResults)
