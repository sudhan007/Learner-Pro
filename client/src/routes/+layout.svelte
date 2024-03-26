<script
  id="otpless-sdk"
  type="text/javascript"
  src="https://otpless.com/v2/auth.js"
  data-appid="8E75C1E8RNZ4RH17N0GT"
>
  // @ts-nocheck

  import "../app.pcss";
  import { Toaster } from "$lib/components/ui/sonner";
  import Navbar from "../components/Navbar/Navbar.svelte";

  import { onMount } from "svelte";
  // import { goto } from "$app/navigation";
  // import { toast } from "svelte-sonner";

  // onMount(() => {
  //   const phoneNumber = localStorage.getItem("phoneNumber");

  //   if (!phoneNumber) {
  //     goto("/login");
  //     toast("Please login to continue", {
  //       duration: 2000,
  //       position: "top-center",
  //       style:
  //         "border:0px; border-radius: 20px; background: white; color: black; font-size: 17px; font-family: 'ZPublicaSans', sans-serif;",
  //     });
  //   }
  // });
  // let isPageLoaded = false;
  // onMount(() => {
  //   setTimeout(() => {
  //     isPageLoaded = true;
  //   }, 4000);
  // });

  // const pageLoaded = () => {
  //   setTimeout(() => {
  //     isPageLoaded = true;
  //   }, 4000);
  // };
</script>

<!-- {#if !isPageLoaded}
  <div class="w-full h-screen flex justify-center items-center">
    <div
      class="animate-spin h-16 w-16 rounded-full border-b-2 border-green-500"
    ></div>
  </div>
{:else}
  <Toaster />
  <Navbar />
 
{/if} -->

<slot />
