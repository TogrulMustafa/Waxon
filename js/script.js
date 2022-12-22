const hambBtn = document.querySelector('.hamburger')
const hambMenu = document.querySelector('.mobile-menu')
const closeBtn = document.querySelector('.close')
const nav = document.querySelector('.nav')
const menuList = document.querySelectorAll('.menu-list li a')
const hiddenAbout = document.querySelector('.about-hide')
const learnMoreBtn = document.querySelector('.about-text > button')
const portfolioBtn = document.querySelector('.portfolio-types > p')
const portfolioMenu = document.querySelector('.portfolio-types > ul')
const upLine = document.querySelector('.upLine')
const downLine = document.querySelector('.downLine')
const testimonialImgs = document.querySelectorAll('.testimonial-image img')
const newsElements = document.querySelectorAll('.news-item')
const closeNewsBtn = document.querySelector('.news-overlay > i')
const newsOverlay = document.querySelector('.news-overlay')
const closeAboutBtn = document.querySelector('.about-overlay > i')
const aboutOverlay = document.querySelector('.about-overlay')
const scrollToTop = document.querySelector('.scrollToTop')





// Portfolio bolmesinde mehsullarin filtrlenmesi
Array.from(document.querySelectorAll('.portfolio-types > ul > li > *')).forEach(item => {
    item.addEventListener('click', _ => {
        filterData.forEach(thing => {
            if (thing.name === item.textContent) {
                document.querySelector('.portfolio-gallery').innerHTML = ''
                document.querySelector('.portfolio-gallery').innerHTML += thing.data.map(item => {
                    return `
                    <div class="portfolio-col">
                        <div>
                            <img src=${item.img}>
                        </div>
                        <h5>${item.title}</h5>
                        <span>${item.type}</span>
                    </div>
                    `
                }).join(' ')
                document.querySelector('.portfolio-menu > div').innerHTML = ''
                document.querySelector('.portfolio-menu > div').innerHTML += thing.data.map(item => {
                    return `
                    ${item.media ? `<div class='mediaFile'>
                    <div><i class="fa-solid fa-play"></i></div>
                    <img src=${item.img}>
                    </div>`:
                    `
                    <div>
                    <img src=${item.img}>
                    </div>
                    `}
                    `
                }).join(' ')
                document.querySelector('.portfolio-sliders').innerHTML = ''
                document.querySelector('.portfolio-sliders').innerHTML += thing.data.map(item => {
                    return `
                    ${item.media ? `<div><iframe width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src=${item.media}></iframe></div>` : `<div><img src=${item.img}></div>`}
                    `
                }).join(' ')
                
                if (thing.name == 'Youtube') {
                    document.querySelector('.portfolio-col').classList.add('active')
                    document.querySelector('.portfolio-gallery').classList.add('active')
                }
                else {
                    document.querySelector('.portfolio-col').classList.remove('active')
                    document.querySelector('.portfolio-gallery').classList.remove('active')
                }

                showPortfolio()
            }
        })
    })
})

// Sehife yuklenib bitdikden sonra animasiyanin ortaya cixmasi
window.addEventListener('DOMContentLoaded', _ => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    document.querySelector('.entry-first').classList.add('active')
    document.querySelector('.entry-second').classList.add('active')
    

    setTimeout(_ => {
        document.querySelector('.entry-first').classList.remove('active')
        document.querySelector('.entryUp').classList.add('active')
        document.querySelector('.entryDown').classList.add('active')
    },2900)

    setTimeout(_ => {
        document.querySelector('.entry-third').classList.add('active')
    },3500)
})

// Ortaya cixan animasiyanin yigisdirilamsai
setTimeout(_ => {
    document.querySelector('.entry').style.display = 'none'
},4500)

// News bolmesinde bolmenin bezi elementlerini klikleyende gizlenmis news contentinin ortaya cixmasi
newsElements.forEach(item => {
    item.addEventListener('click', e => {
        document.querySelector('.news-hide').classList.add('active')
        if (e.target.classList.contains('news-pic1')) {
            document.querySelector('.news-popup > img').src = './img/news/news-img1.jpg'
            document.querySelector('.news-author > a').textContent = 'By Alex Watson'
            document.querySelector('.news-author > span').textContent = '10 May 2021'
            document.querySelector('.news-popup > h5').textContent = 'How to be appreciated for your hard work as a developer'
        } 
        else if (e.target.classList.contains('news-pic2')) {
            document.querySelector('.news-popup > img').src = './img/news/news-img2.jpg'
            document.querySelector('.news-author > a').textContent = 'By Bona Green'
            document.querySelector('.news-author > span').textContent = '05 April 2021'
            document.querySelector('.news-popup > h5').textContent = 'How to be appreciated for your hard work as a developer'
        }
        else if (e.target.classList.contains('news-pic3')) {
            document.querySelector('.news-popup > img').src = './img/news/news-img3.jpg'
            document.querySelector('.news-author > a').textContent = 'By Ave Smith'
            document.querySelector('.news-author > span').textContent = '22 March 2021'
            document.querySelector('.news-popup > h5').textContent = 'How designers and developers can collaborate better'
        }
    })
})

// Gizledilmis news bolmesinde x duymesine klikleyende bu bolmenin baglanmasi 
closeNewsBtn.addEventListener('click', _ => {
    document.querySelector('.news-hide').classList.remove('active')
})

// Gizledilmis news bolmesinde overlaya klikleyende bu bolmenin baglanmasi 
newsOverlay.addEventListener('click', _ => {
    document.querySelector('.news-hide').classList.remove('active')
})

// Testimonial bolmesinde sekillere klikleyende hemin bolmenin bezi elementlerinin contentinin deyismesi
testimonialImgs.forEach(item => {
    item.addEventListener('click', e => {
        if (e.target.className == 'image1') {  
            document.querySelector('.image2').style.opacity = '.5'
            document.querySelector('.image3').style.opacity = '.5'
            document.querySelector('.image1').style.opacity = '1'
            document.querySelector('.pic1 img').style.opacity = '1'
            document.querySelector('.pic2 img').style.opacity = '0'
            document.querySelector('.pic3 img').style.opacity = '0'
            document.querySelector('.pic1 img').style.transform = 'scale(1)'
            document.querySelector('.pic3 img').style.transform = 'scale(1.5)'
            document.querySelector('.pic2 img').style.transform = 'scale(1.5)'
            document.querySelector('.testimonial-comment p').textContent = 
            `Good overall template. I am getting back into coding and had a simple question
            for the author. They responded within 30 minutes and answered my question. Highly
            recommend.`
            document.querySelector('.testimonial-comment > div > div > div > h4').textContent = "Nelly Furtado"
            document.querySelector('.testimonial-comment > div > div > div > span').textContent = "App Developer"
        } 
        else if (e.target.className == 'image2') {
            document.querySelector('.image1').style.opacity = '.5'
            document.querySelector('.image3').style.opacity = '.5'
            document.querySelector('.image2').style.opacity = '1'
            document.querySelector('.pic1 img').style.opacity = '0'
            document.querySelector('.pic2 img').style.opacity = '1'
            document.querySelector('.pic3 img').style.opacity = '0'
            document.querySelector('.pic1 img').style.transform = 'scale(1.5)'
            document.querySelector('.pic2 img').style.transform = 'scale(1)'
            document.querySelector('.pic3 img').style.transform = 'scale(1.5)'
            document.querySelector('.testimonial-comment p').textContent = 
            `I can't believe I got support and my problem resolved in just minutes from posting my question.
            Simply amazing team and amazing theme! Thank you very much guys for excellent support!`
            document.querySelector('.testimonial-comment > div > div > div > h4').textContent = "Brian Ederson"
            document.querySelector('.testimonial-comment > div > div > div > span').textContent = "Web Designer"
        }
        else if (e.target.className == 'image3') {
            document.querySelector('.image1').style.opacity = '.5'
            document.querySelector('.image2').style.opacity = '.5'
            document.querySelector('.image3').style.opacity = '1'
            document.querySelector('.pic1 img').style.opacity = '0'
            document.querySelector('.pic2 img').style.opacity = '0'
            document.querySelector('.pic3 img').style.opacity = '1'
            document.querySelector('.pic2 img').style.transform = 'scale(1.5)'
            document.querySelector('.pic3 img').style.transform = 'scale(1)'
            document.querySelector('.pic1 img').style.transform = 'scale(1.5)'
            document.querySelector('.testimonial-comment p').textContent = 
            `Awesome template, well written code and looks great on any platform. The customer support is very helpful
            and as huge asset to this template. Overall a good design, that I am quite happy with.`
            document.querySelector('.testimonial-comment > div > div > div > h4').textContent = "Steve Collins"
            document.querySelector('.testimonial-comment > div > div > div > span').textContent = "Artel Corp."
        }
    })
})

// Portfolio bolmesinde olan duymeni klikleyende portfolio menyusunun ortaya cixmasi
portfolioBtn.addEventListener('click', _ => {

    portfolioMenu.classList.toggle('active')

    if (portfolioMenu.className == 'active') {

        upLine.classList.add('active')
        downLine.classList.add('active')

        const currentPortfolioBtn = _ => {
            upLine.classList.add('active')
            downLine.classList.add('active')
        }
        
        portfolioBtn.addEventListener('mouseout', currentPortfolioBtn)
    }
    else {
        const initialPortfolioBtn = _ => {
            upLine.classList.remove('active')
            downLine.classList.remove('active')
        }
        
        portfolioBtn.addEventListener('mouseout', initialPortfolioBtn)
    }
})

// Portfolio bolmesinde olan duymenin uzerine geldikde/uzerinden cixdiqda duymenin buna reaksiya vermesi
const currentPortfolioBtn = _ => {
    upLine.classList.add('active')
    downLine.classList.add('active')
}

portfolioBtn.addEventListener('mouseover', currentPortfolioBtn)


const initialPortfolioBtn = _ => {
    upLine.classList.remove('active')
    downLine.classList.remove('active')
}

portfolioBtn.addEventListener('mouseout', initialPortfolioBtn)

// Hamburger ikonunu klikleyende sagdan menyunun acilmasi
hambBtn.addEventListener('click', _ => {
    document.querySelector('.up-line').classList.add('active')
    document.querySelector('.center-line').classList.add('active')
    document.querySelector('.down-line').classList.add('active')
    hambMenu.classList.remove('show')
    hambMenu.classList.add('active')
    Array.from(document.querySelectorAll('.menu-list li a')).forEach(item => {
        item.classList.add('active')
    })
    Array.from(document.querySelectorAll('.link-list li a i')).forEach(item => {
        item.classList.add('active')
    })
})

// Sagdan acilan menyuda x ikonunu klikleyende hemin menyunun baglanmasi
closeBtn.addEventListener('click', _ => {
    document.querySelector('.up-line').classList.remove('active')
    document.querySelector('.center-line').classList.remove('active')
    document.querySelector('.down-line').classList.remove('active')
    hambMenu.classList.remove('active')
    Array.from(document.querySelectorAll('.menu-list li a')).forEach(item => {
        item.classList.remove('active')
    })
    Array.from(document.querySelectorAll('.link-list li a i')).forEach(item => {
        item.classList.remove('active')
    })
})

// Window'u vertikal olaraq skroll edende sabit nav bolmesinin ortaya cixmasi
window.addEventListener('scroll', _ => {
    nav.classList.toggle('active', scrollY > 0)
    document.querySelector('.nav-content').classList.toggle('active', scrollY > 0)
    scrollToTop.classList.toggle('active', scrollY > 150)
})

// scrollToTop duymesini klikleyende ekranin saytin evveline surusmesi
scrollToTop.addEventListener('click', _ => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

// Window'u horizontal olaraq resize edende aciq almis sagdan acilan menyunun baglanmasi
window.addEventListener('resize', _ => {
    if (window.innerWidth > 992) {
        hambMenu.classList.add('show')
        document.querySelector('.up-line').classList.remove('active')
        document.querySelector('.center-line').classList.remove('active')
        document.querySelector('.down-line').classList.remove('active')
    }
})

// Sagdan acilan menyuda her hansi bolmeni klikleyende sagdan acilan menyunun baglanmsi
menuList.forEach(item => {
    item.addEventListener('click', _ => {
        hambMenu.classList.remove('active')
        document.querySelector('.up-line').classList.remove('active')
        document.querySelector('.center-line').classList.remove('active')
        document.querySelector('.down-line').classList.remove('active')
    })
})

// About bolmesinde Learn More duymesine klikleyende gizledilmis about bolmesinin ortaya cixmasi
learnMoreBtn.addEventListener('click', _ => {
    hiddenAbout.classList.add('active')
})

// Gizledilmis about bolmesinde x duymesine klikleyende bu bolmenin baglanmasi 
closeAboutBtn.addEventListener('click', _ => {
    hiddenAbout.classList.remove('active')
})

// Gizledilmis about bolmesinde overlaya klikleyende bu bolmenin baglanmasi 
aboutOverlay.addEventListener('click', _ => {
    hiddenAbout.classList.remove('active')
})

// About bolmesinin slayder qisminin kodu
const aboutSlider = document.querySelector('.service-slider')
const sliderItems = document.querySelectorAll('.service-slider > *')
const sliderLength = sliderItems.length

const perView = 3
let totalScroll = 0
const delay = 2000

aboutSlider.style.setProperty('--per-view', perView)
for(let i = 0; i < perView; i++) {
    aboutSlider.insertAdjacentHTML('beforeend', sliderItems[i].outerHTML)
}

let autoVisibleScroll = setInterval(scrolling, delay)

function scrolling() {
    totalScroll++
    if(totalScroll == sliderLength + 1) {
        clearInterval(autoVisibleScroll)
        totalScroll = 1
        aboutSlider.style.transition = '0s'
        aboutSlider.style.left = '0'
        autoVisibleScroll = setInterval(scrolling, delay)
    }
    const widthEl = document.querySelector('.service-slider > :first-child').offsetWidth
    aboutSlider.style.left = `-${totalScroll * widthEl}px`
    aboutSlider.style.transition = '.3s'
}

// About bolmesinde Learn More duymesine klikleyende acilan pencerede olan slayderin kodu
const hiddenAboutSlider = document.querySelector('.about-slider')
const hiddenAboutSliderItems = document.querySelectorAll('.about-slider > *')
const hiddenAboutSliderLength = hiddenAboutSliderItems.length

const perView1 = 7
let totalScroll1 = 0
const delay1 = 2000

hiddenAboutSlider.style.setProperty('--per-view', perView1)
for(let i = 0; i < perView1; i++) {
    hiddenAboutSlider.insertAdjacentHTML('beforeend', hiddenAboutSliderItems[i].outerHTML)
}

let autoHiddenScroll = setInterval(scrolling1, delay1)

function scrolling1() {
    totalScroll1++
    if(totalScroll1 == hiddenAboutSliderLength + 1) {
        clearInterval(autoHiddenScroll)
        totalScroll1 = 1
        hiddenAboutSlider.style.transition = '0s'
        hiddenAboutSlider.style.left = '0'
        autoHiddenScroll = setInterval(scrolling1, delay1)
    }
    const widthEl = document.querySelector('.about-slider > :first-child').offsetWidth
    hiddenAboutSlider.style.left = `-${totalScroll1 * widthEl}px`
    hiddenAboutSlider.style.transition = '.3s'
}

// Window'u skroll edende nav'da menulerin dinamik olaraq deyismesi
window.addEventListener('scroll', _ => {
    let sections = document.querySelectorAll('section')
    let scrollY = window.pageYOffset

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight
        let sectionTop = current.offsetTop - 50
        let id = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-menu > li a[href*=${id}].prevItem`).classList.add('active')
            document.querySelector(`.nav-menu > li a[href*=${id}].nextItem`).classList.add('active')
            document.querySelector(`.nav-menu > li a[href*=${id}].prevItem`).classList.add('show')
            document.querySelector(`.nav-menu > li a[href*=${id}].nextItem`).classList.add('show')
        }
        else {
            document.querySelector(`.nav-menu > li a[href*=${id}].prevItem`).classList.remove('active')
            document.querySelector(`.nav-menu > li a[href*=${id}].nextItem`).classList.remove('active')
            document.querySelector(`.nav-menu > li a[href*=${id}].prevItem`).classList.remove('show')
            document.querySelector(`.nav-menu > li a[href*=${id}].nextItem`).classList.remove('show')
            if (portfolioMenu.classList.contains('active')) {
                portfolioMenu.classList.remove('active')
                upLine.classList.remove('active')
                downLine.classList.remove('active')
            }
        } 
    })   
})

// Scrollreveal
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.home-text h2.name', {delay: 3200, origin: 'top'});
ScrollReveal().reveal('.home-text h2.name2', {delay: 3300, origin: 'bottom'});
ScrollReveal().reveal('.home-text p', {delay: 3400, origin: 'bottom'});
ScrollReveal().reveal('.about-content img, .about-text > div', {delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.about-text > span', {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.about-text > button, .about-text > p', {delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.portfolio h3, .portfolio div > p', {delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.testimonial h3', {delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.testimonial-image', {delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.testimonial-comment', {delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.news h3', {delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.news-content', {delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.contact h3', {delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.contact p', {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.contact-form', {delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.contact-iframe', {delay: 900, origin: 'bottom'});
ScrollReveal().reveal('.footer-content', {delay: 600, origin: 'bottom',distance: '50px'});

// Oxlarin adlandirilmasi
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

// Portfolio bolmesinde portfolio-hidden sektorunun acilmasi
function showPortfolio() {
    Array.from(document.querySelectorAll('.portfolio-col > div')).forEach((item, i) => {
        item.addEventListener('click', _ => {
            console.log(i)
            if (i == 0) {
                leftArrow.style.display = 'none'
                rightArrow.style.display = 'block'
                if (document.querySelectorAll('.portfolio-col > div').length == 1) {
                    leftArrow.style.display = 'none'
                    rightArrow.style.display = 'none'
                }
            } 
            else if (i == document.querySelectorAll('.portfolio-col > div').length - 1) {
                leftArrow.style.display = 'block'
                rightArrow.style.display = 'none'
            }
            else {
                leftArrow.style.display = 'block'
                rightArrow.style.display = 'block'
            }
            document.querySelector('.portfolio-hidden').classList.add('active')
            document.querySelector('.portfolio-sliders').style.left = `-${(document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth * document.querySelectorAll('.portfolio-sliders > div').length) - (document.querySelectorAll('.portfolio-sliders > div').length - i) * document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth}px`
            document.querySelector('.portfolio-sliders').style.transition = 'none'

            // Window'u resize ederken portfolio-slidersdaki slaydlarin surusmesinin onlenmesi
            preventSlideSlipping(i)
            
            // 
            Array.from(document.querySelectorAll('.portfolio-menu > div > div')).forEach((item, i) => {
                item.addEventListener('click', _ => {
                    // window.location.reload()
                    document.querySelector('.portfolio-sliders').style.left = `-${(document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth * document.querySelectorAll('.portfolio-sliders > div').length) - (document.querySelectorAll('.portfolio-sliders > div').length - i) * document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth}px`
                    document.querySelector('.portfolio-sliders').style.transition = 'none'
                    displayArrow(i)
                    slipSlide(i)
                    preventSlideSlipping(i)
                    if ( document.querySelector('.buttons > i.fa-solid').classList.contains('fa-ban')) {
                        document.querySelector('.buttons > i.fa-solid').classList.add('fa-play')
                        document.querySelector('.buttons > i.fa-solid').classList.remove('fa-ban')
                    }
                    autoplaySlide(i)
                    Array.from(document.querySelectorAll('.portfolio-menu > div > div')).forEach(item => {
                        item.style.setProperty('--imageBeforeOpacity', '0');
                        item.style.setProperty('--imageBeforeVisibility','hidden');
                    })

                    item.style.setProperty('--imageBeforeOpacity', '1');
                    item.style.setProperty('--imageBeforeVisibility','visible');
                })
            })

            // document.querySelector('.buttons > i:first-child').addEventListener('click', _ => {
            //     console.log('Test')

            //     let cock = setInterval(_ => {
            //         document.querySelector('.portfolio-sliders').style.left = `-${(document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth * document.querySelectorAll('.portfolio-sliders > div').length) - (document.querySelectorAll('.portfolio-sliders > div').length - i) * document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth}px`
            //         document.querySelector('.portfolio-sliders').style.transition = 'all 1s ease'
            //         displayArrow(i)
                    
            //         if (i < document.querySelectorAll('.portfolio-sliders > div').length - 1) {
            //             i++
            //             console.log(i)
            //         }
            //         else {
            //             clearInterval(cock)
            //         }
            //         preventSlideSlipping(i)

            //     },3000)
            // })

            let box = document.querySelectorAll('.portfolio-menu > div > div')[i];
            box.style.setProperty('--imageBeforeOpacity', '1');
            box.style.setProperty('--imageBeforeVisibility','visible');

            // portfolio-slidersdaki slaydlarin saga/sola dogru hereket etdirilmesi
            slipSlide(i)

            // Nav bolmesindeki slider'in ise salinmasi
            autoplaySlide(i)

            //? Nav bolmesindeki slider'in ise salinmasi
            // document.querySelector('.fa-play').addEventListener('click', _ => {
            //     let cock = setInterval(_ => {
            //         displayArrow(i)
            //         preventSlideSlipping(i)
            //         document.querySelector('.portfolio-sliders').style.left = `-${(document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth * document.querySelectorAll('.portfolio-sliders > div').length) - (document.querySelectorAll('.portfolio-sliders > div').length - i) * document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth}px`
            //         document.querySelector('.portfolio-sliders').style.transition = 'left .2s ease'
            //         Array.from(document.querySelectorAll('.portfolio-menu > div > div')).forEach(item => {
            //             item.style.setProperty('--imageBeforeOpacity', '0');
            //             item.style.setProperty('--imageBeforeVisibility','hidden');
            //         })
            //         document.querySelectorAll('.portfolio-menu > div > div')[i].style.setProperty('--imageBeforeOpacity', '1');
            //         document.querySelectorAll('.portfolio-menu > div > div')[i].style.setProperty('--imageBeforeVisibility','visible');
            //         i += 1
            //         if (i == document.querySelectorAll('.portfolio-sliders > div').length) {
            //             clearInterval(cock)
            //         }
            //     },2000)
            // })
        })
    })
}

showPortfolio()

// portfolio-slidersdaki slaydlarin saga/sola dogru avtomatik hereket etdirilmesi
function autoplaySlide(i) {
    document.querySelector('.buttons > i.fa-solid').addEventListener('click', e => {
        if (e.target.classList.contains('fa-play')) {

            document.querySelector('.buttons > i.fa-solid').classList.add('fa-stop')
            document.querySelector('.buttons > i.fa-solid').classList.remove('fa-play')

            var cock = setInterval(_ => {

                displayArrow(i)

                preventSlideSlipping(i)

                document.querySelector('.portfolio-sliders').style.left = `-${(document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth * document.querySelectorAll('.portfolio-sliders > div').length) - (document.querySelectorAll('.portfolio-sliders > div').length - i) * document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth}px`
                document.querySelector('.portfolio-sliders').style.transition = 'left .2s ease'

                Array.from(document.querySelectorAll('.portfolio-menu > div > div')).forEach(item => {
                    item.style.setProperty('--imageBeforeOpacity', '0');
                    item.style.setProperty('--imageBeforeVisibility','hidden');
                })
                document.querySelectorAll('.portfolio-menu > div > div')[i].style.setProperty('--imageBeforeOpacity', '1');
                document.querySelectorAll('.portfolio-menu > div > div')[i].style.setProperty('--imageBeforeVisibility','visible');

                i += 1

                document.querySelector('.buttons > i.fa-stop').addEventListener('click', _ => {
                    clearInterval(cock)
                })

                if (i == document.querySelectorAll('.portfolio-sliders > div').length) {

                    clearInterval(cock)

                    document.querySelector('.buttons > i.fa-solid').classList.remove('fa-stop')
                    document.querySelector('.buttons > i.fa-solid').classList.add('fa-ban')
                }
                
            },2000)
        } 
        else if (e.target.classList.contains('fa-stop')) {
            document.querySelector('.buttons > i.fa-solid').classList.remove('fa-stop')
            document.querySelector('.buttons > i.fa-solid').classList.add('fa-play')
        }
        
    })
}

// portfolio-slidersdaki slaydlarin oxlari klikleyerek saga/sola dogru hereket etdirilmesi
function slipSlide(i) {
    document.querySelectorAll('.arrows > div').forEach(item => {
        item.addEventListener('click', _ => {
            // const pauseVid = document.querySelector('.portfolio-sliders > div > iframe')
            // pauseVid.pause()
            if (item.className == 'left-arrow') {
                let x = `-${(document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth * document.querySelectorAll('.portfolio-sliders > div').length) - (document.querySelectorAll('.portfolio-sliders > div').length - i) * document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth}`
                document.querySelector('.portfolio-sliders').style.left = `${Number(x) + document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth}px`
                document.querySelector('.portfolio-sliders').style.transition = 'left .2s ease'
                i -= 1
            } 
            else {
                let x = `-${(document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth * document.querySelectorAll('.portfolio-sliders > div').length) - (document.querySelectorAll('.portfolio-sliders > div').length - i) * document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth}`
                document.querySelector('.portfolio-sliders').style.left = `${Number(x) - document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth}px`
                document.querySelector('.portfolio-sliders').style.transition = 'left .2s ease'
                i += 1
            }

            preventSlideSlipping(i)

            Array.from(document.querySelectorAll('.portfolio-menu > div > div')).forEach(item => {
                item.style.setProperty('--imageBeforeOpacity', '0');
                item.style.setProperty('--imageBeforeVisibility','hidden');
            })

            let box = document.querySelectorAll('.portfolio-menu > div > div')[i];
            box.style.setProperty('--imageBeforeOpacity', '1');
            box.style.setProperty('--imageBeforeVisibility','visible');
            

            displayArrow(i)

            //? Nav bolmesindeki slider'in ise salinmasi
            // document.querySelector('.fa-play').addEventListener('click', _ => {
            //     let cock = setInterval(_ => {
            //         displayArrow(i)
            //         preventSlideSlipping(i)
            //         document.querySelector('.portfolio-sliders').style.left = `-${(document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth * document.querySelectorAll('.portfolio-sliders > div').length) - (document.querySelectorAll('.portfolio-sliders > div').length - i) * document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth}px`
            //         document.querySelector('.portfolio-sliders').style.transition = 'left .2s ease'
            //         Array.from(document.querySelectorAll('.portfolio-menu > div > div')).forEach((item, i) => {
            //             item.style.setProperty('--imageBeforeOpacity', '0');
            //             item.style.setProperty('--imageBeforeVisibility','hidden');
            //         })
            //         document.querySelectorAll('.portfolio-menu > div > div')[i].style.setProperty('--imageBeforeOpacity', '1');
            //         document.querySelectorAll('.portfolio-menu > div > div')[i].style.setProperty('--imageBeforeVisibility','visible');
            //         i += 1
            //         if (i == document.querySelectorAll('.portfolio-sliders > div').length) {
            //             clearInterval(cock)
            //         }
            //     },2000)
            // })
        })
    })
}

// Portfolio bolmesinde portfolio-hidden sektorunun baglanmasi
document.querySelector('.buttons > i:last-child').addEventListener('click', _ => {
    document.querySelector('.portfolio-hidden').classList.remove('active')
    // portfolio-menuda verilmis border'in yigisdirilmasi
    Array.from(document.querySelectorAll('.portfolio-menu > div > div')).forEach(item => {
        item.style.setProperty('--imageBeforeOpacity', '0');
        item.style.setProperty('--imageBeforeVisibility','hidden');
    })
    // Slayder'in silinmesi

})

// Portfolio bolmesinde portfolio-hidden sektorunda play/stop ikonlarinin yerdeyismesi
// let play = false
// document.querySelector('.buttons > i.fa-play').addEventListener('click', _ => {
//     if (play) {
//         document.querySelector('.buttons > i.fa-solid').classList.add('fa-play')
//         document.querySelector('.buttons > i.fa-solid').classList.remove('fa-stop')
//         play = !play
//     } 
//     else {
//         document.querySelector('.buttons > i.fa-solid').classList.add('fa-stop')
//         document.querySelector('.buttons > i.fa-solid').classList.remove('fa-play')
//         play = !play
//     }
// })

// Ekrani kicildib/boyudende slayderlerin bundan tesirlenmesinin onlenmesi
function preventSlideSlipping(i) {
    window.addEventListener('resize', _ => {
        document.querySelector('.portfolio-sliders').style.left = `-${(document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth * document.querySelectorAll('.portfolio-sliders > div').length) - (document.querySelectorAll('.portfolio-sliders > div').length - i) * document.querySelector('.portfolio-hidden > div:first-child > div.container').offsetWidth}px`
        document.querySelector('.portfolio-sliders').style.transition = 'none'
    })
}

// portfolio-slidersdaki oxlarin gorunurluyunun teyin edilmesi
function displayArrow(i) {
    if (i == 0) {
        document.querySelector('.left-arrow').style.display = 'none'
        document.querySelector('.right-arrow').style.display = 'block'
    }
    else if (i == document.querySelectorAll('.portfolio-sliders > div').length - 1) {
        document.querySelector('.left-arrow').style.display = 'block'
        document.querySelector('.right-arrow').style.display = 'none'
    }
    else {
        document.querySelector('.left-arrow').style.display = 'block'
        document.querySelector('.right-arrow').style.display = 'block'
    }
}

// Portfolio bolmesinde portfolio-hidden sektorunda gozun acilib/baglanmasi
let eye = false
document.querySelector('.buttons > i.fa-regular').addEventListener('click', _ => {
    if (eye) {
        document.querySelector('.buttons > i.fa-regular').classList.add('fa-eye-slash')
        document.querySelector('.buttons > i.fa-regular').classList.remove('fa-eye')
        eye = !eye
    } 
    else {
        document.querySelector('.buttons > i.fa-regular').classList.add('fa-eye')
        document.querySelector('.buttons > i.fa-regular').classList.remove('fa-eye-slash')
        eye = !eye
    }
})

// Portfolio bolmesinde portfolio-hidden sektorunda bagli gozu klikleyende yandan basqa bir sektorun acilmasi/baglanmasi
document.querySelector('.fa-eye-slash').addEventListener('click', _ => {
    document.querySelector('.portfolio-menu').classList.toggle('active')
    document.querySelector('.portfolio-hidden > div:first-child').classList.toggle('active')
})

/* 
offsetWidth- hansi elemente verilibse onun width,padding-left,padding-right,border-left,border-right toplamini alir.Verilen overflow'nun hec bir onemi yoxdur.
offsetHeight- hansi elemente verilibse onun height,padding-top,padding-bottom,border-top,border-bottom toplamini alir.Verilen overflow'nun hec bir onemi yoxdur. 
clientWidth- hansi elemente verilibse onun width,padding-left,padding-right toplamini alir.Eger overflow verilibse alinan toplamdan scroll'un width'i cixilir.
clientHeight- hansi elemente verilibse onun width,padding-top,padding-bottom toplamini alir.Eger overflow verilibse alinan toplamdan scroll'un height'i cixilir.

offsetTop- hansi elemente verilibse hemin element ile body'nin topu arasindaki her seyin(hemin elementin border-top'u xaric) toplami
offsetLeft- hansi elemente verilibse hemin element ile body'nin lefti arasindaki her seyin(hemin elementin border-left'i xaric) toplami
clientTop- hansi elemente verilibse hemin elementin yalnizca border-top'u
clientLeft- hansi elemente verilibse hemin elementin yalnizca border-left'i
*/