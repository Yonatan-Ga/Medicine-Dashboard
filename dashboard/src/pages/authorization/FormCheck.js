
let formIsValid = false;
let errorMessage = '';

const FormCheckLogic = (props) => {

    errorMessage = ''

    if (!props.first || props.first.length < 2) {
        errorMessage += "First name is too short; "
    }

    if (!props.last || props.last.length < 2) {
        errorMessage += "Last name is too short; "
    }

    if (!props.country) {
        errorMessage += "Choose a country; "

    }

    if (!props.user || props.user.length < 3) {
        errorMessage += "Username is too short; "
    }

    if (!props.password || props.password.length < 6) {
        errorMessage += "Password is too short; "
    }

    if (errorMessage !== '') {
        formIsValid = false
    } else {
        formIsValid = true
        // errorMessage = '<>' + errorMessage + '</>'
    }
    return (
        [formIsValid, errorMessage]
    )
}

export { FormCheckLogic }