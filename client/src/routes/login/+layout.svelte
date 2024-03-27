<script>
  // @ts-nocheck

  let isPageLoaded = false;

  const pageLoaded = () => {
    isPageLoaded = true;
  };
</script>

{#if !isPageLoaded}
  <div use:pageLoaded class="w-full h-screen flex justify-center items-center">
    <div
      class="animate-spin h-16 w-16 rounded-full border-b-2 border-green-500"
    ></div>
  </div>
{:else}
  <slot />
{/if}
