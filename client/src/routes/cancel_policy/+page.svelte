<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Footer from '../../components/Footer/Footer.svelte';

  interface Section {
    id: string;
    title: string;
    content: string | string[];
    icon: string;
    subsections?: {
      title: string;
      content: string[];
    }[];
  }

  const sections: Section[] = [
    {
      id: "intro",
      title: "Introduction",
      icon: "👋",
      content: "At LearnerPro, we understand that plans can change. This Cancellation Policy explains how course cancellations are handled and what you can expect if you choose to cancel your enrollment."
    },
    {
      id: "enrollment-cancellation",
      title: "Course Enrollment Cancellation",
      icon: "📋",
      content: [
        "Once a learner enrolls in a course on LearnerPro, the enrollment is considered confirmed.",
        "Requests for cancellation must be made within the time period specified at the time of enrollment, if applicable.",
        "Any cancellation request must be submitted in writing via email to our official support email address."
      ]
    },
    {
      id: "refund-eligibility",
      title: "Refund Eligibility",
      icon: "💰",
      content: [
        "Cancellation requests made before the course starts may be eligible for a refund, subject to administrative charges.",
        "Once the course has started or access to course materials has been provided, cancellation requests may not be eligible for a refund, unless explicitly stated otherwise in the course details."
      ]
    },
    {
      id: "non-refundable",
      title: "Non-Refundable Situations",
      icon: "❌",
      content: [
        "Partial attendance or non-attendance of classes",
        "Failure to complete assignments or assessments",
        "Change of mind after course access is granted",
        "Technical issues arising from the learner's device or internet connection"
      ]
    },
    {
      id: "transfers",
      title: "Course Transfers",
      icon: "🔄",
      content: [
        "In certain cases, LearnerPro may allow learners to transfer enrollment to another course or batch.",
        "Such transfers are subject to availability and approval and may involve additional charges."
      ]
    },
    {
      id: "cancellation-learnerpro",
      title: "Cancellation by LearnerPro",
      icon: "⚠️",
      content: [
        "LearnerPro reserves the right to cancel or reschedule a course due to unforeseen circumstances such as low enrollment, instructor unavailability, or technical issues.",
        "In such cases, learners will be informed in advance and may be offered a refund, rescheduling option, or course transfer."
      ]
    },
    {
      id: "refund-processing",
      title: "Refund Processing",
      icon: "⏱️",
      content: [
        "If a refund is approved, it will be processed through the original payment method within 7–10 business days.",
        "Processing time may vary depending on the payment gateway or bank."
      ]
    },
    {
      id: "contact",
      title: "Contact for Cancellation Requests",
      icon: "📧",
      content: "All cancellation and refund-related requests must be sent to support@learnerpro.in"
    },
    {
      id: "updates",
      title: "Policy Updates",
      icon: "🔄",
      content: "LearnerPro reserves the right to update or modify this Cancellation Policy at any time. Changes will be effective once posted on the website."
    }
  ];

  let activeSection = "intro";
</script>

<div class="bg-gray-950 min-h-screen text-white">
  <!-- Hero Section -->
  <div class="hero-bg pt-20 pb-16">
    <div class="max-w-7xl mx-auto px-4 md:px-8 text-center">
      <h1 class="font-publicaz text-5xl md:text-6xl font-bold mb-6">
        Cancellation <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Policy</span>
      </h1>
      <p class="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
        Learn how our cancellation and refund process works. We're here to make things transparent and fair.
      </p> 
    </div>
  </div>

  <!-- Main Content -->
  <div class="max-w-7xl mx-auto px-4 md:px-8 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Sidebar Navigation -->
      <div class="lg:col-span-1">
        <div class="sticky top-20 bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 max-h-[80vh] overflow-y-auto">
          <h3 class="font-publicaz text-lg font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            Quick Navigation
          </h3>
          <div class="space-y-2">
            {#each sections as section}
              <button
                on:click={() => activeSection = section.id}
                class="w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-sm {activeSection === section.id ? 'bg-red-600 text-white font-bold' : 'text-gray-300 hover:bg-gray-700'}"
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
              class="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 transition-all duration-300 {activeSection === section.id ? 'ring-2 ring-red-500' : ''}"
            >
              <!-- Section Header -->
              <div class="flex items-center gap-4 mb-6">
                <span class="text-4xl">{section.icon}</span>
                <div>
                  <h2 class="font-publicaz text-3xl font-bold">{section.title}</h2>
                </div>
              </div>

              <!-- Content -->
              {#if typeof section.content === 'string'}
                <!-- Single paragraph content -->
                <p class="text-gray-300 leading-relaxed mb-4">{section.content}</p>
              {:else if section.content && section.content.length > 0}
                <!-- List content -->
                <div class="space-y-3 pl-4">
                  {#each section.content as point}
                    <div class="flex gap-4">
                      <span class="text-red-400 font-bold flex-shrink-0 mt-0.5">•</span>
                      <p class="text-gray-300 leading-relaxed">{point}</p>
                    </div>
                  {/each}
                </div>
              {/if}

              <!-- Subsections -->
              {#if section.subsections && section.subsections.length > 0}
                <div class="space-y-6 mt-6 border-t border-gray-700 pt-6">
                  {#each section.subsections as subsection}
                    <div>
                      <h3 class="font-publicaz text-xl font-bold text-red-400 mb-4">
                        {subsection.title}
                      </h3>
                      <div class="space-y-3 pl-4">
                        {#each subsection.content as point}
                          <div class="flex gap-4">
                            <span class="text-orange-400 font-bold flex-shrink-0 mt-0.5">▸</span>
                            <p class="text-gray-300 leading-relaxed">{point}</p>
                          </div>
                        {/each}
                      </div>
                    </div>
                  {/each}
                </div>
              {/if}
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
    background: linear-gradient(135deg, #2d1b1b 0%, #3d2f1f 100%);
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
    background: #dc2626;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #b91c1c;
  }
</style>