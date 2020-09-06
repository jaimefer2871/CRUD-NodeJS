const JsonResponse = (res, data) => {

    let msj = ''
    let errorStatus = false
    switch (res.statusCode) {
        case 200:
            msj = 'Success'
            break;
        case 500:
            msj = 'Error internal server'
            errorStatus = true
            break;
        case 422:
            msj = 'Unprocess validation'
            errorStatus = true
            break;
        case 403:
            msj = 'Access Denied'
            errorStatus = true
            break;
        case 404:
            msj = 'Resource Not Found!!'
            errorStatus = true
            break;
        default:
            msj = 'OK'
            break;
    }
    return res.json({
        code: res.statusCode,
        error: errorStatus,
        message: msj,
        data: data
    })
}

module.exports = JsonResponse;