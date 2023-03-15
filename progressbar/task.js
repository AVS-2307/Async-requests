const form = document.getElementById('form');
let progress = document.getElementById('progress');

form.addEventListener('submit', (e)=> {

  const formData = new FormData(form);
  let xhr = new XMLHttpRequest();

  xhr.upload.addEventListener('progress', (e) => {
      progress.value = e.loaded / e.total;
  });

  xhr.upload.addEventListener('load', () => {
      alert('Файл загружен успешно')
  });

  xhr.upload.addEventListener('error', () => {
      alert('Загрузка не удалась')
  });
  

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(formData);

  e.preventDefault();
});
