class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static badRequest(message) {        // Ошибка на стороне клиента
        return new ApiError(400, message);
    }
    
    static unauthorized(message) {      // Не авторизован
        return new ApiError(401, message);
    }

    static forbidden(message) {         // Нет доступа
        return new ApiError(403, message);
    }

    static internal(message) {          // Ошибка на стороне сервера
        return new ApiError(500, message);
    }

} 
module.exports = ApiError;