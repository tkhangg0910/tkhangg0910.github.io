document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.second-text');
    const textload =()=>{
        setTimeout(()=>{
            text.textContent = "Coder";
        }, 0);
        setTimeout(()=>{
            text.textContent = "Web Developer";
        }, 4000);
        setTimeout(()=>{
            text.textContent = "Researcher";
        }, 8000);
        setTimeout(()=>{
          text.textContent = "Photographer";
      }, 12000);
    }
    textload();
    setInterval(textload,16000)

    new Glider(document.querySelector('.glider'), {
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 304,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
    });
});