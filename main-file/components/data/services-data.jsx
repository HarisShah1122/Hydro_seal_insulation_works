
const servicesData = [
    {
        id: 'thermal-insulation',
        icon: <i className="flaticon-coding"></i>,
        title: 'Thermal Insulation',
        subtitle: 'Energy Efficiency & Temperature Control',
        des: 'Advanced thermal insulation solutions for commercial and residential buildings, ensuring optimal temperature control and energy savings.',
        overview: 'Our thermal insulation services protect your building from extreme temperatures while significantly reducing energy costs. We use premium materials and proven techniques to create effective thermal barriers that maintain comfortable indoor environments year-round.',
        features: [
            'Roof & Ceiling Insulation',
            'Wall Cavity Insulation',
            'Floor & Foundation Insulation',
            'Pipe & Duct Insulation',
            'Cold Storage Insulation',
            'Industrial Equipment Insulation'
        ],
        benefits: [
            'Reduced Energy Consumption',
            'Lower Utility Bills',
            'Improved Indoor Comfort',
            'Condensation Prevention',
            'Extended HVAC System Life',
            'Increased Property Value'
        ],
        process: [
            'Site Assessment & Heat Loss Calculation',
            'Material Selection & Specification',
            'Professional Installation',
            'Quality Testing & Verification'
        ],
        technologies: ['Polyurethane Foam', 'Fiberglass', 'Rock Wool', 'Expanded Polystyrene', 'Reflective Insulation', 'Spray Foam']
    },
    {
        id: 'waterproofing-solutions',
        icon: <i className="flaticon-desktop-pc"></i>,
        title: 'Waterproofing Solutions',
        subtitle: 'Complete Water Damage Protection',
        des: 'Comprehensive waterproofing systems for roofs, basements, foundations, and structures to prevent water infiltration and damage.',
        overview: 'Water damage is one of the most costly issues for any building. Our expert waterproofing solutions provide long-lasting protection against moisture, leaks, and water seepage. We use industry-leading materials and techniques to safeguard your property investment.',
        features: [
            'Roof Waterproofing Systems',
            'Basement & Foundation Waterproofing',
            'Bathroom & Wet Area Waterproofing',
            'Swimming Pool Waterproofing',
            'Terrace & Balcony Waterproofing',
            'Water Tank Waterproofing'
        ],
        benefits: [
            'Prevents Structural Damage',
            'Eliminates Mold & Mildew',
            'Protects Building Foundation',
            'Increases Building Lifespan',
            'Reduces Maintenance Costs',
            'Enhances Property Value'
        ],
        process: [
            'Moisture & Leak Detection',
            'Surface Preparation',
            'Waterproofing Application',
            'Testing & Quality Assurance'
        ],
        technologies: ['Bituminous Membrane', 'Polyurethane Coating', 'Acrylic Waterproofing', 'Crystalline Waterproofing', 'EPDM Rubber', 'Liquid Applied Membrane']
    },
    {
        id: 'hvac-insulation',
        icon: <i className="flaticon-consultant"></i>,
        title: 'HVAC Insulation',
        subtitle: 'Optimize Your Climate Control Systems',
        des: 'Specialized insulation for HVAC systems, ductwork, and chilled water piping to maximize efficiency and prevent energy loss.',
        overview: 'Proper HVAC insulation is essential for maintaining system efficiency and indoor air quality. Our specialized HVAC insulation services ensure your climate control systems operate at peak performance while minimizing energy waste and condensation issues.',
        features: [
            'Duct Insulation & Sealing',
            'Chilled Water Pipe Insulation',
            'Air Handling Unit Insulation',
            'Refrigeration Line Insulation',
            'Condensation Control',
            'Acoustic Treatment for HVAC'
        ],
        benefits: [
            'Maximum Energy Efficiency',
            'Reduced Operating Costs',
            'Prevents Condensation & Dripping',
            'Improved Air Quality',
            'Noise Reduction',
            'Extended Equipment Life'
        ],
        process: [
            'System Assessment',
            'Insulation Design & Specification',
            'Professional Installation',
            'Performance Testing & Commissioning'
        ],
        technologies: ['Elastomeric Foam', 'Phenolic Foam', 'PIR Insulation', 'Armaflex', 'Fiberglass Duct Wrap', 'Acoustic Insulation']
    },
    {
        id: 'acoustic-insulation',
        icon: <i className="flaticon-mobile-app"></i>,
        title: 'Acoustic Insulation',
        subtitle: 'Soundproofing for Peace & Privacy',
        des: 'Professional soundproofing and acoustic insulation for residential, commercial, and industrial spaces.',
        overview: 'Create peaceful, noise-free environments with our advanced acoustic insulation solutions. Whether for homes, offices, studios, or industrial facilities, we provide effective soundproofing that reduces noise transmission and improves acoustic quality.',
        features: [
            'Wall & Partition Soundproofing',
            'Floor Impact Noise Reduction',
            'Ceiling Acoustic Treatment',
            'Studio & Theater Acoustics',
            'Industrial Noise Control',
            'Acoustic Doors & Windows'
        ],
        benefits: [
            'Enhanced Privacy',
            'Reduced Noise Pollution',
            'Improved Concentration',
            'Better Sleep Quality',
            'Compliance with Building Codes',
            'Increased Property Appeal'
        ],
        process: [
            'Acoustic Assessment & Measurement',
            'Solution Design',
            'Installation & Integration',
            'Sound Testing & Verification'
        ],
        technologies: ['Mass Loaded Vinyl', 'Acoustic Panels', 'Sound Damping Compound', 'Resilient Channels', 'Acoustic Sealants', 'Decoupling Systems']
    },
    {
        id: 'fire-protection-insulation',
        icon: <i className="flaticon-satellite"></i>,
        title: 'Fire Protection Insulation',
        subtitle: 'Safety Through Advanced Fire-Resistant Materials',
        des: 'Fire-resistant insulation systems that protect structures, prevent fire spread, and ensure occupant safety.',
        overview: 'Fire protection is a critical aspect of building safety. Our fire-resistant insulation solutions provide passive fire protection, containing fires and preventing their spread while protecting structural integrity. We comply with all UAE fire safety regulations and international standards.',
        features: [
            'Fire-Rated Wall & Ceiling Systems',
            'Structural Steel Fire Protection',
            'Pipe & Duct Fire Stopping',
            'Fire Compartmentation',
            'Intumescent Coatings',
            'Fire-Resistant Doors & Seals'
        ],
        benefits: [
            'Life Safety Protection',
            'Property Damage Prevention',
            'Regulatory Compliance',
            'Insurance Premium Reduction',
            'Peace of Mind',
            'Extended Evacuation Time'
        ],
        process: [
            'Fire Risk Assessment',
            'System Design & Engineering',
            'Certified Installation',
            'Fire Rating Testing & Certification'
        ],
        technologies: ['Rock Wool Fire Batts', 'Intumescent Paint', 'Fire Cement', 'Ceramic Fiber', 'Calcium Silicate', 'Vermiculite']
    },
    {
        id: 'specialized-coatings',
        icon: <i className="flaticon-cyber-security"></i>,
        title: 'Specialized Coatings',
        subtitle: 'Protective Coatings for Durability',
        des: 'Advanced protective coatings and sealants for industrial, commercial, and residential applications.',
        overview: 'Extend the life of your surfaces and equipment with our specialized coating solutions. From heat-reflective roof coatings to industrial-grade protective systems, we provide coatings that protect against weather, chemicals, corrosion, and wear.',
        features: [
            'Reflective Roof Coatings',
            'Anti-Corrosion Coatings',
            'Epoxy Floor Coatings',
            'Weather-Resistant Coatings',
            'Chemical-Resistant Coatings',
            'Decorative Protective Coatings'
        ],
        benefits: [
            'Extended Surface Life',
            'Reduced Maintenance',
            'Enhanced Appearance',
            'Energy Savings',
            'Corrosion Protection',
            'UV Resistance'
        ],
        process: [
            'Surface Condition Assessment',
            'Surface Preparation & Cleaning',
            'Coating Application',
            'Curing & Quality Control'
        ],
        technologies: ['Elastomeric Coatings', 'Polyurea', 'Epoxy Systems', 'Polyurethane Coatings', 'Acrylic Coatings', 'Silicone-Based Coatings']
    },
];

export default servicesData;
