import React from 'react'

function Alert(props) {

    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        props.alert && <div className={`alert alert-small alert-${props.alert.type} alert-dismissible fade show`} role="alert">  
        <strong>{capitalize(props.alert.type)}  </strong>{props.alert.msg}
        </div>
    )
}
// &&(and operator) ->first it will run (props.alert) if this runs successfully then it will run whole div otherwise if (props.alert) doesn't runs then it will also not run div (as simple as that)
// in this case initially alert will be null so it will not run but as soon as we click on dark mode button props.alert will run and so is the remaining div 

export default Alert
