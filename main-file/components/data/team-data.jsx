import ceoImg from "../../public/assets/img/team/ceo.jpeg";
import ameerHamzaImg from "../../public/assets/img/team/hamza.jpg";
import imamfaheemImg from "../../public/assets/img/team/imamfaheem.jpg";
import harisShahImg from "../../public/assets/img/team/haris.png";

const teamData = [
    {
        id: 'mian-afzaal',
        image: ceoImg,
        name: 'Mian Afzaal',
        position: 'CEO',
        mail: 'mianafzaal17@gmail.com',
        phone: '+125 (564) 656 156',
        category: 'founder',
        social_link: [
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fab fa-twitter"></i> },
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
        ],
    },
    {
        id: 'Ameer-Hamza',
        image: ameerHamzaImg,
        name: 'Ameer Hamza',
        position: 'Software Enginner II',
        mail: 'ameerhamza9126@gmail.com',
        phone: '+923129240538',
        category: 'Software Enginner',
        social_link: [
            { link: 'https://github.com/ameer-hamza26', target: '_blank', icon: <i className="fab fa-github"></i> },
            { link: 'https://linkedin.com/in/ameer-hamza-a9169b261', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://facebook.com/ameer.hamza.810542', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
        ],
    },
    {
        id: 'imam-faheem',
        image: imamfaheemImg,
        name: 'Imam Faheem',
        position: 'Senior Software Enginner & Architect',
        mail: 'imamfaheem768@gmail.com',
        phone: '+923312878148',
        category: 'software enginner',
        social_link: [
            { link: 'https://github.com/Imam-Faheem', target: '_blank', icon: <i className="fab fa-github"></i> },
            { link: 'https://linkedin.com/in/imamfaheem', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://facebook.com/ImamFaheemKhan', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
        ],
    },
    {
        id: 'haris-shah',
        image: harisShahImg,
        name: 'Haris Shah',
        position: 'Full Stack Developer',
        mail: 'harisshah@gmail.com',
        phone: '+125 (231) 562 156',
        category: 'software enginner',
        social_link: [
            { link: 'https://github.com', target: '_blank', icon: <i className="fab fa-github"></i> },
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
        ],
    }
];

export default teamData;
    