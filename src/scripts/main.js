import { Footer } from "./Footer.js";
import { EntryListComponent } from "./JournalEntryList.js";
import { getJournalEntries, createJournalEntry, deletePost } from "./DataManager.js";
import { PostEntry } from "./JournalEntry.js";
// import { JournalEntryComponent } from "./JournalEntry.js";

let yearSelected = 2021; //default

const showPostEntry = () => {
	//Get a reference to the location on the DOM where the nav will display
	const entryElement = document.querySelector(".entryForm");
	entryElement.innerHTML = PostEntry();
}

const entryLogElement = document.querySelector("#entryLog");

const formElement = document.querySelector(".entryForm");


const showFooter = (yearSelected) => {
	const footerElement = document.querySelector("footer");
	footerElement.innerHTML = Footer(yearSelected)
  }

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

entryLogElement.addEventListener("click", event => {
	console.log("eventTarget", event.target.id);
	event.preventDefault();
	if (event.target.id.startsWith("delete")) {
	  const postId = event.target.id.split("__")[1];
	  deletePost(postId)
		.then(response => {
		  showJournalEntries();
		})
	}
  })

showJournalEntries();
showPostEntry();
showFooter(yearSelected);


// EntryListComponent();
// getJournalEntires();