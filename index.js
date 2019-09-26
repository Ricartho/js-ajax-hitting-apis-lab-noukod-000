function displayRepositories(){
    const repos = JSON.parse(this.responseText);
    const repoList = `<ul>${repos.map(r => '<li><strong>' + r.name +'</strong> by '+ r.owner.login + ' -<a href="https://github.com/'+r.full_name+'" data-repo=""onsubmit="getCommits()">Details</a>' + '</li>').join('')}</ul>`;
   document.getElementById("repositories").innerHTML = repoList;
}
 
function getRepositories(){
  const user = document.getElementById('username').value;
  const req = new XMLHttpRequest();
  req.addEventListener('load',displayRepositories);
  req.open('GET','https://api.github.com/users/'+ user +'/repos');
  req.send();
  
}