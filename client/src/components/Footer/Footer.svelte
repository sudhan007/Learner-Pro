<script>
  // @ts-nocheck

  import Button from "$lib/components/ui/button/button.svelte";
  import Icon from "@iconify/svelte";

  let year = new Date().getFullYear();
</script>

<main
  class=" flex w-full justify-center overflow-x-hidden bg-[#161616] py-4 md:py-14 text-white"
>
  <div class="mt-5">
    <div
      class="flex items-center justify-center gap-2 md:gap-5 divide-x divide-[#626381]"
    >
      <div class="font-gilroy text-herodesc text-xl md:text-6xl">
        <h1>Learner Pro</h1>
      </div>
      <div class="pl-3 md:pl-10">
        <h1
          class="text-herodesc font-medium md:font-publicbold text-base md:text-xl"
        >
          Learning Interview & <br /> Internship for Online
        </h1>
      </div>
    </div>
    <div
      class="font-publicalight mt-4 md:mt-8 flex justify-center text-base md:text-xl text-[#747474]"
    >
      <a href="mailto:support@wenoxo.in">support@wenoxo.in</a> <br />
    </div>
    <div
      class="font-publicalight mt-2 flex justify-center text-base md:text-xl text-[#747474]"
    >
      <a href="tel:+916380058663">+91 6380058663</a>
    </div>
    <!-- <div class="px-3">
      <form action="">
        <div
          class="mt-4 flex w-full place-items-center rounded-full border-2 border-[#8B8989] bg-transparent px-1 py-1 text-[18px]"
        >
          <input
            placeholder="Enter Email Address"
            class="font-publicamedium w-full bg-transparent indent-4 text-base md:text-lg text-[#8B8989] outline-none"
            type="text"
          />
          <Button
            style="background: linear-gradient(82.96deg, #212443 -29.79%, #FF3434 -29.77%, #006CDB -9.84%, #E51057 108.39%, #212443 161.74%);"
            class="text-herodesc font-publicbold rounded-full text-[20px] "
            >Subscribe</Button
          >
        </div>
      </form>
    </div> -->
    <!-- <div
      class="my-6 grid grid-cols-2 px-4 md:px-0 md:grid-cols-4 items-center gap-6 md:gap-14"
    >
      <nav class="">
        <h4 class="font-publicbold text-footerlogo mb-4 text-lg md:text-[24px]">
          Company
        </h4>
        <ul
          class="font-publicaz leading-snug text-footerlogo text-xs md:text-[16px]"
        >
          <li>
            <a class="" href="/"> About Us </a>
          </li>
          <li>
            <a class="" href="/"> Careers </a>
          </li>
          <li>
            <a class="" href="/"> Press Kit </a>
          </li>
          <li>
            <a class="" href="/"> Contact Us </a>
          </li>
        </ul>
      </nav>
      <nav class="">
        <h4 class="font-publicbold text-footerlogo mb-4 text-lg md:text-[24px]">
          Company
        </h4>
        <ul
          class="font-publicaz text-footerlogo leading-snug text-xs md:text-[16px]"
        >
          <li>
            <a class="" href="/"> About Us </a>
          </li>
          <li>
            <a class="" href="/"> Careers </a>
          </li>
          <li>
            <a class="" href="/"> Press Kit </a>
          </li>
          <li>
            <a class="" href="/"> Contact Us </a>
          </li>
        </ul>
      </nav>
      <nav class="">
        <h4 class="font-publicbold text-footerlogo mb-4 text-lg md:text-[24px]">
          Company
        </h4>
        <ul
          class="font-publicaz text-footerlogo leading-snug text-xs md:text-[16px]"
        >
          <li>
            <a class="" href="/"> About Us </a>
          </li>
          <li>
            <a class="" href="/"> Careers </a>
          </li>
          <li>
            <a class="" href="/"> Press Kit </a>
          </li>
          <li>
            <a class="" href="/"> Contact Us </a>
          </li>
        </ul>
      </nav>
      <nav class="">
        <h4 class="font-publicbold text-footerlogo mb-4 text-lg md:text-[24px]">
          Company
        </h4>
        <ul
          class="font-publicaz text-footerlogo leading-snug text-xs md:text-[16px]"
        >
          <li>
            <a class="" href="/"> About Us </a>
          </li>
          <li>
            <a class="" href="/"> Careers </a>
          </li>
          <li>
            <a class="" href="/"> Press Kit </a>
          </li>
          <li>
            <a class="" href="/"> Contact Us </a>
          </li>
        </ul>
      </nav>
    </div> -->
    <div class="my-8">
      <ul
        class="font-publicaz flex items-center justify-center text-xs md:text-xl text-[#B9B9B9]"
      >
        <li class="border-r border-[#626381] px-4">Careers</li>
        <li class="border-r border-[#626381] px-4">Privacy Policy</li>
        <li class=" border-[#626381] px-4">Terms & Conditions</li>
      </ul>
    </div>
    <div
      class="font-publicaz flex justify-center text-xs md:text-xl text-[#B9B9B9]"
    >
      <h1>&copy; {year} Powered By Wenoxo Technologies Private Limited</h1>
    </div>
    <div
      class="flex pt-5 gap-4 md:gap-10 justify-center text-2xl md:text-3xl cursor-pointer items-center"
    >
      <a
        href="https://www.facebook.com/profile.php?id=61556791419503&mibextid=ZbWKwL"
        target="_blank"
      >
        <Icon
          icon="ri:facebook-fill"
          class="opacity-60 hover:opacity-100"
          style="color: white"
        />
      </a>
      <a
        href="https://www.instagram.com/learnerpro_official?igsh=MXBzMGlhYzZzZGlncQ=="
        target="_blank"
      >
        <Icon
          icon="mdi:instagram"
          class="opacity-60 hover:opacity-100"
          style="color: white"
        />
      </a>

      <a href="https://www.linkedin.com/showcase/learnerpro" target="_blank">
        <Icon
          icon="ri:linkedin-fill"
          class="opacity-60 hover:opacity-100"
          style="color: white"
        />
      </a>

      <a href="https://twitter.com/learnerPro2023" target="_blank">
        <Icon
          icon="ri:twitter-x-fill"
          class="opacity-60 hover:opacity-100"
          style="color: white"
        />
      </a>
    </div>
  </div>
</main>
