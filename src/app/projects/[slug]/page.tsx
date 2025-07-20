import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

// Project data with the 5 categories requested
const projectsData = [
  {
    id: 1,
    title: 'Foray into Product Management',
    description: 'My journey transitioning into product management in the fintech industry.',
    category: 'Career',
    image: '/placeholder-1.jpg',
    slug: 'product-management',
    fullDescription: `
      <p>This project details my journey transitioning into product management within the fintech industry. After several years in financial analysis, I identified an opportunity to bridge the gap between technical development and business needs.</p>
      
      <p>The transition involved:</p>
      <ul>
        <li>Completing specialized product management certification</li>
        <li>Taking on hybrid roles that combined financial expertise with product development</li>
        <li>Building a deep understanding of user needs in the hedge fund servicing space</li>
        <li>Developing frameworks for prioritizing features based on business impact</li>
      </ul>
      
      <p>This career pivot allowed me to leverage my financial domain expertise while developing new skills in product strategy, user experience design, and agile methodologies.</p>
    `,
    date: 'January 2018',
    outcomes: [
      'Successfully led the development of a new financial reporting platform',
      'Reduced time-to-market for new features by 40%',
      'Implemented user-centered design processes across the organization'
    ]
  },
  {
    id: 2,
    title: 'Half Marathons',
    description: "4 half marathons (Pune ×1, Hyderabad ×3). Two 10Ks started it all. Fifth half in Aug 2025—chasing sub‑2:10 with data‑driven training, a Garmin Forerunner, Asics footwear, structured fueling, and a long‑term runway toward a Hyderabad full and the Ladakh marathon.",
    category: 'Fitness',
    image: '/local_half_marathon/WhatsApp Image 2025-07-20 at 14.21.28.jpeg',
    slug: 'half-marathons',
    fullDescription: `
      <h2>Half Marathons – Building Endurance, One Thoughtful Step at a Time</h2>
      <div class="mb-6">
        <img src="/local_half_marathon/WhatsApp Image 2025-07-20 at 14.21.28.jpeg" alt="Half Marathon" class="max-w-md mx-auto rounded-lg shadow-md mb-4" style="max-height: 300px; object-fit: cover; width: auto;" />
      </div>
      <p>When I first laced up with intent, I wasn't chasing finish lines—I was chasing a feeling: structure, resilience, that quiet sharpening of mind that distance running gifts you. Before I ever committed to 21.1 km, I'd completed two 10K races—small personal proofs that I could keep pushing the boundary of "comfortable." Those 10Ks were gateways; they made the idea of a half marathon feel less mythical and more like an earned next chapter.</p>
      
      <div class="my-6">
        <img src="/local_half_marathon/WhatsApp Image 2025-07-20 at 14.21.28 (1).jpeg" alt="Half Marathon Training" class="max-w-md mx-auto rounded-lg shadow-md mb-4" style="max-height: 300px; object-fit: cover; width: auto;" />
      </div>
      
      <p>What followed has been four half marathons so far—one in Pune and three on the rolling, humid roads of Hyderabad. Each one taught me a slightly different lesson about pacing, fueling, and patience. The first was pure adrenaline and stubbornness. The second: a lesson in respecting heat and hydration. The third: where incremental training discipline began to show up in negative splits. The fourth: a near-miss at a personal best that crystallized my next target.</p>
      
      <p>Now I'm approaching my 5th half marathon in Hyderabad in August 2025, eyes set on beating my current PB of 2h 10m. The margin I want isn't just time shaved off; it's efficiency gained—smoother cadence, steadier heart rate, smarter nutrition timing.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">The Shift From Casual Runner To Intentional Athlete</h3>
      <p>There's a cultural backdrop to this journey. I was struck by an anecdote from the early days of recreational running—how people once mocked runners on the road. That contrast energizes me: what was once fringe is now a personal framework for growth. Running, for me, is not escape; it's deliberate design—an endurance laboratory that echoes how I build products: iterate, instrument, improve.</p>
      
      <div class="my-6">
        <img src="/local_half_marathon/WhatsApp Image 2025-07-20 at 14.21.28 (2).jpeg" alt="Running Gear" class="max-w-md mx-auto rounded-lg shadow-md mb-4" style="max-height: 300px; object-fit: cover; width: auto;" />
      </div>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Gear & Data: Quiet Enablers</h3>
      <p>To elevate the next phase, I've invested in a Garmin Forerunner—my unobtrusive performance dashboard. It's less a watch and more a feedback loop: cadence alerts nudging me away from overstriding, wrist‑based heart rate guiding zone discipline, structured workouts syncing seamlessly. Paired with Asics performance shoes (rotated before outsole fatigue sets in) and a minimalist running belt that stows gels, salt tabs, and a soft-flask, I've reduced micro‑frictions that used to sap focus. Little things matter: quick‑dry technical socks to prevent hotspots, a simple pre‑run check (battery, hydration, laces), and mid‑run gels timed around 7–8 km and 14–15 km marks. These aren't gadgets for vanity; they're levers for consistency.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Training Texture</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Base Weeks: Aerobic volume at conversational pace (true easy pace discipline—no ego pacing).</li>
        <li>Quality Sessions: One threshold or cruise-interval session (e.g., 3×10 min at comfortably hard effort) and one progression / fast finish long run.</li>
        <li>Strength & Mobility: Short posterior chain activation twice weekly to keep knees and calves honest.</li>
        <li>Recovery Intelligence: Listening to HRV & resting heart rate trends from the watch; adjusting when metrics flag cumulative fatigue.</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Inspiration & Mindset</h3>
      <p>From curated passages about the early "outsider" nature of running to community chat snippets where seasoned runners stress fundamentals—good shoes, hydration, restraint—I draw a blend of historical respect and practical wisdom. There's also a shelf companion now: Born to Run (your edition / author reference)—a reminder that biomechanics, cultural traditions, and joy can coexist in modern training.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Why It Matters</h3>
      <p>Distance running has become a complementary operating system to my professional life in product management: hypothesis (training block), instrumentation (watch metrics), iteration (adjust workouts), retrospectives (race debriefs), and long-term roadmap (full & high-altitude marathon objectives). It is structured serendipity—a space where discipline unlocks flow.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">What's Next</h3>
      <p>Between now and August: sharpen tempo efficiency, maintain injury‑free consistency, and preserve the joy factor. Because ultimately the chronograph matters—but the real ROI is identity compounding over miles.</p>
    `,
    date: 'March 2020 - Present',
    outcomes: [
      'Completed 4 half marathons across Pune and Hyderabad',
      'Current personal best of 2h 10m, targeting sub-2:10 in August 2025',
      'Developed data-driven training approach with structured fueling strategy',
      'Long-term goal: Full marathon in Hyderabad and Ladakh marathon'
    ]
  },
  {
    id: 3,
    title: 'Biocon Trade',
    description: 'Analysis and execution of a profitable investment in Biocon.',
    category: 'Finance',
    image: '/placeholder-3.jpg',
    slug: 'biocon-trade',
    fullDescription: `
      <p>This project showcases my approach to fundamental analysis and investment decision-making in the pharmaceutical sector, specifically focusing on Biocon, a leading biopharmaceutical company in India.</p>
      
      <p>The investment process included:</p>
      <ul>
        <li>Comprehensive industry analysis of the biopharmaceutical sector</li>
        <li>Detailed financial statement analysis and valuation modeling</li>
        <li>Assessment of Biocon's R&D pipeline and regulatory approvals</li>
        <li>Monitoring of global healthcare trends and their impact on the company</li>
      </ul>
      
      <p>The investment thesis was based on Biocon's strong position in biosimilars and the expanding global market for affordable biological medications.</p>
    `,
    date: 'September 2019 - June 2021',
    outcomes: [
      'Achieved 78% return on investment over a 22-month holding period',
      'Successfully timed entry during market undervaluation',
      'Developed a repeatable framework for pharmaceutical stock analysis'
    ]
  },
  {
    id: 4,
    title: 'Career Advancement',
    description: 'Key milestones and strategies that helped advance my career in fintech.',
    category: 'Career',
    image: '/placeholder-4.jpg',
    slug: 'career-advancement',
    fullDescription: `
      <p>This project outlines the strategic approach I took to advance my career in the fintech industry, moving from an entry-level position to a senior product management role.</p>
      
      <p>Key strategies included:</p>
      <ul>
        <li>Identifying and filling critical skill gaps through targeted learning</li>
        <li>Building a professional network across different departments and companies</li>
        <li>Taking on high-visibility projects that demonstrated leadership capabilities</li>
        <li>Developing expertise in niche areas of hedge fund servicing technology</li>
      </ul>
      
      <p>This methodical approach to career development allowed me to progress rapidly while building a reputation as a subject matter expert in financial technology.</p>
    `,
    date: 'June 2015 - Present',
    outcomes: [
      'Promoted three times in five years',
      'Led cross-functional teams on major product launches',
      'Recognized with industry awards for product innovation'
    ]
  },
  {
    id: 5,
    title: 'Fitness Journey',
    description: 'My personal transformation through fitness and healthy lifestyle choices.',
    category: 'Fitness',
    image: '/placeholder-5.jpg',
    slug: 'fitness-journey',
    fullDescription: `
      <p>This project documents my personal transformation through fitness and adopting a healthier lifestyle, which began as a response to work-related stress and sedentary habits.</p>
      
      <p>The journey involved:</p>
      <ul>
        <li>Establishing a consistent exercise routine combining strength training and cardio</li>
        <li>Transforming dietary habits with a focus on whole foods and proper nutrition</li>
        <li>Implementing stress management techniques and prioritizing sleep</li>
        <li>Setting progressive fitness goals to maintain motivation</li>
      </ul>
      
      <p>Beyond physical changes, this journey significantly improved my mental clarity, energy levels, and overall productivity in both personal and professional contexts.</p>
    `,
    date: 'January 2019 - Present',
    outcomes: [
      'Lost 15kg and reduced body fat percentage from 28% to 15%',
      'Improved work productivity and mental focus',
      'Established sustainable habits that accommodate a busy professional schedule'
    ]
  },
];

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  
  return {
    title: `${project.title} | Abhijit Khadilkar`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 bg-gradient-to-r from-primary to-secondary">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
        </div>
      </div>
      
      <div className="container-custom py-12">
        {/* Back Button */}
        <Link 
          href="/#projects"
          className="inline-flex items-center text-primary hover:underline mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back to All Projects
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Project Info */}
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {project.category}
            </span>
            <span className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              {project.date}
            </span>
          </div>
          
          {/* Project Description */}
          <div 
            className="prose max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: project.fullDescription }}
          />
          
          {/* Project Outcomes */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Outcomes</h2>
            <ul className="space-y-2">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Related Projects - Placeholder */}
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-4">Related Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projectsData
                .filter(p => p.category === project.category && p.id !== project.id)
                .slice(0, 3)
                .map(relatedProject => (
                  <Link 
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.slug}`}
                    className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-bold text-secondary mb-2">{relatedProject.title}</h3>
                    <p className="text-gray-600 text-sm">{relatedProject.description}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
