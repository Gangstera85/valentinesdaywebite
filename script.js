// Add an event listener to the no button that will change its position on every tap.
document.getElementById('noButton').addEventListener('click', function () {
    const h1Element = document.querySelector('.card h1');
    const kittenImage = document.querySelector('.kitten');
    const noButton = document.getElementById('noButton');

    h1Element.textContent = 'Този бутон е само за декорация >:(';
    kittenImage.src = 'pictures/angrycat.jpg';

    setButtonRandomPosition(noButton);
});

function setButtonRandomPosition(element) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const margin = 10;

    let randomX, randomY;

    do {
        randomX = Math.floor(Math.random() * (containerRect.width - element.clientWidth - 2 * margin) + margin);
        randomY = Math.floor(Math.random() * (containerRect.height - element.clientHeight - 2 * margin) + margin);
    } while (
        randomX + element.clientWidth > containerRect.width - margin ||
        randomY + element.clientHeight > containerRect.height - margin
    );

    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
}



// Initialize a variable to keep track of the button's tap count.
let yesButtonTapCount = 0;

// Add an event listener to the yes button that will perform different actions based on the tap count.
document.getElementById('yesButton').addEventListener('click', function() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const kittenImage = document.querySelector('.kitten');
const h1Element = document.querySelector('.card h1');
    

    if (yesButtonTapCount === 0) {
        // On the first tap, hide the "No" button.
        noButton.style.display = 'none';

        // Replace the h1 text with "Thank you".
        h1Element.textContent = 'Ооо, благоаря ти :)Ще те очаквам на 14-ти';
        
        // Center the "Yes" button below the h1.
        yesButton.style.position = 'absolute';
        yesButton.style.left = '50%';
        yesButton.style.transform = 'translateX(-50%)';

        // Change the cat picture.
        kittenImage.src = 'pictures/Happy-cat-meme-9.jpg'; // Replace 'new-cat-picture.jpg' with the path to your new image.
    }

    // Hide the "Yes" button.
    yesButton.style.display = 'none';
    
    // Increment the tap count.
    yesButtonTapCount++;
});
