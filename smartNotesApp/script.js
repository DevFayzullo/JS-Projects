const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesList = document.getElementById("notesList");
const searchInput = document.getElementById("searchInput");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
let darkMode = localStorage.getItem("darkMode") === "true";

function applyTheme() {
  document.body.classList.toggle("dark", darkMode);
  localStorage.setItem("darkMode", darkMode);
}

function getFormattedTime() {
  return new Date().toLocaleString();
}

function renderNotes(filter = "") {
  notesList.innerHTML = "";

  notes
    .filter((note) => note.text.toLowerCase().includes(filter.toLowerCase()))
    .forEach((note, index) => {
      const noteDiv = document.createElement("div");
      noteDiv.className = "note";

      noteDiv.innerHTML = `
        <div class="text">${note.text}</div>
        <div class="timestamp">${note.timestamp}</div>
        <div class="action-buttons">
          <button class="edit" onclick="editNote(${index})">✏️ Edit</button>
          <button class="delete" onclick="deleteNote(${index})">🗑️ Delete</button>
        </div>
      `;

      notesList.appendChild(noteDiv);
    });
}

function addNote() {
  const text = noteInput.value.trim();
  if (!text) return;

  notes.unshift({
    text: text,
    timestamp: getFormattedTime(),
  });

  localStorage.setItem("notes", JSON.stringify(notes));
  noteInput.value = "";
  renderNotes(searchInput.value);
}

function deleteNote(index) {
  if (confirm("Are you sure you want to delete this note?")) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes(searchInput.value);
  }
}

function editNote(index) {
  const newText = prompt("Edit your note:", notes[index].text);
  if (newText !== null) {
    notes[index].text = newText.trim();
    notes[index].timestamp = getFormattedTime();
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes(searchInput.value);
  }
}

addNoteBtn.addEventListener("click", addNote);
searchInput.addEventListener("input", () => renderNotes(searchInput.value));
toggleThemeBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  applyTheme();
});

applyTheme();
renderNotes();
