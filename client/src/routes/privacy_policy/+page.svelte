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
      content: "This Privacy Policy explains how LearnerPro collects, uses, discloses, and protects your personal information when you use our website and related services (collectively, the 'Services'). We take your privacy seriously and are committed to protecting your personal data in accordance with applicable laws and regulations."
    },
    {
      id: "terms",
      title: "Key Terms & Definitions",
      icon: "📖",
      subsections: [
        {
          title: "Personal Data",
          content: ["Any information that identifies or can be used to identify an individual."]
        },
        {
          title: "User",
          content: ["Refers to anyone who accesses or uses our Services."]
        },
        {
          title: "We, Us, Our",
          content: ["Refers to LearnerPro."]
        }
      ],
      content: []
    },
    {
      id: "applicability",
      title: "Applicability",
      icon: "✅",
      subsections: [
        {
          title: "This Policy Applies To:",
          content: [
            "All users of the LearnerPro website and services",
            "Personal data collected in digital form",
            "Offline data that is later digitized and stored by us"
          ]
        },
        {
          title: "This Policy Does Not Apply To:",
          content: [
            "Information collected purely offline and not digitized",
            "Information belonging to third parties",
            "Publicly available information, to the extent permitted by law"
          ]
        }
      ],
      content: []
    },
    {
      id: "data-collected",
      title: "Types of Data Collected",
      icon: "📊",
      subsections: [
        {
          title: "3.1 Basic Identifiers",
          content: [
            "Name",
            "Email address",
            "Phone number",
            "Address",
            "Gender",
            "Date of birth",
            "Purpose: User registration, communication, and identity verification."
          ]
        },
        {
          title: "3.2 Account Details",
          content: [
            "Profile photo",
            "Educational background / qualifications (if provided)",
            "Purpose: Personalization and account management."
          ]
        },
        {
          title: "3.3 Communications Data",
          content: [
            "Messages sent to us",
            "Emails",
            "Support requests",
            "Feedback",
            "Purpose: Responding to queries, providing support, and improving our services."
          ]
        }
      ],
      content: []
    },
    {
      id: "how-collect",
      title: "How We Collect Data",
      icon: "🔍",
      content: [
        "User Registration / Account Setup – when you sign up or create an account",
        "Forms & Surveys – contact forms, feedback forms, and surveys",
        "Communications – emails, chats, and support tickets"
      ]
    },
    {
      id: "use-data",
      title: "Use of Data",
      icon: "⚙️",
      content: [
        "To enable access to and use of our Services (login, account management)",
        "To operate, maintain, improve, and personalize our Services",
        "To communicate with users regarding updates, announcements, and support",
        "To send promotional or marketing communications with your consent",
        "For analytics purposes, including understanding usage patterns, fixing bugs, and monitoring performance"
      ]
    },
    {
      id: "security",
      title: "Security Measures",
      icon: "🔐",
      content: [
        "Encryption of data in transit (TLS/SSL) and at rest where feasible",
        "Role-based access control and least-privilege access",
        "Secure authentication mechanisms (password hashing, OTP, 2FA where applicable)",
        "Regular security audits and vulnerability assessments",
        "Secure data backups",
        "Monitoring for potential security incidents"
      ]
    },
    {
      id: "updates",
      title: "Policy Updates",
      icon: "🔄",
      content: [
        "We may update this Privacy Policy from time to time due to changes in legal requirements, business practices, or new services.",
        "If significant changes are made, we will notify users via email, in-app notifications, or a prominent notice on our website.",
        "The 'Last Updated' date will always be displayed at the top of this policy."
      ]
    }
  ];

  let activeSection = "intro";
</script>

<div class="bg-gray-950 min-h-screen text-white">
  <!-- Hero Section -->
  <div class="hero-bg pt-20 pb-16">
    <div class="max-w-7xl mx-auto px-4 md:px-8 text-center">
      <h1 class="font-publicaz text-5xl md:text-6xl font-bold mb-6">
        Privacy <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Policy</span>
      </h1>
      <p class="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
        Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
                <div class="space-y-3 mb-6 pl-4">
                  {#each section.content as point}
                    <div class="flex gap-4">
                      <span class="text-blue-400 font-bold flex-shrink-0 mt-0.5">•</span>
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
                      <h3 class="font-publicaz text-xl font-bold text-blue-400 mb-4">
                        {subsection.title}
                      </h3>
                      <div class="space-y-3 pl-4">
                        {#each subsection.content as point}
                          <div class="flex gap-4">
                            <span class="text-cyan-400 font-bold flex-shrink-0 mt-0.5">▸</span>
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