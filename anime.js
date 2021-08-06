//background color for body

document.body.style.backgroundColor = "lightgrey"

      
var ele = document.createElement("div");
ele.setAttribute("class", "container")
document.body.append(ele)

var textField = document.createElement("input")
textField.setAttribute("id", "myInput");
textField.setAttribute("class", "myInput");

textField.placeholder = "Search for Anime"
textField.style.borderRadius = "10px"
textField.style.height = "50px"
textField.style.marginLeft = "60px"
textField.style.marginRight = "30px"
textField.type = "search"
ele.appendChild(textField);


var getButton = document.createElement("button")
getButton.setAttribute("class", "btn btn-outline-info my-2 my-sm-0")
getButton.style.borderRadius = "10px"
getButton.style.height = "50px"
getButton.setAttribute("onclick", "search()")
getButton.innerText = "search"
ele.appendChild(getButton)




var ele1 = document.createElement("div");
ele1.setAttribute("id", "b2")
document.body.append(ele1)


// creating a div element
function refresh(){
    location.reload()
}


function search() {

    var value = document.getElementById("myInput").value

    if (value == "" || null) {
        alert("input box empty")
    }

    else {
        viewinfo()
    }

}

async function viewinfo() {
    try {
        const api = "https://api.jikan.moe/v3";
        var value = document.getElementById("myInput").value

        var data = await fetch(api + "/search/anime?q=" + value + "&page=1")
        var resp = await data.json();
        console.log(resp)

        var len = resp.results.length

        for (var i = 0; i < len; i++) {
            const element = resp.results[i]

            var img = document.createElement("img")
            img.src = element.image_url
            document.getElementById("b2").append(img)

            var title = document.createElement("div")
            title.innerText = "Title : " + element.title
            document.getElementById("b2").append(title)


            var episode = document.createElement("div")
            episode.innerText = "Episode : " + element.episodes
            document.getElementById("b2").append(episode)

            var start = document.createElement("div")
            start.innerText = "Start Date : " + element.start_date
            document.getElementById("b2").append(start)

            var end = document.createElement("div")
            end.innerText = "End Date : " + element.end_date
            document.getElementById("b2").append(end)

            var type = document.createElement("div")
            type.innerText = "Type : " + element.type
            document.getElementById("b2").append(type)

            var imdb = document.createElement("div")
            imdb.innerText = "IMDB Rating : " + element.score
            document.getElementById("b2").append(imdb)

            var synp = document.createElement("p")
            synp.innerText = "Fore read : " + element.synopsis
            document.getElementById("b2").append(synp)

        }
    } catch (error) {
        console.error()
    }
}