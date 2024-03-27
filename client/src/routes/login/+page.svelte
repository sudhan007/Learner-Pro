<script>
  import imgUrl from "../../img/Home/login.webp";
</script>

<body>
  <script
    lang="ts"
    id="otpless-sdk"
    type="text/javascript"
    src="https://otpless.com/v2/auth.js"
    data-appid="8E75C1E8RNZ4RH17N0GT"
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
          client_id: "PUBQSYH54KM81G9P71G4MMS2KAPG7NER",
          client_secret: "v0fucvkf4xlyaudfuedb15bvip6rqd6q",
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
</body>

<div
  style="background: radial-gradient(circle, #424242, #0E0E0E);"
  class="h-[94vh] flex flex-col items-center justify-center overflow-x-hidden"
>
  <div class="grid lg:gap-40 md:justify-between md:grid-cols-2 w-full">
    <div class="hidden md:block">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        style="width: 100%; height: auto;"
        src={imgUrl}
        alt="Description of the image"
      />
    </div>
    <div class="">
      <div id="otpless-login-page"></div>
    </div>
  </div>
</div>
