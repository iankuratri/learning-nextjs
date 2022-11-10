export default function handler(req, res) {
  res.setPreviewData({ user: "Ankur" });
  res.redirect(req.query.redirect);
}
