document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav__links-container');

    menuToggle.addEventListener('click', function() {
        navLinksContainer.classList.toggle('active');
    });
});
const scrollRevealOptionb={
    distance:"50px",
    origin: "bottom",
    duration:1000,
};
const scrollRevealOptionl ={
    distance:"70px",
    origin: "left",
    duration:1000,
};
const scrollRevealOptionr ={
    distance:"50px",
    origin: "right",
    duration:1000,
};
ScrollReveal().reveal(".content h1", scrollRevealOptionb);
ScrollReveal().reveal(".content h1 span",{ 
...scrollRevealOptionb,
delay: 500,
});
ScrollReveal().reveal(".content h1 span",{ 
    ...scrollRevealOptionb,
    delay: 500,
    
    
    });
    ScrollReveal().reveal(".content p",{ 
        ...scrollRevealOptionb,
        delay: 1000,
        });
        ScrollReveal().reveal(".content p span",{ 
            ...scrollRevealOptionb,
            delay: 1500,
            });
            ScrollReveal().reveal(".nav__links",{ 
                ...scrollRevealOptionr,
                delay: 700,
                });
                ScrollReveal().reveal(".image__bg",{ 
                    ...scrollRevealOptionr,
                    delay: 2000,
                    });
                    ScrollReveal().reveal(".image img",{ 
                        ...scrollRevealOptionl,
                        delay: 1500,
                        });
                
        ScrollReveal().reveal(".image__content__image__content__1",{ 
            ...scrollRevealOptionl,
                delay: 1500,
                }); 
                ScrollReveal().reveal(".image__content__image__content__2",{ 
                    ...scrollRevealOptionl,
                        delay: 2000,
                        });

