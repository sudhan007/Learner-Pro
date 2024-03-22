<head>
  <script
    lang="ts"
    id="otpless-sdk"
    type="text/javascript"
    src="https://otpless.com/v2/auth.js"
    data-appid="TZ76JYNHHTEDGNMT4VIC"
  >
  </script>
  <script>
    function otpless(otplessUser) {
      init(otplessUser.token);
    }
  </script>
  <script type="text/javascript">
    let isInitialized = false;

    function init(token) {
      if (isInitialized) {
        isInitialized = false;
        return;
      }

      isInitialized = true;

      fetch("https://auth.otpless.app/auth/userInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          token,
          client_id: "I28KG9G1D52ZBXQMNK57HTJRTG579HRJ",
          client_secret: "vydxtqrujycus5khgfnoikeonxx4njrs",
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then(async (data) => {
          const phoneNumber = data.national_phone_number;
          localStorage.setItem("phoneNumber", phoneNumber);
          localStorage.setItem("isLoggedIn", true);

          let _formData = new FormData();
          _formData.append("phoneNumber", phoneNumber);

          let res = await fetch("?/login", {
            method: "POST",
            body: _formData,
          });

          res = await res.json();

          if (res.status == 200) {
            window.location.replace("/");
          } else {
            console.log("not working");
          }
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    }
  </script>
</head>

<div class="h-[94vh] flex items-center justify-center bg-white">
  <div id="otpless-login-page"></div>
</div>
