/**
 * Beacon Health Medicine & Medical Supplies TR L.L.C.S.P
 * Multilingual & Interactive Script (English & Arabic RTL)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Translations Dictionary
  const translations = {
    en: {
      // Header
      nav_home: 'Home',
      nav_about_us: 'About Us',
      nav_products: 'Products ▾',
      nav_commitment: 'Our Commitment',
      nav_mission: 'Our Mission',
      nav_vision: 'Our Vision',
      nav_contact: 'Contact Us',
      nav_our_products: 'Our Products',
      nav_our_customers: 'Our Customers',
      btn_get_touch: 'Get In Touch',
      lang_label: 'English',

      // Hero
      hero_badge: 'The Beacon Behind Better Care.',
      hero_title_1: 'Medical Supplies in ',
      hero_title_highlight: 'DUBAI',
      hero_title_2: 'You Can Rely On',
      hero_desc: 'Beacon Health imports and distributes medical consumables, devices, equipment and medicines to hospitals, clinics, pharmacies and laboratories across the UAE.',
      hero_btn_quote: 'Request a Quote',
      hero_btn_portfolio: 'Explore Our Products',

      // Metrics
      stat_partners: 'Core Product\nCategories',
      stat_clients: 'Healthcare\nSupply & Distribution',
      stat_mfg: 'International\nManufacturing\nPartners',
      stat_emirates: 'Healthcare\nProviders & Businesses',

      // About
      about_tag: 'About Beacon',
      about_title: 'A Dubai Healthcare Supplier Built On Trust',
      about_p1: 'Beacon Health LLC is an established UAE healthcare provider dedicated to delivering certified medical supplies, consumables, and equipment to leading healthcare institutions across the UAE.',
      about_p2: 'We bridge the gap between global manufacturers and regional healthcare providers, ensuring reliable, high-volume supply with exceptional standards of compliance and speed.',
      about_p3: 'With specialized cold-chain and temperature-controlled logistics, we guarantee product integrity from manufacturer to bedside across all 7 Emirates.',

      // Products
      prod_tag: 'Our Product Range',
      prod_title: 'Medical Consumables, Devices,\nEquipment And Medicines',
      prod_desc: 'One trusted source for the healthcare products your facility uses every day.',
      prod_btn_all: 'View All Products',
      prod_card1_tag: 'EVERYDAY CLINICAL ESSENTIALS',
      prod_card1_title: 'Medical Consumables',
      prod_card1_link: 'Explore This Range',
      prod_card2_tag: 'EQUIPMENT FOR BETTER CARE',
      prod_card2_title: 'Medical Devices & Equipment',
      prod_card2_link: 'Explore This Range',
      prod_card3_tag: 'SELECTED PHARMACEUTICAL RANGE',
      prod_card3_title: 'Medicines',
      prod_card3_link: 'Explore This Range',

      // Who We Serve
      serve_tag: 'WHO WE SERVE',
      serve_title: 'Supplying Healthcare Providers Across The UAE',
      serve_desc: 'From tertiary hospitals and specialized surgery centres to primary care clinics and retail pharmacies, Beacon Health delivers custom healthcare supply solutions tailored to your operational scale.',
      serve_highlight: 'Direct-to-facility delivery with guaranteed cold chain compliance across all seven emirates.',
      serve_tab_pharmacies: 'Pharmacies',
      serve_tab_pharmacies_desc: 'Supplying community and hospital pharmacies with essential prescription medications, OTC lines, and cold-chain therapeutics with prompt daily replenishment.',
      serve_tab_centres: 'Medical Centers',
      serve_tab_centres_desc: 'Complete medical and diagnostic equipment packages, personal protective supplies, and patient monitoring systems for multi-specialty polyclinics.',
      serve_tab_distributors: 'Distributors',
      serve_tab_distributors_desc: 'Bulk wholesale distribution contracts and tier-one pricing for regional healthcare distributors throughout the GCC.',
      serve_tab_providers: 'Healthcare Providers',
      serve_tab_government: 'Government Entities',
      serve_tab_government_desc: 'Compliant institutional tender fulfillment meeting UAE MOHAP and DHA statutory specifications and documentation standards.',
      serve_tab_hospitals: 'Hospitals',
      serve_tab_hospitals_desc: 'High-volume consumables, surgical sets, surgical drapes, ICU disposables, and emergency care medical appliances for leading hospital networks.',
      serve_tab_clinics: 'Clinics',
      serve_tab_clinics_desc: 'Turnkey consumable subscriptions, point-of-care rapid testing kits, and hygienic disposables customized for specialized day clinics.',

      // Why Choose Us
      why_tag: 'Why Choose Beacon Health',
      why_title: 'Why Healthcare Businesses Choose Beacon Health',
      why_f1_title: 'Carefully Selected Products',
      why_f1_desc: 'We do not stock everything. We focus on products that meet the real needs of the UAE healthcare market.',
      why_f2_title: 'Competitive Value',
      why_f2_desc: 'Quality healthcare products at commercially competitive prices, so your budget goes further.',
      why_f3_title: 'Efficient Distribution',
      why_f3_desc: 'Responsive ordering, dependable supply and helpful customer support from a team based in Dubai.',
      why_f4_title: 'A Long-Term Approach',
      why_f4_desc: 'We build sustainable partnerships with both customers and manufacturers. Your success is our reputation.',

      // Quality
      quality_tag: 'Quality & Compliance',
      quality_title: 'Quality And Regulatory Compliance You Can Count On',
      quality_p1: 'Beacon Health strictly adheres to UAE Ministry of Health and Prevention (MOHAP), Dubai Health Authority (DHA), and international WHO-GDP standards.',
      quality_p2: 'Every batch undergoes rigorous quality inspection with full traceability and batch release certificates delivered with every shipment.',
      quality_p3: 'Licensed for distribution, storage, and import of medical devices, pharmaceuticals, and OTC healthcare essentials.',
      quality_btn: 'Request Documentation',

      // Partners
      partners_tag: 'Global Partners',
      partners_title: 'Global Partners. Local Reach.',
      partners_desc: 'We work with established healthcare manufacturers from around the world and bring\nselected products and brands to the UAE, with growing supply into the GCC and Africa.',

      // CTA
      cta_title: "Let's Talk About Your Supply Needs",
      cta_desc: 'Looking for a reliable medical distributor in Dubai? Speak to our team about your procurement requirements and receive a competitive quote within 24 hours.',
      cta_btn: 'Contact Us',

      // About Us Page
      about_hero_tag: 'About Us',
      about_hero_title: 'About Beacon Health',
      about_hero_desc: 'Beacon Health is dedicated to serving the growing needs of the UAE healthcare sector with a straightforward mission: deliver the right product across all seven emirates with guaranteed cold chain delivery.',
      about_who_tag: 'Who We Are',
      about_who_p1: 'Beacon Health is a leading UAE-based supplier of high quality healthcare supplies and pharmaceuticals.',
      drives_tag: 'What Drives Us',
      drives_title: 'Purpose Behind Every Shipment.',
      mission_title: 'OUR MISSION',
      mission_desc: 'To provide high-quality healthcare products that healthcare providers can trust, delivered with complete reliability.',
      mission_link: 'Read Our Mission ↗',
      vision_title: 'OUR VISION',
      vision_desc: 'To be the most reliable and trusted healthcare partner in supply and distribution.',
      vision_link: 'Read Our Vision ↗',
      serve_about_title: 'Trusted Across The Care Continuum',
      serve_about_desc: 'We serve hospitals, clinics, pharmacies, laboratories, distributors and other healthcare businesses across the UAE.',
      serve_tab_laboratories: 'Laboratories',
      serve_tab_laboratories_desc: 'Specialized diagnostic reagents, sterile sample collection systems, and certified laboratory consumables for clinical testing labs.',
      promise_tag: 'Our Promise',
      promise_title: 'Quality. Integrity. Trust.',
      promise_desc: 'The standard by which every product we source and every relationship we build.',
      promise_btn: 'Explore Products',
      partners_about_desc: 'We build long term relationships with established healthcare manufacturers from around the world and bring selected products and brands to the UAE market.',
      cta_about_title: 'We Build Long-Term Relationships With Established Healthcare Manufacturers From Around The World And Bring Selected Products And Brands To The UAE Market.',
      cta_about_desc: "Interested in representation, distribution or procurement partnerships? Let's discuss your requirements today.",

      // Footer
      footer_desc: 'Beacon Health Medicine & Medical Supplies TR LLC S.P. Imports and distributes medical consumables, medical devices, equipment and medicines across the UAE.',
      footer_follow_us: 'Follow Us :',
      footer_quick_links: 'Quick Links',
      footer_our_services: 'Our Services',
      footer_serv_supplies: 'Medical Supplies',
      footer_serv_equipment: 'Medical Equipment',
      footer_serv_pharma: 'Pharmaceutical Products',
      footer_serv_distribution: 'Healthcare Distribution',
      footer_serv_sourcing: 'Product Sourcing',
      footer_serv_partnerships: 'Business Partnerships',
      footer_contact: 'Contact',
      footer_email_label: 'Email:',
      footer_email_val: 'Abc@gmail.com',
      footer_phone_label: 'Phone:',
      footer_phone_val: '+97 ***** *****',
      footer_address_label: 'Address:',
      footer_address_val: 'Dubai, United Arab Emirates',
      footer_copyright: 'Copyright © 2026 BEACON HEALTH MEDICINE & MEDICAL SUPPLIES TR LL.C.S.P. All rights reserved.',
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms & Conditions'
    },
    ar: {
      // Header
      nav_home: 'الرئيسية',
      nav_about_us: 'من نحن',
      nav_products: 'المنتجات ▾',
      nav_commitment: 'التزامنا',
      nav_mission: 'رسالتنا',
      nav_vision: 'رؤيتنا',
      nav_contact: 'اتصل بنا',
      nav_our_products: 'منتجاتنا',
      nav_our_customers: 'عملاؤنا',
      btn_get_touch: 'تواصل معنا',
      lang_label: 'العربية',

      // Hero
      hero_badge: 'المنارة الموثوقة لرعاية صحية أفضل.',
      hero_title_1: 'مستلزمات طبية في ',
      hero_title_highlight: 'دبي',
      hero_title_2: 'يمكنك الاعتماد عليها',
      hero_desc: 'تستورد وتوزع بيكون هيلث المستهلكات الطبية والأجهزة والمعدات والأدوية للمستشفيات والعيادات والصيدليات والمختبرات في جميع أنحاء الإمارات.',
      hero_btn_quote: 'طلب تسعيرة',
      hero_btn_portfolio: 'استكشف منتجاتنا',

      // Metrics
      stat_partners: 'فئات المنتجات\nالأساسية',
      stat_clients: 'التوريد والتوزيع\nالصحي',
      stat_mfg: 'شركاء التصنيع\nالدوليين',
      stat_emirates: 'مقدمو الرعاية\nوالشركات الطبية',

      // About
      about_tag: 'عن بيكون',
      about_title: 'مورد رعاية صحية في دبي تأسس على الثقة',
      about_p1: 'شركة بيكون هيلث هي مورد رعاية صحية موثوق في الإمارات، متخصصة في توفير المستلزمات الطبية المعتمدة والأجهزة والمستهلكات لكبرى المؤسسات الصحية في الدولة.',
      about_p2: 'نعمل كجسر موثوق بين كبرى الشركات المصنعة العالمية ومقدمي الرعاية الصحية محلياً، مع ضمان إمداد منتظم ومستمر بأعلى معايير الجودة والسرعة.',
      about_p3: 'من خلال سلاسل التبريد المتطورة والنقل المبرد الخاضع للرقابة الصارمة، نضمن سلامة المنتجات من المصنع وحتى وصولها إلى المريض في جميع الإمارات السبع.',

      // Products
      prod_tag: 'مجموعة منتجاتنا',
      prod_title: 'المستهلكات الطبية والأجهزة\nوالمعدات والأدوية',
      prod_desc: 'مصدرك الموثوق لجميع منتجات الرعاية الصحية التي تستخدمها منشأتك يومياً.',
      prod_btn_all: 'عرض جميع المنتجات',
      prod_card1_tag: 'مستلزمات عيادية يومية أساسية',
      prod_card1_title: 'المستهلكات الطبية',
      prod_card1_link: 'استكشف هذه المجموعة',
      prod_card2_tag: 'أجهزة ومعدات لرعاية أفضل',
      prod_card2_title: 'الأجهزة والمعدات الطبية',
      prod_card2_link: 'استكشف هذه المجموعة',
      prod_card3_tag: 'مجموعة أدوية صيدلانية مختارة',
      prod_card3_title: 'الأدوية',
      prod_card3_link: 'استكشف هذه المجموعة',

      // Who We Serve
      serve_tag: 'الفئات التي نخدمها',
      serve_title: 'توريد المستلزمات لمقدمي الرعاية الصحية في أنحاء الإمارات',
      serve_desc: 'من المستشفيات التخصصية ومراكز الجراحة المتقدمة إلى عيادات الرعاية الأولية والصيدليات، تقدم بيكون هيلث حلول توريد مخصصة تناسب حجم أعمالك بدقة.',
      serve_highlight: 'توصيل مباشر إلى المنشآت مع ضمان الالتزام التام بسلسلة التبريد في جميع الإمارات السبع.',
      serve_tab_pharmacies: 'الصيدليات',
      serve_tab_pharmacies_desc: 'تزويد صيدليات المجتمع والمستشفيات بالأدوية الموصوفة الأساسية والمنتجات الحرة وعلاجات سلسلة التبريد مع إعادة إمداد يومي فوري.',
      serve_tab_centres: 'المراكز الطبية',
      serve_tab_centres_desc: 'باقات متكاملة من أجهزة التشخيص والمعدات الطبية ومستلزمات الحماية وأنظمة مراقبة المرضى للمجمعات الطبية متعددة التخصصات.',
      serve_tab_distributors: 'الموزعون',
      serve_tab_distributors_desc: 'عقود توزيع بالجملة وأسعار تفضيلية للموزعين الإقليميين في قطاع الرعاية الصحية بدول مجلس التعاون الخليجي.',
      serve_tab_providers: 'مقدمو الرعاية الصحية',
      serve_tab_government: 'الجهات الحكومية',
      serve_tab_government_desc: 'توريد مناقصات مؤسسية متوافقة بالكامل مع المواصفات واللوائح التنظيمية لوزارة الصحة ووقاية المجتمع وهيئة الصحة بدبي.',
      serve_tab_hospitals: 'المستشفيات',
      serve_tab_hospitals_desc: 'مستهلكات عالية الحجم وأدوات جراحية ومستلزمات العناية المركزة وأجهزة الطوارئ الطبية لكبرى شبكات المستشفيات.',
      serve_tab_clinics: 'العيادات',
      serve_tab_clinics_desc: 'اشتراكات توريد مرنة لمستلزمات العيادات اليومية، واختبارات التشخيص السريع، والمستهلكات المعقمة المصممة خصيصاً للعيادات التخصصية.',

      // Why Choose Us
      why_tag: 'لماذا تختار بيكون هيلث',
      why_title: 'لماذا تختار المنشآت الصحية بيكون هيلث',
      why_f1_title: 'منتجات مختارة بعناية',
      why_f1_desc: 'لا نوفر كل شيء عشوائياً، بل نركز بدقة على المنتجات التي تلبي الاحتياجات الفعلية لسوق الرعاية الصحية في الإمارات.',
      why_f2_title: 'قيمة تنافسية',
      why_f2_desc: 'منتجات رعاية صحية عالية الجودة بأسعار تجارية تنافسية، لتحقيق أقصى استفادة من ميزانيتك.',
      why_f3_title: 'توزيع عالي الكفاءة',
      why_f3_desc: 'سرعة في معالجة الطلبات، وتوريد يمكن الاعتماد عليه، ودعم عملاء متميز من فريقنا المتواجد في دبي.',
      why_f4_title: 'نهج شراكة طويل الأمد',
      why_f4_desc: 'نبني شراكات مستدامة مع كل من العملاء والمصنعين. نجاحكم هو أساس سمعتنا وريادتنا.',

      // Quality
      quality_tag: 'الجودة والامتثال التنظيمي',
      quality_title: 'جودة وامتثال تنظيمي يمكنك الوثوق به',
      quality_p1: 'تلتزم بيكون هيلث التزاماً صارماً بمعايير وزارة الصحة ووقاية المجتمع (MOHAP)، وهيئة الصحة بدبي (DHA)، ومعايير منظمة الصحة العالمية للتوزيع الجيد (WHO-GDP).',
      quality_p2: 'تخضع كل شحنة لفحص جودة دقيق مع إمكانية التتبع الكامل وشهادات الإفراج الجمركي والرقابي المرفقة مع كل طلبية.',
      quality_p3: 'مرخصون بالكامل لتوزيع وتخزين واستيراد الأجهزة الطبية والأدوية والمستلزمات الصحية العامة.',
      quality_btn: 'طلب شهادات الاعتماد والوثائق',

      // Partners
      partners_tag: 'شركاؤنا العالميون',
      partners_title: 'شركاء عالميون. وصول محلي واسع.',
      partners_desc: 'نعمل مع كبرى الشركات المصنعة للرعاية الصحية حول العالم لنقل منتجات وعلامات تجارية مختارة\nإلى الإمارات، مع توسع مستمر في التوريد إلى دول الخليج وأفريقيا.',

      // CTA
      cta_title: 'دعنا نناقش احتياجاتك من التوريدات الطبية',
      cta_desc: 'هل تبحث عن موزع طبي موثوق في دبي؟ تحدث مع فريقنا حول متطلبات التوريد واحصل على عرض أسعار تنافسي خلال 24 ساعة.',
      cta_btn: 'اتصل بنا الآن',

      // About Us Page
      about_hero_tag: 'عن الشركة',
      about_hero_title: 'عن بيكون هيلث',
      about_hero_desc: 'تكرس بيكون هيلث جهودها لتلبية الاحتياجات المتزايدة لقطاع الرعاية الصحية في دولة الإمارات بمهمة واضحة: تسليم المنتج المناسب عبر الإمارات السبع مع ضمان التبريد الكامل.',
      about_who_tag: 'من نحن',
      about_who_p1: 'شركة بيكون هيلث هي مورد رعاية صحية رائد في الإمارات، متخصصة في توفير المستلزمات الطبية المعتمدة والأدوية.',
      drives_tag: 'ما يحركنا',
      drives_title: 'الهدف وراء كل شحنة.',
      mission_title: 'مهمتنا',
      mission_desc: 'توفير منتجات رعاية صحية عالية الجودة يمكن لمقدمي الرعاية الاعتماد عليها، مع موثوقية كاملة في التسليم.',
      mission_link: 'اقرأ مهمتنا ↗',
      vision_title: 'رؤيتنا',
      vision_desc: 'أن نكون الشريك الصحي الأكثر موثوقية وأماناً في التوريد والتوزيع.',
      vision_link: 'اقرأ رؤيتنا ↗',
      serve_about_title: 'ثقة تمتد عبر منظومة الرعاية الصحية',
      serve_about_desc: 'نخدم المستشفيات والعيادات والصيدليات والمختبرات والموزعين والشركات الصحية في جميع أنحاء الإمارات.',
      serve_tab_laboratories: 'المختبرات',
      serve_tab_laboratories_desc: 'مستهلكات مخبرية متخصصة وحزم اختبار وكواشف تشخيصية وأنظمة جمع عينات مبردة للمختبرات السريرية المعتمدة.',
      promise_tag: 'وعدنا',
      promise_title: 'الجودة. النزاهة. الثقة.',
      promise_desc: 'المعيار الذي نتبعه في كل منتج نورده وكل شراكة نبنيها.',
      promise_btn: 'استكشف منتجاتنا',
      partners_about_desc: 'نبني علاقات طويلة الأمد مع كبرى الشركات المصنعة للرعاية الصحية حول العالم ونجلب منتجات وعلامات تجارية مختارة إلى سوق الإمارات.',
      cta_about_title: 'نبني علاقات طويلة الأمد مع مصنعي الرعاية الصحية حول العالم ونجلب أفضل المنتجات لسوق الإمارات.',
      cta_about_desc: 'هل أنت مهتم بالتمثيل التجاري أو التوزيع أو شراكات التوريد؟ تواصل معنا اليوم لمناقشة متطلباتك.',

      // Footer
      footer_desc: 'تستورد وتوزع شركة بيكون هيلث للتجارة العامة ذ.م.م. المستهلكات الطبية والأجهزة والمعدات والأدوية في جميع أنحاء دولة الإمارات العربية المتحدة.',
      footer_follow_us: 'تابعنا :',
      footer_quick_links: 'روابط سريعة',
      footer_our_services: 'خدماتنا',
      footer_serv_supplies: 'المستلزمات الطبية',
      footer_serv_equipment: 'الأجهزة والمعدات الطبية',
      footer_serv_pharma: 'المنتجات الدوائية',
      footer_serv_distribution: 'توزيع الرعاية الصحية',
      footer_serv_sourcing: 'توريد المنتجات',
      footer_serv_partnerships: 'الشراكات التجارية',
      footer_contact: 'الاتصال',
      footer_email_label: 'البريد الإلكتروني:',
      footer_email_val: 'Abc@gmail.com',
      footer_phone_label: 'الهاتف:',
      footer_phone_val: '+97 ***** *****',
      footer_address_label: 'العنوان:',
      footer_address_val: 'دبي، الإمارات العربية المتحدة',
      footer_copyright: 'حقوق النشر © 2026 شركة بيكون لتجارة الأدوية والمستلزمات الطبية ش.ذ.م.م. جميع الحقوق محفوظة.',
      footer_privacy: 'سياسة الخصوصية',
      footer_terms: 'الشروط والأحكام'
    }
  };

  // State Management
  let currentLang = localStorage.getItem('beacon_lang') || 'en';

  // DOM Elements
  const htmlRoot = document.documentElement;
  const langSelector = document.getElementById('langSelector');
  const langBtn = document.getElementById('langBtn');
  const langOptions = document.querySelectorAll('.lang-option');
  const currentLangLabel = document.getElementById('currentLangLabel');
  const currentFlag = document.getElementById('currentFlag');
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const header = document.querySelector('.site-header');
  const serveItems = document.querySelectorAll('.serve-item');

  // Flag SVGs (Data URIs for US & UAE)
  const flags = {
    en: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><clipPath id="s"><path d="M0 0v30h60V0z"/></clipPath><clipPath id="t"><path d="M0 0l60 30m0-30L0 30"/></clipPath><g clip-path="url(%23s)"><path d="M0 0v30h60V0z" fill="%23012169"/><path d="M0 0l60 30m0-30L0 30" stroke="%23fff" stroke-width="6"/><path d="M0 0l60 30m0-30L0 30" clip-path="url(%23t)" stroke="%23C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="%23fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="%23C8102E" stroke-width="6"/></g></svg>',
    ar: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><rect width="60" height="10" fill="%2300732F"/><rect y="10" width="60" height="10" fill="%23FFFFFF"/><rect y="20" width="60" height="10" fill="%23000000"/><rect width="18" height="30" fill="%23FF0000"/></svg>'
  };

  // Language Change Function
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('beacon_lang', lang);

    // Set HTML Attributes
    htmlRoot.setAttribute('lang', lang);
    htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update Text Content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) {
        if (translations[lang][key].includes('\n')) {
          el.innerHTML = translations[lang][key].replace(/\n/g, '<br>');
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update Language Button & Flag
    if (currentLangLabel) {
      currentLangLabel.textContent = translations[lang].lang_label;
    }
    if (currentFlag) {
      currentFlag.src = flags[lang];
    }

    // Update Selected Class in Dropdown
    langOptions.forEach(opt => {
      if (opt.getAttribute('data-lang') === lang) {
        opt.classList.add('selected');
      } else {
        opt.classList.remove('selected');
      }
    });

    // Update Arrow icon for cards in RTL
    const arrows = document.querySelectorAll('.product-card-link .arrow');
    arrows.forEach(arrow => {
      arrow.textContent = lang === 'ar' ? '↖' : '↗';
    });
  }

  // Initial Language Set
  setLanguage(currentLang);

  // Language Dropdown Toggle
  if (langBtn && langSelector) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langSelector.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!langSelector.contains(e.target)) {
        langSelector.classList.remove('active');
      }
    });

    langOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        const selectedLang = opt.getAttribute('data-lang');
        setLanguage(selectedLang);
        langSelector.classList.remove('active');
      });
    });
  }

  // Mobile Drawer Toggle
  if (mobileNavToggle && mobileNavDrawer) {
    mobileNavToggle.addEventListener('click', () => {
      const isOpen = mobileNavDrawer.classList.toggle('active');
      mobileNavToggle.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileNavDrawer.addEventListener('click', (e) => {
      if (e.target === mobileNavDrawer) {
        mobileNavDrawer.classList.remove('active');
        mobileNavToggle.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('active');
        mobileNavToggle.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Sticky Header Elevation on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Accordion for "Who We Serve" - Opens on Hover (mouseenter) & Click
  function activateServeItem(targetItem) {
    if (targetItem.classList.contains('active')) return;
    serveItems.forEach(otherItem => {
      otherItem.classList.remove('active');
    });
    targetItem.classList.add('active');
  }

  serveItems.forEach(item => {
    // Open on hover (mouse enter)
    item.addEventListener('mouseenter', () => {
      activateServeItem(item);
    });

    // Also open on click (for mobile touch devices)
    item.addEventListener('click', () => {
      activateServeItem(item);
    });
  });
});
