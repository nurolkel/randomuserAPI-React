import { AiFillGithub } from 'react-icons/ai'

const Footer = () => (
    <footer className="p-12 bg-indigo-500 flex flex-row items-center justify-center">
        <a href="https://github.com/nurolkel" className="mx-3"><AiFillGithub  className="text-white text-4xl"/></a>
        <p className="text-xl text-white  mx-3">&copy; Kelvin Nunez {new Date().getFullYear()}</p>
    </footer>
)

export default Footer;