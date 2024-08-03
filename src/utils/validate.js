export const validate = (email, password) => {
    let isEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    let isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(password);
    if (!isEmail) {
        return "Email is Invalid";
    }

    if (!isPassword) {
        return "Password is Invalid";
    }

    return null;
}