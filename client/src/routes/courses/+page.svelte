<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  import Button from "$lib/components/ui/button/button.svelte"; 
  import { createForm } from 'svelte-forms-lib';
  import * as yup from 'yup';
  import { toast } from 'svelte-sonner';
   import Footer from '../../components/Footer/Footer.svelte';

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
      price: "₹30000/-",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      fullDescription: "Become a complete web developer with expertise in both frontend and backend technologies. This comprehensive course covers HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and database management.",
      duration: "6 Months",
      modules: ["HTML & CSS Fundamentals", "JavaScript Advanced", "React JS Mastery", "Node.js & Express", "MongoDB & Databases", "Project Development"],
    },
    {
      id: 2,
      title: "Machine Learning",
      description:
        "Build intelligent systems with Python and AI. Explore neural networks, classification, and data science fundamentals.",
      shortDesc: "Machine Learning",
      price: "₹25000/-",
      icon: "🤖",
      color: "from-purple-500 to-pink-500",
      fullDescription: "Master machine learning concepts and build intelligent systems. Learn Python, TensorFlow, scikit-learn, neural networks, and advanced AI algorithms.",
      duration: "4 Months",
      modules: ["Python for ML", "Data Preprocessing", "Supervised Learning", "Unsupervised Learning", "Neural Networks", "Real-world Projects"],
    },
    {
      id: 3,
      title: "Front End Developer",
      description:
        "Create stunning user interfaces with HTML, CSS, and JavaScript. Master React and modern UI frameworks.",
      shortDesc: "Front End Developer",
      price: "₹15000/-",
      icon: "🎨",
      color: "from-orange-500 to-red-500",
      fullDescription: "Create beautiful and responsive user interfaces. Learn HTML5, CSS3, JavaScript, React, UI/UX principles, and modern frontend tools.",
      duration: "3 Months",
      modules: ["HTML & CSS", "JavaScript Basics", "React Fundamentals", "State Management", "UI Design Principles", "Responsive Design"],
    },
    {
      id: 4,
      title: "AI & Data Science",
      description:
        "Transform raw data into actionable insights. Learn Python, TensorFlow, and advanced analytics techniques.",
      shortDesc: "AI & Data Science",
      price: "₹60000/-",
      icon: "📊",
      color: "from-green-500 to-emerald-500",
      fullDescription: "Deep dive into artificial intelligence and data science. Learn data analysis, visualization, machine learning, deep learning, and business intelligence.",
      duration: "8 Months",
      modules: ["Python & Pandas", "Data Visualization", "Statistics & Probability", "Machine Learning", "Deep Learning", "Big Data Analytics"],
    },
    {
      id: 5,
      title: "Python Programming",
      description:
        "Learn Python from scratch and become proficient in one of the most popular programming languages.",
      shortDesc: "Python Programming",
      price: "₹12000/-",
      icon: "🐍",
      color: "from-yellow-500 to-orange-500",
      fullDescription: "Master Python programming with hands-on projects. Learn variables, functions, OOP, file handling, and build real-world applications.",
      duration: "3 Months",
      modules: ["Python Basics", "Data Types & Variables", "Functions & Modules", "Object-Oriented Programming", "File Handling", "Mini Projects"],
    },
    {
      id: 6,
      title: "React JS Advanced",
      description:
        "Deep dive into React with hooks, context API, and state management patterns for production-ready applications.",
      shortDesc: "React JS Advanced",
      price: "₹18000/-",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      fullDescription: "Advanced React concepts including hooks, Redux, context API, performance optimization, and testing strategies.",
      duration: "4 Months",
      modules: ["React Hooks", "State Management with Redux", "Context API", "Performance Optimization", "Testing", "Production Deployment"],
    },
    {
      id: 7,
      title: "UI/UX Design",
      description:
        "Master the principles of user interface and user experience design. Create beautiful and functional designs.",
      shortDesc: "UI/UX Design",
      price: "₹16000/-",
      icon: "🎭",
      color: "from-pink-500 to-rose-500",
      fullDescription: "Learn design principles, wireframing, prototyping, and user research. Master Figma and design tools for professional projects.",
      duration: "3 Months",
      modules: ["Design Principles", "User Research", "Wireframing", "Prototyping in Figma", "Visual Design", "Design Systems"],
    },
    {
      id: 8,
      title: "Java Programming",
      description:
        "Learn object-oriented programming with Java and build enterprise-level applications with Spring Boot.",
      shortDesc: "Java Programming",
      price: "₹20000/-",
      icon: "☕",
      color: "from-orange-600 to-red-600",
      fullDescription: "Master Java fundamentals, OOP concepts, collections, exception handling, and Spring Boot framework.",
      duration: "5 Months",
      modules: ["Java Basics", "OOP Concepts", "Collections Framework", "Exception Handling", "Spring Boot", "Project Development"],
    },
    {
      id: 9,
      title: "Digital Marketing",
      description:
        "Learn SEO, social media marketing, email marketing, and content strategy to grow your online presence.",
      shortDesc: "Digital Marketing",
      price: "₹14000/-",
      icon: "📱",
      color: "from-indigo-500 to-purple-500",
      fullDescription: "Complete digital marketing course covering SEO, SEM, social media, email marketing, analytics, and marketing automation.",
      duration: "3 Months",
      modules: ["SEO Fundamentals", "Google Ads & SEM", "Social Media Marketing", "Email Marketing", "Analytics & Reporting", "Marketing Strategy"],
    },
    {
      id: 10,
      title: "DevOps & Cloud",
      description:
        "Master Docker, Kubernetes, AWS, and CI/CD pipelines for modern cloud-based deployments.",
      shortDesc: "DevOps & Cloud",
      price: "₹35000/-",
      icon: "☁️",
      color: "from-blue-600 to-cyan-600",
      fullDescription: "Learn containerization with Docker, orchestration with Kubernetes, AWS cloud services, and CI/CD automation.",
      duration: "4 Months",
      modules: ["Docker Basics", "Kubernetes Orchestration", "AWS Services", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging"],
    },
    {
      id: 11,
      title: "Data Analytics",
      description:
        "Analyze data using Python, SQL, and Tableau. Transform raw data into actionable business insights.",
      shortDesc: "Data Analytics",
      price: "₹22000/-",
      icon: "📈",
      color: "from-green-500 to-teal-500",
      fullDescription: "Learn SQL, Python for data analysis, data visualization with Tableau, and statistical analysis for business decisions.",
      duration: "4 Months",
      modules: ["SQL Fundamentals", "Python Data Analysis", "Data Visualization with Tableau", "Statistical Analysis", "Business Intelligence", "Real Projects"],
    },
    {
      id: 12,
      title: "Mobile App Development",
      description:
        "Build cross-platform mobile apps with Flutter and React Native for iOS and Android platforms.",
      shortDesc: "Mobile App Development",
      price: "₹28000/-",
      icon: "📲",
      color: "from-purple-600 to-pink-600",
      fullDescription: "Master Flutter and React Native frameworks to build beautiful, performant mobile applications for both platforms.",
      duration: "5 Months",
      modules: ["Flutter Basics", "State Management", "Firebase Integration", "API Integration", "Publishing Apps", "Advanced Features"],
    },
    {
      id: 13,
      title: "Cybersecurity Basics",
      description:
        "Learn cybersecurity fundamentals, network security, ethical hacking, and protection against cyber threats.",
      shortDesc: "Cybersecurity Basics",
      price: "₹26000/-",
      icon: "🔐",
      color: "from-red-500 to-red-600",
      fullDescription: "Master network security, encryption, vulnerability assessment, and ethical hacking principles for secure systems.",
      duration: "4 Months",
      modules: ["Network Security", "Encryption & Cryptography", "Ethical Hacking", "Vulnerability Assessment", "Penetration Testing", "Security Best Practices"],
    },
    {
      id: 14,
      title: "Web Design with CSS",
      description:
        "Learn modern CSS techniques, responsive design, animations, and create visually stunning websites.",
      shortDesc: "Web Design with CSS",
      price: "₹11000/-",
      icon: "🎨",
      color: "from-yellow-500 to-pink-500",
      fullDescription: "Master CSS3, Flexbox, Grid, animations, and responsive design patterns for modern web applications.",
      duration: "2 Months",
      modules: ["CSS Fundamentals", "Flexbox & Grid", "Responsive Design", "CSS Animations", "Sass/SCSS", "Best Practices"],
    },
    {
      id: 15,
      title: "Database Management",
      description:
        "Learn SQL, NoSQL databases, MongoDB, and PostgreSQL. Design and manage scalable databases.",
      shortDesc: "Database Management",
      price: "₹19000/-",
      icon: "🗄️",
      color: "from-slate-500 to-gray-500",
      fullDescription: "Master relational and non-relational databases, SQL queries, indexing, and database optimization techniques.",
      duration: "3 Months",
      modules: ["SQL Fundamentals", "Database Design", "MongoDB & NoSQL", "PostgreSQL Advanced", "Indexing & Optimization", "Backup & Recovery"],
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
</script> 

<div class="py-20 px-4 md:px-8 lg:px-16 bg-gray-900">
  <div class="max-w-7xl mx-auto">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="font-publicaz text-4xl md:text-5xl font-bold text-white mb-4">
        All Courses
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
                <span class="text-3xl font-bold text-white">
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
        on:click={() => (window.location.href = "/course-counseling")}
        variant="ghost"
        class="text-white border-2 border-white hover:bg-white hover:text-gray-900 rounded-full px-12 py-3 font-bold transition-all duration-300"
      >
        Get Free Course Counseling
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
        <!-- Course Details Content -->
        <div class="p-6 space-y-6">
          <!-- Price Badge -->
          <div class="inline-block">
            <span class="bg-gradient-to-r {selectedCourse.color} text-white px-6 py-2 rounded-full text-xl font-bold">
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

          <!-- Enroll Button -->
          <Button
            on:click={openEnrollForm}
            class="w-full bg-gradient-to-r {selectedCourse.color} text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all duration-300 text-lg"
          >
            Enroll Now
          </Button>
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
            <div class="flex gap-4 pt-4">
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
                disabled={!$isValid}
                class="flex-1 bg-gradient-to-r {selectedCourse.color} text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {#if $isSubmitting}
                  <div class="h-4 w-4 border-b-2 rounded-full border-white animate-spin"></div>
                {:else}
                  Submit
                {/if}
              </Button>
            </div>
          </form>
        </div>
      {/if}
    </div>
  </div>
{/if}

<Footer />

<style>
  .hero {
    background-image: url("../../../img/Home/wave.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>