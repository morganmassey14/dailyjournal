// this function gets ALL JOURNAL ENTRIES
export const getJournalEntries = () => {
    //this returns back where we invoked it (in main)
    return fetch("http://localhost:8088/journal-entries")
        .then(response => response.json())
}

// this is where this function fetches our data from json and translates it in a way that javascript understands it

export const createJournalEntry = postObj => {
    return fetch("http://localhost:8088/journal-entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)

    })
        .then(response => response.json())
}

// this will update a post in the database. ("put" replaces the data within the matching ID and does NOT create a new item)
export const updatePost = postObj => {
    return fetch(`http://localhost:8088/journal-entries/${postObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)

    })
        .then(response => response.json())

}
// this gets a single posts, and makes sure we have the latest information from the database
export const getSinglePost = (postId) => {
    return fetch(`http://localhost:8088/journal-entries/${postId}`)
        .then(response => response.json())
}

export const deletePost = postId => {
    return fetch(`http://localhost:8088/journal-entries/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }

    })
        .then(response => response.json())
}