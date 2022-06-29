import React from 'react'

const Alert = (props) => {

    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        // 1st char take and make upper
        // slice thor except 1st char take all char and combine to make a whole string
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
//  this is a condition to check if porps.alert is not null then "&&" operator after content will be displayed
    // {`${}`} = this is a backticks with variable to display
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{ capitalize(props.alert.type) }:</strong> {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert
