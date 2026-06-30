import { Download, ArrowLeft, Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-24 pb-12 flex flex-col items-center bg-muted/30">
      <div className="container mx-auto px-4 w-full flex flex-col max-w-5xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <Link href="/contact" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-brand-purple mb-2 transition-colors">
              <ArrowLeft size={16} className="mr-1" /> Back to Contact
            </Link>
            <h1 className="text-3xl font-bold font-cursive text-brand-purple dark:text-primary">Curriculum Vitae</h1>
          </div>
          <a 
            href="/resume.pdf" 
            download="Lucas_Pinto_dos_Reis_CV.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-brand-purple text-white rounded-lg hover:bg-brand-purple/90 transition-colors font-medium shadow-md shadow-brand-purple/20"
          >
            <Download size={20} />
            Download PDF
          </a>
        </div>
        
        {/* CV Container */}
        <div className="flex flex-col md:flex-row w-full bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-white/10 mb-12">
          
          {/* Sidebar */}
          <div className="w-full md:w-1/3 bg-[#0a192f] text-white p-8 flex flex-col gap-8">
            <div className="flex justify-center mb-4">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/10">
                <Image 
                  src="/images/main-photo.png" 
                  alt="Lucas Pinto dos Reis" 
                  width={200} 
                  height={200} 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">Contact</h2>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Phone size={18} /> +55 11 974 763 303
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} /> lucasreis@gmail.com
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} /> São Paulo, Brazil
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin size={18} /> <a href="https://www.linkedin.com/in/lpintoreis" className="hover:underline">linkedin.com/in/lpintoreis</a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">Education</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-400">2007</p>
                  <h3 className="font-semibold text-white">MBA, Market Communications</h3>
                  <p className="text-sm text-gray-300">Escola Superior de Propaganda e Marketing</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">2005</p>
                  <h3 className="font-semibold text-white">BA, Social Communication</h3>
                  <p className="text-sm text-gray-300">USCS - Universidade Municipal de São Caetano do Sul</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">Skills</h2>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>Digital Ecosystem Architecture</li>
                <li>Executive Branding</li>
                <li>Data Analytics & Gen AI</li>
                <li>Content Pipeline Strategy</li>
                <li>Team Leadership</li>
                <li>SEO & Inbound Strategy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">Systems & Tools</h2>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>Microsoft Office Pack</li>
                <li>Adobe Premiere & Photoshop</li>
                <li>Camtasia & Trados</li>
                <li>Python & Jupyter Notebook</li>
                <li>HubSpot, Google Analytics, Meta Ads</li>
                <li>Generative AI & AI Automation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">Languages</h2>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>English - Fluent</li>
                <li>Spanish - Fluent</li>
                <li>Portuguese - Native</li>
              </ul>
            </section>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/3 p-8 md:p-12 text-gray-800 dark:text-gray-200 bg-white dark:bg-zinc-900">
            <header className="mb-10">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">Lucas Pinto dos Reis</h1>
              <p className="text-sm tracking-[0.2em] font-semibold text-gray-500 dark:text-gray-400 mb-6 uppercase">Marketing | Strategy | Content Architecture | AI</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionate marketing and communications executive with over 20 years of experience developing strategies that strengthen brands, enhance market visibility, and boost audience engagement. Proven track record of building end-to-end digital marketing architectures—from SEO, inbound marketing, and paid media to executive branding. Thrive in high-performance environments, leveraging generative AI to optimize creative workflows and maximize ROI.
              </p>
            </header>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">Work History</h2>
              
              <div className="space-y-8">
                <div>
                  <p className="text-brand-purple font-semibold">2025 - present</p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">The Law Office of Jennifer F. Novak</h3>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Head of Marketing</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    <li>Spearheaded the firm's digital marketing ecosystem, balancing high-level strategy with daily execution across social media and web channels.</li>
                    <li>Achieved a 925% increase in blog impressions, 3,900%+ LinkedIn growth, and 684% expansion in YouTube views within the first year.</li>
                    <li>Direct end-to-end content production, video scripting, and technical SEO strategy to maintain domain authority as a "department of one".</li>
                  </ul>
                </div>

                <div>
                  <p className="text-brand-purple font-semibold">2021 - 2025</p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Robert Half</h3>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Head of Marketing</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    <li>Directed global editorial calendars, SEO-optimized blogging, and executive branding for leadership, including CEO ghostwriting.</li>
                    <li>Managed corporate podcasts and internal communications while translating technical content across Portuguese, English, and Spanish.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-brand-purple font-semibold">2021 - 2025</p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Ford Motor Company</h3>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">South America Content Editor</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    <li>Managed editorial planning and digital content distribution across LATAM, ensuring brand consistency.</li>
                    <li>Reduced operating costs by {">"}R$100,000/year through internalizing video production and optimizing regional workflows.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-brand-purple font-semibold">2012 - 2015</p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">UZ Games</h3>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Franchise Owner</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    <li>Led financial and operational management, franchise sales, and loyalty strategies for a national retail chain.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-brand-purple font-semibold">2009 - 2011</p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Smart PR</h3>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Account Manager</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    <li>Developed communication strategies for diverse clients across tech, telecom, and financial sectors.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-brand-purple font-semibold">2003 - 2009</p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Earlier Experience</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 mt-2">
                    <li>Roles at Band News FM, Jovem Pan, and others.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        
      </div>
    </main>
  );
}
