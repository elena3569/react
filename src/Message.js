import './Message.sass'

function Message (props) {
    return (
        <span className='text'> {props.text} </span>
    )
}

export default Message