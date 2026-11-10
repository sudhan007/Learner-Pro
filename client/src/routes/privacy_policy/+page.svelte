<script lang="ts">
  import Footer from '../../components/Footer/Footer.svelte';

  interface Subsection {
    title?: string;
    intro?: string;
    items?: string[];
    outro?: string;
  }

  interface Section {
    id: string;
    title: string;
    paragraphs?: string[];
    items?: string[];
    subsections?: Subsection[];
    outro?: string[];
  }

  const sections: Section[] = [
    {
      id: "scope-and-introduction",
      title: "1. SCOPE AND INTRODUCTION",
      paragraphs: [
        'LearnerPe ("Platform", "Application", "we", "our" or "us") is an education fee payment platform designed to facilitate convenient and secure payment of educational fees through digital payment methods.',
        'LearnerPe enables users to make payments towards school fees, college fees, tuition fees, coaching fees and other eligible education-related payments using supported payment methods, including credit cards.',
        'This Privacy Policy applies to the LearnerPe website, mobile application and all related services offered through the Platform.',
        'The Platform is owned and operated by [Insert Legal Entity Name], having its corporate office at 387, Joe Daniel Street, Vetturnimadam, Nagercoil, Tamil Nadu – 629003, India.',
        "This Privacy Policy explains how we collect, receive, store, use, process, share and protect users' personal and transaction-related information when they access or use LearnerPe.",
        "We are committed to maintaining the privacy and security of users' information in accordance with applicable Indian laws and regulations, including the Information Technology Act, 2000, applicable rules and the Digital Personal Data Protection Act, 2023, to the extent applicable."
      ]
    },
    {
      id: "consent-and-updates",
      title: "2. CONSENT TO THIS PRIVACY POLICY AND POLICY UPDATES",
      paragraphs: [
        "By downloading, accessing or using the LearnerPe Application or registering on the Platform, users acknowledge that they have read and understood this Privacy Policy.",
        "Users consent to the collection, use, storage and processing of their personal information for the purposes described in this Privacy Policy and in accordance with applicable laws.",
        "Where separate consent is legally required for a particular purpose, such consent will be obtained separately.",
        "If users do not agree with this Privacy Policy, they should refrain from accessing or using the Platform.",
        "LearnerPe reserves the right to modify, update or revise this Privacy Policy from time to time. Any changes will be published on the Platform along with the updated effective date."
      ]
    },
    {
      id: "third-party-services",
      title: "3. THIRD-PARTY WEBSITES AND SERVICES",
      paragraphs: [
        "The LearnerPe Application may contain links to third-party websites, payment gateways, banking services or other external platforms.",
        "These third-party services operate independently and may have their own privacy policies and terms of service.",
        "LearnerPe does not control the privacy practices, security policies or information-handling procedures of such third parties.",
        "Users are advised to review the respective privacy policies before sharing personal or financial information with external platforms."
      ]
    },
    {
      id: "eligibility-and-competency",
      title: "4. USER ELIGIBILITY AND COMPETENCY",
      paragraphs: [
        "By using LearnerPe, users represent that they are legally competent to enter into a valid agreement under applicable Indian laws.",
        "Users below 18 years of age may use the services only through or with the involvement and consent of their parent or legal guardian, wherever required by applicable law.",
        "Where a parent or guardian makes an educational fee payment on behalf of a student, the parent or guardian is responsible for providing accurate information and the necessary authorisation."
      ]
    },
    {
      id: "information-we-collect",
      title: "5. INFORMATION WE COLLECT",
      paragraphs: [
        "LearnerPe may collect different categories of information depending on how users register, access and use the Platform."
      ],
      subsections: [
        {
          title: "5.1 Personal Information",
          intro: "We may collect the following personal information:",
          items: [
            "Full name.",
            "Registered mobile number.",
            "Email address.",
            "Residential address, where required.",
            "Date of birth, where required.",
            "User account and profile details.",
            "Other information voluntarily provided by users."
          ]
        },
        {
          title: "5.2 Educational and Beneficiary Information",
          intro: "To facilitate education-related payments, we may collect:",
          items: [
            "Student name.",
            "School or college name.",
            "Educational institution details.",
            "Tuition or coaching centre details.",
            "Student identification or admission number, where required.",
            "Fee payment details.",
            "Beneficiary or institution account information, where applicable.",
            "Other information necessary to identify and process the intended payment."
          ]
        },
        {
          title: "5.3 Payment and Transaction Information",
          intro: "When users initiate payments through LearnerPe, we may collect and process information such as:",
          items: [
            "Transaction reference or identification number.",
            "Payment amount.",
            "Payment date and time.",
            "Payment method and payment status.",
            "Payment gateway reference details.",
            "Card network and limited card-related information, where made available by payment service providers.",
            "Beneficiary and payment destination details.",
            "Refund, reversal and dispute-related information.",
            "Transaction history and payment records."
          ],
          outro: "Payment card credentials and sensitive payment information may be collected and processed directly by authorised payment gateways or payment service providers in accordance with their applicable security requirements."
        },
        {
          title: "5.4 Device and Technical Information",
          intro: "We may automatically collect certain technical information when users access the Platform, including:",
          items: [
            "IP address.",
            "Device type and model.",
            "Operating system.",
            "Application version.",
            "Browser information.",
            "Device identifiers, where permitted.",
            "Login activity.",
            "Application usage and diagnostic information.",
            "Technical logs and error reports."
          ]
        }
      ]
    },
    {
      id: "purpose-of-collection",
      title: "6. PURPOSE OF COLLECTION AND USE OF INFORMATION",
      paragraphs: [
        "LearnerPe collects and processes user information for the following purposes:"
      ],
      items: [
        "To register and authenticate user accounts.",
        "To facilitate education fee payments.",
        "To process payments through authorised payment gateways.",
        "To identify students, educational institutions and beneficiaries.",
        "To provide transaction confirmations and payment updates.",
        "To maintain payment and transaction history.",
        "To communicate payment status, refunds and transaction-related information.",
        "To provide customer support and resolve user complaints.",
        "To investigate failed, pending, disputed or unsuccessful transactions.",
        "To detect, prevent and investigate fraudulent or unauthorised activities.",
        "To maintain platform security and prevent misuse.",
        "To improve application performance and user experience.",
        "To communicate service announcements, updates and promotional offers, where permitted.",
        "To comply with applicable legal, regulatory and contractual obligations."
      ]
    },
    {
      id: "payment-processing",
      title: "7. PAYMENT PROCESSING AND THIRD-PARTY SERVICE PROVIDERS",
      paragraphs: [
        "LearnerPe may work with authorised payment gateways, banking partners, technology providers and other service providers to facilitate payment transactions.",
        "When a user initiates a payment, relevant transaction information may be shared with these service providers for payment authentication, processing, verification, settlement, refund handling and dispute resolution.",
        "Such information may include transaction amount, payment references, payment method details and other information necessary to complete the transaction.",
        "LearnerPe may receive transaction confirmations, payment status, reference numbers and other relevant information from these service providers.",
        "Users acknowledge that payment processing may involve third-party systems and is subject to the respective service providers' applicable terms, conditions and privacy policies."
      ]
    },
    {
      id: "sharing-and-disclosure",
      title: "8. SHARING AND DISCLOSURE OF USER INFORMATION",
      paragraphs: [
        "LearnerPe does not sell users' personal information to third parties.",
        "However, user information may be shared with the following categories of third parties when necessary for providing our services:"
      ],
      items: [
        "Payment Gateways: For processing, verifying and facilitating payment transactions.",
        "Banking and Payment Service Providers: For payment processing, transaction verification, refunds and settlement-related activities.",
        "Educational Institutions and Beneficiaries: To identify the intended recipient and facilitate the relevant education fee payment, where applicable.",
        "Technology and Cloud Service Providers: For hosting, maintaining and securing the Platform.",
        "Communication Service Providers: For sending SMS, emails, OTPs and transaction notifications.",
        "Fraud Prevention and Security Providers: To identify suspicious activities and protect the Platform.",
        "Government and Regulatory Authorities: Where disclosure is required under applicable laws, regulations, court orders or lawful requests."
      ],
      outro: [
        "We may also disclose information where necessary to protect our legal rights, prevent fraud, investigate security incidents or comply with legal obligations."
      ]
    },
    {
      id: "data-storage-and-security",
      title: "9. DATA STORAGE AND SECURITY",
      paragraphs: [
        "LearnerPe takes reasonable technical, organisational and administrative measures to protect users' personal and transaction-related information against unauthorised access, disclosure, alteration, misuse or loss.",
        "Security measures may include:"
      ],
      items: [
        "Secure data storage and hosting infrastructure.",
        "Access controls and authentication procedures.",
        "Encryption and secure communication protocols, where applicable.",
        "Monitoring of suspicious activities.",
        "Appropriate internal data protection procedures.",
        "Security measures implemented by authorised service providers."
      ],
      outro: [
        "User information may be stored on our servers or on third-party cloud infrastructure, in India or other jurisdictions, subject to applicable legal requirements.",
        "Although we take reasonable precautions to protect user information, no electronic transmission or storage system can be guaranteed to be completely secure."
      ]
    },
    {
      id: "retention-of-information",
      title: "10. RETENTION OF USER INFORMATION",
      paragraphs: [
        "LearnerPe retains personal and transaction-related information only for as long as necessary to fulfil the purposes for which it was collected.",
        "Certain information, including payment records, transaction references, refund records, dispute details and other relevant documents, may be retained for longer periods where required under applicable laws, regulatory requirements or contractual obligations.",
        "Once the information is no longer required for the relevant purposes, LearnerPe may securely delete, anonymise or otherwise dispose of such information in accordance with applicable laws."
      ]
    },
    {
      id: "communication-policy",
      title: "11. COMMUNICATION AND NOTIFICATION POLICY",
      paragraphs: [
        "By registering and using LearnerPe, users may receive communications through registered mobile numbers, email addresses, SMS, application notifications or other available communication channels.",
        "Such communications may include:"
      ],
      items: [
        "Account registration and verification messages.",
        "OTP and authentication notifications.",
        "Payment initiation and confirmation messages.",
        "Successful, pending or failed transaction updates.",
        "Refund and reversal notifications.",
        "Customer support communications.",
        "Important service announcements.",
        "Promotional offers and marketing communications, where permitted."
      ],
      outro: [
        "Users may opt out of promotional communications by contacting us or using the available unsubscribe mechanism.",
        "However, users may continue to receive essential service-related, transaction-related, security and legal communications."
      ]
    },
    {
      id: "cookies-and-tracking",
      title: "12. COOKIES AND TRACKING TECHNOLOGIES",
      paragraphs: [
        "LearnerPe may use cookies and similar technologies on its website to improve functionality, understand user preferences and analyse website performance.",
        "These technologies may help us:"
      ],
      items: [
        "Improve website navigation.",
        "Remember user preferences.",
        "Analyse website traffic.",
        "Monitor technical performance.",
        "Enhance the overall user experience."
      ],
      outro: [
        "Users may manage cookies through their browser settings. Disabling certain cookies may affect the availability or functionality of some website features."
      ]
    },
    {
      id: "user-rights",
      title: "13. USER RIGHTS AND PERSONAL INFORMATION MANAGEMENT",
      paragraphs: [
        "Subject to applicable laws, users may have the right to:"
      ],
      items: [
        "Request access to their personal information.",
        "Request correction or updating of inaccurate information.",
        "Request deletion of personal information, where legally permissible.",
        "Withdraw consent for applicable data processing activities.",
        "Raise concerns regarding the collection or processing of personal information.",
        "Submit privacy-related complaints through the designated grievance channel."
      ],
      outro: [
        "Users may exercise these rights by contacting LearnerPe through the official support email address provided in this Privacy Policy.",
        "Requests will be reviewed and handled in accordance with applicable laws."
      ]
    },
    {
      id: "modification-and-deletion-of-accounts",
      title: "14. MODIFICATION AND DELETION OF USER ACCOUNTS",
      paragraphs: [
        "Users may request changes to their personal information or request permanent deletion of their LearnerPe account by contacting our support team.",
        "Upon receiving a valid request, LearnerPe will review and process the request in accordance with applicable laws and internal procedures.",
        "Account deletion may restrict users from accessing their transaction history, account-related services and other application features.",
        "However, LearnerPe may retain certain information where required for legal, regulatory, accounting, transaction verification, dispute resolution or other legitimate purposes."
      ]
    },
    {
      id: "prohibited-information-and-misuse",
      title: "15. PROHIBITED INFORMATION AND MISUSE OF THE PLATFORM",
      paragraphs: [
        "Users shall not upload, submit, transmit or share any information through LearnerPe that:"
      ],
      items: [
        "Is false, misleading, fraudulent or inaccurate.",
        "Belongs to another person without proper authorisation.",
        "Violates another person's privacy or legal rights.",
        "Contains malicious software, viruses or harmful code.",
        "Is unlawful, abusive, defamatory or objectionable.",
        "Involves unauthorised payment activities.",
        "Is intended to manipulate, misuse or disrupt payment processing.",
        "Violates applicable laws or regulations."
      ],
      outro: [
        "LearnerPe reserves the right to restrict, suspend or terminate access to the Platform where misuse, fraudulent activity or violations of applicable policies are identified."
      ]
    },
    {
      id: "accuracy-of-user-information",
      title: "16. ACCURACY OF USER INFORMATION",
      paragraphs: [
        "Users are responsible for providing accurate, complete and up-to-date information while registering and initiating payments through LearnerPe.",
        "Users should carefully verify the student details, educational institution, beneficiary information and payment amount before confirming a transaction.",
        "LearnerPe shall not be responsible for incorrect information voluntarily submitted by users, subject to applicable laws and the terms governing the relevant services."
      ]
    },
    {
      id: "limitation-of-liability",
      title: "17. LIMITATION OF LIABILITY",
      paragraphs: [
        "LearnerPe takes reasonable measures to safeguard user information and maintain the security of its Platform.",
        "However, LearnerPe shall not be responsible for security incidents, unauthorised disclosures or interruptions arising from circumstances beyond its reasonable control, including third-party service failures, internet disruptions or cyberattacks, subject to applicable laws.",
        "Nothing in this Privacy Policy shall exclude any liability that cannot be excluded under applicable law."
      ]
    },
    {
      id: "indemnification",
      title: "18. INDEMNIFICATION",
      paragraphs: [
        "Users agree to use LearnerPe in compliance with this Privacy Policy and applicable laws.",
        "To the extent permitted by law, users may be responsible for claims, losses or damages arising from fraudulent activities, misuse of the Platform, unauthorised use of another person's information or violation of applicable laws."
      ]
    },
    {
      id: "governing-law-and-jurisdiction",
      title: "19. GOVERNING LAW AND JURISDICTION",
      paragraphs: [
        "This Privacy Policy shall be governed by and interpreted in accordance with the laws of India.",
        "Any disputes arising in connection with this Privacy Policy shall be subject to the jurisdiction of the competent courts in Tamil Nadu, India, subject to applicable laws."
      ]
    }
  ];
</script>

<div class="bg-white min-h-screen">
  <!-- Header -->
  <div class="bg-white border-b border-gray-200 py-6">
    <div class="max-w-6xl mx-auto px-6">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">PRIVACY POLICY – LEARNERPAY</h1>
      <div class="flex flex-wrap items-center gap-3 text-sm text-gray-500">
        <span><strong class="font-medium text-gray-700">Effective Date:</strong> 10 November 2026</span>
        <span class="hidden sm:inline text-gray-300">•</span>
        <span><strong class="font-medium text-gray-700">Last Updated:</strong> 10 November 2026</span>
      </div>
    </div>
  </div>

  <!-- Content -->
  <div class="max-w-6xl mx-auto px-6 py-12">
    <div class="space-y-10">
      {#each sections as section}
        <div id={section.id} class="scroll-mt-20">
          <h2 class="text-xl font-bold text-gray-900 mb-4">{section.title}</h2>

          {#if section.paragraphs}
            {#each section.paragraphs as paragraph}
              <p class="text-gray-700 leading-relaxed text-base mb-3">{paragraph}</p>
            {/each}
          {/if}

          {#if section.items}
            <ul class="list-disc pl-6 space-y-1.5 text-gray-700 leading-relaxed text-base mb-4">
              {#each section.items as item}
                <li>{item}</li>
              {/each}
            </ul>
          {/if}

          {#if section.subsections}
            <div class="space-y-6 mt-4">
              {#each section.subsections as sub}
                <div class="border-l-2 border-gray-100 pl-4 py-1">
                  {#if sub.title}
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">{sub.title}</h3>
                  {/if}
                  {#if sub.intro}
                    <p class="text-gray-700 leading-relaxed text-base mb-2">{sub.intro}</p>
                  {/if}
                  {#if sub.items}
                    <ul class="list-disc pl-6 space-y-1.5 text-gray-700 leading-relaxed text-base mb-2">
                      {#each sub.items as item}
                        <li>{item}</li>
                      {/each}
                    </ul>
                  {/if}
                  {#if sub.outro}
                    <p class="text-gray-700 leading-relaxed text-base mt-2">{sub.outro}</p>
                  {/if}
                </div>
              {/each}
            </div>
          {/if}

          {#if section.outro}
            {#each section.outro as paragraph}
              <p class="text-gray-700 leading-relaxed text-base mt-3 mb-3">{paragraph}</p>
            {/each}
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>

<Footer />

<style>
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
</style>