// PREVENT DEFAULT AND FORM EVENTS
const wes = document.querySelector('.wes');

wes.addEventListener('click', function (event) {
  event.preventDefault(); // Prevents the default thing of that element from happening (page change in
  // this case)

  const shouldYouClickIt = confirm(
    'This website might be malicious.  Proceed anyways?'
  );
  if (shouldYouClickIt) {
    window.location = event.currentTarget.href; // If confirmed, go to page
  }
});

// Form
const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener('submit', function (event) {
  // Can log values from the form submission event
  //   console.log(event.currentTarget.name.value);
  //   console.log(event.currentTarget.email.value);
  //   console.log(event.currentTarget.agree.checked);

  const name = event.currentTarget.name.value;
  if (name.includes('Chad')) {
    // ^^Not case sensitive
    alert('Sorry Bro');
    event.preventDefault(); // Prevent form from submitting and losing info instantly
  }
});

// Other events with form inputs: ['keyup', 'keydown', 'focus', 'blur']
function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

// ACCESSIBILITY GOTCHAS AND KEYBOARD CODES
// Links shouldn't be used where buttons are and vice versa (keep the HTML functionality separate
// as much as possible)
// Don't allow click events on html elements that aren't keyboard accessible (e.g. images)
// Can change the "role" of HTML elements (e.g. img could have role "button")
