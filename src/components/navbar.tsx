import MyLogo from './img/logo';

const links = [
  { href: '/hero', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/certifications', label: 'Certifications'},
  { href: '/projects', label: 'Projects' },
]

export default function Navbar() {
  return (
    <nav className="shadow-md h-20 fixed w-full backdrop-blur-xl text-white flex items-center justify-around mix-blend-difference">
      <div>
        <MyLogo />
      </div>
      <div className='mix-blend-difference'>
        <ul className="flex gap-4 mix-blend-difference">
          {links.map((link) => (
            <li key={link.href} className=''>
              <a href={link.href} className='text-lg font-medium hover:text-blue-500 transition-all duration-300 hover:drop-shadow-lg'>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className='bg-white font-medium hover:bg-slate-100 w-32 h-12 rounded-lg text-black hover:shadow-lg transition-all duration-300 border-2 border-black'>
          Contact Me
        </button>
      </div>
    </nav>
  )
}