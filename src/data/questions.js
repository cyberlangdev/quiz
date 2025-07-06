// بيانات الأسئلة لاختبار الأمن السيبراني

export const questionsData = {
  // أسئلة التعريفات
  definitions: [
    {
      id: 'def_1',
      question: 'عرف الكمبيوتر.',
      answer: 'جهاز إلكتروني يأخذ البيانات الأولية ويعالجها ويخرجها.',
      type: 'definition',
      category: 'مقدمة في الكمبيوتر والشبكات'
    },
    {
      id: 'def_2',
      question: 'عرف شبكة الحاسوب.',
      answer: 'مجموعة من الحواسيب مرتبطة ببعضها البعض لتبادل موارد الشبكة.',
      type: 'definition',
      category: 'مقدمة في الكمبيوتر والشبكات'
    },
    {
      id: 'def_3',
      question: 'عرف طوبولوجيا الشبكة.',
      answer: 'نوع من أنواع طرق ربط الحواسيب لتكوين شبكة.',
      type: 'definition',
      category: 'مقدمة في الكمبيوتر والشبكات'
    },
    {
      id: 'def_4',
      question: 'عرف بروتوكول اتصال الشبكة.',
      answer: 'قواعد ولوائح خاصة بالاتصال بين أي جهازين داخل الشبكة.',
      type: 'definition',
      category: 'مقدمة في الكمبيوتر والشبكات'
    },
    {
      id: 'def_5',
      question: 'عرف الإنترنت.',
      answer: 'الشبكة العالمية التي تربط الشبكات المنتشرة في جميع أنحاء العالم.',
      type: 'definition',
      category: 'الإنترنت'
    },
    {
      id: 'def_6',
      question: 'عرف IP Address.',
      answer: 'عنوان منطقي يتكون من 32 بت من الأرقام الثنائية، وهو عنوان فريد لكل جهاز متصل بالإنترنت.',
      type: 'definition',
      category: 'الإنترنت'
    },
    {
      id: 'def_7',
      question: 'عرف DNS Server.',
      answer: 'نوع من أنواع الخوادم التي تقوم بتحويل اسم النطاق إلى عنوان منطقي IP.',
      type: 'definition',
      category: 'الإنترنت'
    },
    {
      id: 'def_8',
      question: 'عرف الأمن السيبراني.',
      answer: 'حماية البرامج والأجهزة وموارد البيانات المتصلة والمخزنة على الإنترنت. عملية مستمرة للوعي الأمني والتخطيط الاستراتيجي والتنفيذ والمراقبة والتقييم.',
      type: 'definition',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'def_9',
      question: 'عرف الهجوم السيبراني (Cyber Attack).',
      answer: 'الوصول إلى الأنظمة الشرعية بشكل غير قانوني وفرض السيطرة عليها لتنفيذ أنشطة ضارة مثل سرقة المعلومات وتلف البيانات.',
      type: 'definition',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'def_10',
      question: 'عرف هجوم رفض الخدمة (DoS).',
      answer: 'حدث متعلق بأمن الإنترنت يهاجم فيه المتسللون خادمًا معينًا لمنعه من العمل بشكل طبيعي أو لإيقاف الخدمات.',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    }
  ],

  // أسئلة العدد
  enumerate: [
    {
      id: 'enum_1',
      question: 'عدد مكونات الكمبيوتر الحديث.',
      answer: ['مكونات برمجية (Software components)', 'مكونات مادية (Hardware components)'],
      type: 'enumerate',
      category: 'مقدمة في الكمبيوتر والشبكات'
    },
    {
      id: 'enum_2',
      question: 'عدد أجيال الكمبيوتر مع ذكر ما اعتمد عليه كل جيل.',
      answer: [
        'الجيل الأول (1937–1946): اعتمد على الصمامات المفرغة (ENIAC)',
        'الجيل الثاني (1947–1962): اعتمد على تقنية الترانزستور (UNIVAC1, IBM 650/700)',
        'الجيل الثالث (1963–1971): اعتمد على الدوائر المتكاملة (IBM 360 & 370, DPD-1)',
        'الجيل الرابع (1971–2010): اعتمد على المعالجات الدقيقة التكاملية واسعة النطاق (VLSI)',
        'الجيل الخامس (2010–Present): يعتمد على الذكاء الاصطناعي (AI) والتكامل واسع النطاق (ULSI)'
      ],
      type: 'enumerate',
      category: 'مقدمة في الكمبيوتر والشبكات'
    },
    {
      id: 'enum_3',
      question: 'عدد مكونات الأمن السيبراني (CIA Triad).',
      answer: ['السرية (Confidentiality)', 'السلامة (Integrity)', 'التوافر (Availability)'],
      type: 'enumerate',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'enum_4',
      question: 'عدد أنواع القرصنة الحاسوبية مع ذكر تعريف لكل نوع.',
      answer: [
        'القراصنة ذوو القبعة البيضاء (White Hat): يخترقون النظام للعثور على ثغرات أمنية وإخطار المنظمات لإصلاحها (أخلاقيون)',
        'القراصنة ذوو القبعة السوداء (Black Hat): يخترقون النظام بنوايا سيئة (لأسباب اجتماعية، سياسية، اقتصادية)',
        'القراصنة ذوو القبعة الرمادية (Grey Hat): يكتشفون نقاط الضعف الأمنية ويبلغون مسؤولي الموقع ويعرضون إصلاح الخطأ مقابل رسوم'
      ],
      type: 'enumerate',
      category: 'أنواع الهجمات السيبرانية'
    }
  ],

  // أسئلة صح وخطأ
  trueFalse: [
    {
      id: 'tf_1',
      question: 'الكمبيوتر هو جهاز إلكتروني يأخذ البيانات الأولية ويعالجها ويخرجها.',
      answer: true,
      type: 'trueFalse',
      category: 'مقدمة في الكمبيوتر والشبكات'
    },
    {
      id: 'tf_2',
      question: 'شبكة الحاسوب هي مجموعة من الحواسيب غير المرتبطة ببعضها البعض.',
      answer: false,
      type: 'trueFalse',
      category: 'مقدمة في الكمبيوتر والشبكات'
    },
    {
      id: 'tf_3',
      question: 'الجيل الأول من الكمبيوتر اعتمد على تقنية الترانزستور.',
      answer: false,
      type: 'trueFalse',
      category: 'مقدمة في الكمبيوتر والشبكات'
    },
    {
      id: 'tf_4',
      question: 'IP Address هو عنوان غير فريد لكل جهاز متصل بالإنترنت.',
      answer: false,
      type: 'trueFalse',
      category: 'الإنترنت'
    },
    {
      id: 'tf_5',
      question: 'الأمن السيبراني هو حماية البرامج والأجهزة وموارد البيانات المتصلة والمخزنة على الإنترنت.',
      answer: true,
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_6',
      question: 'الهجوم السيبراني هو الوصول إلى الأنظمة الشرعية بشكل قانوني.',
      answer: false,
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_7',
      question: 'هجوم رفض الخدمة الموزع (DDoS) يستخدم مصادر متعددة للهجوم.',
      answer: true,
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'tf_8',
      question: 'قراصنة القبعة البيضاء يخترقون النظام بنوايا سيئة.',
      answer: false,
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    }
  ],

  // أسئلة اختيارات متعددة
  multipleChoice: [
    {
      id: 'mc_1',
      question: 'أي من التالي يعتبر من مكونات الكمبيوتر المادية؟',
      options: [
        'نظام التشغيل',
        'برامج التطبيقات',
        'وحدة المعالجة المركزية (CPU)',
        'برامج تشغيل الأجهزة'
      ],
      correctAnswer: 2,
      type: 'multipleChoice',
      category: 'مقدمة في الكمبيوتر والشبكات'
    },
    {
      id: 'mc_2',
      question: 'الجيل الثالث من الكمبيوتر اعتمد على:',
      options: [
        'الصمامات المفرغة',
        'تقنية الترانزستور',
        'الدوائر المتكاملة',
        'الذكاء الاصطناعي'
      ],
      correctAnswer: 2,
      type: 'multipleChoice',
      category: 'مقدمة في الكمبيوتر والشبكات'
    },
    {
      id: 'mc_3',
      question: 'أي من أنواع شبكات الكمبيوتر التالية تغطي أصغر منطقة جغرافية؟',
      options: ['LAN', 'WAN', 'PAN', 'MAN'],
      correctAnswer: 2,
      type: 'multipleChoice',
      category: 'مقدمة في الكمبيوتر والشبكات'
    },
    {
      id: 'mc_4',
      question: 'ما هو عدد بتات عنوان IPv4؟',
      options: ['64 بت', '128 بت', '32 بت', '256 بت'],
      correctAnswer: 2,
      type: 'multipleChoice',
      category: 'الإنترنت'
    },
    {
      id: 'mc_5',
      question: 'أي من التالي ليس من مكونات الأمن السيبراني (CIA Triad)؟',
      options: [
        'السرية (Confidentiality)',
        'السلامة (Integrity)',
        'التوافر (Availability)',
        'التشفير (Encryption)'
      ],
      correctAnswer: 3,
      type: 'multipleChoice',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'mc_6',
      question: 'أي من التالي يعتبر من أهداف الهجمات السيبرانية؟',
      options: ['المتعة', 'الانتقام', 'المال', 'جميع ما ذكر'],
      correctAnswer: 3,
      type: 'multipleChoice',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'mc_7',
      question: 'أي من أنواع القرصنة الحاسوبية التالية يخترق النظام بنوايا سيئة؟',
      options: [
        'قراصنة القبعة البيضاء',
        'قراصنة القبعة السوداء',
        'قراصنة القبعة الرمادية',
        'جميع ما ذكر'
      ],
      correctAnswer: 1,
      type: 'multipleChoice',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'mc_8',
      question: 'ما هي لغات البرمجة المستخدمة في هجمات SQL Injection؟',
      options: ['Java و Python', 'C++ و C#', 'ASP و PHP', 'Ruby و Swift'],
      correctAnswer: 2,
      type: 'multipleChoice',
      category: 'أنواع الهجمات السيبرانية'
    }
  ]
};

// دالة لخلط الأسئلة
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// دالة لإنشاء اختبار مخلوط
export const createMixedQuiz = (numQuestions = 20) => {
  const allQuestions = [
    ...questionsData.definitions,
    ...questionsData.enumerate,
    ...questionsData.trueFalse,
    ...questionsData.multipleChoice
  ];
  
  const shuffled = shuffleArray(allQuestions);
  return shuffled.slice(0, Math.min(numQuestions, shuffled.length));
};

// دالة للحصول على أسئلة حسب النوع
export const getQuestionsByType = (type) => {
  return questionsData[type] || [];
};

// دالة للحصول على أسئلة حسب الفئة
export const getQuestionsByCategory = (category) => {
  const allQuestions = [
    ...questionsData.definitions,
    ...questionsData.enumerate,
    ...questionsData.trueFalse,
    ...questionsData.multipleChoice
  ];
  
  return allQuestions.filter(q => q.category === category);
};

