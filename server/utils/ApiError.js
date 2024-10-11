class ApiError extends Error{
    constructor(statusCode , Msg="this is Api error"){
        super(Msg)
        this.statusCode = statusCode;
        this.Msg = Msg;
        // this.Stack = this.Stack;

    }
}

export default ApiError