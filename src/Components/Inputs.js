import React from 'react'
import { Button, Input } from 'semantic-ui-react'
import './Inputs.css'

export const InputAndSaveTextArea= ({placeholder, onChange, value, ...rest}) => {
    return (
        <div className={"InputAndSaveTextArea"}>
            <InputAndSave {...rest}>
                <textarea className={"InputMethod"} placeholder={placeholder} onChange={(e)=>onChange(e.target.value)} value={value} />
            </InputAndSave>
        </div>
    )
}

export const InputAndSaveText = ({placeholder, onChange, value, ...rest}) => {
    return (
        <div className={"InputAndSaveText"}>
            <InputAndSave {...rest}>
                <Input className={"InputMethod"} fluid placeholder={placeholder} onChange={(e)=>onChange(e.target.value)} value={value} />
            </InputAndSave>
        </div>
    )
}

const InputAndSave = ({buttonText='Save', onSave, value, disabled, errorMessage, loading, children}) => {
    return (
        <div>
            {children}
            <div className="FlexContainer">
                <div className="ErrorMessage">{errorMessage}</div>
                <Button primary loading={loading} className="SubmitButton" disabled={disabled} onClick={onSave}>{buttonText}</Button>
            </div>
        </div>
    )
}