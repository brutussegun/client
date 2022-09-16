const errorHandler = (data: any, res: any, code = 400,) => {
    res.status(code).json({
        hasError: true,
        message: data,

    });
};
const userFormValidator = (fields: any) => {
    for (let key in fields) {
        if (fields[key].trim() === "") throw new Error(` Please enter ${key} `)
    }
}
const successResponseHandler = (data: any, res: any, code = 200) => {
    res.status(code).json({
        hasError: false,
        body: data
    });
};


export {errorHandler, userFormValidator, successResponseHandler}


// const UserModel = mongoose.models.Customer || mongoose.model('Customer', customerSchema);
// export default UserModel
