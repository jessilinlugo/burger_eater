document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE
    const devourBtns = document.querySelectorAll('.Btns');
  
    // Set up the event listener for the create button
    if (devourBtns) {
      devourBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-burgerid');
  
          const eatenBurger = {
            devoured: true,
          };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(eatenBurger),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`burger has been eaten`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const newBurger = document.getElementById('new_burger');
  
    if (newBurger) {
      newBurger.addEventListener('submit', (e) => {
        e.preventDefault();
  console.log("this was clicked");
        const addBurger = {
          burger_name: document.getElementById('burger').value.trim(),
        };
  
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          body: JSON.stringify(addBurger),
        }).then(() => {
          document.getElementById('burger').value = '';
          console.log('Added a new yummy burger!');
          location.reload();
        });
      });
    }
  });
