const randomSourceImage = () => {
  const url = [
    'https://picsum.photos/id/16/1000/760',
    'https://picsum.photos/id/22/1000/720',
    'https://picsum.photos/id/25/1000/1200',
    'https://picsum.photos/id/29/1000/1200',
    'https://picsum.photos/id/34/1000/720',
    'https://picsum.photos/id/39/1000/640',
    'https://picsum.photos/id/47/1000/760',
    'https://picsum.photos/id/52/1000/740',
    'https://picsum.photos/id/58/1000/720',
    'https://picsum.photos/id/57/1000/640',
    'https://picsum.photos/id/59/1000/1200',
  ];

  const randomUrl = Math.floor(Math.random() * url.length);

  return `${url[randomUrl]}`;
};

export default randomSourceImage;
