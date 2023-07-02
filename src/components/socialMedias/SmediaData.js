import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
const SmediaData = [
  {
    id: 1,
    child: (
      <>
        Github
        <FaGithub size={20} />
      </>
    ),
    href: "https://github.com/kenkszii"
  },
  {
    id: 2,
    child: (
      <>
        Twitter
        <FaTwitter size={20} />
      </>
    ),
    href: "https://twitter.com/kenkszii1",
  },
  {
    id: 3,
    child: (
      <>
        LinkedIn
        <FaLinkedin size={20} />
      </>
    ),
    href: "https://www.linkedin.com/in/theophilus-ayano-0196b0148",
  },
  {
    id: 4,
    child: (
      <>
        Email
        <MdMailOutline size={20} />
      </>
    ),
    href: "mailto:kenkszii@gmail.com",
  },
  {
    id: 5,
    child: (
      <>
        Whatsapp
        <FaWhatsapp size={20} />
      </>
    ),
    href: "https://wa.me/08181659815",
  },
];
export default SmediaData