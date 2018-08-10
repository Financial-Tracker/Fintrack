

const patterns = {
    password: /^[\w@-]{8,20}$/,
    firstName: /^[a-z]{1,20}$/i,
    lastName: /^[a-z]{1,20}$/i,
    email : /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    Cpassword: /^[\w@-]{8,20}$/

}
export const valid = (state,pa) => {
return(validate(state, patterns[pa]))

}

function validate(field,regex) {
    return(regex.test(field))

}