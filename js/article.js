//Takes a tab number and fetches a url on the corresponding number
function changeTab(event, tabNum){
  const article = document.querySelector('.article_wrapper');
  const sidebar = document.querySelector('.section-content');
  const title = document.querySelector('.section-title');

  let url = '';
  let sidebarURL = '';

  if (tabNum == 1) {
    url = 'article-content/tab1.html';
    sidebarURL = 'article-content/sideBar1.html';
    title.innerHTML = '<h1 class="headline">COMPUTER SCIENCE AS DISCIPLINE, COMPUTING DISCIPLINES AND MAJORS</h1>';
    title.style.backgroundImage = "url(images/backgrounds/whatsbrodoing.jpg)";
  } else if (tabNum == 2) {
    url = 'article-content/tab2.html';
    sidebarURL = 'article-content/sideBar2.html';
    title.innerHTML = '<h1 class="headline">DATA AND INFORMATION, INFORMATION SYSTEMS, and DIFFERENT TYPES OF SUPPORT SYSTEMS IN INFORMATION SYSTEMS</h1>';
    title.style.backgroundImage = "url(images/backgrounds/backgroundfor2.jpg)";
  } else if (tabNum == 3) {
    url = 'article-content/tab3.html';
    sidebarURL = 'article-content/sideBar3.html';
    title.innerHTML = '<h1 class="headline">NUMBER SYSTEMS</h1>';
    title.style.backgroundImage = "url(../images/backgrounds/binary.jpg)";
  }  else if (tabNum == 4) {
    url = 'article-content/tab4.html';
    sidebarURL = 'article-content/sideBar4.html';
    title.innerHTML = '<h1 class="headline">Computer Hardware and Software: Their Implementations in the Different Institutions in the Community</h1>';
    title.style.backgroundImage = "url(../images/backgrounds/its-a-computer.jpg)";
  } else if (tabNum == 5) {
    url = 'article-content/tab5.html';
    sidebarURL = 'article-content/sideBar5.html';
    title.innerHTML = '<h1 class="headline">Comparative Study on Different Types of Motherboards</h1>';
    title.style.backgroundImage = "url(../images/backgrounds/backgroundfor2.jpg)";
  }  else if (tabNum == 6) {
    url = 'article-content/tab6.html';
    sidebarURL = 'article-content/sideBar6.html';
    title.innerHTML = '<h1 class="headline">Comparative Study on Different Types of Computers</h1>';
    title.style.backgroundImage = "url(../images/backgrounds/backgroundfor2.jpg)";
  }

  //Load content dynamically using Ajax

  //article wrapper
  fetch(url)
      .then(response => response.text())
      .then(data => {
          article.innerHTML = data;
      })
        .catch(error => {
            console.error('Error loading content:', error);
        });

//sidebar
fetch(sidebarURL)
        .then(response => response.text())
        .then(data => {
            sidebar.innerHTML = data;
        })
          .catch(error => {
              console.error('Error loading sidebar content:', error);
          });
}
window.onload = function() {
  changeTab(event, 1);
};