import React from 'react';
interface  Props {
    type: string;
    onDismiss?: () => void
}

const Alert: React.FC<Props> = ({type , onDismiss}) => {
    let displayStyle = true

    if(onDismiss === undefined){
        displayStyle = false
    }
    return (
        <>
            <div className={"alert alert-" + type} role="alert">
                <span>This is a primary alert—check it out!</span>
                <button onClick={onDismiss} className="btn btn-close" style={{float: "right" , display: displayStyle ? "block" : "none"}}/>
            </div>
        </>
    );
};

export default Alert;