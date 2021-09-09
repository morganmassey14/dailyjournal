import { JournalEntryComponent } from "./JournalEntry.js"
// DOM reference to where all entries will be rendered
//pointing from HTML id entryLog
const entryLog = document.querySelector("#entryLog")

const addEntriesToDom = (arrayofEntries) => {
    //sets equal to empty string
    let entryHTMLRepresentation = "";
    // for loop iterating(you have a list of objects, iterating is going down the list) through arrayofEntries 
    for (const entry of arrayofEntries) {
        // for entry one in array of entries: were going to send into journal entry component (+= were adding onto the string not just overwriting it)
        entryHTMLRepresentation += JournalEntryComponent(entry);
    }
    //then it will return back to the for loop, and set entry to be the next iteration (number 2) (will continue to do that until nothing left in the array)
    entryLog.innerHTML += entryHTMLRepresentation 
    //entryHTMLREP is equal to the journalENtryComponent. gets added to inner HTML and then displays it.

}

export const EntryListComponent = (entries) => {

    addEntriesToDom(entries);

}


