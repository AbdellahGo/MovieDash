
export const signUpFormInputs = [
    {
        id: 1,
        type: 'text',
        label: 'Name *',
        required: true,
    },
    {
        id: 3,
        type: 'text',
        label: 'UserName *',
        required: true,
        minLength: 3
    },
    {
        id: 4,
        type: 'email',
        label: 'Email *',
        required: true,
    },
    {
        id: 5,
        type: 'password',
        label: 'Password *',
        required: true,
        minLength: 8
    },
    {
        id: 8,
        type: 'password',
        label: 'confirm password *',
        required: true,
        minLength: 8
    },
]

export const navBarLinks: { id: number, text: string, link: string }[] = [
    {
        id: 1,
        text: 'Home',
        link: '/'
    },
    {
        id: 2,
        text: 'Movies',
        link: '/movies'
    },
    {
        id: 3,
        text: 'TV Shows',
        link: '/tv-shows'
    },
    {
        id: 5,
        text: 'Contact Us',
        link: '/contact-us'
    },
    {
        id: 6,
        text: 'Pricing',
        link: '/pricing'
    },
]

export const profileSubContainerLinks: { id: number, title: string, link: string }[] = [
    {
        id: 1,
        title: 'My Account',
        link: '/profile'
    },
    {
        id: 2,
        title: 'Watchlist',
        link: '/profile'
    },
    {
        id: 3,
        title: 'Subscription',
        link: '/pricing'
    },
]

export const quickLinks = [
    {
        id: 1,
        title: 'About Us',
        link: '/about-us',
    },
    {
        id: 2,
        title: 'Pricing Plan',
        link: '/pricing',
    },
    {
        id: 3,
        title: 'FAQ',
        link: '/faq',
    },
]

export const moviesToWatch = [
    {
        id: 1,
        title: 'Top Rated',
        link: '/movies#top-rated',
    },
    {
        id: 2,
        title: 'Upcoming',
        link: '/movies#upcoming',
    },
    {
        id: 3,
        title: 'Trending',
        link: '/movies#trending',
    },
]

export const aboutCompany = [
    {
        id: 1,
        title: 'Contact Us',
        link: 'contact-us',
    },
    {
        id: 2,
        title: 'Privacy Policy',
        link: 'privacy-policy',
    },
    {
        id: 3,
        title: 'Terms Of Use',
        link: 'terms-of-use',
    },
]

export const widgetSocialMedia = [
    {
        id: 1,
        link: 'https://www.facebook.com/profile.php?id=100053501469803',
    },
    {
        id: 2,
        link: 'https://www.linkedin.com/in/abdellah-gou-93b5a430a',
    },
    {
        id: 3,
        link: 'https://github.com/AbdellahGo',
    },
    {
        id: 4,
        link: 'https://www.tiktok.com/@zigzagxz3',
    },
    
]

export const footerBottomList = [
    {
        id: 1,
        title: 'Terms Of Use',
        link: '/terms-of-use'
    },
    {
        id: 2,
        title: 'Privacy-Policy',
        link: '/privacy-policy'
    },
    {
        id: 3,
        title: 'FAQ',
        link: 'faq'
    },
    {
        id: 4,
        title: 'Watch List',
        link: 'profile/Watch List'
    },
]


export const privacyPolicyData = [
    {
        id: 1,
        title: 'What Personal Information About Users Does MovieDash Collect ?',
        description: 'We collect personal information such as your name, email, and contact details when you use our services. Additionally, we gather usage data like pages visited and time spent on our site, along with device details such as IP address and browser type. Payment information is collected through third-party gateways. All data helps enhance your experience on our platform.'
    },
    {
        id: 2,
        title: 'Cookies and Web Beacons',
        description: 'We use cookies and similar technologies to improve your experience on our site. These small data files help us recognize you on future visits, understand your preferences, and provide personalized content. You can disable cookies in your browser settings, but doing so may limit certain features on the site.'
    },
    {
        id: 3,
        title: 'Third Party Payment Gateway - Financial Information',
        description: 'For processing payments, we use third-party services. These gateways may collect your payment details, such as credit card numbers and billing addresses, directly on their platforms. We do not store any financial information on our servers. Please refer to the respective privacy policies of our payment providers for more information on how they handle your data.'
    },
    {
        id: 4,
        title: "Disclosure: Children's Privacy",
        description: 'MovieDash does not knowingly collect or solicit personal information from anyone under the age of 13. If we learn that we have inadvertently collected data from a child under 13, we will take immediate steps to delete such information. Parents or guardians who believe that we may have information from a child under the age of 13 should contact us directly.'
    },
    {
        id: 5,
        title: "Disclosure: Children's Privacy",
        description: 'MovieDash operates globally, which means your personal information may be transferred, stored, and processed in countries outside of your own. These countries may have data protection laws that differ from your jurisdiction. By using our platform, you consent to the transfer of your data to countries that may have different privacy standards. We take steps to ensure that your data is treated securely and in accordance with this privacy policy.'
    },
]


export const termOfUseData = [
    {
        id: 1,
        title: 'Description of Service and Acceptance of Terms of Use',
        paragraphs: [
            "MovieDash is an online streaming service that offers access to a wide range of movies, TV shows, and exclusive content. By using MovieDash, you agree to these Terms of Use, and your continued access and use of the service indicate your acceptance of these terms. If you do not agree, you may not use the service.",
            'The services we provide may include personalized content suggestions, access to premium content, and social features for user engagement. You agree that the service is provided "as is" and may evolve over time, without prior notice.',
        ],
        list: {
            titleList: 'To ensure optimal performance, the MovieDash platform is best accessed using the latest versions of:',
            options: ['Google Chrome', 'Mozilla Firefox', 'Safari']
        }
    },
    {
        id: 2,
        title: 'Subscription Services',
        paragraphs: [
            'MovieDash offers various subscription plans, each providing different access levels to our content. Subscriptions are billed on a recurring basis, either monthly or annually, depending on the plan you choose. By subscribing, you authorize us to charge your payment method on a recurring basis in accordance with your subscription plan.',
            'All payments are non-refundable, except where required by law. You can cancel your subscription at any time, but your access will remain active until the end of the billing cycle.',
            'Promotional offers or trial periods may be available. After the promotional period ends, you will be charged the standard subscription fee unless you cancel before the trial ends.'
        ],
    },
    {
        id: 3,
        title: 'Third-Party Payment Gateway - Financial Information',
        paragraphs: [
            'All payments for MovieDash subscriptions are processed through secure third-party payment gateways, such as Stripe and PayPal. We do not store your payment information on our servers. By submitting your payment details, you agree to their terms and conditions and consent to your data being processed and stored by these providers.',
            'You are responsible for maintaining the accuracy of your payment information, including updating your details if your credit card expires.',
        ],
    },
    {
        id: 4,
        title: "Disclosure - Children's Privacy",
        paragraphs: [
            'MovieDash is not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If we discover that we have inadvertently collected personal data from a child under this age, we will take steps to delete that information as quickly as possible.',
            "Parents or guardians are responsible for supervising their children's use of MovieDash and ensuring that they do not access inappropriate content. Parental control features are available to restrict certain types of content.",
        ],
    },
    {
        id: 5,
        title: "Data Transfer, Storage & Processing Globally",
        paragraphs: [
            'MovieDash operates in various countries and may transfer, store, and process your data in locations outside your home country. By using MovieDash, you consent to the transfer of your information across borders and understand that the data protection laws in these regions may differ from those in your country of residence.',
            "We are committed to ensuring your data is protected and will take all reasonable steps to safeguard your personal information, regardless of where it is processed.",
        ],
    },
    {
        id: 6,
        title: "Changes to Terms",
        paragraphs: [
            'MovieDash reserves the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting, and it is your responsibility to review the terms regularly. Continued use of the service after changes are posted constitutes your acceptance of the updated terms.',
        ],
    },
]

export const faqsData = [
    {
        id: 1, 
        title: 'What is MovieDash?',
        paragraphs:'MovieDash is an online streaming platform that offers a wide selection of movies, TV shows, and original series. With our subscription service, you can enjoy content from various genres and categories, all accessible on multiple devices including smartphones, tablets, and smart TVs.'
    },
    {
        id: 2, 
        title: 'Will my account work outside my country ?',
        paragraphs:"Yes, your MovieDash account can be accessed from most countries. However, the content available may vary based on your location due to regional licensing agreements. If you're traveling or relocating, you may notice differences in the library of available titles."
    },
    {
        id: 3, 
        title: ' I am facing video playback issues. What do I do ?',
        paragraphs:"If you're experiencing video playback issues, try the following:",
        steps: [
            'Ensure that you have a stable internet connection.',
            'Update your browser to the latest version.',
            "Clear your browser's cache and cookies.",
            'If using the app, make sure it is up to date. If the problem persists, contact our support team for further assistance.'
        ] 
    },
    {
        id: 4,
        title: 'How can I manage notifications?',
        paragraphs: 'You can manage your notifications in your account settings. Simply log in to your MovieDash account, go to "Settings" and navigate to the "Notifications" section. From there, you can customize which alerts you wish to receive, including updates on new content, recommendations, and special offers.',
    },
    {
        id: 5,
        title: 'What benefits do I get with the packs?',
        paragraphs: 'MovieDash offers various subscription packs that provide access to exclusive content, higher video quality (up to 4K), and the ability to stream on multiple devices simultaneously. Premium packs may also include early access to new releases, ad-free viewing, and access to exclusive MovieDash Originals. Check our subscription page for more details on the available plans and benefits.',
    },
]

export const pricingPlanData = [
    {
        id: 1,
        type: 'Free',
        pricingDetails: [
            {
                id: 1,
                desc: 'Ads free movies and shows',
                isAvailable: true
            },
            {
                id: 2,
                desc: 'Watch on TV or Laptop',
                isAvailable: false
            },
            {
                id: 3,
                desc: 'MovieDash Special',
                isAvailable: false
            },
            {
                id: 4,
                desc: 'Max video quality',
                isAvailable: false
            },
        ]
    },
    {
        id: 2,
        type: 'Premium',
        originalPrice: '49',
        price: '39',
        period: '3 Month',
        pricingDetails: [
            {
                id: 1,
                desc: 'Ads free movies and shows',
                isAvailable: true
            },
            {
                id: 2,
                desc: 'Watch on TV or Laptop',
                isAvailable: true
            },
            {
                id: 3,
                desc: 'MovieDash Special',
                isAvailable: true
            },
            {
                id: 4,
                desc: 'Max video quality',
                isAvailable: true
            },
        ]
    },
    {
        id: 3,
        type: 'Basic',
        price: '19',
        period: '1 Month',
        pricingDetails: [
            {
                id: 1,
                desc: 'Ads free movies and shows',
                isAvailable: false
            },
            {
                id: 2,
                desc: 'Watch on TV or Laptop',
                isAvailable: true
            },
            {
                id: 3,
                desc: 'MovieDash Special',
                isAvailable: true
            },
            {
                id: 4,
                desc: 'Max video quality',
                isAvailable: true
            },
        ]
    },
]

export const contactFormInputs = [
    {
        id: 1,
        placeholder: 'Your Name*',
        type: 'text',
        required: true
    },
    {
        id: 2,
        placeholder: 'Last Name*',
        type: 'text',
        required: true
    },
    {
        id: 3,
        placeholder: 'Phone Number*',
        type: 'number',
        required: true,
        maxLength: 10,
    },
    {
        id: 4,
        placeholder: 'Your Email*',
        type: 'email',
        required: true
    },
    {
        id: 5,
        placeholder: 'Your Message*',
        type: 'text',
        required: true
    },
]

export const contactOptionsData = [
    {
        id: 1,
        title: 'For General Enquiries',
        phoneNumber : '+(33) 61-23-44-56-79',
        email: 'info@enquiries.com'
    },
    {
        id: 2,
        title: 'For user support',
        phoneNumber : '+(33) 67-44-34-32-38',
        email: 'support@enquiries.com'
    },
    {
        id: 3,
        title: 'For sales Support',
        phoneNumber : '+(33) 65-24-11-42-99',
        email: 'user@enquiries.com'
    },
]

export const aboutUsTeam = [
    {
        id: 1,
        job: 'CEO',
        name: 'David Johnson',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 2,
        job: 'Designer',
        name: 'Michael Brown',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 3,
        job: 'Developer',
        name: 'James Williams',
        image: 'https://images.unsplash.com/photo-1615702669705-0d3002c6801c?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 4,
        job: 'Designer',
        name: 'Robert Davis',
        image: 'https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

export const CompanyOverviewData = [
    {
        id: 1,
        count : 4,
        title: 'Branch'
    },
    {
        id: 2,
        count : 500,
        title: 'Employee'
    },
    {
        id: 3,
        count : 1000,
        title: 'Clients'
    },
]



export const mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5242.2846471348685!2d2.358303155960991!3d48.8486217990843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z2KjYp9ix2YrYsw!5e1!3m2!1sar!2sfr!4v1728233861359!5m2!1sar!2sfr'