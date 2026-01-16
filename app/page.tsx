import Image from 'next/image';
import ProjectCard from '@/app/components/ProjectCard';
import catMascot from '@/public/tfx-logo.svg';
import FeaturedWorkCarousel from '@/app/components/FeaturedWorkCarousel';
import HapticLink from './components/HapticLink';


const projects = [
  {
    title: 'Public Bulding Ghent',
    description:
  'A discreet media wall installation for the City of Ghent (Belgium), integrating dynamic visuals into the architecture.',
    tags: ['Madrix', 'Art-Net', 'SPI', 'Neonflex'],
    link: '',
    image: '/projects/gent.jpg',
  },
  {
    title: 'Amsterdam project',
    description:
  'Implemented DMX connectivity and lighting control for a neon installation as part of a new concept in Amsterdam.',
    tags: ['DMX-512', 'CueCore2', 'B-Station2'],
    link: '',
    image: '/projects/ams.jpg',
  },
  {
    title: 'Brussels Art Project ',
    description:
  'A collaboration with an artist where audio and lighting came together in an immersive installation.',
    tags: ['SPI', 'Video', 'Led Strip Studio', 'SPI-Matrix'],
    link: '',
    image: '/projects/bru.jpg',
  },
  {
    title: 'Airport project',
    description:
  'Designed and implemented a large-scale LED facade installation to create dynamic lighting effects and enhance the passenger experience.',
    tags: ['SPI', 'Led Strip Studio', 'SPI Matrix'],
    link: '',
     image: '/projects/airport.jpg',
  },
  {
    title: 'Movement Sensor',
    description:
  'Built a custom motion-sensing system that triggers lighting scenes in real time to enhance interactivity.',
    tags: ['ESP32', 'OSC', 'POET Creator', 'Wi-Fi'],
    link: '',
    image: '/projects/sensor.png',
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
              style={{ maxWidth: '90vw', height: 'auto' }}
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
      <h2 className="text-4xl md:text-5xl font-bold">Featured Work</h2>
      <span className="text-sm text-gray-400">Scroll →</span>
    </div>

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
  I&apos;m a creative technologist who thrives at the intersection of design and code.
  I craft digital experiences that don&apos;t just work. They <span className="text-[#FF9546]">glow</span>.
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
