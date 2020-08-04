const CompaniesController = {}

CompaniesController.index = (req, res) => {
    res.json({
        'error': false,
        'message': 'OK',
        'data': [
            {
                "id": 1,
                "name": "UE SAN IGNACIO"
            }
        ]
    })
}


module.exports = CompaniesController