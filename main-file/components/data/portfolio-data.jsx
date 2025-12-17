import image1 from "../../public/assets/img/portfolio/portfolio-6.jpg";
import image2 from "../../public/assets/img/portfolio/portfolio-5.jpg";
import image3 from "../../public/assets/img/portfolio/portfolio-4.jpg";
import image4 from "../../public/assets/img/portfolio/portfolio-3.jpg";
import image5 from "../../public/assets/img/portfolio/portfolio-2.jpg";
import image6 from "../../public/assets/img/portfolio/portfolio-1.jpg";

const portfolioData = [
    {        
        id: 'smart-hotel-management-system',
        title: 'Smart Hotel Management System',
        subtitle: 'Luxury Inn Hotels (UAE)',
        image: image1,
        client: 'Luxury Inn Hotels (UAE)',
        scope: 'End-to-end digital hospitality management platform',
        solution: 'Developed an IoT-enabled system integrating smart check-in, automated room controls, and digital concierge services',
        result: 'Reduced operational costs by 25%, improved guest satisfaction scores by 40%',
        category: 'hospitality'
    },
    {        
        id: 'iot-energy-monitoring',
        title: 'IoT-based Energy Monitoring Solution',
        subtitle: 'GreenTech Industries (Pakistan)',
        image: image2,
        client: 'GreenTech Industries (Pakistan)',
        scope: 'Real-time energy consumption tracking across multiple facilities',
        solution: 'Implemented LoRaWAN gateways and custom dashboards to monitor electricity, gas, and water usage',
        result: 'Enabled predictive maintenance and cut energy wastage by 18% annually',
        category: 'iot'
    },
    {        
        id: 'cloud-call-support-center',
        title: 'Cloud-Based Call Support Center',
        subtitle: 'SkyLine Hospitality Group (Saudi Arabia)',
        image: image3,
        client: 'SkyLine Hospitality Group (Saudi Arabia)',
        scope: 'Centralized call support to handle multi-language guest inquiries',
        solution: 'Built a cloud-hosted VoIP system integrated with CRM for real-time reporting and ticketing',
        result: 'Improved response time by 60%, boosted guest loyalty program enrollments',
        category: 'cloud'
    },
    {        
        id: 'ecommerce-platform',
        title: 'E-commerce Platform Development',
        subtitle: 'Local Retail Startup (Pakistan)',
        image: image4,
        client: 'Local Retail Startup (Pakistan)',
        scope: 'Complete B2C e-commerce solution with mobile-first approach',
        solution: 'Designed and deployed a secure, scalable web platform integrated with payment gateways and logistics APIs',
        result: 'Client scaled to 10,000+ monthly orders within the first year',
        category: 'web-development'
    },
    {        
        id: 'real-time-monitoring',
        title: 'Real-Time Monitoring',
        subtitle: 'Network Analysis',
        image: image5,
        client: 'TechCorp Solutions',
        scope: 'Advanced network monitoring and analysis system',
        solution: 'Implemented real-time monitoring dashboards with automated alerting',
        result: 'Improved system uptime by 35% and reduced response time by 50%',
        category: 'networking'
    },
    {        
        id: 'management-system',
        title: 'Management System',
        subtitle: 'Data Recovery',
        image: image6,
        client: 'DataSecure Inc.',
        scope: 'Comprehensive data management and recovery solution',
        solution: 'Built automated backup and recovery system with cloud integration',
        result: 'Achieved 99.9% data recovery success rate and reduced downtime by 70%',
        category: 'data-management'
    },
];

export default portfolioData;