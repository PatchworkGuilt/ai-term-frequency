import React from 'react'
import { isWebUri } from 'valid-url'
import { Button, Input } from 'semantic-ui-react'
import './Inputs.css'

export const InputAndSaveTextArea= ({placeholder, buttonText='Save', onChange, onSave, value, ...rest}) => {
    return (
        <div className={"InputAndSaveTextArea"}>
            <textarea className={"InputMethod"} placeholder={placeholder} onChange={(e)=>onChange(e.target.value)} value={value} {...rest} />
            <Button primary disabled={!value || value.length === 0} onClick={onSave}>{buttonText}</Button>
        </div>
    )
}

export const InputAndSaveText = ({placeholder, buttonText='Save', onChange, onSave, value, ...rest}) => {
    const isValidUrl = isWebUri(value)
    return (
        <div className={"InputAndSaveText"}>
            <Input className={"InputMethod"} fluid placeholder={placeholder} onChange={(e)=>onChange(e.target.value)} value={value} {...rest} />
            <Button primary disabled={!isValidUrl} onClick={onSave}>{buttonText}</Button>
        </div>
    )
}