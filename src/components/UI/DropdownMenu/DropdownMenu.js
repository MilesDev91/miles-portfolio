import './DropdownMenu.css';

const dropdownMenu = (props) => {
    let dropdown = [];
    if (props.show) {
        dropdown = props.options;
    }
    return (
        <div className='dropdown'>
            {dropdown.map((item, i) => {
                return <div key={i}>{item}</div>
            })}
        </div>
    );
}

export default dropdownMenu;