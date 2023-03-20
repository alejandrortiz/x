export default async function handler(req, res) {
  const { lat, lon } = req.query

  const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`)
  const data = await response.json()

  res.status(200).json(data)
}
