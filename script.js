const APILINK= ' https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1e7c47e66e64eff782801c923a8f1837=1';
const IMG_PATH= 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI= "https://api.themoviedb.org/3/search/movie?&api_key=1e7c47e66e64eff782801c923a8f1837&query=";

const main=document.getElementById("#section");
const form=document.getElementById("#form");
const search=document.getElementById("#query");


function retrnMovies(APILINK)
{
fetch(url).then(res => res.json()).then(function(data)
{
 console.log(data.results);
 data.results.array.forEach(element => {
   const div_card=document.createElement('div');
   div_card.setAttribute('class', 'card');

   const div_row=document.createElement('div');
    div_card.setAttribute('class', 'row');

   const div_column=document.createElement('div');
    div_card.setAttribute('class', 'column');

   const image=document.createElement('img');
    div_card.setAttribute('class', 'thumbnail');
    div_card.setAttribute('id', 'image');

   const title=document.createElement('h3');
      div_card.setAttribute('id', 'title');

   const span=document.createElement('span');

   title.innerHTML = `${element.title}`;
   image.src = IMG_PATH + element.poster_path;
    span.appendChild(image);
    div_card.appendChild(span);
    div_card.appendChild(title);
    div_column.appendChild(div_card);
    div_row.appendChild(div_column); 

    main.appendChild(div_row);

 });   
});
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML='';


  const searchItem = search.value;
  
  if(searchItem)
  {
    retrnMovies(SEARCHAPI + searchItem);
    search.value='';
  }
})