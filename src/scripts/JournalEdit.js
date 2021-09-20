export const PostEdit = (postObj) => {
	return `
    <div class="newPost">

<form action="concepts">
    <fieldset>
        <div class="concepts">
        <label for="conceptsCovered">Concepts Covered</label>
        <textarea name="conceptsCovered" id="conceptsCovered" cols="1" rows="1">${postObj.concept}</textarea>
        </div>
    </fieldset>
</form>
<form action="entry">
<fieldset>
    <div class="entry">
    <label for="journalEntry">Journal Entry</label>
    <textarea name="journalEntry" id="journalEntry" cols="1" rows="1">${postObj.entry}</textarea>
    </div>
</fieldset>
</form>
<form action="mood">
    <fieldset>
        <div class="mood">
        <label for="moodForTheDay">Mood For The Day</label>
        <select value="${postObj.mood}" name="mood-select" id="mood-select">
            <option value="0">--Please Choose A Mood--</option>
                <option value="Sad">Sad</option>
                <option value="Happy">Happy</option>
                <option value="Stressed">Stressed</option>
                <option value="Hopeful">Hopeful</option>
        </select>
    </div>
    </fieldset>
</form>
        <input type="hidden" value="${postObj.id}" name="postId">
        <input type="hidden" value="${postObj.date}" name="postDate">	       
        <button id="updatePost__${postObj.id}">Update</button>
        <button id="newPost__cancel">Cancel</button>
    </div>
    `
}