import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function Social(){
    return<div className="absolute pt-5 inset-0 flex justify-center items-end mb-24 ">
         <div className="flex space-x-12 ">
         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x"  className="text-blue-500/40  hover:text-blue-700  rounded-full"  />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" className="text-blue-500/40  hover:text-blue-700  rounded-full" />
        </a>
        <a href="https://www.instagram.com/nary__09" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" className="text-orange-500/40  hover:text-blue-700  rounded-full" />
        </a>
        <a href="https://www.linkedin.com/in/balda-naresh-4a4672259/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-blue-500/40  hover:text-blue-700  rounded-full" />
        </a>
    </div>
    </div>
}