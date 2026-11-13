"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Strong {
    item = [];
    additem(item) {
        this.item.push(item);
    }
    removeItem(item) {
        this.item = this.item.filter(i => i !== item);
    }
    getAllItems() {
        return this.item;
    }
}
class User {
    id;
    name;
    email;
    password;
    phone;
    age;
    notbooks = [];
    constructor(id, name, email, password, phone, age) {
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60 years old.");
        }
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }
    displayInfo() {
        console.log(`User:${this.name},Email${this.email},Age${this.age}`);
    }
    addNotebook(notebook) {
        this.notbooks.push(notebook);
    }
}
class Admin extends User {
    manageNote() {
        console.log(`Admin ${this.name} is managing system notes`);
    }
}
class Note {
    id;
    tittle;
    content;
    userId;
    constructor(id, tittle, content, userId) {
        this.id = id;
        this.tittle = tittle;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        return this.content.length > 20
            ? this.content.substring(0, 20) + "..."
            : this.content;
    }
}
class NoteBook {
    id;
    title;
    notes;
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.notes = [];
    }
    addnote(note) {
        this.notes.push(note);
        console.log(`Note ${note.tittle} added to notbook ${this.title}`);
    }
    removenote(noteId) {
        this.notes = this.notes.filter(note => note.id !== noteId);
        console.log(`Note with ID ${noteId} removed from notebook.`);
    }
    getNotes() {
        return this.notes;
    }
}
