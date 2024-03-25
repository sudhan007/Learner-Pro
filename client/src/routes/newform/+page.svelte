<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  import { toast } from "svelte-sonner";
  import Icon from "@iconify/svelte";

  let gradientColor1 = "#424242";
  let gradientColor2 = "#353535";

  const positions = [
    { value: "workingprofessional", label: "Working Professional" },
    { value: "lookingforcareer", label: "Looking For Career" },
    { value: "student", label: "Student" },
  ];

  const {
    errors,
    touched,
    isValid,
    isSubmitting,
    form,
    state,
    handleChange,
    handleSubmit,
    handleReset,
  } = createForm({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      certificateName: "",
      currentPosition: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Name is required"),
      email: yup.string().required("Email is required").email("Invalid email"),
      phoneNumber: yup
        .string()
        .required("Phone number is required")
        .min(10, "phone number should be 10")
        .max(10, "phone number should be 10"),
      certificateName: yup.string().required("Certificate Name is required"),
      currentPosition: yup
        .string()
        .required("Current Position is required")
        .oneOf(["workingprofessional", "lookingforcareer", "student"]),
    }),
    onSubmit: async (values) => {
      let _formData = new FormData();

      _formData.append("name", values.name);
      _formData.append("email", values.email);
      _formData.append("phoneNumber", values.phoneNumber);
      _formData.append("certificateName", values.certificateName);
      _formData.append("currentPosition", values.currentPosition);

      try {
        let response: any = await fetch("/webinarform", {
          method: "POST",
          body: _formData,
        });

        response = await response.json();
        console.log(response, "wdhiuwd");
        if (response.ok === true) {
          form.set({
            name: "",
            email: "",
            phoneNumber: "",
            certificateName: "",
            currentPosition: "student",
          });
          toast(`Registration Successful`, {
            duration: 4000,
            position: "top-center",
            style:
              "border-radius: 20px; background: white; color: black; font-size: 17px; font-family: 'ZPublicaSans', sans-serif;",
          });
        } else {
          form.set({
            name: "",
            email: "",
            phoneNumber: "",
            certificateName: "",
            currentPosition: "student",
          });
          toast(`${response.message}`, {
            duration: 4000,
            position: "top-center",
            class: "bg-red-500",
            style:
              "border-radius: 20px; background: white; color: black; font-size: 17px; font-family: 'ZPublicaSans', sans-serif;",
          });
        }
      } catch (error: any) {
        form.set({
          name: "",
          email: "",
          phoneNumber: "",
          certificateName: "",
          currentPosition: "",
        });
        toast(`${error.response.data.message}`, {
          duration: 4000,
          position: "top-center",
          class: "bg-red-500",
          style:
            "border-radius: 20px; background: white; color: black; font-size: 17px; font-family: 'ZPublicaSans', sans-serif;",
        });
        console.log(error);
      }
    },
  });

  let email1 = "";

  const handleSubmit1 = async (event: any) => {
    event.preventDefault();
    console.log(email1);
    let _formData1 = new FormData();
    _formData1.append("email1", email1);
    let response = await fetch("/footerform", {
      method: "POST",
      body: _formData1,
    });
    response = await response.json();
    console.log(response, "efefef");
  };
</script>

<head>
  <title>Webinar Form</title>
</head>
<section
  class="h-[91vh] flex items-center justify-center"
  style="background: radial-gradient(circle, {gradientColor1}, {gradientColor2})"
>
  <div
    class=" px-10 py-10 rounded-2xl w-[600px] container mx-auto bg-[#242424] p-2 shadow-2xl"
  >
    <h2 class="font-publicaz text-herodesc text-center text-4xl">
      Webinar Form
    </h2>

    <form class:valid={$isValid} method="POST" on:submit={handleSubmit}>
      <div class="">
        <div class="input-group">
          <input
            name="name"
            on:change={handleChange}
            on:blur={handleChange}
            bind:value={$form.name}
            class="font-publicaz w-full py-3 indent-4 md:text-lg"
            type="text"
          />
          <label for="" class="text-base font-inter">Name</label>
          {#if $errors.name && $touched.name}
            <p class="text-red-500 font-gilroy">{$errors.name}</p>
          {/if}
        </div>

        <div class="input-group">
          <input
            name="email"
            class="font-publicaz w-full py-3 indent-4 md:text-lg"
            type="text"
            on:change={handleChange}
            on:blur={handleChange}
            bind:value={$form.email}
          />
          <label for="" class="text-base font-inter">E-mail</label>
          {#if $errors.email && $touched.email}
            <p class="text-red-500 font-gilroy">{$errors.email}</p>
          {/if}
        </div>
        <div class="input-group">
          <input
            class="font-publicaz w-full py-3 indent-4 md:text-lg"
            type="text"
            on:change={handleChange}
            on:blur={handleChange}
            bind:value={$form.phoneNumber}
            name="phoneNumber"
          />
          <label for="" class="text-base font-inter">Mobile Number</label>
          {#if $errors.phoneNumber && $touched.phoneNumber}
            <p class="text-red-500 font-gilroy">{$errors.phoneNumber}</p>
          {/if}
        </div>
        <div class="input-group">
          <input
            class="font-publicaz w-full py-3 indent-4 md:text-lg"
            type="text"
            on:change={handleChange}
            on:blur={handleChange}
            bind:value={$form.certificateName}
            name="certificateName"
          />
          <label for="" class="text-base font-inter"
            >Name in certificate
          </label>
          {#if $errors.certificateName && $touched.certificateName}
            <p class="text-red-500 font-gilroy">{$errors.certificateName}</p>
          {/if}
        </div>
        <div class="">
          <div class="pb-2 px-2">
            <label for="" class="text-base -3 text-white font-inter"
              >Current Position
            </label>
          </div>
          <select
            class="font-publicaz w-full py-3 bg-black text-white indent-4 outline-none bg- md:text-lg"
            name="currentPosition"
            on:change={handleChange}
            on:blur={handleChange}
          >
            <option value="">Select Position</option>
            {#each positions as position}
              <option value={position.value}>
                {position.label}
              </option>
            {/each}
          </select>
          {#if $errors.currentPosition && $touched.currentPosition}
            <p class="text-red-500 font-gilroy">{$errors.currentPosition}</p>
          {/if}
        </div>
      </div>

      <div class="flex justify-center px-10 pt-4">
        <Button
          disabled={!$isValid}
          type="submit"
          style="background: linear-gradient(82.96deg, #212443 -29.79%, #FF3434 -29.77%, #006CDB -9.84%, #E51057 108.39%, #212443 161.74%);
          "
          class="text-herodesc font-publicbold w-full rounded-full py-8 text-[20px] "
        >
          {#if $isSubmitting}
            <div
              class="h-4 w-4 border-b-2 rounded-full border-blue-500 animate-spin"
            ></div>
          {:else}
            Submit
          {/if}
        </Button>
      </div>
    </form>
  </div>
</section>
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
      <p>Subscribe to get our Newsletter</p>
    </div>
    <div class="px-3">
      <form on:submit={handleSubmit1} action="">
        <div
          class="mt-4 flex w-full place-items-center rounded-full border-2 border-[#8B8989] bg-transparent px-1 py-1 text-[18px]"
        >
          <input
            class="font-publicamedium w-full bg-transparent indent-4 text-base md:text-lg text-[#8B8989] outline-none"
            type="text"
            bind:value={email1}
          />
          <Button
            type="submit"
            style="background: linear-gradient(82.96deg, #212443 -29.79%, #FF3434 -29.77%, #006CDB -9.84%, #E51057 108.39%, #212443 161.74%);"
            class="text-herodesc font-publicbold rounded-full text-[20px] "
            >Subscribe</Button
          >
        </div>
      </form>
    </div>
    <div
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
    </div>
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
      <h1>© 2024 Powered By Wenoxo Technologies Private Limited Inc.</h1>
    </div>
    <div class="flex pt-5 gap-5 justify-center text-lg md:text-xl items-center">
      <Icon icon="ri:facebook-fill" style="color: white" />
      <Icon icon="mdi:instagram" style="color: white" />
      <Icon icon="ri:linkedin-fill" style="color: white" />
      <Icon icon="ri:twitter-x-fill" style="color: white" />
    </div>
  </div>
</main>

<style>
  .input-group {
    position: relative;
    margin: 25px 0;
  }
  .input-group label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }
  .input-group input {
    color: seashell;
    background-color: transparent;
    border: 1.2px solid #fff;
    outline: none;
    border-radius: 5px;
  }
  .input-group input:focus ~ label,
  .input-group input:valid ~ label {
    top: 0;
    background-color: #111111;
  }
</style>
