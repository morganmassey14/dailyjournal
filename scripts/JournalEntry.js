export const JournalEntryComponent = (entry) => {
    return `<section id="entry--${entry.id}" class="journalEntry">
            <div class="entry-date">${entry.date}</div>
            <div class="entry-concept">${entry.concept}</div>
            <div class= "entry-entry">${entry.entry}</div>
            <div class= "mood">${entry.mood}</div

        </section>
    `
}

