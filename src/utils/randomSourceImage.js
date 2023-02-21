const randomSourceImage = () => {
  const url = [
    'https://loremflickr.com/cache/resized/8308_7759868374_6b919e7ade_h_1000_760_nofilter.jpg',
    'https://loremflickr.com/cache/resized/65535_52419524988_29b38dc650_h_1000_1000_nofilter.jpg',
    'https://loremflickr.com/cache/resized/65535_52622373263_ef48964962_h_1000_760_nofilter.jpg',
    'https://loremflickr.com/cache/resized/65535_52372706135_3059dc8a5d_h_1000_760_nofilter.jpg',
    'https://loremflickr.com/cache/resized/65535_52079375633_09478293c9_k_1000_720_nofilter.jpg',
    'https://loremflickr.com/cache/resized/65535_52558616735_98cbd07e32_h_1000_720_nofilter.jpg',
    'https://loremflickr.com/cache/resized/65535_52552275649_12ff8f32df_k_1000_1200_nofilter.jpg',
    'https://loremflickr.com/cache/resized/65535_52086666268_b4db2245fd_k_1000_1200_nofilter.jpg',
    'https://loremflickr.com/cache/resized/65535_51295823634_28ea536f70_k_1000_1200_nofilter.jpg',
    'https://loremflickr.com/cache/resized/65535_51836511631_de9d76f973_k_1000_1200_nofilter.jpg',
  ];

  const randomUrl = Math.floor(Math.random() * url.length);

  return `${url[randomUrl]}`;
};

export default randomSourceImage;
