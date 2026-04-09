<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  import Button from "$lib/components/ui/button/button.svelte";
  import hero1 from "../../../img/Home/hero1.webp";
  import { createForm } from 'svelte-forms-lib';
  import * as yup from 'yup';
  import { toast } from 'svelte-sonner';

  interface Course {
    id: number;
    title: string;
    description: string;
    shortDesc: string;
    price: string;
    icon: string;
    color: string;
    fullDescription: string;
    duration: string;
    modules: string[];
  }

  const courses: Course[] = [
    {
      id: 1,
      title: "Full Stack Developer",
      description:
        "Master frontend and backend technologies to build complete web applications. Learn React, Node.js, and databases.",
      shortDesc: "Full Stack Developer",
      price: "₹27000/-",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      fullDescription: "Become a complete web developer with expertise in both frontend and backend technologies. This comprehensive course covers HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and database management.",
      duration: "6 Months",
      modules: ["HTML & CSS Fundamentals", "JavaScript Advanced", "React JS Mastery", "Node.js & Express", "MongoDB & Databases", "Project Development"],
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Master the principles of user interface and user experience design. Create beautiful and functional designs.",
      shortDesc: "UI/UX Design",
      price: "₹27000/-",
      icon: "🎭",
      color: "from-pink-500 to-rose-500",
      fullDescription: "Learn design principles, wireframing, prototyping, and user research. Master Figma and design tools for professional projects.",
      duration: "3 Months",
      modules: ["Design Principles", "User Research", "Wireframing", "Prototyping in Figma", "Visual Design", "Design Systems"],
    },
    {
      id: 3,
      title: "Python Programming",
      description:
        "Learn Python from scratch and become proficient in one of the most popular programming languages.",
      shortDesc: "Python Programming",
      price: "₹23000/-",
      icon: "🐍",
      color: "from-yellow-500 to-orange-500",
      fullDescription: "Master Python programming with hands-on projects. Learn variables, functions, OOP, file handling, and build real-world applications.",
      duration: "3 Months",
      modules: ["Python Basics", "Data Types & Variables", "Functions & Modules", "Object-Oriented Programming", "File Handling", "Mini Projects"],
    },
    {
      id: 4,
      title: "Data Analytics",
      description:
        "Analyze data using Python, SQL, and Tableau. Transform raw data into actionable business insights.",
      shortDesc: "Data Analytics",
      price: "₹27000/-",
      icon: "📈",
      color: "from-green-500 to-teal-500",
      fullDescription: "Learn SQL, Python for data analysis, data visualization with Tableau, and statistical analysis for business decisions.",
      duration: "4 Months",
      modules: ["SQL Fundamentals", "Python Data Analysis", "Data Visualization with Tableau", "Statistical Analysis", "Business Intelligence", "Real Projects"],
    },
  ];

  let selectedCourse: Course | null = null;
  let showCourseModal = false;
  let showEnrollForm = false;

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
      email: '',
      phoneNumber: '',
      gender: '',
      courseId: '',
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Invalid email').required('Email is required'),
      phoneNumber: yup
        .string()
        .required('Phone Number is required')
        .min(10, 'Phone number should be 10 digits')
        .max(10, 'Phone number should be 10 digits'),
      gender: yup
        .string()
        .required('Gender is required')
        .oneOf(['male', 'female']),
      courseId: yup.string().required('Course selection is required'),
    }),
    onSubmit: async (values) => {
      let _formData = new FormData();
      _formData.append('name', values.name);
      _formData.append('email', values.email);
      _formData.append('phoneNumber', values.phoneNumber);
      _formData.append('gender', values.gender);
      _formData.append('courseId', values.courseId);

      try {
        let response: any = await fetch('?/enrollCourse', {
          method: 'POST',
          body: _formData,
        });
        response = await response.json();
        
        if (response.ok === true) {
          form.set({
            name: '',
            email: '',
            phoneNumber: '',
            gender: '',
            courseId: '',
          });
          showEnrollForm = false;
          showCourseModal = false;
          toast('🎉 Enrollment Successful! Welcome to the course!', {
            duration: 4000,
            position: 'top-center',
            style:
              "border-radius: 20px; background: #22c55e; color: white; font-size: 17px; font-family: 'PublicaSans', sans-serif;",
          });
        } else {
          toast(`${response.message}`, {
            duration: 4000,
            position: 'top-center',
            style:
              "border-radius: 20px; background: #ef4444; color: white; font-size: 17px; font-family: 'PublicaSans', sans-serif;",
          });
        }
      } catch (error: any) {
        toast(`Error: ${error.message}`, {
          duration: 4000,
          position: 'top-center',
          style:
            "border-radius: 20px; background: #ef4444; color: white; font-size: 17px; font-family: 'PublicaSans', sans-serif;",
        });
      }
    },
  });

  function openCourseModal(course: Course) {
    selectedCourse = course;
    showCourseModal = true;
    showEnrollForm = false;
  }

  function closeCourseModal() {
    showCourseModal = false;
    showEnrollForm = false;
    selectedCourse = null;
  }

  function openEnrollForm() {
    if (selectedCourse) {
      $form.courseId = selectedCourse.id.toString();
    }
    showEnrollForm = true;
  }

  // New function for WhatsApp enquiry
  function openWhatsAppEnquiry() {
    if (!selectedCourse) return;
    
    const message = `Hi, I'm interested in the *${selectedCourse.title}* course.\n\nPlease send me more details including fees, batch timings, and syllabus.`;
    const whatsappUrl = `https://wa.me/916380058663?text=${encodeURIComponent(message)}`; 
    window.open(whatsappUrl, '_blank');
  }

  // New function for Call enquiry
  function openCallEnquiry() {
    window.location.href = "tel:+916380058663";
  }
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
          <Button
            on:click={() => (window.location.href = "/webinarform")}
            style="background: linear-gradient(85.8deg, #FF3434 9.11%, rgba(255, 63, 52, 0.848958) 33.86%, rgba(255, 91, 51, 0.616348) 80.97%, rgba(255, 117, 52, 0.41) 127.28%, rgba(255, 125, 52, 0) 162.41%);"
            class="text-herodesc rounded-full md:px-12 md:py-8 text-base md:text-[20px]"
            >Free Soft Skill Training</Button
          >
          <Button
            on:click={() => (window.location.href = "/payrollcourse")}
            style="background: linear-gradient(85.8deg, #FF3434 9.11%, rgba(255, 63, 52, 0.848958) 33.86%, rgba(255, 91, 51, 0.616348) 80.97%, rgba(255, 117, 52, 0.41) 127.28%, rgba(255, 125, 52, 0) 162.41%);"
            class="text-herodesc rounded-full md:px-12 md:py-8 text-base md:text-[20px]"
            >Payroll Course</Button
          >
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
        <Avatar.Image src="https://github.com/shadcn.png" alt="@learner3" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
    </div>
  </div>
</div>

<div class="py-20 px-4 md:px-8 lg:px-16 bg-gray-900">
  <div class="max-w-7xl mx-auto">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="font-publicaz text-4xl md:text-5xl font-bold text-white mb-4">
        Popular Learning Courses
      </h2>
      <p class="text-gray-400 text-lg max-w-2xl mx-auto">
        Choose from our comprehensive range of industry-leading courses designed
        to elevate your skills
      </p>
    </div>

    <!-- Courses Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each courses as course (course.id)}
        <div
          class="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          <!-- Gradient Border Effect -->
          <div
            class="absolute inset-0 bg-gradient-to-br {course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          ></div>

          <!-- Content -->
          <div class="relative p-6 flex flex-col h-full">
            <!-- Icon -->
            <div class="text-5xl mb-4">{course.icon}</div>

            <!-- Title -->
            <h3 class="font-publicaz text-xl font-bold text-white mb-3">
              {course.title}
            </h3>

            <!-- Description -->
            <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              {course.description}
            </p>

            <!-- Price and Button -->
            <div class="space-y-4">
              <div class="flex items-baseline gap-2">
                <span class="text-3xl line-through font-bold text-white">
                  {course.price}
                </span>
              </div>

              <Button
                on:click={() => openCourseModal(course)}
                class="w-full bg-gradient-to-r {course.color} text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                View Course
              </Button>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- CTA Section -->
    <div class="mt-20 text-center">
      <p class="text-gray-400 text-lg mb-6">
        Not sure which course is right for you?
      </p>
      <Button
        variant="ghost"
        class="text-white border-2 border-white hover:bg-white hover:text-gray-900 rounded-full px-12 py-3 font-bold transition-all duration-300"
      >
        <a href={'/internship'}> Get Free Course Counseling</a>
      </Button>
    </div>
  </div>
</div>

<!-- Course Details Modal -->
{#if showCourseModal && selectedCourse}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <!-- Close Button -->
      <div class="sticky top-0 bg-gray-800 flex justify-between items-center p-6 border-b border-gray-700">
        <h2 class="font-publicaz text-2xl font-bold text-white">{selectedCourse.title}</h2>
        <button
          on:click={closeCourseModal}
          class="text-white text-2xl hover:text-gray-300"
        >
          ✕
        </button>
      </div>

      {#if !showEnrollForm}
        <!-- Course Details + Enquiry Options -->
        <div class="p-6 space-y-6">
          <!-- Price Badge -->
          <div class="inline-block">
            <span class="bg-gradient-to-r {selectedCourse.color} text-white px-6 py-2 rounded-full text-xl font-bold line-through">
              {selectedCourse.price}
            </span>
          </div>

          <!-- Full Description -->
          <div>
            <h3 class="font-publicaz text-xl font-bold text-white mb-3">About This Course</h3>
            <p class="text-gray-300 text-lg">{selectedCourse.fullDescription}</p>
          </div>

          <!-- Duration -->
          <div>
            <h3 class="font-publicaz text-xl font-bold text-white mb-2">Duration</h3>
            <p class="text-gray-300 text-lg">⏱️ {selectedCourse.duration}</p>
          </div>

          <!-- Modules -->
          <div>
            <h3 class="font-publicaz text-xl font-bold text-white mb-4">Course Modules</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              {#each selectedCourse.modules as module}
                <div class="bg-gray-800 p-3 rounded-lg">
                  <p class="text-gray-200 flex items-center gap-2">
                    <span class="text-green-500">✓</span> {module}
                  </p>
                </div>
              {/each}
            </div>
          </div>

          <!-- Enquiry Options -->
          <div class="pt-8 border-t border-gray-700">
            <h3 class="font-publicaz text-2xl font-bold text-white mb-6 text-center">
              How would you like to proceed?
            </h3>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- WhatsApp Button -->
              <Button
                on:click={openWhatsAppEnquiry}
                class="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 text-lg shadow-lg transition-all"
              >
                <span class="text-3xl">💬</span>
                Enquire on WhatsApp
              </Button>

              <!-- Call Button -->
              <Button
                on:click={openCallEnquiry}
                class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 text-lg shadow-lg transition-all"
              >
                <span class="text-3xl">📞</span>
                Call for Enquiry
              </Button>
            </div>

            <!-- <div class="text-center mt-8">
              <p class="text-gray-400 mb-4">— OR —</p>
              <Button
                on:click={openEnrollForm}
                class="w-full bg-gradient-to-r {selectedCourse.color} text-white font-bold py-4 rounded-xl text-lg hover:shadow-xl transition-all duration-300"
              >
                Fill Online Enrollment Form
              </Button>
            </div> -->
          </div>
        </div>

      {:else}
        <!-- Enrollment Form -->
        <div class="p-6">
          <h3 class="font-publicaz text-2xl font-bold text-white mb-6">Complete Your Enrollment</h3>
          
          <form on:submit={handleSubmit} class="space-y-6">
            <!-- Name Field -->
            <div>
              <label class="block text-white font-publicaz mb-2">Name *</label>
              <input
                type="text"
                name="name"
                bind:value={$form.name}
                on:change={handleChange}
                on:blur={handleChange}
                class="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-500 outline-none transition"
                placeholder="Enter your name"
              />
              {#if $errors.name && $touched.name}
                <p class="text-red-500 text-sm mt-1">{$errors.name}</p>
              {/if}
            </div>

            <!-- Email Field -->
            <div>
              <label class="block text-white font-publicaz mb-2">Email *</label>
              <input
                type="email"
                name="email"
                bind:value={$form.email}
                on:change={handleChange}
                on:blur={handleChange}
                class="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-500 outline-none transition"
                placeholder="Enter your email"
              />
              {#if $errors.email && $touched.email}
                <p class="text-red-500 text-sm mt-1">{$errors.email}</p>
              {/if}
            </div>

            <!-- Phone Number Field -->
            <div>
              <label class="block text-white font-publicaz mb-2">Phone Number *</label>
              <input
                type="text"
                name="phoneNumber"
                bind:value={$form.phoneNumber}
                on:change={handleChange}
                on:blur={handleChange}
                class="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-500 outline-none transition"
                placeholder="Enter your phone number"
              />
              {#if $errors.phoneNumber && $touched.phoneNumber}
                <p class="text-red-500 text-sm mt-1">{$errors.phoneNumber}</p>
              {/if}
            </div>

            <!-- Gender Field -->
            <div>
              <label class="block text-white font-publicaz mb-3">Gender *</label>
              <div class="flex gap-6">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    bind:group={$form.gender}
                    on:change={handleChange}
                    class="cursor-pointer"
                  />
                  <span class="text-white">Male</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    bind:group={$form.gender}
                    on:change={handleChange}
                    class="cursor-pointer"
                  />
                  <span class="text-white">Female</span>
                </label>
              </div>
              {#if $errors.gender && $touched.gender}
                <p class="text-red-500 text-sm mt-1">{$errors.gender}</p>
              {/if}
            </div>

            <!-- Form Actions -->
            <div class="flex gap-4 pt-6">
              <Button
                type="button"
                on:click={() => showEnrollForm = false}
                variant="ghost"
                class="flex-1 text-white border border-white hover:bg-white hover:text-gray-900 rounded-lg py-3 font-bold transition"
              >
                Back
              </Button>
              <Button
                type="submit"
                disabled={!$isValid || $isSubmitting}
                class="flex-1 bg-gradient-to-r {selectedCourse.color} text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {#if $isSubmitting}
                  <div class="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
                {:else}
                  Submit Enrollment
                {/if}
              </Button>
            </div>
          </form>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .hero {
    background-image: url("../../../img/Home/wave.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>