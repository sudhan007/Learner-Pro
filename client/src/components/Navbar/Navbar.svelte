<script>
  import menuLinks from "$lib/Navlinks";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { afterNavigate } from "$app/navigation";
  import Icon from "@iconify/svelte";
  import * as AlertDialog from "$lib/components/ui/alert-dialog";
  import { toast } from "svelte-sonner";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import logo from "../../img/Home/logo.webp";

  let currentPath = "";
  $: if ($page) {
    currentPath = $page.url.pathname;
  }
  /**
   * @type {string | null}
   */
  let phoneNumber = "";
  onMount(() => {
    phoneNumber = localStorage.getItem("phoneNumber");
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
      position: "top-center",
      duration: 2000,
      style:
        "border-radius: 20px; background: white; color: black; font-size: 17px; font-family: 'ZPublicaSans', sans-serif;",
    });
    window.location.reload();
  };
</script>

<header
  class=" bg-navbg sticky top-0 z-20 py-3 transition-all duration-500 md:block hidden"
>
  <div class=" flex items-center justify-between px-3 lg:px-52">
    <div class="flex items-center gap-2">
      <img src={logo} class="h-[40px] -mt-3" alt="" />
      <a href="/" class="font-gilroy text-navlogo text-xl md:text-2xl"
        >Learner Pro</a
      >
    </div>
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
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <Icon
                    title="Logout"
                    icon="humbleicons:logout"
                    class="text-4xl"
                    style="color: red"
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <p>Logout</p>
                </Tooltip.Content>
              </Tooltip.Root>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Header>
                <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
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
    <div class="flex items-center gap-4">
      <img src={logo} class="h-[30px] -mt-2" alt="" />

      <a href="/" class="font-gilroy text-navlogo text-2xl">Learner Pro</a>
    </div>

    <Button
      size="icon"
      class="focus:outline-none bg-transparent hover:bg-transparent"
      on:click={toggleNavbar}
    >
      {#if isNavbarOpen}
        <Icon
          icon="iconamoon:close-bold"
          class="text-3xl"
          style="color: white"
        />
      {:else}
        <Icon icon="ci:menu-alt-01" class="text-3xl" style="color: white" />
      {/if}
    </Button>
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
      {#if phoneNumber}
        <li>
          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <Icon
                    title="Logout"
                    icon="humbleicons:logout"
                    class="text-4xl"
                    style="color: red"
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <p>Logout</p>
                </Tooltip.Content>
              </Tooltip.Root>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Header>
                <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
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

<style>
</style>
