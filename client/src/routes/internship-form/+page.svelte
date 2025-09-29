<script lang="ts">
  import InternShipHero from '../../components/InternShip/HeroSection/InternShipHero.svelte';
  import Aboutinternhero from '../../components/InternShip/AboutIntenship/AboutInternHero/Aboutinternhero.svelte';
  import Aboutintercards from '../../components/InternShip/AboutIntenship/Aboutinterncards/Aboutintercards.svelte';
  import Elitestudents from '../../components/InternShip/Testimonials/Elitestudents/Elitestudents.svelte';
  import TestimonialsHero from '../../components/InternShip/Testimonials/TestimonialHero/TestimonialsHero.svelte';
  import internhero1 from '../../img/Internship/internhero1.webp';
  import Footer from '../../components/Footer/Footer.svelte';
  import { createForm } from 'svelte-forms-lib';
  import * as yup from 'yup';
  import { Card } from '$lib/components/ui/card';
  import Button from '$lib/components/ui/button/button.svelte';
  import * as RadioGroup from '$lib/components/ui/radio-group';
  import Label from '$lib/components/ui/label/label.svelte';
  import { toast } from 'svelte-sonner';
  import { afterUpdate, createEventDispatcher } from 'svelte';
  import * as Accordion from '$lib/components/ui/accordion';
  import Icon from '@iconify/svelte';

  let showModal = false;

  afterUpdate(() => {
    if (showModal == true) {
      showModal = false;
    }
  });

  const dispatcher = createEventDispatcher();
  let isOpen: { [key: string]: boolean } = {};

  const toggleQuestion = (id: string) => {
    isOpen[id] = !isOpen[id];
    dispatcher('toggle', { id, isOpen: isOpen[id] });
  };

  function closeModal() {
    showModal = false;
  }

  // Course options
  const Courses = [
    { value: 'fullstackdevelopment', label: 'Full Stack Development' },
    { value: 'dataanalytics', label: 'Data Analytics' },
    { value: 'flutter', label: 'Flutter' },
    { value: 'digitalmarketing', label: 'Digital Marketing' },
    { value: 'humanresource', label: 'Human Resource' },
    { value: 'ui/ux', label: 'UI/UX' },
  ];

  // Internship options
  const Internships = [
    { value: 'python', label: 'Python' },
    { value: 'reactjs', label: 'React JS' },
    { value: 'flutter', label: 'Flutter' },
    { value: 'softwaretesting', label: 'Software Testing' },
    { value: 'computervision', label: 'Computer Vision' },
    { value: 'digitalmarketing', label: 'Digital Marketing' },
    { value: 'humanresource', label: 'Human Resource' },
    { value: 'dataanalytics', label: 'Data Analytics' },
  ];

  const allCourseValues = Courses.map((c) => c.value);
  const allInternshipValues = Internships.map((i) => i.value);
  const allAreaValues = [...allCourseValues, ...allInternshipValues];

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
      name: '',
      collegeName: '',
      email: '',
      fieldofStudy: '',
      phoneNumber: '',
      programType: '',
      areaofInterest: '',
      gender: '',
      classMode: '',
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Name is required'),
      collegeName: yup.string().required('College Name is required'),
      email: yup.string().required('Email is required'),
      fieldofStudy: yup.string().required('Field of Study is required'),
      phoneNumber: yup
        .string()
        .required('Phone Number is required')
        .min(10, 'phone number should be 10')
        .max(10, 'phone number should be 10'),
      programType: yup
        .string()
        .required('Program Type is required')
        .oneOf(['course', 'internship']),
      areaofInterest: yup.string().required('Area of Interest is required'),
      gender: yup
        .string()
        .required('Gender is required')
        .oneOf(['male', 'female']),
      classMode: yup
        .string()
        .required('Status is required')
        .oneOf(['online', 'offline']),
    }),
    onSubmit: async (values) => {
      console.log(values);
      closeModal();
      let _formData = new FormData();

      _formData.append('name', values.name);
      _formData.append('collegeName', values.collegeName);
      _formData.append('email', values.email);
      _formData.append('fieldofStudy', values.fieldofStudy);
      _formData.append('phoneNumber', values.phoneNumber);
      _formData.append('programType', values.programType);
      _formData.append('areaofInterest', values.areaofInterest);
      _formData.append('gender', values.gender);
      _formData.append('classMode', values.classMode);
      try {
        let response: any = await fetch('?/', {
          method: 'POST',
          body: _formData,
        });
        response = await response.json();
        if (response.ok === true) {
          form.set({
            name: '',
            collegeName: '',
            email: '',
            fieldofStudy: '',
            phoneNumber: '',
            programType: '',
            areaofInterest: '',
            gender: '',
            classMode: '',
          });
          toast(`Registration Successfully`, {
            duration: 4000,
            position: 'top-center',
            style:
              "border-radius: 20px; background: white; color: black; font-size: 17px; font-family: 'ZPublicaSans', sans-serif;",
          });
        } else {
          form.set({
            name: '',
            collegeName: '',
            email: '',
            fieldofStudy: '',
            phoneNumber: '',
            programType: '',
            areaofInterest: '',
            gender: '',
            classMode: '',
          });
          toast(`${response.message}`, {
            duration: 4000,
            position: 'top-center',
            class: 'bg-red-500',
            style:
              "border-radius: 20px; background: white; color: black; font-size: 17px; font-family: 'ZPublicaSans', sans-serif;",
          });
        }
      } catch (error: any) {
        form.set({
          name: '',
          collegeName: '',
          email: '',
          fieldofStudy: '',
          phoneNumber: '',
          programType: '',
          areaofInterest: '',
          gender: '',
          classMode: '',
        });
        toast(`${error.response.data.message}`, {
          duration: 4000,
          position: 'top-center',
          class: 'bg-red-500',
          style:
            "border-radius: 20px; background: white; color: black; font-size: 17px; font-family: 'ZPublicaSans', sans-serif;",
        });
      }
    },
  });

  let query = '';

  const handleSubmit1 = async (event: any) => {
    event.preventDefault();
    let _formData1 = new FormData();
    _formData1.append('query', query);
    try {
      let response: any = await fetch('?/faqquery', {
        method: 'POST',
        body: _formData1,
      });
      response = await response.json();
      if (response.ok === true) {
        query = '';
        toast(`Query Submitted`, {
          duration: 4000,
          position: 'top-center',
          style:
            "border-radius: 20px; background: white; color: black; font-size: 17px; font-family: 'ZPublicaSans', sans-serif;",
        });
      } else {
        toast(`${response.message}`, {
          duration: 4000,
          position: 'top-center',
          class: 'bg-red-500',
          style:
            "border-radius: 20px; background: white; color: black; font-size: 17px; font-family: 'ZPublicaSans', sans-serif;",
        });
      }
    } catch (error: any) {
      toast(`${error.response.data.message}`, {
        duration: 4000,
        position: 'top-center',
        class: 'bg-red-500',
        style:
          "border-radius: 20px; background: white; color: black; font-size: 17px; font-family: 'ZPublicaSans', sans-serif;",
      });
    }
  };

  // Reset area of interest when program type changes
</script>

<title>InternShip</title>
<div>
  <!-- Internship Home -->

  <aside class=" p-4 md:p-16">
    <div>
      <h2 class="font-publicaz text-herodesc text-center text-xl md:text-3xl">
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

        <!-- Program Type Selection -->

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

          <div class="input-group">
            <select
              class="font-publicaz w-full py-3 bg-black text-white indent-4 outline-none bg- md:text-lg"
              name="programType"
              on:change={handleChange}
              on:blur={handleChange}
              bind:value={$form.programType}
            >
              <option class="bg-black" value="">Select Program Type</option>
              <option class="bg-black" value="course">Course</option>
              <option class="bg-black" value="internship">Internship</option>
            </select>
            {#if $errors.programType && $touched.programType}
              <small class="text-red-500 font-gilroy"
                >Program Type is required</small
              >
            {/if}
          </div>

          <div class="input-group">
            <select
              class="font-publicaz w-full py-3 bg-black text-white indent-4 outline-none bg- md:text-lg"
              name="areaofInterest"
              on:change={handleChange}
              on:blur={handleChange}
              disabled={!$form.programType}
            >
              <option class="bg-black" value="">
                {$form.programType === 'course'
                  ? 'Select Course'
                  : $form.programType === 'internship'
                    ? 'Select Internship'
                    : 'Select Program Type '}
              </option>
              {#if $form.programType === 'course'}
                {#each Courses as item}
                  <option class="bg-black" value={item.value}
                    >{item.label}</option
                  >
                {/each}
              {:else if $form.programType === 'internship'}
                {#each Internships as item}
                  <option class="bg-black" value={item.value}
                    >{item.label}</option
                  >
                {/each}
              {/if}
            </select>
            {#if $errors.areaofInterest && $touched.areaofInterest}
              <p class="text-red-500 font-gilroy">
                Please select a valid option
              </p>
            {/if}
          </div>
        </div>

        <div class="flex justify-center px-10 pt-4">
          <Button
            disabled={!$isValid}
            type="submit"
            style="background: linear-gradient(82.96deg, #212443 -29.79%, #FF3434 -29.77%, #006CDB -9.84%, #E51057 108.39%, #212443 161.74%);
          "
            class="text-herodesc font-publicbold w-full  md:w-[300px] rounded-full py-6 text-[20px] "
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
  </aside>
</div>

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

  .text-gradient {
    background-image: linear-gradient(
      202.11deg,
      #9b66ff 31.72%,
      #a61f89 85.56%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .hero-bg {
    background-image: url(../../../img/Internship/internherobg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
