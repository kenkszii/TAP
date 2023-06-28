import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
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
    href: "https://github.com/WinifredOgbeiwi"
  },
  {
    id: 2,
    child: (
      <>
        Twitter
        <FaTwitter size={20} />
      </>
    ),
    href: "https://twitter.com/winifredogbeiwi",
  },
  {
    id: 3,
    child: (
      <>
        LinkedIn
        <FaLinkedin size={20} />
      </>
    ),
    href: "https://www.linkedin.com/in/winifredogbeiwi/",
  },
  {
    id: 4,
    child: (
      <>
        Email
        <MdMailOutline size={20} />
      </>
    ),
    href: "mailto:imadeogbeiwi@gmail.com",
  },
];
export default SmediaData