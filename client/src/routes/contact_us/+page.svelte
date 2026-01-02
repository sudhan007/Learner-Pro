<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import { createForm } from 'svelte-forms-lib';
  import * as yup from 'yup';
  import { toast } from 'svelte-sonner';
  import Footer from '../../components/Footer/Footer.svelte';

  interface ContactInfo {
    icon: string;
    title: string;
    description: string;
    details: string[];
  }

  const contactInfo: ContactInfo[] = [
    {
      icon: "📍",
      title: "Our Location",
      description: "Visit us at our office",
      details: [
        "MS Rd, Kattayanvilai, Nagercoil, ",
        "Tamil Nadu 629003", 
      ]
    },
    {
      icon: "📞",
      title: "Phone",
      description: "Give us a call",
      details: [
        "+91 6380058663", 
      ]
    },
    {
      icon: "✉️",
      title: "Email",
      description: "Send us an email",
      details: [
        "support@learnerpro.in", 
      ]
    },
    {
      icon: "🌐",
      title: "Social Media",
      description: "Follow us online",
      details: [
        "Facebook",
        "Instagram",
        "LinkedIn",
        "Twitter"
      ]
    }
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
      fullName: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: '',
    },
    validationSchema: yup.object().shape({
      fullName: yup.string().required('Full Name is required'),
      email: yup.string().email('Invalid email').required('Email is required'),
      phoneNumber: yup
        .string()
        .required('Phone Number is required')
        .min(10, 'Phone number should be 10 digits')
        .max(10, 'Phone number should be 10 digits'),
      subject: yup.string().required('Subject is required').min(5, 'Subject must be at least 5 characters'),
      message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
    }),
    onSubmit: async (values) => {
      let _formData = new FormData();
      _formData.append('fullName', values.fullName);
      _formData.append('email', values.email);
      _formData.append('phoneNumber', values.phoneNumber);
      _formData.append('subject', values.subject);
      _formData.append('message', values.message);

      try {
        let response: any = await fetch('?/contactSubmit', {
          method: 'POST',
          body: _formData,
        });
        response = await response.json();
        
        if (response.ok === true) {
          form.set({
            fullName: '',
            email: '',
            phoneNumber: '',
            subject: '',
            message: '',
          });
          toast('✅ Message Sent Successfully! We will contact you soon.', {
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
</script>

<div class="bg-gray-950 min-h-screen text-white">
  <!-- Hero Section -->
  <div class="hero-bg pt-20 pb-20">
    <div class="max-w-7xl mx-auto px-4 md:px-8 text-center">
      <h1 class="font-publicaz text-5xl md:text-6xl font-bold mb-6">
        Get In <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Touch</span>
      </h1>
      <p class="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>
    </div>
  </div>

  <!-- Contact Information Cards -->
  <div class="max-w-7xl mx-auto px-4 md:px-8 py-20">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      {#each contactInfo as info}
        <div class="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-700">
          <div class="text-5xl mb-4">{info.icon}</div>
          <h3 class="font-publicaz text-2xl font-bold mb-2">{info.title}</h3>
          <p class="text-gray-400 mb-4">{info.description}</p>
          <div class="space-y-2">
            {#each info.details as detail}
              <p class="text-gray-300 text-sm">{detail}</p>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <!-- Contact Form Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <!-- Form -->
      <div class="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700">
        <h2 class="font-publicaz text-3xl font-bold mb-8">Send us a Message</h2>
        
        <form on:submit={handleSubmit} class="space-y-6">
          <!-- Full Name -->
          <div>
            <label class="block text-white font-publicaz mb-2">Full Name *</label>
            <input
              type="text"
              name="fullName"
              bind:value={$form.fullName}
              on:change={handleChange}
              on:blur={handleChange}
              class="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-500 focus:bg-gray-600 outline-none transition"
              placeholder="Enter your full name"
            />
            {#if $errors.fullName && $touched.fullName}
              <p class="text-red-500 text-sm mt-1">{$errors.fullName}</p>
            {/if}
          </div>

          <!-- Email -->
          <div>
            <label class="block text-white font-publicaz mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              bind:value={$form.email}
              on:change={handleChange}
              on:blur={handleChange}
              class="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-500 focus:bg-gray-600 outline-none transition"
              placeholder="Enter your email"
            />
            {#if $errors.email && $touched.email}
              <p class="text-red-500 text-sm mt-1">{$errors.email}</p>
            {/if}
          </div>

          <!-- Phone Number -->
          <div>
            <label class="block text-white font-publicaz mb-2">Phone Number *</label>
            <input
              type="text"
              name="phoneNumber"
              bind:value={$form.phoneNumber}
              on:change={handleChange}
              on:blur={handleChange}
              class="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-500 focus:bg-gray-600 outline-none transition"
              placeholder="Enter 10-digit phone number"
            />
            {#if $errors.phoneNumber && $touched.phoneNumber}
              <p class="text-red-500 text-sm mt-1">{$errors.phoneNumber}</p>
            {/if}
          </div>

          <!-- Subject -->
          <div>
            <label class="block text-white font-publicaz mb-2">Subject *</label>
            <input
              type="text"
              name="subject"
              bind:value={$form.subject}
              on:change={handleChange}
              on:blur={handleChange}
              class="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-500 focus:bg-gray-600 outline-none transition"
              placeholder="What is this about?"
            />
            {#if $errors.subject && $touched.subject}
              <p class="text-red-500 text-sm mt-1">{$errors.subject}</p>
            {/if}
          </div>

          <!-- Message -->
          <div>
            <label class="block text-white font-publicaz mb-2">Message *</label>
            <textarea
              name="message"
              bind:value={$form.message}
              on:change={handleChange}
              on:blur={handleChange}
              rows="5"
              class="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-500 focus:bg-gray-600 outline-none transition resize-none"
              placeholder="Tell us more about your inquiry..."
            ></textarea>
            {#if $errors.message && $touched.message}
              <p class="text-red-500 text-sm mt-1">{$errors.message}</p>
            {/if}
          </div>

          <!-- Submit Button -->
          <Button
            type="submit"
            disabled={!$isValid}
            style="background: linear-gradient(85.8deg, #FF3434 9.11%, rgba(255, 63, 52, 0.848958) 33.86%, rgba(255, 91, 51, 0.616348) 80.97%, rgba(255, 117, 52, 0.41) 127.28%, rgba(255, 125, 52, 0) 162.41%);"
            class="w-full text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 text-lg"
          >
            {#if $isSubmitting}
              <div class="flex items-center justify-center gap-2">
                <div class="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </div>
            {:else}
              Send Message
            {/if}
          </Button>
        </form>
      </div>

      <!-- Information Box -->
      <div class="space-y-8">
        <div class="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-lg border border-blue-700">
          <h3 class="font-publicaz text-2xl font-bold mb-4">💡 Quick Response</h3>
          <p class="text-blue-100 mb-4">
            We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
          </p>
          <div class="space-y-3">
            <p class="text-blue-100"><strong>Office Hours:</strong></p>
            <p class="text-blue-100">Monday - Friday: 9:00 AM - 5:30 PM IST</p> 
          </div>
        </div>

        <div class="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-lg border border-purple-700">
          <h3 class="font-publicaz text-2xl font-bold mb-4">🎓 Course Inquiry</h3>
          <p class="text-purple-100 mb-4">
            Want to know more about our courses? Have questions about curriculum or pricing? We're here to help!
          </p>
          <Button
            on:click={() => (window.location.href = "/courses")}
            variant="ghost"
            class="text-white border-2 border-white hover:bg-white hover:text-purple-900 rounded-lg px-6 py-2 font-bold transition"
          >
            View All Courses
          </Button>
        </div>
 
      </div>
    </div>
  </div>
</div>

<Footer />

<style>
  .hero-bg {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  }
</style>