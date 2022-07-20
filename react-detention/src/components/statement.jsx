function Statement(props) {

    const text = "I will never mutate state or props directly."

    return (
        <p>{props.count}: {text}</p>
    )
    
}

export default Statement