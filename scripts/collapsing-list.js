const collapsingListItems = document.querySelectorAll('.collapsing-list__item');

collapsingListItems.forEach((listItem) => {
  const header  = listItem.querySelector('.collapsing-list__header');
  const icon    = listItem.querySelector('.collapsing-list__button-icon');
  const content = listItem.querySelector('.collapsing-list__content');

  header.addEventListener('click', () => {    
    collapseListItem(icon, content);
  });
});

function collapseListItem(icon, content) {
  icon.classList.toggle('collapsing-list__button-icon_opened');
  content.classList.toggle('collapsing-list__content_opened');
  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  } 
}

