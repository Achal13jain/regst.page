document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reg-form');
    const popup = document.getElementById('popup');
    const popupOkButton = document.getElementById('popup-ok');
    const courseCheckboxes = document.querySelectorAll('[name="checkboxGroup"]');

    form.addEventListener('submit', function(event) {
        if (!isChecked(courseCheckboxes)) {
            event.preventDefault();
            alert("Please select at least one checkbox.");
        } else {
            displayPopup();
        }
    });

    popupOkButton.addEventListener('click', function() {
        closePopup();
        // location.reload(); // Reload the page
    });
    
    function displayPopup() {
        popup.style.display = 'flex';
    }
    
    function closePopup() {
        popup.style.display = 'none';
    }

    function isChecked(inputs) {
        return Array.from(inputs).some(input => input.checked);
    }
});
