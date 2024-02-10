import React, { useEffect, useState } from 'react';

const GenreComponent = ({ imageUrl, title }) => {
  const [averageColor, setAverageColor] = useState({ R: 0, G: 0, B: 0 });

  useEffect(() => {
    const getColor = (imgURL, ratio, callback) => {
      const img = document.createElement('img');
      img.crossOrigin = 'Anonymous';

      img.onload = function () {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        context.drawImage(img, 0, 0);

        let data, length;
        let i = -4,
          count = 0;
        try {
          data = context.getImageData(0, 0, canvas.width, canvas.height);
          length = data.data.length;
        } catch (err) {
          console.error(err);
          callback({
            R: 0,
            G: 0,
            B: 0,
          });
          return;
        }

        let R = 0,
          G = 0,
          B = 0;
        while ((i += ratio * 4) < length) {
          ++count;
          R += data.data[i];
          G += data.data[i + 1];
          B += data.data[i + 2];
        }

        R = ~~(R / count);
        G = ~~(G / count);
        B = ~~(B / count);

        callback({
          R,
          G,
          B,
        });
      };

      img.src = imgURL;
    };

    getColor(imageUrl, 5, setAverageColor);
  }, [imageUrl]);

  const rgbColor = `rgb(${averageColor.R}, ${averageColor.G}, ${averageColor.B})`;

  
  return (
    <div style={{ backgroundColor: rgbColor, }} className='rounded-md overflow-clip'>
        <h1 className="mt-2 ml-4 font-semibold text-lg">{title}</h1>
        <img src={imageUrl} className="relative w-20 h-20 rotate-12 ml-32 " />  
      </div>
    );
  }
  
  export default GenreComponent;
  