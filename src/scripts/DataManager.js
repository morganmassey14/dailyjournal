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

  export const deletePost = postId => {
    return fetch(`http://localhost:8088/journal-entries/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
  
    })
        .then(response => response.json())
  }