import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCode, faUserCircle, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export const SidebarMenu = [
    {
        title: "Home",
        icon: <FontAwesomeIcon icon={faHome}/>,
        link: '/Home'
    },
    {
        title: "About",
        icon: <FontAwesomeIcon icon={faUserCircle}/>,
        link: '/About'
    },
    {
        title: "Skills",
        icon: <FontAwesomeIcon icon={faCode}/>,
        link: '/Skills'
    },
    {
        title: "Works",
        icon: <FontAwesomeIcon icon={faLaptopCode}/>,
        link: '/Works'
    },
]

export const SidebarRedes = [
    {
        title: "GitHub",
        icon: <FontAwesomeIcon icon={faGithub}/>,
        link: ''
    },
    {
        title: "Linkedin",
        icon: <FontAwesomeIcon icon={faLinkedin}/>,
        link: ''
    },
]