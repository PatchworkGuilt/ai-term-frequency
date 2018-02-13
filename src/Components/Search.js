import React from 'react'
import './Search.css'

export const SearchResult = ({searchTerm, doc, termFreq}) => {
    return (
        <div className="SearchResult">
            <div className="SearchTerm">{searchTerm}</div>
            {doc &&
                <div className="Result">
                    <div className="TermFreq">TF: {termFreq.toFixed(4)}</div>
                    <div className="Divider">in</div>
                    <div className="Document">
                        <div className="DocumentID">Doc #{doc.documentId}</div>
                        <div className="Identifier">"{doc.identifier}..."</div>
                    </div>
                </div>
            }
            {!doc &&
                <div className="NoResult">
                    Term not found.
                </div>
            }
        </div>
    )
}