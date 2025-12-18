<script lang="ts">
  import Footer from '../../components/Footer/Footer.svelte';

  interface Section {
    id: string;
    title: string;
    content: string;
  }

  const sections: Section[] = [
    {
      id: "scope",
      title: "1. SCOPE",
      content: "This internet resources and domains, www.learnerpro.in, on the world wide web, and the application titled 'learnerpro' ('Application') is owned and hosted by learnerpro, having its corporate office at 387, Joe Daniel St, Vetturnimadam, Nagercoil, Tamil Nadu 629003, under the brand name 'learnerpro'. learnerpro is committed to protecting the User's information and privacy. This Privacy Policy is designed to help the User understand how learnerpro may collect, process, store and use the information provided by the User to learnerpro and to assist the User in making informed decisions while using the Application and the Services. This Privacy Policy has been published inter alia in compliance with the provisions of the Information Technology Act, 2000 and the rules and regulations made thereunder."
    },
    {
      id: "consent",
      title: "2. CONSENT TO THIS POLICY AND CHANGES IN POLICY",
      content: "By downloading and using the Application, the user ('User') expressly gives learnerpro consent to collect, receive, store, use, deal with, handle, manage, process, provide access to, share, disclose to and analyse the User Information in the manner set forth in this Privacy Policy. If the User does not agree to the terms of this Privacy Policy, please do not use or access the Application. By accessing the Application or by otherwise providing any User Information, each User will be deemed to have read, understood and agreed to the terms and conditions outlined in the Privacy Policy. learnerpro may, at any time, change, modify, add or delete any terms of the Privacy Policy, at its sole discretion, with or without advance notice."
    },
    {
      id: "third-party",
      title: "3. LINKS TO THIRD PARTY WEBSITES",
      content: "The procedures and practices set forth in this Privacy Policy describe the use and disclosure of User Information collected by learnerpro. The Application and/or other platforms of learnerpro may contain links to other websites. Any personal information about the User collected which such User visits such websites is not governed by this Privacy Policy. The User acknowledges that learnerpro shall not be responsible for and has no control over the practices and content of any website accessed using the links contained on the Application."
    },
    {
      id: "competency",
      title: "4. COMPETENCY TO CONTRACT",
      content: "By agreeing to this Privacy Policy, a User represents that the User is at least the age of majority i.e. 18 years, and is competent to contract. Additionally, where the User is registering on behalf of, and is the authorized representative of, a company, partnership or any other legal entity, such User has been duly authorized by such entity. In case the User is a natural person who is not of the age of majority or is not competent to contract, the User may not use the Application and/or the Services, or provide any information to learnerpro."
    },
    {
      id: "collection",
      title: "5. INFORMATION COLLECTION",
      content: "learnerpro collects two basic types of information from a User: personal information, which is any information that exclusively identifies a User (e.g., name, postal address, date of birth, mobile/telephone phone number, email address, PAN, GST, financial information like bank account details, identification information amongst others) and non-personal information, which is information that does not exclusively identify a User. When the User accesses the Application to make Transactions, learnerpro may collect information about the Transaction, device information, technical usage data, and geolocation of the User. User Information includes location information, access information, personal information, contacts, other applications, transaction information, billing information, automated collection details, and other information as may be explicitly required from time to time."
    },
    {
      id: "not-upload",
      title: "6. TYPE OF INFORMATION NOT TO BE UPLOADED",
      content: "While accessing or using the Application or the Services, User(s) shall ensure that they do NOT host, display, upload, modify, publish, transmit, update or share any information that: they do not have a right to make available; is defamatory, vulgar, obscene, pornographic, paedophilic, invasive of privacy, insulting, harassing, libellous, racially or ethnically objectionable, relating to money laundering or gambling; is harmful to minors and children; infringes patent, trademark, copyright or other proprietary rights; violates any applicable law or regulation; deceives or misleads any other user; impersonates any person or entity; threatens the unity, integrity, defence, security or sovereignty of India; contains viruses or malicious code; is patently false and untrue with intent to mislead or harass."
    },
    {
      id: "purpose",
      title: "7. PURPOSE OF COLLECTION AND USAGE OF INFORMATION",
      content: "User Information will be used by learnerpro for purposes including: to provide, maintain and enhance the Application and Services; to authenticate Users' KYC documents; to perform creditworthiness and financial standing checks; to send technical notices, updates, and support messages; to investigate complaints and disputes; to respond to queries or feedback; to monitor and analyze trends and usage; to link or combine with information received from others; to inform Users of offers, products, and services; to detect and protect against error, fraud and criminal activity; to comply with applicable laws and regulations; and to share data for internal and external services with third parties."
    },
    {
      id: "storage",
      title: "8. INFORMATION STORAGE AND DISSEMINATION",
      content: "User Information is stored on learnerpro's database servers or hosted by third parties in data centres located in India or outside India. Storage and transfer of User Information is carried out in compliance with all applicable laws, including the Information Technology Act, 2000. learnerpro implements reasonable security practices and procedures including physical, electronic and managerial measures to safeguard User Information. However, learnerpro cannot guarantee that there will be no unintended disclosures due to data breach, unauthorized access, or security failure. learnerpro may disclose information when required by law or to protect its rights or the rights of others. User Information may be shared with third parties for access to their applications and services, and in case of proposed merger, acquisition or reorganization. Data transfers to other countries may occur, and when this happens, learnerpro will protect User Information as described in this Privacy Policy."
    },
    {
      id: "retention",
      title: "9. RETENTION OF USER INFORMATION",
      content: "learnerpro shall retain the personal information of the User as long as it serves the purpose(s) for which it was initially collected or subsequently authorized. learnerpro may continue processing User's personal information beyond such period only for archiving purposes. After the expiry of this time period, learnerpro may either delete User's personal information or retain it in a form such that it does not identify the User personally."
    },
    {
      id: "communication",
      title: "10. COMMUNICATION POLICY",
      content: "When the User sets up an account on the Application, the User explicitly consents to receive emails and messages from learnerpro and its service providers in connection with the Services as well as marketing and promotional communications. While Users may opt out of promotional messages by contacting learnerpro at support@learnerpro.in or the Data Protection and Grievance Officer, Users cannot opt out of receiving certain administrative, financial, technical and legal information from learnerpro in connection with the Services."
    },
    {
      id: "alteration",
      title: "11. ALTERATION OF USER INFORMATION",
      content: "In case the User requests any change or deletion of User Information, or to permanently delete the User's account, the User must contact learnerpro at support@learnerpro.in or contact the Data Protection and Grievance Officer. learnerpro is not obligated to alter or delete any User Information which it is required to maintain under applicable laws or pursuant to contractual requirements."
    },
    {
      id: "termination",
      title: "12. TERMINATION OF ACCESS",
      content: "learnerpro shall have the right to immediately terminate the right of access/usage, de-activate the account, investigate and take appropriate action, file complaints with appropriate authorities, and/or take any other action deemed appropriate when any User commits a breach of this Privacy Policy, fails to comply with applicable law, uploads non-compliant information, commits breach of intellectual property rights, or where learnerpro has reasonable grounds for suspecting illegal, fraudulent, unethical or abusive activity, or believes the User's actions may cause legal liability or are contrary to learnerpro's interests."
    },
    {
      id: "warranty",
      title: "13. NO WARRANTY FOR ACCURACY AND COMPLETENESS OF DATA",
      content: "Each User undertakes to ensure that any information/data uploaded through the Services shall be accurate and complete and that no false or misleading information shall be provided. The Services and Application display/transmit information on an 'as-is' and 'as available' basis. learnerpro makes no representation or warranty regarding the accuracy or completeness of such information. learnerpro makes no representations or warranties (express or implied) with respect to the Application, including any warranties of title, non-infringement, availability, security, accuracy, merchantability, fitness for a particular purpose, freedom from viruses, completeness, timeliness, functionality, reliability, or speed of delivery."
    },
    {
      id: "limitation",
      title: "14. LIMITATION OF LIABILITY",
      content: "In no event shall learnerpro or its officers, directors, managers, partners, members, shareholders, employees, affiliates and agents be liable to any person for any claims, liabilities, losses, payments, costs, expenses, litigation, settlements, fines, penalties and damages, including direct, indirect, punitive, special, incidental or consequential damages; cost of procurement of substitute products/services; loss of material/data; loss of income, revenue, profits, business, contracts, anticipated savings, goodwill, or reputation arising out of or in connection with any access or use of the Services or Application. For any data loss or theft due to unauthorized access to the User's electronic devices through which the User accesses the Application, learnerpro shall not be held liable for any loss whatsoever incurred by the User."
    },
    {
      id: "indemnification",
      title: "15. INDEMNIFICATION",
      content: "Each User shall defend, indemnify and hold harmless learnerpro and related parties against all claims brought in connection with: breach of this Privacy Policy or applicable laws; fraud, negligent acts or willful misconduct; infringement of intellectual property rights; inaccuracy or misrepresentation; breach of security procedures; and/or unauthorized disclosure of information. To the maximum extent permissible under law, learnerpro shall not be liable to the User or any third party for any losses or damages arising out of the User's use of the Application or Services, whether based on warranty, contract, tort or otherwise. learnerpro does not accept liability for any loss or damage resulting from or in connection with the use of the Application or inability to use it, or for any delay or failure in performance for any reason whatsoever."
    }
  ];
</script>

<div class="bg-white min-h-screen">
  <!-- Header -->
  <div class="bg-white border-b border-gray-200 py-4">
    <div class="max-w-6xl mx-auto px-6">
      <h3 class="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h3> 
    </div>
  </div>

  <!-- Content -->
  <div class="max-w-6xl mx-auto px-6 py-12">
    <div class="space-y-10">
      {#each sections as section}
        <div id={section.id} class="scroll-mt-20">
          <h4 class="text-xl font-semibold text-gray-700 mb-4">{section.title}</h4>
          <p class="text-gray-700 leading-relaxed text-base">{section.content}</p>
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