<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Log-in</title>
      <link rel="stylesheet" href="bootstrap/bootstrap-5.3.3-dist/css/bootstrap.min.css">
    </head>
    <body>
      <div class="container">
      
        <div class="logo">
          <img src="/idk/public/logo123.png" alt="logo">
        </div>
        <!--forms-->
           <div class="login-form">
            <form action="" method="get" id="loginsite">

              <div class="pass">
                <label for="name1" class="label" ></label>
                <p class="user">Username</p>
                <input type="text" id="name2" placeholder="Enter username" required />
                <label for="name2" class="label" ></label>
                <p class="user">Password</p>
                <input type="password" id="name1" placeholder=" Enter Password" required />
              </div>
              <div class="radio">
                <label
                  ><input
                    id="admin"
                    type="radio"
                    name="user"
                    value="admin"
                    checked
                  />admin</label
                >
                <label
                  ><input
                    id="casher"
                    type="radio"
                    name="user"
                    value="casher"
                  />casher</label
                >
              </div>
              <div class="buttons">
                <input type="submit" class="border-primary-subtle" value="Log-in" />
              <a href="reg-form.html">  <input
                  type="button"
                  class="border-primary-subtle"
                  value="Create Admin Account"
                /></a>
              </div>
            </form>
           </div>
      </div>
      </div>
    </body>

    <style>
      * {
        font-family: Arial, Helvetica, sans-serif;
        color: white;
      }
      body {
        background-color: #272727;
        display: block;
        margin: 0;
      }
      form {
        display: inline-flex;
        flex-direction: column;
    
      }
      .logo{
        text-align: center;
        margin-top: 1%;
      }
    
      .logo img{
        width: 15%;
      }
      input {
        width: 20rem;
        height: 2rem;
        text-indent: 3%;
        color: #272727;
        font-size: 20 px;
      }

      .container,
      .login,
      .buttons input[type="submit"],
      .buttons[type="button"] {
        text-align: center;
      }
   
      .buttons input[type="submit"],
      .buttons input[type="button"] {
        margin-top: 5%;
        font-size: 1rem;
        border-radius: 5%;
        width: 60%;
        color: black;
      }


      .buttons input[type="submit"]:hover,
      .buttons input[type="button"]:hover {
        color: rgb(97, 97, 245);
      }

      .radio input[type="radio"] {
        width: 10%;
        height: 10%;
      }
      label {
        padding: 5%;
        font-size: 1.2rem;
      }
      .user
      {
        display: flex;
        text-align: left;
      }
      .pass,.radio{
    margin-bottom: 10%;
      }
    </style>
    <script>
document.getElementById('loginsite').addEventListener('submit', async function (event) {
  event.preventDefault();

  const username = document.getElementById('name2').value.trim();
  const password = document.getElementById('name1').value.trim();
  const role = document.querySelector('input[name="user"]:checked').value;

  if (!username || !password) {
    alert('Username and password cannot be empty.');
    return;
  }

  try {
    const response = await fetch('process-login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, role }),
    });

    const result = await response.json();

    if (result.success) {
      window.location.href = result.redirect;
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
});

     </script>
  </html>
