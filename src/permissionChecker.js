export function permissionMiddleware(req, res, next) {
    if (req.auth.role == "STUDENT") {
        res.send('un-auth')
    }

    next();
}