const _ = require('lodash')

module.exports = (request, response, next) => {
    const bundle = response.locals.bundle
    if(bundle.errors) {
        const errors = parseErrors(bundle.errors)
        response.status(500).json({ errors })
    } else {
        next()
    }
}

const parseErrors = (bundleErrors) => {
    const errors = []
    _.forIn(bundleErrors, error => errors.push(error.message))
    return errors
}