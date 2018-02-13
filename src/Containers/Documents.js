import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { isWebUri } from 'valid-url'
import { InputAndSaveText, InputAndSaveTextArea } from '../Components/Inputs'
import { addDocument, addUrl } from '../Actions/Documents'

const COPY_PASTE = 'CopyPaste'
const URL_DOWNLOAD = 'URL'

class AddDocumentMenu extends Component {
    constructor(props){
        super(props)

        this.state = {
            inputMethod: COPY_PASTE,
            documentContent: '',
            urlContent: ''
        }
    }

    onChangeInputMethod = (event, { name }) => {
        this.setState({ inputMethod: name })
    }

    onDocumentUpdated = (value) => {
        this.setState({documentContent: value})
    }

    onUrlUpdated = (value) => {
        this.setState({urlContent: value})
    }

    onAddDocument = () => {
        this.props.addDocument(this.state.documentContent)
        this.setState({documentContent: ''})
    }

    onAddUrl = () => {
        this.props.addUrl(this.state.urlContent)
        this.setState({urlContent: ''})
    }


    render(){
        const { numDocuments, addUrlStatus, addDocumentStatus } = this.props
        const { inputMethod, documentContent, urlContent } = this.state

        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item
                      name={COPY_PASTE}
                      active={inputMethod === COPY_PASTE}
                      onClick={this.onChangeInputMethod}
                    />

                    <Menu.Item
                      name={URL_DOWNLOAD}
                      active={inputMethod === URL_DOWNLOAD}
                      onClick={this.onChangeInputMethod}
                    />
                    <Menu.Item position='right'>
                        <span><strong style={{color: '#4AC9CB'}}>{numDocuments}</strong> Document{numDocuments === 1? '' : 's'}</span>
                    </Menu.Item>
                </Menu>
                {inputMethod === COPY_PASTE &&
                    <InputAndSaveTextArea
                        placeholder="Paste document here."
                        onChange={this.onDocumentUpdated}
                        value={documentContent}
                        onSave={this.onAddDocument}
                        disabled={!documentContent}
                        errorMessage={addDocumentStatus.error}
                        loading={addDocumentStatus.loading}
                    />
                }
                {inputMethod === URL_DOWNLOAD &&
                    <InputAndSaveText
                        placeholder="https://google.com/a_text_file.txt"
                        onChange={this.onUrlUpdated}
                        value={urlContent}
                        onSave={this.onAddUrl}
                        disabled={!isWebUri(urlContent)}
                        errorMessage={addUrlStatus.error || (urlContent && !isWebUri(urlContent) ? 'Not a valid URL' : null)}
                        loading={addUrlStatus.loading}                   
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = ({documents}) => {
    return {
        numDocuments: documents.count,
        addUrlStatus: documents.addUrlStatus,
        addDocumentStatus: documents.addDocumentStatus
    }
}
export default connect(mapStateToProps, { addDocument, addUrl })(AddDocumentMenu)
