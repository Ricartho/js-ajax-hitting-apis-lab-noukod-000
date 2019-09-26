function displayRepositories(){
    const repos = JSON.parse(this.responseText);
    const repoList = `<ul>${repos.map(r => '<li><strong>' + r.name +'</strong> by '+ r.owner.login + ' -<a href="https://github.com/'+r.full_name+'" data-repo="'+r.name+'"data-user="'+r.owner.login+'"onsubmit="getCommits(this)">Details</a>' + '</li>').join('')}</ul>`;
   document.getElementById("repositories").innerHTML = repoList;
}
 
function getRepositories(){
  const user = document.getElementById('username').value;
  const req = new XMLHttpRequest();
  req.addEventListener('load',displayRepositories);
  req.open('GET','https://api.github.com/users/'+ user +'/repos');
  req.send();
  
}

function getCommits(el){
  const username = el.dataset.user;
  const repository = el.dataset.repo
  const req = new XMLHttpRequest();
  req.open('GET','https://api.github.com/users/'+username+'/'+)
}