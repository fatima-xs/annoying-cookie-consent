const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const declineBtn = document.getElementById("decline-btn")
const modalChoiceBtns  = document.getElementById("modal-choice-btns")

setTimeout(()=>
{
    modal.style.display = "inline"
}, 1500)


modalCloseBtn.addEventListener('click', ()=>
{
    modal.style.display = "none"
})

declineBtn.addEventListener('mouseenter', () => {
    modalChoiceBtns.classList.toggle('reverse-modal-choice-btns')
})

consentForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const consentFormData = new FormData(consentForm)
    const name = consentFormData.get("user-name")
  
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`
    setTimeout(function () {
        document.getElementById('upload-text').innerText = `Making the sale...`
    }, 1500)
    setTimeout(function(){
        document.getElementById("modal-inner").innerHTML = `
        <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/spongeBob.gif">
            </div>` 
            modalCloseBtn.disabled = false
    },3000)
   consentForm.reset()
   
})




