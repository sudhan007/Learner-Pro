<script lang="ts">
  import { writable } from "svelte/store";
  import InternShipHero from "../../components/InternShip/HeroSection/InternShipHero.svelte";
  import Aboutinternhero from "../../components/InternShip/AboutIntenship/AboutInternHero/Aboutinternhero.svelte";
  import Aboutintercards from "../../components/InternShip/AboutIntenship/Aboutinterncards/Aboutintercards.svelte";
  import Elitestudents from "../../components/InternShip/Testimonials/Elitestudents/Elitestudents.svelte";
  import Frequentquestion from "../../components/InternShip/Testimonials/FrequentQuestions/Frequentquestion.svelte";
  import TestimonialsHero from "../../components/InternShip/Testimonials/TestimonialHero/TestimonialsHero.svelte";
  import Footer from "../../components/Footer/Footer.svelte";
  import InternShipcards from "../../components/InternShip/internShipImportant/InternShipcards.svelte";
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  import { Card } from "$lib/components/ui/card";
  import Button from "$lib/components/ui/button/button.svelte";
  import Modal from "./Modal.svelte";
  import * as RadioGroup from "$lib/components/ui/radio-group";
  import Label from "$lib/components/ui/label/label.svelte";
  import InternshipCard from "./InternShipCard";
  import { toast } from "svelte-sonner";
  let showModal = false;

  console.log(showModal, "befor");

  function closeModal() {
    showModal = false;
  }

  const Interests = [
    { value: "python", label: "Python" },
    { value: "webdevlopement", label: "Web Development" },
    { value: "ui/uxdesigning", label: "UI/UX Design" },
    { value: "mbainternship", label: "MBA Internship" },
  ];

  const {
    form,
    errors,
    touched,
    isValid,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = createForm({
    initialValues: {
      name: "",
      collegeName: "",
      email: "",
      fieldofStudy: "",
      phoneNumber: "",
      areaofInterest: "",
      gender: "",
      classMode: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Name is required"),
      collegeName: yup.string().required("College Name is required"),
      email: yup.string().required("Email is required"),
      fieldofStudy: yup.string().required("Field of Study is required"),
      phoneNumber: yup
        .string()
        .required("Phone Number is required")
        .min(10, "phone number should be 10")
        .max(10, "phone number should be 10"),
      areaofInterest: yup
        .string()
        .required("Area of Interest is required")
        .oneOf(["python", "webdevlopement", "ui/uxdesigning", "mbainternship"]),
      gender: yup
        .string()
        .required("Gender is required")
        .oneOf(["male", "female"]),
      classMode: yup
        .string()
        .required("Status is required")
        .oneOf(["online", "offline"]),
    }),
    onSubmit: async (values) => {
      closeModal();
      console.log(values);
      let _formData = new FormData();

      _formData.append("name", values.name);
      _formData.append("collegeName", values.collegeName);
      _formData.append("email", values.email);
      _formData.append("fieldofStudy", values.fieldofStudy);
      _formData.append("phoneNumber", values.phoneNumber);
      _formData.append("areaofInterest", values.areaofInterest);
      _formData.append("gender", values.gender);
      _formData.append("classMode", values.classMode);
      try {
        let response: any = await fetch("?/", {
          method: "POST",
          body: _formData,
        });
        response = await response.json();
        console.log(response, "wdhiuwd");
        if (response.ok === true) {
          closeModal();
          form.set({
            name: "",
            collegeName: "",
            email: "",
            fieldofStudy: "",
            phoneNumber: "",
            areaofInterest: "",
            gender: "",
            classMode: "",
          });

          toast(`Registration Successful`, {
            duration: 4000,
            position: "top-center",
            style:
              "border-radius: 20px; background: white; color: black; font-size: 17px; font-family: 'ZPublicaSans', sans-serif;",
          });
          console.log(showModal, "wjdhkwdw");
        } else {
          form.set({
            name: "",
            collegeName: "",
            email: "",
            fieldofStudy: "",
            phoneNumber: "",
            areaofInterest: "",
            gender: "",
            classMode: "",
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
          collegeName: "",
          email: "",
          fieldofStudy: "",
          phoneNumber: "",
          areaofInterest: "",
          gender: "",
          classMode: "",
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
</script>

<title>InternShip</title>
<div>
  <!-- Internship Home -->
  <div class="bg-internherobg">
    <InternShipHero />
  </div>
  <!-- <InternShipcards /> -->
  <aside>
    <main
      class="bg-internherobg min-h-screen w-full overflow-x-hidden text-white"
    >
      <div
        class="text-internheading font-publicaz mt-6 px-5 text-center text-xl md:text-[35px] xl:text-[50px]"
      >
        <h1>Why Internship is Important ?</h1>
      </div>

      <div class="py-6 md:py-14 flex justify-center container mx-auto">
        <div
          class="grid grid-cols-1 items-stretch gap-5 md:gap-10 md:grid-cols-2"
        >
          {#each InternshipCard as card}
            <Card
              class=" w-[300px] md:w-[400px] rounded-2xl border-0 bg-gradient-to-br  from-[#000000] to-[#1F5382] px-4 md:px-8 py-2 md:py-4"
              style=""
            >
              <div>
                <img
                  class="bg-interncard rounded-2xl border-0 p-3"
                  src={card.image}
                  alt=""
                />
              </div>
              <div
                class="font-publicaz mt-4 text-base md:text-[20px] text-[#FFFFFF]"
              >
                <p>
                  {card.description}
                </p>
              </div>
            </Card>
          {/each}
        </div>
      </div>
      <div
        class="text-internheading font-publicaz md:pt-10 text-center text-xl md:text-[30px] xl:text-[35px]"
      >
        <h1>Kickstart Your Career With Our Internship Program!</h1>
      </div>
      <div class="py-4 md:py-16 mt-3 flex justify-center">
        <Button
          on:click={() => (showModal = true)}
          style="background: linear-gradient(82.96deg, #FFFFFF -29.79%, #FF3434 -29.77%, #00B4DB -9.84%, #E9E9E9 108.39%, #212443 161.74%);"
          class="font-publicbold rounded-full px-6 md:px-12 py-6 md:py-8 text-[20px] text-[#000000]"
          >APPLY NOW</Button
        >
      </div>
    </main>
    <Modal bind:showModal>
      <h2
        slot="header"
        class="font-publicaz text-herodesc text-center text-xl md:text-3xl"
      >
        Complete Your Application
      </h2>

      <form class:valid={$isValid} method="POST" on:submit={handleSubmit}>
        <RadioGroup.Root>
          <div class="definition-list mt-5 md:mt-10 flex justify-evenly">
            <div class="flex items-center space-x-2">
              <input
                class="cursor-pointer"
                type="radio"
                id="online"
                name="classMode"
                value="online"
                bind:group={$form.classMode}
                on:change={handleChange}
                on:blur={handleChange}
              />
              <Label class="font-publicbold text-xl md:text-3xl" for="online"
                >Online</Label
              >
            </div>

            <div class="flex items-center space-x-2">
              <input
                class="cursor-pointer"
                type="radio"
                id="offline"
                name="classMode"
                value="offline"
                bind:group={$form.classMode}
                on:change={handleChange}
                on:blur={handleChange}
              />
              <Label class="font-publicbold text-xl md:text-3xl" for="offline"
                >Offline</Label
              >
            </div>
          </div>
          <div class="text-center">
            {#if $errors.classMode && $touched.classMode}
              <small class="text-red-500 font-gilroy">{$errors.classMode}</small
              >
            {/if}
          </div>
        </RadioGroup.Root>

        <div
          class=" grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-0 md:pt-5"
        >
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
              <small class="text-red-500 font-gilroy">{$errors.name}</small>
            {/if}
          </div>
          <div class="input-group">
            <input
              name="collegeName"
              on:change={handleChange}
              bind:value={$form.collegeName}
              on:blur={handleChange}
              class="font-publicaz w-full py-3 indent-4 md:text-lg"
              type="text"
            />
            <label for="" class="text-base font-inter">College Name</label>
            {#if $errors.collegeName && $touched.collegeName}
              <small class="text-red-500 font-gilroy"
                >{$errors.collegeName}</small
              >
            {/if}
          </div>
          <div class="input-group">
            <input
              name="email"
              on:change={handleChange}
              on:blur={handleChange}
              bind:value={$form.email}
              class="font-publicaz w-full py-3 indent-4 md:text-lg"
              type="text"
            />
            <label for="" class="text-base font-inter">E-Mail</label>
            {#if $errors.email && $touched.email}
              <small class="text-red-500 font-gilroy">{$errors.email}</small>
            {/if}
          </div>
          <div class="input-group">
            <input
              name="fieldofStudy"
              on:change={handleChange}
              on:blur={handleChange}
              bind:value={$form.fieldofStudy}
              class="font-publicaz w-full py-3 indent-4 md:text-lg"
              type="text"
            />
            <label for="" class="text-base font-inter">Field of Study</label>
            {#if $errors.fieldofStudy && $touched.fieldofStudy}
              <small class="text-red-500 font-gilroy"
                >{$errors.fieldofStudy}</small
              >
            {/if}
          </div>
          <div class="input-group">
            <input
              name="phoneNumber"
              on:change={handleChange}
              on:blur={handleChange}
              bind:value={$form.phoneNumber}
              class="font-publicaz w-full py-3 indent-4 md:text-lg"
              type="text"
            />
            <label for="" class="text-base font-inter">Phone Number</label>
            {#if $errors.phoneNumber && $touched.phoneNumber}
              <small class="text-red-500 font-gilroy"
                >{$errors.phoneNumber}</small
              >
            {/if}
          </div>
          <div class="input-group">
            <select
              class="font-publicaz w-full py-3 bg-black text-white indent-4 outline-none bg- md:text-lg"
              name="areaofInterest"
              on:change={handleChange}
              on:blur={handleChange}
            >
              <option class="bg-black" value="">Area of Interest</option>
              {#each Interests as item}
                <option class="bg-black" value={item.value}>{item.label}</option
                >
              {/each}
            </select>
            {#if $errors.areaofInterest && $touched.areaofInterest}
              <p class="text-red-500 font-gilroy">{$errors.areaofInterest}</p>
            {/if}
          </div>
          <div class="input-group gender border border-white">
            <h1
              class="border inline relative -top-3 left-1 text-base bg-[#111111] font-inter"
            >
              Gender
            </h1>
            <div class="">
              <RadioGroup.Root>
                <div class="flex gap-10 -mt-3 py-2 px-10 items-center">
                  <div class="flex items-center space-x-2">
                    <input
                      class="cursor-pointer"
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      bind:group={$form.gender}
                      on:change={handleChange}
                      on:blur={handleChange}
                    />
                    <Label class="text-lg font-publicaz" for="male">Male</Label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <input
                      class="cursor-pointer"
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      bind:group={$form.gender}
                      on:change={handleChange}
                      on:blur={handleChange}
                    />
                    <Label class="text-lg font-publicaz" for="female"
                      >Female</Label
                    >
                  </div>
                </div>
              </RadioGroup.Root>
              {#if $errors.gender && $touched.gender}
                <p class="text-red-500 font-gilroy">{$errors.gender}</p>
              {/if}
            </div>
          </div>
        </div>

        <div class="flex justify-center px-10 pt-4">
          <Button
            disabled={!$isValid}
            type="submit"
            style="background: linear-gradient(82.96deg, #212443 -29.79%, #FF3434 -29.77%, #006CDB -9.84%, #E51057 108.39%, #212443 161.74%);
          "
            class="text-herodesc font-publicbold w-full rounded-full py-6 text-[20px] "
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
    </Modal>
  </aside>
  <!-- Internship About -->
  <div class="bg-internherobg">
    <Aboutinternhero />
    <Aboutintercards />
  </div>
  <!-- Internship Testimonials -->
  <div class="">
    <TestimonialsHero />
  </div>
  <Elitestudents />
  <Frequentquestion />
  <Footer />
</div>

<!-- <style>
  .hero {
    /* background-image: url(../../img/Internship/testimonialhero.png); */
  }
</style> -->

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
  select,
  .gender {
    background-color: transparent;
    border: 1.2px solid #fff;
    outline: none;
    border-radius: 5px;
  }
</style>
