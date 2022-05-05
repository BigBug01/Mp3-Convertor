const text = document.querySelector('#iste');
const button = document.querySelector('#callurl');
const atribute = document.querySelector('#widgetIframe');




button.addEventListener('click', () => {
    var videoID = text.value.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=))([\w\-]{10,12})\b/)[1];
    console.log(videoID);
    const url = `https://ytmp3to.com/api/widget/all/${videoID}`;
    atribute.setAttribute('src', url);

    atribute.style.width = '100vw';
    atribute.style.height = '100vh';
});
