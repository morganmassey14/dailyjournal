import { EntryListComponent } from "./JournalEntryList.js";
import { getJournalEntries, createJournalEntry } from "./DataManager.js";
import { PostEntry } from "./JournalEntry.js";
// import { JournalEntryComponent } from "./JournalEntry.js";

const showPostEntry = () => {
	//Get a reference to the location on the DOM where the nav will display
	const entryElement = document.querySelector(".entryForm");
	entryElement.innerHTML = PostEntry();
}

const formElement = document.querySelector(".entryForm");

const showJournalEntries = () => {
	// we got all data from datamanager 
	// and we invoke it here .then gives an order to the process (get journal entries first, and then were setting the return to allentries(taco))

	getJournalEntries().then((allEntries) => EntryListComponent(allEntries))
}

formElement.addEventListener("click", event => {
	event.preventDefault();
	console.log(event.target.id);
	if (event.target.id === "newPost__submit") {
		//collect the input values into an object to post to the DB
		const concept = document.querySelector("textarea[name='conceptsCovered']").value
		const entry = document.querySelector("textarea[name='journalEntry']").value
		const mood = document.querySelector("select[name='mood-select']").value
		
		//we have not created a user yet - for now, we will hard code `1`.
		//we can add the current time as well
		const journalEntryObject = {
			date: Date.now(),
			concept: concept,
			entry: entry,
			mood: mood
		}

		// be sure to import from the DataManager
		createJournalEntry(journalEntryObject)
		.then(dbResponse => {
			showJournalEntries();
		});
	}
})

showJournalEntries();
showPostEntry();


// EntryListComponent();
// getJournalEntires();