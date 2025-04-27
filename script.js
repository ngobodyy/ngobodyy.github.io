import { waccaSongs } from "/waccaSongs.js"

const dropdown = document.getElementById("songSelect")


for (let s in waccaSongs){
    dropdown.innerHTML += `<option value=${s}>${waccaSongs[s].artist} - ${waccaSongs[s].title}</option>`
}

dropdown.addEventListener("change", (event)=>{
    let songKey = event.target.value
    document.getElementById("displayInfo1").innerHTML = `
        <h3>${waccaSongs[songKey].title}</h3>
        `
     if (waccaSongs[songKey].titleEnglish != null) {
        document.getElementById("displayEngTitle").innerHTML = `
        <h3>${waccaSongs[songKey].titleEnglish}</h3>
        `
    }
    document.getElementById("displayInfo2").innerHTML = `
        <h3>${waccaSongs[songKey].artist}</h3>
        <img class=albumart src="/WACCA_Songs/img/${waccaSongs[songKey].imageName}">
        <div></div>
        <audio controls src="/WACCA_Songs/audio/${waccaSongs[songKey].audioPath}"></audio>
    `
    if (waccaSongs[songKey].audioInfPath != null) {
        document.getElementById("displayInfAudio").innerHTML = `
        <audio controls src="/WACCA_Songs/audio/${waccaSongs[songKey].audioInfPath}"></audio>
        `
    }
    document.getElementById("displayInfo3").innerHTML = `
        <h3>Song ID: ${waccaSongs[songKey].id}</h3>
        <h3>Category: ${waccaSongs[songKey].category}</h3>
        <h3>Release Date: ${waccaSongs[songKey].releaseDate}</h3>
        <h3>Song BPM: ${waccaSongs[songKey].bpm}</h3>
    `
})