<script>
  import menuLinks from "$lib/Navlinks";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import profile from "../../img/Home/profile.png";
  import Button from "$lib/components/ui/button/button.svelte";
  import { afterUpdate } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import Icon from "@iconify/svelte";
  import * as AlertDialog from "$lib/components/ui/alert-dialog";
  import { toast } from "svelte-sonner";

  let currentPath = "";
  console.log($page.url.pathname);
  $: if ($page) {
    currentPath = $page.url.pathname;
  }
  /**
   * @type {string | null}
   */
  let phoneNumber = "";
  onMount(() => {
    phoneNumber = localStorage.getItem("phoneNumber");
    console.log(phoneNumber);
  });

  let isNavbarOpen = false;

  function toggleNavbar() {
    isNavbarOpen = !isNavbarOpen;
  }
  afterNavigate(() => {
    isNavbarOpen = false;
  });

  const handleLogout = () => {
    localStorage.clear();
    toast("Logged out successfully", {
      duration: 2000,
    });
    window.location.reload();
  };
</script>

<header
  class=" bg-navbg sticky top-0 z-20 py-3 transition-all duration-500 md:block hidden"
>
  <div class=" flex items-center justify-between px-3 lg:px-52">
    <a href="/" class="font-gilroy text-navlogo text-xl md:text-3xl"
      >Learner Pro</a
    >
    <ul
      class="font-publicalight flex cursor-pointer items-center justify-between gap-x-4 text-lg font-semibold lg:gap-x-9 xl:gap-x-24"
    >
      {#each menuLinks as link}
        <li
          class={`text-navmenu border-white pb-1 tracking-[1px] ${currentPath === link.path ? "border-b-2" : ""} transition-all duration-100 hover:border-b-2 `}
        >
          <a href={link.path}> {link.name}</a>
        </li>
      {/each}

      <li>
        {#if phoneNumber}
          <div
            style="border: 1.15px solid rgba(232, 239, 247, 0.25)"
            class="flex p-2 items-center rounded-xl gap-2 bg-[#010101]"
          >
            <img
              src="https://github.com/shadcn.png"
              class="h-12 rounded-lg"
              alt=""
            />
            <p class="px-5 py-2 font-publicaz text-[#EFEFEF] text-xl">
              {phoneNumber}
            </p>
          </div>
        {:else}
          <Button
            on:click={() => (window.location.href = "/login")}
            style="background: linear-gradient(82.96deg, #212443 -29.79%, #FF3434 -29.77%, #006CDB -9.84%, #E51057 108.39%, #212443 161.74%);"
            class="text-herodesc font-publicbold rounded-lg text-base px-5 py-2"
            >Login</Button
          >
        {/if}
      </li>

      {#if phoneNumber}
        <li>
          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <Icon
                icon="humbleicons:logout"
                class="text-4xl"
                style="color: red"
              />
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Header>
                <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
                <AlertDialog.Description>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialog.Description>
              </AlertDialog.Header>
              <AlertDialog.Footer>
                <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                <AlertDialog.Action on:click={() => handleLogout()}
                  >Logout</AlertDialog.Action
                >
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </li>
      {/if}
    </ul>
  </div>
</header>

<header
  class="bg-navbg sticky top-0 z-20 py-3 transition-all duration-500 md:hidden block"
>
  <div class="flex items-center justify-between px-3 lg:px-52">
    <a href="/" class="font-gilroy text-navlogo text-xl md:text-3xl"
      >Learner Pro</a
    >
    <button class="focus:outline-none" on:click={toggleNavbar}>
      <svg
        class="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </button>
  </div>
  <div
    class="{isNavbarOpen
      ? 'block'
      : 'hidden'} transition-all duration-1000 ease-out bg-navbg absolute left-0 right-0 z-10 shadow-md"
  >
    <ul
      class="font-publicalight font-semibold flex flex-col items-center gap-y-3 pb-3"
    >
      {#each menuLinks as link}
        <li class="text-navmenu pb-1 tracking-[1px]">
          <a href={link.path}>{link.name}</a>
        </li>
      {/each}

      <li>
        {#if phoneNumber}
          <div
            style="border: 1.15px solid rgba(232, 239, 247, 0.25)"
            class="flex p-2 items-center rounded-xl gap-2 bg-[#010101]"
          >
            <img
              src="https://github.com/shadcn.png"
              class="h-10 rounded-lg"
              alt=""
            />
            <p class="px-3 py-2 font-publicaz text-[#EFEFEF] text-base">
              {phoneNumber}
            </p>
          </div>
        {:else}
          <Button
            on:click={() => (window.location.href = "/login")}
            style="background: linear-gradient(82.96deg, #212443 -29.79%, #FF3434 -29.77%, #006CDB -9.84%, #E51057 108.39%, #212443 161.74%);"
            class="text-herodesc font-publicbold rounded-lg text-base px-5 py-2"
            >Login</Button
          >
        {/if}
      </li>
    </ul>
  </div>
</header>

<style>
</style>
