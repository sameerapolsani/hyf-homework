const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// import document.json
const documents = require("./documents.json");

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

//Get/search
app.get("/search", (req, res) => {
  const { q } = req.query;
  //f q is not provided, the endpoint should return all documents.
  if (!q) {
    res.json(documents);
  } else {
    const searchResults = documents.filter((document) => {
      const documentValues = Object.values(document);
      return documentValues.some((value) => {
        if (
          typeof value === "string" &&
          value.toLocaleLowerCase().includes(q.toLocaleLowerCase())
        ) {
          return true;
        }
        return false;
      });
    });
    if (searchResults.length > 0) {
      res.json(searchResults);
    } else {
      res.status(400).json({ msg: `No documents found for the query: ${q}` });
    }
  }
});
// GET /documents/:id
app.get("/documents/:id", (req, res) => {
  const id = parseInt(req.params.id); // Get the 'id' parameter as an integer
  const document = documents.find((doc) => doc.id === id);
  if (document) {
    res.json(document);
  } else {
    res.status(404).json({ error: "Document not found" });
  }
});
// POST /search
app.post("/search", (req, res) => {
  const query = req.query.q; // Get the 'q' query parameter
  const fields = req.body.fields; // Get the 'fields' object from the request body

  if (query && fields) {
    // Both query and fields can't be provided together
    res.status(400).json({ error: "Both 'q' and 'fields' cannot be provided" });
    return;
  }

  let result = documents;

  if (query) {
    result = documents.filter((doc) =>
      Object.values(doc).some((value) =>
        String(value).toLowerCase().includes(query.toLowerCase())
      )
    );
  } else if (fields) {
    result = documents.filter((doc) =>
      Object.entries(fields).every(
        ([key, value]) =>
          String(doc[key]).toLowerCase() === String(value).toLowerCase()
      )
    );
  }

  res.json(result);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
