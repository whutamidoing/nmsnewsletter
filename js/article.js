//Takes a tab number and fetches a url on the corresponding number
function changeTab(event, tabNum){
  const article = document.querySelector('.article_wrapper');

  let url = '';
  if (tabNum == 1) {
      url = 'article-content/tab1.html';
  } else if (tabNum == 2) {
      url = 'article-content/tab2.html';
  } else if (tabNum == 3) {
    url = 'article-content/tab3.html';
  }  else if (tabNum == 4) {
    url = 'article-content/tab4.html';
  } else if (tabNum == 5) {
    url = 'article-content/tab5.html';
  }  else if (tabNum == 6) {
    url = 'article-content/tab6.html';
  }

  //Load content dynamically using Ajax
  fetch(url)
      .then(response => response.text())
      .then(data => {
          article.innerHTML = data;
      })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}
window.onload = function() {
  changeTab(event, 1);
};