<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Footer from '../../components/Footer/Footer.svelte';

  interface Section {
    id: string;
    title: string;
    content: string[];
    icon: string;
  }

  const sections: Section[] = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: "📋",
      content: [
        "By using the Website, you agree to these Terms and any future updates.",
        "LearnerPro may modify these Terms at any time.",
        "Continued use after changes means acceptance."
      ]
    },
    {
      id: "eligibility",
      title: "Eligibility",
      icon: "👤",
      content: [
        "By using LearnerPro, you confirm that you are legally capable of entering into this agreement.",
        "Users below 18 years of age should access the platform only under the supervision and consent of a parent or legal guardian."
      ]
    },
    {
      id: "accounts",
      title: "User Accounts",
      icon: "🔑",
      content: [
        "To access certain features, you may need to create an account.",
        "You agree to provide accurate, complete, and up-to-date information during registration.",
        "You are responsible for maintaining the confidentiality of your login credentials and for all activities carried out through your account.",
        "LearnerPro is not responsible for any loss resulting from unauthorized access due to your failure to secure your account."
      ]
    },
    {
      id: "content",
      title: "Use of Educational Content",
      icon: "📚",
      content: [
        "All course materials, including videos, text, notes, assignments, graphics, logos, and software, are the intellectual property of LearnerPro or its content partners.",
        "These materials are provided solely for personal learning purposes.",
        "You may not copy, reproduce, record, distribute, share, or use any content for commercial purposes without prior written permission from LearnerPro."
      ]
    },
    {
      id: "conduct",
      title: "User Conduct",
      icon: "✨",
      content: [
        "Users are expected to maintain respectful and appropriate behavior while using the platform.",
        "You agree not to engage in unlawful, abusive, misleading, or disruptive activities.",
        "Any content shared by users must not violate applicable laws or infringe the rights of others.",
        "LearnerPro reserves the right to remove content or restrict access if these conditions are violated."
      ]
    },
    {
      id: "payments",
      title: "Payments and Fees",
      icon: "💳",
      content: [
        "Course fees and payment details are clearly displayed before enrollment.",
        "All payments are processed securely through third-party payment gateways.",
        "Once payment is completed successfully, access to the selected course or service may begin immediately.",
        "Refunds, if applicable, will be handled in accordance with LearnerPro's refund policy or applicable laws."
      ]
    },
    {
      id: "communication",
      title: "Communication",
      icon: "📧",
      content: [
        "By registering on LearnerPro, you agree that we may contact you via email, phone calls, SMS, or other electronic means.",
        "This may include account updates, course-related information, important announcements, and customer support."
      ]
    },
    {
      id: "availability",
      title: "Service Availability",
      icon: "⚙️",
      content: [
        "While we strive to ensure uninterrupted access to our services, LearnerPro does not guarantee that the platform will always be available or error-free.",
        "Temporary interruptions may occur due to maintenance or technical issues."
      ]
    },
    {
      id: "disclaimer",
      title: "Disclaimer of Warranties",
      icon: "⚠️",
      content: [
        "All services and content on LearnerPro are provided on an 'as-is' basis.",
        "LearnerPro does not guarantee specific academic results, certifications, or career outcomes.",
        "Your progress and success depend on individual effort and participation."
      ]
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: "⚡",
      content: [
        "LearnerPro shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of or inability to use the platform or its content, to the extent permitted by law."
      ]
    },
    {
      id: "termination",
      title: "Termination of Access",
      icon: "🚫",
      content: [
        "LearnerPro reserves the right to suspend or terminate access to the platform at any time if a user violates these Terms & Conditions, without prior notice."
      ]
    },
    {
      id: "law",
      title: "Governing Law",
      icon: "⚖️",
      content: [
        "These Terms & Conditions are governed by the laws of India.",
        "Any disputes arising from the use of LearnerPro shall be subject to the exclusive jurisdiction of the courts located in Nagercoil, Tamil Nadu."
      ]
    }
  ];

  let activeSection = "acceptance";
  let scrollPosition = 0;
</script>

<div class="bg-gray-950 min-h-screen text-white">
  <!-- Hero Section -->
  <div class="hero-bg pt-20 pb-16">
    <div class="max-w-7xl mx-auto px-4 md:px-8 text-center">
      <h1 class="font-publicaz text-5xl md:text-6xl font-bold mb-6">
        Terms & <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Conditions</span>
      </h1>
      <p class="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
        Please read these terms carefully before using LearnerPro. By accessing our platform, you agree to comply with all the terms outlined below.
      </p> 
    </div>
  </div>

  <!-- Welcome Section -->
  <div class="max-w-7xl mx-auto px-4 md:px-8 py-12">
    <div class="bg-gradient-to-r from-blue-900 to-blue-800 p-8 rounded-lg border border-blue-700 mb-12">
      <h2 class="font-publicaz text-2xl font-bold mb-4">Welcome to LearnerPro</h2>
      <p class="text-blue-100 text-lg leading-relaxed">
        These Terms & Conditions govern your access to and use of our website and educational services available at 
        <a href="https://www.learnerpro.in" class="underline font-bold hover:text-white">https://www.learnerpro.in</a>. 
        By visiting, registering, or using our platform, you agree to comply with these Terms along with our Privacy Policy. 
        If you do not agree with any part of these Terms, we recommend not using the site.
      </p>
    </div>
  </div>

  <!-- Main Content -->
  <div class="max-w-7xl mx-auto px-4 md:px-8 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Sidebar Navigation -->
      <div class="lg:col-span-1">
        <div class="sticky top-20 bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 max-h-[80vh] overflow-y-auto">
          <h3 class="font-publicaz text-lg font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Table of Contents
          </h3>
          <div class="space-y-2">
            {#each sections as section}
              <button
                on:click={() => activeSection = section.id}
                class="w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-sm {activeSection === section.id ? 'bg-blue-600 text-white font-bold' : 'text-gray-300 hover:bg-gray-700'}"
              >
                <span class="mr-2">{section.icon}</span>
                {section.title}
              </button>
            {/each}
          </div>
        </div>
      </div>

      <!-- Content Area -->
      <div class="lg:col-span-3">
        <div class="space-y-8">
          {#each sections as section}
            <div
              id={section.id}
              class="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 transition-all duration-300 {activeSection === section.id ? 'ring-2 ring-blue-500' : ''}"
            >
              <div class="flex items-center gap-4 mb-6">
                <span class="text-4xl">{section.icon}</span>
                <h2 class="font-publicaz text-3xl font-bold">{section.title}</h2>
              </div>
              
              <div class="space-y-4 pl-16">
                {#each section.content as point, index}
                  <div class="flex gap-4">
                    <span class="text-blue-400 font-bold flex-shrink-0 mt-1">•</span>
                    <p class="text-gray-300 leading-relaxed">{point}</p>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
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

  /* Custom scrollbar for sidebar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #1f2937;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: #3b82f6;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #2563eb;
  }
</style>