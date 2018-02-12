import React from 'react'
import './Layout.css'

export const Grid = ({children}) => {
    return <div className="Grid">{children}</div>
}

export const ResponsiveColumn = ({children, ...rest}) => {
    return <div className="ResponsiveColumn" {...rest}>{children}</div>
}
