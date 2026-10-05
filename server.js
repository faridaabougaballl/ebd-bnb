
import express from "express";
const app = express();

// MIDDLEWARE
// DATABASE
const listings = [
 { id: 1, title: "Nile View Apartment", pricePerNight: 85 },
 { id: 2, title: "Beach House", pricePerNight: 140 },
 { id: 3, title: "Desert Eco-Lodge", pricePerNight: 60 },
];
// MODEL
function getAllListings() {
return listings;
}
function getListingById(id) {
return listings.find((listing) => listing.id === id);
}
// CONTROLLERS
function handleGetAll(req, res) {
res.json(getAllListings());
}
function handleGetOne(req, res) {
const listing = getListingById(Number(req.params.id));
if (!listing) {
return res.status(404).json({ error: "Listing not found" });
}
res.json(listing);
}
// ROUTES
app.get("/api/listings", handleGetAll);
app.get("/api/listings/:id", handleGetOne);
app.get("/", (req, res) => {
res.send("Welcome to ebd bn'b");
});

// START
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
