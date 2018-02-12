
export const ParseDocument = (content) => {
    return new Promise((resolve, reject)=> {
        try{
            let wordCount = 0
            const termCounts = {}
            const words = content.split(/\W+/)
            words.forEach(word => {
                word = word.trim().toLowerCase()
                if(word.length === 0){
                    return
                }
                wordCount++
                if(!termCounts[word]){
                    termCounts[word] = 0
                }
                termCounts[word]++
            })
            resolve({
                wordCount,
                terms: termCounts,
                identifier: content.slice(0, 20)
            })
        } catch(e){
            reject(e)
        }
    })
}

export const FetchDocument = (url) => {
    return fetch(url)
        .then(response => {
            if(response.status >= 400){
                throw new Error("Document failed to download")
            }
            return response.text()
        })
}