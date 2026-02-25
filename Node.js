// Express example
app.post("/login", async (req, res) => {
  const hash = crypto
    .createHash("sha256")
    .update(req.body.password)
    .digest("hex");

  if (hash === STORED_HASH) {
    res.json({ ok: true });
  } else {
    res.status(401).json({ ok: false });
  }
});
    