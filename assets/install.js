// 설치 방법 버튼을 누르면 아래 설명을 펼치고 접습니다
document.querySelectorAll('[aria-controls="install"]').forEach((button) => {
  const panel = document.getElementById('install');
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
  });
});
