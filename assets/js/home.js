// scroll animation fixed text
function scrollFixedText (textClass, containerId, additionalOffsetTop) {
    let interestsText = document.querySelector(textClass);
    let currentPosition = window.scrollY;
    let offsetTop = document.querySelector(containerId).offsetTop - additionalOffsetTop;

    if (currentPosition >= offsetTop) {
        interestsText.classList.add('is-fixed');
        interestsText.classList.remove('is-relative');
    } else {
        interestsText.classList.remove('is-fixed');
        interestsText.classList.add('is-relative');
    }
}

window.addEventListener('scroll', function () {
    scrollFixedText('.interests-caption', '#interests-caption-container', 20);
});

// horizontal scroll animation
const sections = gsap.utils.toArray(".container section");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        end: "+=3000",
    }
});

// Load more
let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.box')];
    for (let i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 3;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
}

