import './DropDownButton.scss';
const DropDownButton = (props) =>{
    let id=''
    if (props.type === 'psy'){
        id='button-'+props.type;
    }
    else if (props.type === 'koty'){
        id='button-'+props.type;
    }

    return (
        <div id={id}><button>{props.type}</button></div>
    )
}

export default DropDownButton;