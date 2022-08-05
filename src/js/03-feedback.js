import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[type="email"]'),
    message: document.querySelector('textarea[name="message"]'),
    submit: document.querySelector('button[type="submit"]'),
};

// ----- Add listener-----
refs.form.addEventListener('input', throttle(onInputText, 500));
refs.form.addEventListener('submit', onClickSubmit);

// ----- Replace empty string in form from memory-----
if (parsedfeedbackMemoryObj) {
    pasrefeedbackMemoryObj();
};

// ----- Save value form`s fields in memory-----`
function onInputText(e) {
    if (e.target.nodeName === 'INPUT' || 'TEXTAREA') {
        const feedbackObj = {
            email: refs.email.value,
            message: refs.message.value
        };
        localStorage.setItem("feedback-form-state", JSON.stringify(feedbackObj));
    }
}

// ----- Replace empty fields in form from memory-----
function pasrefeedbackMemoryObj() {
    const feedbackMemoryObj = localStorage.getItem("feedback-form-state");

    try {
        parsedfeedbackMemoryObj = JSON.parse(feedbackMemoryObj);
        if (parsedfeedbackMemoryObj) {
            refs.email.value = parsedfeedbackMemoryObj.email;
            refs.message.value = parsedfeedbackMemoryObj.message;
            return parsedfeedbackMemoryObj;
        }

    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }


}

// ----- Clear form`s fields and memory and consoling value-----
function onClickSubmit(e) {
    e.preventDefault();
    console.log(pasrefeedbackMemoryObj());
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state")
}
