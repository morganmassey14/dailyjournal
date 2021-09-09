export const JournalEntryComponent = (entry) => {
    return `<section id="entry--${entry.id}" class="journalEntry">
            <div class="entry-date">${entry.date}</div>
            <div class="entry-concept">${entry.concept}</div>
            <div class= "entry-entry">${entry.entry}</div>
            <div class= "mood">${entry.mood}</div

        </section>
    `
}

export const PostEntry = () => {
    return `
    <div class="newPost">

<form action="concepts">
    <fieldset>
        <div class="concepts">
        <label for="conceptsCovered">Concepts Covered</label>
        <textarea name="conceptsCovered" id="conceptsCovered" cols="1" rows="1"></textarea>
        </div>
    </fieldset>
</form>
<form action="entry">
<fieldset>
    <div class="entry">
    <label for="journalEntry">Journal Entry</label>
    <textarea name="journalEntry" id="journalEntry" cols="1" rows="1"></textarea>
    </div>
</fieldset>
</form>
<form action="mood">
    <fieldset>
        <div class="mood">
        <label for="moodForTheDay">Mood For The Day</label>
        <select name="mood-select" id="mood-select">
            <option value="">--Please Choose A Mood--</option>
                <option value="Sad">Sad</option>
                <option value="Happy">Happy</option>
                <option value="Stressed">Stressed</option>
                <option value="Hopeful">Hopeful</option>
        </select>
    </div>
    </fieldset>
</form>

        <button id="newPost__submit">Save</button>
        <button id="newPost__cancel">Cancel</button>
    </div>
    `
}
