import NotesAPI from "./NotesAPI.js"

NotesAPI.saveNote({
    id: 514919,
    title: "The title has changed",
    body: "This is a second new note."
});

console.log(NotesAPI.getAllNotes());