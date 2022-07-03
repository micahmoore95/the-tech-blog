const titleInput = document.querySelector('#title-input');
const contentInput = document.querySelector('#content-input');
const createBtnEl = document.querySelector('#create-btn');

async function createNewPost(event) {
  event.preventDefault();
  const postTitle = titleInput.value;
  const postText = contentInput.value;

  const payload = {
    title: postTitle,
    post_text: postText,
  };

  const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-type': 'application/json' },
  });

  if (response.ok) {
    titleInput.value = '';
    contentInput.value = '';
    window.location.replace('/dashboard');
    console.log('posted');
  } else {
    alert(response.statusText);
  }
}

createBtnEl.addEventListener('click', createNewPost);