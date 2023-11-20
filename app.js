let moviecontainer=document.getElementById('movieinfocontainer');
moviecontainer.style.display='none';
function movieinfo(){
let apiurl= 'https://www.omdbapi.com/?apikey=e3f2329f&t='
let moviesearched=document.getElementById('moviesearched').value;
let year=document.getElementById('year');
let rated=document.getElementById('rated');
let released=document.getElementById('released');
let runtime=document.getElementById('runtime');
let genre=document.getElementById('genre');
let actors=document.getElementById('actors');
let awards=document.getElementById('awards');
let writer=document.getElementById('writer');
let director=document.getElementById('director');
let title=document.getElementById('title');
let imdb=document.getElementById('imdbrating');
let img=document.getElementById('img');
    fetch(apiurl+moviesearched)
    .then((moviedata)=>moviedata.json()) //converted in json 
    .then((moviedata)=>{
        year.innerText=moviedata.Year;
        rated.innerText=moviedata.Rated;
        released.innerText=moviedata.Released;
        runtime.innerText=moviedata.Runtime;
        genre.innerText=moviedata.Genre;
        actors.innerText=moviedata.Actors;
        awards.innerText=moviedata.Awards;
        writer.innerText=moviedata.Writer;
        director.innerText=moviedata.Director;
        title.innerText=moviedata.Title;
        imdb.innerText=moviedata.imdbRating;
        img.src=moviedata.Poster;
        moviecontainer.style.display='flex';
    })
}