
const Form = () => {
    return (
        <div className="container columns">
            <form className="formContainer glass-effect">
                <h1 className="textTitle">Establece un máximo de calorías diarias</h1>
                <div className='edit'>
                    <input
                        type="number"
                        id="name"
                        name="name"
                        min={100}
                        required />kCal
                    <span className="validity"></span>
                </div>
                <button type='submit'>Aceptar</button>
            </form>
        </div>
    )
}

export default Form