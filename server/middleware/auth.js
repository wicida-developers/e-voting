import jwt from "jsonwebtoken"

export default function auth(req, res, next) {
  const { authorization } = req.headers

  if (!authorization) return res.status(401).json({ message: "Authorization header not found" })

  const [, token] = authorization.split("Bearer ")

  if (!token) return res.status(401).json({ message: "Token not found" })

  try {
    // eslint-disable-next-line no-undef
    const user = jwt.verify(token, process.env.JWT_SECRET)
    req.user = user
    next()
  } catch (error) {
    res.status(401).json({ message: "Invalid token" })
  }
}
