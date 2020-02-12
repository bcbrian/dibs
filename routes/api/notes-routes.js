// Moved these from api routes in case we need them

// Routes for notes - removing notes section
// Post a note
app.post("/api/notes", function(req, res) {
  console.log(req.body);
  db.Notes.create(req.body).then(function(Notes) {
    res.json(Notes);
  });
});
// Get a note
app.get("/api/notes/:id", function(req, res) {
  console.log({ id: req.params.id });
  db.Notes.findAll({ where: { id: req.params.id } }).then(function(Notes) {
    console.log(Notes);
    res.json(Notes[0]);
  });
});
// Update a note
app.put("/api/notes/:id", function(req, res) {
  console.log(req.params.id);
  db.Notes.update({
    where: { id: req.params.id }
  }).then(function(Notes) {
    res.json(Notes);
  });
});
