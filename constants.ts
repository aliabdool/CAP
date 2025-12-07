
import { Member, ForumTopic, Resource, Service, Project } from './types';

export const ISLANDS = ['Mauritius', 'Seychelles', 'Réunion', 'Madagascar', 'Comoros', 'Mayotte'];

export const SERVICES: Service[] = [
  {
    id: 'certifications',
    title: 'Sustainability Certifications',
    icon: 'Award',
    description: 'Expert guidance to achieve global recognition. We manage the entire audit preparation process for Green Globe, EarthCheck, and Travel Life.',
    features: ['Gap Analysis', 'Audit Preparation', 'Documentation Management', 'Staff Training'],
    cta: 'Get Certified'
  },
  {
    id: 'reporting',
    title: 'Reporting & Strategy (ESG)',
    icon: 'FileBarChart',
    description: 'Align your business with international standards. We specialize in GRI, IFRS S2, and the new TNFD framework for nature-related risks.',
    features: ['GRI Standards Reporting', 'TNFD Disclosures', 'Carbon Footprint Assessment', 'IFRS S2 Compliance'],
    cta: 'Start Reporting'
  },
  {
    id: 'biodiversity',
    title: 'Biodiversity Action Plans',
    icon: 'Sprout',
    description: 'Science-based strategies to restore local ecosystems. Our PhD-led team creates tailored Nature Strategies aligned with regional conservation goals.',
    features: ['Flora & Fauna Surveys', 'Restoration Strategy', 'Invasive Species Management', 'Educational Trails'],
    cta: 'Create Action Plan'
  },
  {
    id: 'tech',
    title: 'Hotel Tech Integration',
    icon: 'Laptop',
    description: 'Leverage our partnership with Ezee Absolute to track sustainability metrics directly within your PMS. Automate energy and waste tracking.',
    features: ['Ezee Absolute Setup', 'Sustainability Dashboards', 'Consumption Monitoring', 'Paperless Operations'],
    cta: 'Digitize Operations'
  },
  {
    id: 'funding',
    title: 'Grants & Funding Support',
    icon: 'Coins',
    description: 'Unlock capital for your green projects. We specialize in writing winning proposals for AFD, EU, and UN funding mechanisms.',
    features: ['Grant Scouting', 'Proposal Writing', 'Project Design', 'Reporting for Donors'],
    cta: 'Find Funding'
  }
];

export const MEMBERS: Member[] = [
  {
    id: 'kassim-fidaly',
    name: 'Kassim Fidaly',
    businessName: 'Ylang & Co.',
    role: 'Essential Oil Producer',
    island: 'Mayotte',
    tags: ['Traditional Distillation', 'Circular Packaging', 'Agroforestry'],
    description: 'Preserving the heritage of Ylang-Ylang distillation while implementing regenerative agroforestry and biodegradable packaging.',
    story: `**Origins: The Guardian of Island Scents**
    
    Kassim learned the art of distillation from his grandfather in the sacred forests of Combani, Mayotte. "Respect the plant, and it will reward you with purity," his grandfather would say—a philosophy that now defines Kassim's entire operation.

    **Philosophy & Process**
    Unlike industrial producers, Kassim relies on hand-harvesting at dawn when the oil concentration in the flowers is highest. He utilizes traditional copper-pot distillation powered by biomass and solar thermal energy, ensuring a low-carbon footprint.
    
    **Biodiversity Impact**
    Kassim practices regenerative agroforestry. He intercrops ylang-ylang with vanilla, clove, and endemic spices. This method restores soil health, prevents erosion, and provides a habitat for local pollinators, including the endangered Mayotte Drongo.
    
    **Community Role**
    He employs 15+ local farmers, providing training in sustainable harvest techniques and guaranteeing fair prices that are 20% above market rates.`,
    impactMetrics: [
      { label: 'Years of Tradition', value: '20+' },
      { label: 'Biodegradable Goal', value: '100%' },
      { label: 'Farmers Trained', value: '50+' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598517598462-23c224c6e268?q=80&w=1000&auto=format&fit=crop', // Tropical agriculture representative
    products: [
      { 
        id: 'p1', 
        name: 'Ylang-Ylang Extra Superior', 
        category: 'Spa', 
        priceRange: '$$$', 
        description: 'The "Flower of Flowers" in its purest form. Distilled within 1 hour of harvest.', 
        imageUrl: 'https://picsum.photos/id/360/400/300',
        scentProfile: 'Intense, floral, spicy, jasmine-like undertones.',
        spaUse: 'Signature massage oils, anxiety-relief treatments.',
        sustainabilityFeatures: ['Wild-harvested', 'Solar Distilled']
      },
      { 
        id: 'p2', 
        name: 'Clove Bud Oil', 
        category: 'Spa', 
        priceRange: '$$', 
        description: 'Warm and spicy, derived from sun-dried buds.', 
        imageUrl: 'https://picsum.photos/id/292/400/300',
        scentProfile: 'Rich, spicy, woody, warm.',
        spaUse: 'Deep tissue muscle relief, warming foot scrubs.',
        sustainabilityFeatures: ['Organic', 'Community Sourced']
      },
      {
        id: 'p3',
        name: 'Madagascar Vanilla Infusion',
        category: 'Spa',
        priceRange: '$$$',
        description: 'A comforting, sweet infusion using whole cured beans.',
        imageUrl: 'https://picsum.photos/id/431/400/300',
        scentProfile: 'Sweet, creamy, comforting, nostalgic.',
        spaUse: 'Relaxation aromatherapy, body wraps.',
        sustainabilityFeatures: ['Hand-pollinated', 'Fair Trade']
      },
      {
        id: 'p4',
        name: 'Citronella & Lemongrass Blend',
        category: 'Spa',
        priceRange: '$',
        description: 'Invigorating blend perfect for outdoor spa areas.',
        imageUrl: 'https://picsum.photos/id/656/400/300',
        scentProfile: 'Fresh, citrusy, grassy, clean.',
        spaUse: 'Insect repellent lotions, energizing morning mists.',
        sustainabilityFeatures: ['Pesticide-free', 'Locally Distilled']
      }
    ],
    certified: true,
    certificationBadge: 'LCA Pilot Partner',
    website: 'https://kassimfidaly.com/'
  },
  {
    id: 'aroma-com',
    name: 'Aroma-Com',
    businessName: 'Aroma-Com',
    role: 'Distiller & Producer',
    island: 'Comoros',
    tags: ['Essential Oils', 'Spices', 'Wholesale'],
    description: 'Expert producers of Ylang-Ylang, Clove, and Vanilla essential oils from the Comoros archipelago.',
    story: `Based in the heart of the "Perfume Islands", Aroma-Com is a leading producer dedicated to the authentic distillation of Comorian flora. We specialize in traceable, high-quality essential oils including Ylang-Ylang (Extra, I, II, III), Clove Bud, and Citronella.

    We work directly with local pickers to ensure fair trade practices and sustainable harvesting methods that protect our island's unique ecosystem.`,
    impactMetrics: [
      { label: 'Oils Produced', value: '4 Types' },
      { label: 'Export Markets', value: 'Global' }
    ],
    imageUrl: 'https://picsum.photos/id/514/800/600',
    products: [
        { id: 'ac1', name: 'Ylang-Ylang Complete', category: 'Spa', priceRange: '$$', description: 'Full spectrum distillation for therapeutic use.', imageUrl: 'https://picsum.photos/id/102/400/300' },
        { id: 'ac2', name: 'Clove Bud Oil', category: 'Spa', priceRange: '$', description: 'Spicy, warming oil ideal for muscle relief blends.', imageUrl: 'https://picsum.photos/id/292/400/300' }
    ],
    certified: false,
    website: 'http://www.aromacomores.com',
    email: 'aroma.comores@yahoo.com',
    phone: '+269 344 28 97'
  },
  {
    id: 'elena-rodriguez',
    name: 'Elena Rodriguez',
    businessName: 'Azure Eco-Resort',
    role: 'Hospitality Manager',
    island: 'Seychelles',
    tags: ['Hotel', 'Marine Conservation', 'Buyer'],
    description: 'A boutique resort focused on marine conservation and zero-waste hospitality.',
    story: 'Elena transformed a small family guesthouse into a leader in sustainable luxury. She is actively looking to source all bathroom amenities from regional producers to reduce plastic import waste.',
    impactMetrics: [
      { label: 'Plastic Free', value: '95%' },
      { label: 'Local Sourcing', value: '70%' }
    ],
    imageUrl: 'https://picsum.photos/id/164/800/600',
    products: [],
    certified: true,
    certificationBadge: 'Green Globe Gold'
  },
  {
    id: 'jean-luc-pierre',
    name: 'Jean-Luc Pierre',
    businessName: 'Roots & Tubers',
    role: 'Organic Farmer',
    island: 'Réunion',
    tags: ['Agriculture', 'Vegetables', 'Permaculture'],
    description: 'Supplying high-end restaurants with heirloom root vegetables grown in volcanic soil.',
    story: 'Jean-Luc focuses on reviving forgotten vegetable varieties that are naturally resistant to cyclones and pests.',
    impactMetrics: [
      { label: 'Varieties Saved', value: '12' },
      { label: 'Soil Health', value: 'A+' }
    ],
    imageUrl: 'https://picsum.photos/id/292/800/600',
    products: [
      { id: 'p3', name: 'Purple Sweet Potato', category: 'F&B', priceRange: '$', description: 'Rich in antioxidants and flavor.', imageUrl: 'https://picsum.photos/id/656/400/300' }
    ],
    certified: false
  }
];

export const FORUM_TOPICS: ForumTopic[] = [
  { id: 't1', title: 'Guidance needed: TNFD action plan for small hotels', category: 'Certification', author: 'Elena Rodriguez', replies: 14, lastActive: '2h ago' },
  { id: 't2', title: 'Looking for organic coconut oil supplier in Mauritius', category: 'Collaboration', author: 'Spa Manager A', replies: 5, lastActive: '1d ago' },
  { id: 't3', title: 'New AFD Biodiversity Funding available for 2025', category: 'Funding', author: 'Collective Admin', replies: 32, lastActive: '4h ago' },
  { id: 't4', title: 'Integrating Ezee Absolute for waste tracking', category: 'General', author: 'Hotel IT Mgr', replies: 8, lastActive: '12h ago' },
  { id: 't5', title: 'Ask Kassim: Sustainable Sourcing for Spas', category: 'Collaboration', author: 'Kassim Fidaly', replies: 42, lastActive: '1h ago' },
];

export const RESOURCES: Resource[] = [
  { id: 'r1', title: 'GRI Standards 101 for SMEs', type: 'Guide', summary: 'A simplified guide to Global Reporting Initiative standards for small businesses.' },
  { id: 'r2', title: 'TNFD Action Plan Template', type: 'Guide', summary: 'Downloadable PDF template to start your nature-risk assessment.' },
  { id: 'r3', title: 'Video: Integrating Ezee Absolute', type: 'Video', summary: 'Tutorial: How to set up sustainability metrics in your PMS.' },
  { id: 'r4', title: 'Video: Traditional Distillation Guide', type: 'Video', summary: 'A Step-by-Step Guide to Kassim’s distillation process.' },
  { id: 'r5', title: 'Why Banana Leaf Packaging is the Future', type: 'Guide', summary: 'Blog Post on biodegradable packaging innovations.' },
];

export const PROJECTS: Project[] = [
    {
        id: 'epop-varuna',
        title: 'ePOP x Varuna',
        subtitle: 'Youth Voices for Biodiversity',
        category: 'Youth & Media',
        summary: 'Empowering young people to capture the environmental changes in their communities through video reporting.',
        description: `The ePOP x Varuna initiative is a groundbreaking media project designed to give a voice to the youth of the Indian Ocean. By training young people in mobile journalism and video reporting, the project enables them to document the environmental challenges and solutions in their own communities.
        
        This initiative captures "testimonies from the frontlines" of climate change, fostering a dialogue between generations and across islands. The resulting videos are shared widely on social media and used in community discussions (AfterPOPs) to spur local action.`,
        islands: ['Madagascar', 'Mauritius', 'Seychelles', 'Comoros'],
        impactMetrics: [
            { label: 'Youth Trained', value: '35' },
            { label: 'Videos Produced', value: '48' },
            { label: 'Public Events', value: '21' }
        ],
        coverImage: 'https://picsum.photos/id/338/1000/600',
        media: [
            { type: 'image', url: 'https://picsum.photos/id/338/800/600', caption: 'Mobile journalism training session in Antananarivo.' },
            { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', caption: 'Teaser: Voices of the Islands' } // Placeholder URL
        ],
        links: [
            { label: 'Watch the Series', url: '#' },
            { label: 'Project Report', url: '#' }
        ],
        partners: ['RFI Planète Radio', 'IRD', 'Varuna Program']
    },
    {
        id: 'varuna-science',
        title: 'Varuna: Science of Sustainability',
        subtitle: 'Biodiversity Exhibition',
        category: 'Science & Education',
        summary: 'A traveling exhibition bridging the gap between scientific research and public understanding of biodiversity in Madagascar.',
        description: `How do we translate complex biodiversity data into public action? The "Science of Sustainability" exhibition answers this by taking science out of the lab and into the streets.
        
        Featuring 23 educational panels—14 on general biodiversity concepts and 9 specifically tailored to Madagascar's unique flora and fauna—the exhibition travels to schools, town halls, and community centers. It is designed to spark curiosity and provide actionable knowledge on conservation.`,
        islands: ['Madagascar'],
        impactMetrics: [
            { label: 'Visitors', value: '29,120' },
            { label: 'Locations', value: '32' },
            { label: 'Knowledge Gain', value: '98%' }
        ],
        coverImage: 'https://picsum.photos/id/237/1000/600',
        media: [
            { type: 'image', url: 'https://picsum.photos/id/237/800/600', caption: 'Exhibition launch in Tamatave.' }
        ],
        links: [
            { label: 'Download Panels (PDF)', url: '#' }
        ],
        partners: ['Muséum national d\'Histoire naturelle', 'Madagascar National Parks']
    },
    {
        id: 'science-media-workshops',
        title: 'Science & Media Dialogues',
        subtitle: 'Bridging the Gap',
        category: 'Science & Education',
        summary: 'Fostering dialogue between journalists, scientists, and decision-makers to improve biodiversity governance.',
        description: `Misinformation and lack of communication between scientists and the media often hinder effective environmental governance. This series of dialogue workshops brings together key stakeholders to build trust and improve the quality of environmental reporting.
        
        The project also produced a series of pedagogical films explaining key concepts of biodiversity governance, which have been widely used by local universities and media houses.`,
        islands: ['Madagascar', 'Comoros'],
        impactMetrics: [
            { label: 'Workshops', value: '4' },
            { label: 'Participants', value: '40' },
            { label: 'Film Views', value: '3,107' }
        ],
        coverImage: 'https://picsum.photos/id/60/1000/600',
        media: [
            { type: 'image', url: 'https://picsum.photos/id/60/800/600', caption: 'Workshop participants debating TNFD frameworks.' }
        ],
        links: [
            { label: 'Watch Films', url: '#' }
        ],
        partners: ['University of Antananarivo', 'Association of Environmental Journalists']
    }
];
