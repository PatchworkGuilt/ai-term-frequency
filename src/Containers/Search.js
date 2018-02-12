import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'
import { InputAndSaveTextArea } from '../Components/Inputs'
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
            <List>
                {searchResults.map(({searchTerm, doc, termFreq}, index)=>{
                    return (
                        <List.Item key={index}>
                            <List.Content>
                                <List.Header>"{searchTerm}" Term Freq: {termFreq}</List.Header>
                                <List.Description>Document #{doc.documentId}, which begins "{doc.identifier}"</List.Description>
                            </List.Content>
                        </List.Item>
                    )
                })}
            </List>
        )

    }
}

const mapStateToProps = ({documents: {terms, documents}, search: { searchTerms }}) => {
    let searchResults = []
    if(searchTerms.length > 0){
        searchResults = searchTerms
            .filter(term=>terms[term])
            .map(term => {
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
