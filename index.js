// const getCommits = document.getElementById('details').addEventListener('click',function(event){
//   event.preventDefault();
//   const username = event.dataset.user;
//   const repository = event.dataset.repo
//   const req = new XMLHttpRequest();
//   req.open('GET','https://api.github.com/users/'+username+'/'+repository+'/commits');
//   req.send();
// })

function getCommits(el){
  const username = el.dataset.username;
  const repository = el.dataset.repository;
  const req = new XMLHttpRequest();
  req.addEventListener('load',)
  req.open('GET','https://api.github.com/repos/'+ username +'/'+ repository +'/commits');
  req.send();
}

function displayRepositories(){
    const repos = JSON.parse(this.responseText);
    const repoList = `<ul>${repos.map(r => '<li><strong>' + r.name +'</strong> by '+ r.owner.login + ' -<a href="https://github.com/'+r.full_name+'" data-repository="'+ r.name +'"data-username="'+ r.owner.login +'"onclick="getCommits(this)" id="details">Details</a>' + '</li>').join('')}</ul>`;
   document.getElementById("repositories").innerHTML = repoList;
}
 
function getRepositories(){
  const user = document.getElementById('username').value;
  const req = new XMLHttpRequest();
  req.addEventListener('load',displayRepositories);
  req.open('GET','https://api.github.com/users/'+ user +'/repos');
  req.send();
  
}

