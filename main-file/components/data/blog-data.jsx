import image1 from "../../public/assets/img/blog/blog-1.jpg";
import image2 from "../../public/assets/img/blog/blog-2.jpg";
import image3 from "../../public/assets/img/blog/blog-3.jpg";
import image4 from "../../public/assets/img/blog/blog-4.jpg";
import image5 from "../../public/assets/img/blog/blog-5.jpg";
import image6 from "../../public/assets/img/blog/blog-6.jpg";
import image7 from "../../public/assets/img/blog/blog-7.jpg";
import avatar1 from "../../public/assets/img/avatar/avatar-1.jpg";
import avatar2 from "../../public/assets/img/avatar/avatar-2.jpg";
import avatar3 from "../../public/assets/img/avatar/avatar-3.jpg";
import avatar4 from "../../public/assets/img/avatar/avatar-4.jpg";
import avatar5 from "../../public/assets/img/avatar/avatar-5.jpg";
import avatar6 from "../../public/assets/img/avatar/avatar-6.jpg";
import avatar7 from "../../public/assets/img/avatar/avatar-7.jpg";

const blogData = [
    {
        number: '01',
        id: 'transforming-hospitality-management-with-it-services',
        date: '15',
        comment: '8',
        title: 'Transforming Hospitality Management with IT Services',
        image: image1,
        avatar: avatar1,
        name: 'Mian Afzaal',
        position: 'IT Solutions Expert',
        category: 'Hospitality Technology',
        excerpt: 'The hospitality industry is evolving faster than ever, with technology reshaping how hotels, resorts, and property managers operate.',
        content: {
            introduction: 'The hospitality industry is evolving faster than ever, with technology reshaping how hotels, resorts, and property managers operate. In today\'s competitive landscape, guest expectations are higher, and seamless digital experiences have become the norm. This is where IT services for hospitality management play a vital role — bridging the gap between comfort, efficiency, and innovation.',
            whyItMatters: 'Hospitality is not just about offering rooms or services; it\'s about creating memorable guest experiences. Modern travelers demand speed, personalization, and convenience. IT services empower hotels to streamline day-to-day operations, enhance guest satisfaction, improve communication and connectivity, and drive business growth through automation and insights.',
            keyServices: [
                {
                    title: 'Property Management Systems (PMS)',
                    description: 'A robust PMS helps hotels manage reservations, check-ins, check-outs, billing, and reporting — all from a single platform. Customizable and user-friendly systems enable smoother operations and better decision-making.'
                },
                {
                    title: 'IT Infrastructure & Networking',
                    description: 'Reliable internet, secure networks, and integrated systems are the backbone of any modern hotel. From guest Wi-Fi to internal communication tools, IT infrastructure ensures connectivity at every level.'
                },
                {
                    title: 'IoT Solutions for Smart Hospitality',
                    description: 'IoT technology brings intelligence to hotel operations — from smart room controls (lighting, AC, keyless entry) to predictive maintenance that reduces downtime. It not only elevates guest experiences but also lowers operational costs.'
                },
                {
                    title: 'Hospitality Digitalization Services',
                    description: 'Digital transformation enables hotels to adopt online booking systems, mobile apps, digital payment gateways, and virtual concierge services, making interactions faster and more convenient for guests.'
                },
                {
                    title: 'Data Security & Cloud Solutions',
                    description: 'Protecting guest data is crucial. Cloud-based solutions and cybersecurity services safeguard sensitive information while enabling easy access to business insights and reports from anywhere.'
                }
            ],
            benefits: {
                hotels: 'Increased efficiency, cost savings, smarter management, and stronger brand reputation.',
                guests: 'Personalized services, faster check-ins, seamless digital experiences, and enhanced comfort.'
            },
            future: 'The future belongs to hotels that embrace innovation. AI-powered chatbots, data-driven personalization, and fully automated processes will become standard. By adopting the right IT services today, hotels can stay ahead of the curve and meet tomorrow\'s guest expectations with confidence.'
        }
    },
    {
        number: '02',
        id: 'iot-solutions-for-smart-business-operations',
        date: '12',
        comment: '5',
        title: 'IoT Solutions for Smart Business Operations',
        image: image2,
        avatar: avatar2,
        name: 'Ahmed Hassan',
        position: 'IoT Specialist',
        category: 'IoT Technology',
        excerpt: 'Discover how IoT solutions are revolutionizing business operations across industries.',
        content: {
            introduction: 'The Internet of Things (IoT) is transforming how businesses operate, offering unprecedented levels of connectivity, automation, and data-driven insights.',
            keyBenefits: 'IoT solutions provide real-time monitoring, predictive maintenance, energy optimization, and enhanced customer experiences.',
            applications: 'From smart buildings to connected manufacturing, IoT is reshaping business operations.',
            future: 'The future of IoT lies in AI integration and edge computing for faster, more intelligent decision-making.'
        }
    },
    {
        number: '03',
        id: 'cloud-computing-solutions-for-modern-businesses',
        date: '18',
        comment: '6',
        title: 'Cloud Computing Solutions for Modern Businesses',
        image: image3,
        avatar: avatar3,
        name: 'Fatima Ali',
        position: 'Cloud Architect',
        category: 'Cloud Technology',
        excerpt: 'Explore how cloud computing is enabling businesses to scale, innovate, and compete in the digital age.',
        content: {
            introduction: 'Cloud computing has become the backbone of modern business operations, offering scalability, flexibility, and cost-effectiveness.',
            benefits: 'Reduced infrastructure costs, improved collaboration, enhanced security, and global accessibility.',
            services: 'Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS) solutions.',
            future: 'Edge computing and hybrid cloud models are shaping the future of cloud technology.'
        }
    },
    {
        number: '04',
        id: 'cybersecurity-best-practices-for-businesses',
        date: '20',
        comment: '4',
        title: 'Cybersecurity Best Practices for Businesses',
        image: image4,
        avatar: avatar4,
        name: 'Omar Khan',
        position: 'Security Expert',
        category: 'Cybersecurity',
        excerpt: 'Learn essential cybersecurity practices to protect your business from evolving digital threats.',
        content: {
            introduction: 'In today\'s digital landscape, cybersecurity is not optional—it\'s essential for business survival and growth.',
            threats: 'Ransomware, phishing attacks, data breaches, and insider threats are among the top concerns.',
            practices: 'Regular security audits, employee training, multi-factor authentication, and incident response planning.',
            future: 'AI-powered security tools and zero-trust architecture are becoming industry standards.'
        }
    },
    {
        number: '05',
        id: 'mobile-app-development-trends-2024',
        date: '22',
        comment: '7',
        title: 'Mobile App Development Trends 2024',
        image: image5,
        avatar: avatar5,
        name: 'Aisha Malik',
        position: 'Mobile Developer',
        category: 'Mobile Development',
        excerpt: 'Stay ahead with the latest mobile app development trends shaping the industry in 2024.',
        content: {
            introduction: 'Mobile app development continues to evolve rapidly, with new technologies and user expectations driving innovation.',
            trends: 'AI integration, 5G optimization, cross-platform development, and enhanced user experience design.',
            technologies: 'React Native, Flutter, Swift, and Kotlin are leading the development landscape.',
            future: 'Augmented reality, voice interfaces, and progressive web apps are emerging trends.'
        }
    },
    {
        number: '06',
        id: 'data-analytics-driving-business-intelligence',
        date: '25',
        comment: '9',
        title: 'Data Analytics Driving Business Intelligence',
        image: image6,
        avatar: avatar6,
        name: 'Hassan Sheikh',
        position: 'Data Analyst',
        category: 'Data Analytics',
        excerpt: 'Discover how data analytics is transforming business decision-making and driving growth.',
        content: {
            introduction: 'Data analytics has become a cornerstone of modern business strategy, enabling data-driven decision-making.',
            benefits: 'Improved customer insights, operational efficiency, predictive analytics, and competitive advantage.',
            tools: 'Business intelligence platforms, machine learning algorithms, and real-time analytics dashboards.',
            future: 'AI-powered analytics and automated insights are revolutionizing the field.'
        }
    },
    {
        number: '07',
        id: 'building-modern-websites-with-nextjs-complete-guide',
        date: '30',
        comment: '12',
        title: 'Building Modern Websites with Next.js: A Complete Guide',
        image: image7,
        avatar: avatar7,
        name: 'Mian Afzaal',
        position: 'Full Stack Developer',
        category: 'Web Development',
        excerpt: 'In today\'s digital world, businesses and individuals need fast, scalable, and user-friendly websites to make a lasting impact online.',
        content: {
            introduction: 'In today\'s digital world, businesses and individuals need fast, scalable, and user-friendly websites to make a lasting impact online. While there are many frameworks available, Next.js has quickly become one of the most popular choices for developers. Built on top of React, it provides powerful tools for creating modern websites and web applications with enhanced performance, SEO capabilities, and developer experience.',
            whyChooseNextjs: [
                {
                    title: 'Performance-Driven',
                    description: 'Next.js uses server-side rendering (SSR) and static site generation (SSG), ensuring lightning-fast page loads and smooth navigation. This makes websites built with Next.js not only user-friendly but also search engine friendly.'
                },
                {
                    title: 'SEO Optimization',
                    description: 'Unlike traditional React apps, Next.js pre-renders content, giving search engines complete HTML pages instead of JavaScript-heavy code. This boosts your website\'s visibility and ranking on Google.'
                },
                {
                    title: 'Scalability',
                    description: 'Whether you\'re building a small portfolio or a large-scale e-commerce platform, Next.js scales effortlessly. It supports APIs, dynamic routing, and integrations with CMS platforms like WordPress, Strapi, or Sanity.'
                },
                {
                    title: 'Built-in Features',
                    description: 'Image optimization, file-based routing, API routes, and incremental static regeneration (ISR). These features reduce the need for additional configurations and speed up development.'
                },
                {
                    title: 'Developer Experience',
                    description: 'With hot reloading, TypeScript support, and a rich ecosystem of plugins, developers enjoy a smooth workflow when building with Next.js.'
                }
            ],
            stepsToBuild: [
                {
                    step: '1',
                    title: 'Set Up Your Next.js Project',
                    description: 'Install Node.js and create a new project using: npx create-next-app my-website, cd my-website, npm run dev. This sets up your development environment and runs your site locally.'
                },
                {
                    step: '2',
                    title: 'Create Pages',
                    description: 'Next.js follows a file-based routing system. Any file you add in the pages folder automatically becomes a route. For example: pages/index.js → Home Page, pages/about.js → About Page.'
                },
                {
                    step: '3',
                    title: 'Add Components',
                    description: 'Reusable UI components like headers, footers, and buttons can be placed inside a components folder for clean, modular development.'
                },
                {
                    step: '4',
                    title: 'Style Your Website',
                    description: 'Next.js supports multiple styling options: CSS modules, Tailwind CSS, Styled-components. Choose the one that best fits your project.'
                },
                {
                    step: '5',
                    title: 'Optimize Images and Assets',
                    description: 'Use the built-in <Image /> component for automatic image resizing, compression, and lazy loading.'
                },
                {
                    step: '6',
                    title: 'Fetch Data',
                    description: 'Next.js provides different methods for data fetching: getStaticProps (Static Generation), getServerSideProps (Server-side Rendering), API routes for dynamic backend logic.'
                },
                {
                    step: '7',
                    title: 'Deploy Your Website',
                    description: 'One of the easiest ways to deploy a Next.js site is through Vercel, the creators of Next.js. You can also deploy to platforms like Netlify, AWS, or DigitalOcean.'
                }
            ],
            useCases: [
                'Corporate Websites – SEO-friendly and fast loading.',
                'E-Commerce Stores – Scalable, with dynamic product pages.',
                'Portfolios & Blogs – Easy setup with Markdown or headless CMS.',
                'Dashboards & SaaS Products – Interactive, real-time data handling.'
            ],
            finalThoughts: 'Next.js has revolutionized how developers build websites by combining the best of both static and dynamic worlds. Whether you\'re a business owner seeking an online presence or a developer looking for efficiency, Next.js offers speed, flexibility, and reliability.'
        }
    },
];

export default blogData;