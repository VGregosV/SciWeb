var osis = 888;
var first_name = "";
var last_name = ""
var grade = 0;




var ip;



function send_data(userId) {
console.log(userId);

fetch('/home-ip', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },

  body: userId
})
  .then(response => response.json())
  .then(data => {
    console.log(data["Name"])
    set_data(data['Name'])
  })
}


function get_ip(){

const storedUserID = getCookie('user_id');

        if (storedUserID) {
            // User has a stored user ID, log it to the console
            console.log('Found User ID:', storedUserID);
          ip = storedUserID
            send_data(storedUserID)
        } else {
            // Generate a random 4-digit user ID
            const newUserID = generateUserID();
            console.log("New User ID:", newUserID)
            // Save the user ID in a cookie for future visits
            setCookie('user_id', newUserID, 365); // Store for 1 year (adjust as needed)

            // Log the new user ID to the console
            console.log('New User ID:', newUserID);
          ip = newUserID
            send_data(newUserID)
        }
}



get_ip()


// to push, type "git push origin main" into the shell









function generateUserID() {
            return Math.floor(1000 + Math.random() * 9000);
        }

        // Function to set a cookie
        function setCookie(name, value, days) {
            const expires = new Date();
            expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
            document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
        }

        // Function to get the value of a cookie by name
        function getCookie(name) {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.startsWith(name + '=')) {
                    return cookie.substring(name.length + 1);
                }
            }
            return null;
        }

        // Check if the user has a user ID stored in a cookie








function set_data(data){
 
  if(data[0] != "Login"){
    
  first_name = JSON.stringify(data["first_name"]).slice(1, -1);
  last_name = JSON.stringify(data["last_name"]);
  osis = parseInt(JSON.stringify(data["osis"]).slice(1, -1));
  console.log(osis)
  grade = parseInt(JSON.stringify(data["grade"]))
  
  
  document.getElementById('profile').textContent = first_name;
  document.getElementById('profile').href = "/Profile";
  
console.log(osis)
}
}


