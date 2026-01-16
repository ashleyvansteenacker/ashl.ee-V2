import Image from 'next/image';
import ProjectCard from '@/app/components/ProjectCard';
import catMascot from '@/public/tfx-logo.svg';
import FeaturedWorkCarousel from '@/app/components/FeaturedWorkCarousel';
import HapticLink from './components/HapticLink';


const projects = [
  {
    title: 'Public Building Ghent',
    description:
  'A discreet media wall installation for the City of Ghent (Belgium), integrating dynamic visuals into the architecture.',
    tags: ['Madrix', 'Art-Net', 'SPI', 'Neonflex'],
    client:['Vivalyte', 'Neopaul'],
    link: 'https://www.kraaijvanger.nl/nl/projecten/stadskantoor-gent',
    image: '/projects/gent.jpg',
  },
  {
    title: 'Amsterdam Project',
    description:
  'Implemented DMX connectivity and lighting control for a neon installation as part of a new concept in Amsterdam.',
    tags: ['DMX-512', 'CueCore2', 'B-Station2'],
     client:['Vivalyte', 'Orbit Lighting'],
    link: 'https://www.tripadvisor.co.uk/Attraction_Review-g188590-d27797071-Reviews-The_All_Out_Amsterdam-Amsterdam_North_Holland_Province.html',
    image: '/projects/ams.jpg',
  },
  {
    title: 'Brussels Art Project ',
    description:
  'A collaboration with an artist where audio and lighting came together in an immersive installation.',
    tags: ['SPI', 'Video', 'Led Strip Studio', 'SPI-Matrix'],
     client:['Vivalyte', 'Agnes Guillaume'],
    link: 'https://www.instagram.com/p/Csn7EM0tho-/?hl=fr&img_index=2 ',
    image: '/projects/bru.jpg',
  },
  {
    title: 'Airport Project',
    description:
  'Designed and implemented a large scale LED facade installation to create dynamic lighting effects and enhance the passenger experience.',
    tags: ['SPI', 'Led Strip Studio', 'SPI Matrix'],
     client:['Vivalyte', 'Neopaul'],
    link: 'https://www.facebook.com/watch/?v=1047767099225140',
     image: '/projects/airport.jpg',
  },
  {
    title: 'Movement Sensor',
    description:
  'Built a custom motion sensing system that triggers lighting scenes in real time to enhance interactivity.',
    tags: ['ESP32', 'OSC', 'POET Creator', 'Wi-Fi'],
     client:['Vivalyte'],
    link: '',
    image: '/projects/sensor.png',
  },
    {
    title: 'Branding GSK',
    description:
  'GSK wanted a unique lighting installation to represent their brand values at a major event. I developed a custom LED solution that synchronized with their presentations.',
    tags: ['SPI', 'PIR', 'Madrix', 'DigiDot'],
    client:['Vivalyte', 'Praxis'],
    link: 'https://www.instagram.com/p/C0wA3X4LLRI/?hl=af',
    image: '/projects/gsk.jpg',
  },
    {
    title: 'Branding AVA',
    description:
'AVA needed an eye catching sign to draw attention at their shops. I designed and implemented the LED control system, including a remote access solution for easy updates.',
    tags: ['DMX-512', 'Led Strip Studio', 'Tailscale', '4G / LTE'],
    client:['Vivalyte', 'Neopaul'],
    link: 'https://www.linkedin.com/posts/neopaul-signs_neopaulsigns-lichtreclame-gevelbekleding-activity-7284507005157847040-blCg/?originalSubdomain=nl',
    image: '/projects/ava.jpg',
  },
      {
    title: 'Press the button',
    description:
  'An interactive installation where users could press a button to trigger a dynamic light show. I developed the controls to create a seamless experience.',
    tags: ['DMX-SPI', 'Led Strip Studio', 'Video', 'Trigger'],
    client:['Vivalyte', 'Artiscreen'],
    link: 'https://www.facebook.com/watch/?v=952296560157213',
    image: '/projects/arti.png',
  },
        {
    title: 'Dynamic Backdrop',
    description:
'Installation and configuration of a dynamic backdrop (low resolution LED screen) for an exhibition booth, enhancing visual appeal and attracting visitors.',
    tags: ['LED Wall', 'Colorlight', 'Video', 'Madrix'],
    client:['Vivalyte'],
    link: 'https://www.instagram.com/p/CjM8ZVQMCOK/?img_index=1',
    image: '/projects/dyn.png',
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-background min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
<div className="mb-12 cat-float cat-glow">
            <Image
              src={catMascot}
              alt="Cyber Cat Mascot"
              width={400}
              height={400}
              className="mx-auto"
              sizes="(max-width: 768px) 90vw, 400px"
              priority
            />
          </div>

          <div className="circuit-line w-64 mx-auto mb-8"></div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Ashley Van Steenacker
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#FF9546]">
            Creative Technologist
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 mb-16 font-light tracking-wide">
            Designing Things That Glow
          </p>

          <div className="circuit-line w-64 mx-auto mb-16"></div>

<HapticLink
  href="#work"
  className="glow-btn inline-block px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all"
  haptic="click"
>
  View My Work <i className="fas fa-arrow-right ml-2"></i>
</HapticLink>

        </div>
      </section>

        {/* Featured Work Section */}
<section id="work" className="py-12 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="section-divider"></div>

    <div className="flex items-end justify-between gap-4 mb-12">
      
      <h2 className="text-4xl md:text-5xl font-bold">Some of our past projects</h2>



      <span className="text-sm text-gray-400">Scroll →</span>
    </div>
          <p className="text-sm text-gray-500">
  All projects shown are collaborative efforts with clients, artists, and studios.
</p>
<br />

    <FeaturedWorkCarousel projects={projects} />
  </div>
</section>



      {/* About Section */}
      <section id="about" className="py-24 px-6">
         <div className="max-w-6xl mx-auto">
    <div className="section-divider"></div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">About</h2>

          <div className="accent-border-left">
<p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
  I design and build things with light, electronics, and code.
  They don’t just work. They <span className="text-[#FF9546]">glow</span>.
</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
    <div className="section-divider"></div>

          <div className="accent-border-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Get In Touch</h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
          

              <div>
                <h3 className="text-xl font-semibold mb-6 text-[#FF9546]">Social</h3>
                <div className="space-y-4">
                  <a
                    href="https://instagram.com/ashleyslab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item flex items-center space-x-3 text-gray-300"
                  >
                    <i className="fab fa-instagram text-2xl"></i>
                    <span className="text-lg">@ashleyslab</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#FF9546]">
                Send a Message
              </h3>
              <form
                action="https://formspree.io/f/xwvvveba"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input w-full px-4 py-3 rounded-lg text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input w-full px-4 py-3 rounded-lg text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="form-input w-full px-4 py-3 rounded-lg text-white resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="glow-btn px-8 py-3 rounded-lg text-white font-semibold text-lg transition-all"
                >
                  Send Message <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
