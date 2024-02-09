import NotesView from "./NotesView.js"
import NotesAPI from "./NotesAPI.js"

const app = document.getElementById("app");
const view = new NotesView(app, {
    onNoteAdd() {
        console.log("Lets add a new note!");
    },
    onNoteSelect() {
        console.log("Note Select: " + id);
    },
    onNoteDelete() {
        console.log("Note Deleted: " + id);
    },
    onNoteEdit(newTitle, newBody) {
        console.log(newTitle);
        console.log(newBody);
    }

});

view.updateNotesList(NotesAPI.getAllNotes());