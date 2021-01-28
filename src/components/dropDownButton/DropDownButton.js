import './DropDownButton.scss';
const DropDownButton = (props) =>{
    let className=props.className
    let buttonClass = 'button-'+className

    

    return (
        <div className={className} onClick={()=>expand(className)}>
            <button id={buttonClass}>{className}</button>
            <h5>v</h5>
            </div>
    )
}

function expand(type){
    alert(type);
}

export default DropDownButton;