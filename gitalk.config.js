window.onload=function(){
  const gitalk = new Gitalk({
    "clientID": "d3491cdc4dc44e40ddff",
    "clientSecret": "caf877b323fd49de292dcb4262b35004ec328202",
    "repo": "HTMLDemo",
    "owner": "veng0923",
    "admin": ["veng0923"],
    "id": window.location.pathname,
    "distractionFreeMode": false
  });
  gitalk.render("gitalk-container");
};
