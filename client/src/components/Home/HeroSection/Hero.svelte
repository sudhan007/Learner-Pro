<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  import Button from "$lib/components/ui/button/button.svelte";
  // import hero1 from "../../../img/Home/hero1.png";
  import hero1 from "../../../img/Home/hero1.webp";
</script>

<div class="hero min-h-screen overflow-x-hidden">
  <div class="pt-10">
    <div class="flex flex-col items-center justify-between lg:flex-row">
      <div class=" px-10 md:px-20 lg:w-1/2 xl:px-36">
        <div class="text-center md:text-left">
          <h1
            class="font-publicaz text-herotext text-nowrap text-[30px] leading-tight tracking-wider md:text-[50px] xl:text-[65px]"
          >
            <span class="text-[35px] md:text-[55px] xl:text-[75px]"
              >Keep Learning</span
            > <br /> On LearnerPro
          </h1>
          <p
            class="font-publicaz text-herodesc mt-3 text-wrap text-xs md:text-[17px] font-medium md:leading-loose xl:text-[20px]"
          >
            Elevate Your Knowledge Through the Gateway of Technical Questions <br
            />
            Illuminate the Path of Understanding with Questions that Spark the Light
            of Knowledge
          </p>
        </div>
        <div
          class="font-publicamedium mt-5 flex flex-wrap w-full justify-center md:justify-normal gap-3 md:gap-8 font-semibold md:mt-12"
        >
          <!-- <Button
            on:click={() => (window.location.href = "/workshopform")}
            style="background: linear-gradient(85.8deg, #FF3434 9.11%, rgba(255, 63, 52, 0.848958) 33.86%, rgba(255, 91, 51, 0.616348) 80.97%, rgba(255, 117, 52, 0.41) 127.28%, rgba(255, 125, 52, 0) 162.41%);"
            class="text-herodesc rounded-full md:px-12 md:py-8 text-base md:text-[20px]"
            >Workshop</Button
          > -->
          <Button
            on:click={() => (window.location.href = "/webinarform")}
            style="background: linear-gradient(85.8deg, #FF3434 9.11%, rgba(255, 63, 52, 0.848958) 33.86%, rgba(255, 91, 51, 0.616348) 80.97%, rgba(255, 117, 52, 0.41) 127.28%, rgba(255, 125, 52, 0) 162.41%);"
            class="text-herodesc rounded-full md:px-12 md:py-8 text-base md:text-[20px]"
            >Webinar</Button
          >
          <Button
            on:click={() => (window.location.href = "/payrollcourse")}
            style="background: linear-gradient(85.8deg, #FF3434 9.11%, rgba(255, 63, 52, 0.848958) 33.86%, rgba(255, 91, 51, 0.616348) 80.97%, rgba(255, 117, 52, 0.41) 127.28%, rgba(255, 125, 52, 0) 162.41%);"
            class="text-herodesc rounded-full md:px-12 md:py-8 text-base md:text-[20px]"
            >Payroll Course</Button
          >

          <!-- <Button
            on:click={() => (window.location.href = "/webinarform")}
            variant="ghost"
            class="text-herodesc hover:bg-white hover:text-black rounded-full border-2  border-gray-500 md:px-10 md:py-8 text-base md:text-[20px]"
            >Webinar</Button
          > -->
          <!-- <Button
            on:click={() => (window.location.href = "/bootcampform")}
            variant="ghost"
            class="text-herodesc hover:bg-white hover:text-black rounded-full border-2  border-gray-500 md:px-10 md:py-8 text-base md:text-[20px]"
            >Bootcamp</Button
          > -->
        </div>
        <div
          class="font-publicbold mt-6 flex gap-3 items-center justify-center md:justify-normal md:gap-8 font-medium text-white xl:mt-12"
        >
          <div class=" md:mr-8">
            <h3
              class="text-herocount mb-2 text-lg md:text-[25px] font-bold xl:text-[40px]"
            >
              10000+
            </h3>
            <p class=" text-xs md:text-[17px] leading-snug xl:text-[20px]">
              Happy <br /> Students
            </p>
          </div>
          <div class=" md:mr-8">
            <h3
              class="text-herocount mb-2 text-lg md:text-[25px] font-bold xl:text-[40px]"
            >
              5000+
            </h3>
            <p class="text-xs md:text-[17px] leading-snug xl:text-[20px]">
              Students <br />Trained
            </p>
          </div>
          <div class=" md:mr-8">
            <h3
              class="text-herocount mb-2 text-lg md:text-[25px] font-bold xl:text-[40px]"
            >
              400+
            </h3>
            <p class="text-xs md:text-[17px] xl:text-[20px] leading-snug">
              Expert<br />Mentors
            </p>
          </div>
        </div>
      </div>
      <div class="mt-12 flex h-full lg:mt-0 lg:w-1/2">
        <img
          alt="LearnerPro Illustration"
          style="height: 100%; width: 100%;"
          class="h-full"
          src={hero1}
        />
        <!-- <img alt="LearnerPro Illustration" style="height: 100%;" class="h-full" src={herosvg} /> -->
      </div>
    </div>
  </div>

  <div
    class="font-publicaz mt-5 mb-2 flex flex-wrap items-center justify-center text-white"
  >
    <div class="flex items-center justify-center">
      <p class="mr-4 text-3xl md:text-7xl font-bold">1.2K</p>
      <div class="flex gap-4 border-r border-gray-500 py-2 pr-5">
        <span class="text-2xl font-bold">+</span>
        <span class="text-xl">Learners</span>
      </div>
    </div>
    <div class="ml-4 flex -space-x-2 text-white">
      <Avatar.Root>
        <Avatar.Image src="https://github.com/shadcn.png" alt="@learner1" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Image src="https://github.com/shadcn.png" alt="@learner2" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Image src="https://github.com/shadcn.png" alt="@learner2" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
    </div>
  </div>
</div>

<style>
  .hero {
    background-image: url("../../../img/Home/wave.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
