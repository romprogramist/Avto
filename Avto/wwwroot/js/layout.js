document.addEventListener('DOMContentLoaded', () => {
    const  body = document.querySelector('body');
    const telInputs = document.querySelectorAll('input[type=tel]');
    phoneMask(telInputs);

    modalsInit();

    const applicationForms = document.querySelectorAll('form.application-form');
    const applicationCompletedModal = document.getElementById('application-success');
    const applicationCrashedModal = document.getElementById('application-error');
    formRequest(applicationForms, '/api/application/send', applicationCompletedModal, applicationCrashedModal, ['name', 'phone']);

    const reviewForms = document.querySelectorAll('form.review-form');
    const reviewCompletedModal = document.getElementById('review-success');
    const reviewCrashedModal = document.getElementById('review-error');
    formRequest(reviewForms, '/api/review/send', reviewCompletedModal, reviewCrashedModal, ['name', 'phone', 'email', 'text', 'rate']);
    
    
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        hamburger.parentElement.parentElement.classList.toggle('header-active');
        body.classList.toggle('no-scroll');
    })
});


// создать объект компании с разными полями минимум 10
//при помощи обджект кейс мне, функция должна вернуть массив строк

const company = {
    name: "ABC Corporation",
    location: "New York",
    foundedYear: 1990,
    employees: 500,
    industry: "Technology",
    revenue: 10000000, 
    isPublic: true,
    departments: ["HR", "Finance", "Marketing", "Engineering"],
    hasBranches: true
};

function returnArrStrObjKey(obj) {
    const emptyArray = [];
    Object.keys(obj).forEach(el => {
        emptyArray.push(el)
    })
    return emptyArray;
}

function returnArrStrObjEntries(obj) {
    const emptyArray = [];
    Object.entries(obj).forEach(el => {
        emptyArray.push(el[0])
    })
    return emptyArray;
}


