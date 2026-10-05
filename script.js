const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const shareButton = document.querySelector('.share-button');
const toast = document.querySelector('.toast');
let toastTimer;

function showToast(message = 'Link copiado ✨') {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 1800);
}

shareButton?.addEventListener('click', async () => {
  const shareData = {
    title: 'Color Studio Dany',
    text: 'Color Studio Dany — marcações, serviços e formações.',
    url: window.location.href
  };

  try {
    if (navigator.share && window.location.protocol !== 'file:') {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
    showToast();
  } catch (error) {
    if (error?.name !== 'AbortError') showToast('Copie o link desta página');
  }
});
