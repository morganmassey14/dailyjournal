import { getJournalEntries } from "./JournalData.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

const addEntriesToDom = (arrayofEntries) => {
    let entryHTMLRepresentation = "";
    for (const entry of arrayofEntries) {
        entryHTMLRepresentation += JournalEntryComponent(entry);
    }
        entryLog.innerHTML += entryHTMLRepresentation
        
}

export const EntryListComponent = () => {
    // Use the journal entry data from the data module component
    const entries = getJournalEntries()
    addEntriesToDom(entries);

}
