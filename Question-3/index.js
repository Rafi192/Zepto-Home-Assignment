//This is the JavaScript code for profile menu button 
//For acomplishing the given task, The resources that I used are:

// 1. https://www.w3schools.com/js/js_htmldom_events.asp
// 2. https://www.w3schools.com/js/js_htmldom_eventlistener.asp
// 3. https://www.delftstack.com/howto/javascript/javascript-toggle-class/#:~:text=In%20JavaScript%2C%20write%20the%20myFunc%20%28%29%20function%20and,as%20the%20parameter%20of%20the%20toggle%20%28%29%20method.


document.addEventListener('DOMContentLoaded',function(){

    const profileButton = document.getElementById('user-menu-button');
        //grab the user menu dropdown options
        const userMenu = document.getElementById('user-menu');

        //making the profile picutre button initailly stay hidden
        userMenu.classList.add('hidden');
        
        // click event listener to the profile picture button
        profileButton.addEventListener('click', function() {
            // Togglig the hidden class on the user menu
            userMenu.classList.toggle('hidden');
        });
});