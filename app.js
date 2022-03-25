

/* Submit Rating */

const ratingSC = document.querySelector('.rating-state-container')
const thankYouSC = document.querySelector('.thank-you-container')
const btn = document.querySelector('#submit-rating')
const ratingDisplay = document.querySelector('#rating-display')


btn.addEventListener('click', () => {
    let rate;
    try {
        rate = document.querySelector("input[type='radio'][name='rate']:checked").value
    } catch(e) {
        console.log("Please pick a rating!")
    }

    if (rate != null) {
        ratingSC.style.display = 'none'
        thankYouSC.style.display = 'flex'
        ratingDisplay.innerHTML = rate;
    }
})
