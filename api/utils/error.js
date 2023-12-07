// export const errorHandler =(err, req,res,next) =>{}
export const errorHandler =(statusCode, message) =>{
    const error = new Error();
    error.statusCode =statusCode;
    error.message = message;
    return error;
}