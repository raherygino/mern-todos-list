const PropsTodo = (props) => {
    return(
        <>
            <h5 className="text-dark">{ props.label }</h5>
            <p className="text-secondary">{ props.value }</p>
        </>
    );
}

export default PropsTodo;