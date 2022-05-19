const collapsingListItems = document.querySelectorAll('.collapsing-list__item');

collapsingListItems.forEach((listItem) => {
  let button  = listItem.querySelector('.collapsing-list__button');
  let content = listItem.querySelector('.collapsing-list__content');

  button.addEventListener('click', () => {    
    collapseListItem(button, content);
  });
});

function collapseListItem(button, content) {
  button.classList.toggle('collapsing-list__button_opened');
  content.classList.toggle('collapsing-list__content_opened');
  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  } 
}

