export const questionsData = {
  // أسئلة التعريفات
  definitions: [
    {
      id: 'def_1',
      question: 'عرف الأمن السيبراني.',
      answer: 'هو حماية البرامج والأجهزة وموارد البيانات المتصلة والمخزنة على الإنترنت. إنه عملية مستمرة للوعي الأمني والتخطيط الاستراتيجي والتنفيذ والمراقبة والتقييم.',
      type: 'definition',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'def_2',
      question: 'عرف الهجوم السيبراني (Cyber Attack).',
      answer: 'هو الوصول إلى الأنظمة الشرعية - الخوادم أو أجهزة الكمبيوتر أو الشبكة أو البرامج - بشكل غير قانوني وفرض السيطرة على هذه الأنظمة لتنفيذ أنشطة ضارة مثل سرقة المعلومات وتلف البيانات وتلف الأنظمة وانقطاع التشغيل السلس للشبكات المشروعة والأنظمة.',
      type: 'definition',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'def_3',
      question: 'عرف السرية (Confidentiality) في الأمن السيبراني.',
      answer: 'يقصد به أن البيانات متاحة فقط للأفراد المصرح لهم الوصول إليها بالدخول ولا تقع في الأيدي الخطأ.',
      type: 'definition',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'def_4',
      question: 'عرف السلامة (Integrity) في الأمن السيبراني.',
      answer: 'يقصد به أن البيانات دقيقة وموثوقة بشكل جيد ولم يتم تغييرها أو تعديلها والعبث بها.',
      type: 'definition',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'def_5',
      question: 'عرف التوافر (Availability) في الأمن السيبراني.',
      answer: 'هو ضمان سهولة الوصول إلى البيانات في أي وقت ومن أي مكان لتلبية احتياجات العملاء.',
      type: 'definition',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'def_6',
      question: 'عرف هجوم رفض الخدمة (DoS).',
      answer: 'هو حدث متعلق بأمن الإنترنت يهاجم فيه المتسللون (hackers) خادمًا معينًا (Server) يقوم بتشغيل بعض خدمات الإنترنت لمنعه من العمل بشكل طبيعي أو لإيقاف الخدمات.',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_7',
      question: 'عرف هجوم رفض الخدمة الموزع (DDoS).',
      answer: 'هو نوع من هجمات رفض الخدمة DoS. يتم فيه تعطيل الخوادم أو إغراقها بحركة المرور الضارة لمنع المستخدمين الشرعيين من الوصول إلى حساباتهم أو الخدمات المشروعة عبر الإنترنت.',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_8',
      question: 'عرف القرصنة الحاسوبية (Computer Hacking).',
      answer: 'إنها ممارسة تعديل أجهزة وبرامج الحاسوب لتحقيق هدف خارج الغرض الأصلي للمستخدم.',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_9',
      question: 'عرف هجمات الرجل في المنتصف (MITM).',
      answer: 'في هجمات الرجل في الوسط "Man-in-the-Middle" يعترض المتسلل (hacker) الاتصال العادي بين المستخدم وخادم الويب (web server) دون أي معرفة بكل من المستخدم والخادم.',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_10',
      question: 'عرف هجوم حقن لغة الاستعلامات المهيكلة (SQL Injection).',
      answer: 'هو نوع من الممارسات الضارة لسرقة البيانات القيمة من خادم قاعدة البيانات (database server).',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_11',
      question: 'عرف الرسائل الدعائية أو البريد العشوائي (Spamming).',
      answer: 'في مجال تكنولوجيا المعلومات هو اسم إرسال الرسائل غير المرغوب فيها والرسائل إلى المستخدمين بالجملة دون الحصول على موافقة من المستخدمين.',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_12',
      question: 'عرف الإرهاب الإلكتروني (Cyber Terrorism).',
      answer: 'هو نوع من الجرائم الإلكترونية (cyber crime) للهجوم أو التهديد بمهاجمة أنظمة الكمبيوتر أو البيانات المهمة أو شبكات الكمبيوتر إما لتلف الموارد السيبرانية أو لسرقة المعلومات الهامة.',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_13',
      question: 'عرف إساءة استخدام الملكية الرقمية (Digital Property Misappropriation).',
      answer: 'هو استخدام غير قانوني أو احتيالي للموارد الرقمية مثل البرامج والمحتوى الرقمي، بما في ذلك الكتب الإلكترونية والتسجيلات الصوتية ومقاطع الفيديو والصور والكتابات واللوحات وما شابه ذلك دون إذن لمالك هذه الملكية الرقمية.',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_14',
      question: 'عرف استغلال يوم الصفر (Zero-Day Exploitation).',
      answer: 'هو ثغرة أمنية في نظام برمجيات الكمبيوتر تُعرف بالضبط في نفس اليوم الذي تستغل فيه الهجمات الضارة تلك الثغرة الأمنية.',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_15',
      question: 'عرف التصيد الاحتيالي (Phishing).',
      answer: 'هو نوع من الهجمات الإلكترونية حيث يتم استهداف الشخص المستهدف برساجل البريد الإلكتروني التي تشابه إلى حد كبير رساجل البريد الإلكتروني الواردة من البنوك وارلات التأمي ومقدمي الخدمات اآلخري.',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_16',
      question: 'عرف التخريب الرقمي (Digital Vandalism).',
      answer: 'هو شكل مدمر من تهديدات الأمن السيبراني، والذي يتزايد بسرعة كبيرة في الوقت الحاضر. تتلف فيه البيانات أو الكمبيوتر أو الشبكات أو يتم التلاعب بها بحيث تتغير الأهداف الحقيقية لنظام تكنولوجيا المعلومات بشكل سيئ.',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_17',
      question: 'عرف المطاردة عبر الإنترنت (Cyber Stalking).',
      answer: 'هي واحدة من أخطر المشاكل في مجال الفضاء السيبراني. وهي شكل من أشكال المضايقة والتهديد.',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_18',
      question: 'عرف عمليات الاحتيال والتزوير الإلكتروني عبر الإنترنت (Cyber Frauds and Forgery).',
      answer: 'هي شكل جديد من أشكال الهجمات الإلكترونية في العالم الرقمي الحديث. التزوير والتزييف هو استخدام الكمبيوتر لتزييف وتزوير المستندات.',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_19',
      question: 'عرف اختراق الويب (Web Jacking).',
      answer: 'يتمل المخترق من الوصول إلى موقع ويب لمنظمة ما ثم يقوم بحجبه يو تعديله لخدمة مصالح سياسية يو اوتصادية يو اجتماعية.',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    }
  ],

  // أسئلة العدد
  enumerate: [
    {
      id: 'enum_1',
      question: 'عدد مكونات الأمن السيبراني (CIA Triad).',
      answer: ['السرية (Confidentiality)', 'السلامة (Integrity)', 'التوافر (Availability)'],
      type: 'enumerate',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'enum_2',
      question: 'عدد عناصر الأمن السيبراني.',
      answer: [
        'أمن المعلومات (Information security - IS)',
        'أمن الشبكة (Network security - NS)',
        'أمن التطبيق (Application security - AS)',
        'تخطيط استمرارية الأعمال / التعافي من الكوارث (Business continuity planning - BCP)/disaster recovery',
        'الأمن التشغيلي (Operational security - OPSEC)',
        'الأمن السحابي (The Cloud Security)',
        'أمن انترنت الأشياء (The IoT (Internet of Things) Security)'
      ],
      type: 'enumerate',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'enum_3',
      question: 'عدد المناطق المستهدفة بالهجمات السيبرانية.',
      answer: [
        'خوادم البيانات (Data servers)',
        'خوادم التطبيقات (Application servers)',
        'خوادم التخزين (Storage servers)',
        'معلومات مالية (Financial information)',
        'أنظمة التشغيل (Operational systems)',
        'شبكات الكمبيوتر (Computer networks)'
      ],
      type: 'enumerate',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'enum_4',
      question: 'عدد الأهداف الرئيسية للمتسللين (hackers) لإجراء هجمات إلكترونية.',
      answer: [
        'المال',
        'الانتقام',
        'المتعة',
        'عدم الكشف عن الهوية',
        'التجسس الإلكتروني'
      ],
      type: 'enumerate',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'enum_5',
      question: 'عدد المصادر الرئيسية لانتهاك السرية.',
      answer: [
        'سرقة أجهزة الكمبيوتر المحمولة للموظفين',
        'ترك المعلومات السرية لأجهزة الكمبيوتر دون رقابة',
        'توفير وصول غير مصرح به إلى شخص غير مهتم',
        'الوصول غير المصرح به من قبل المتسلل من خلال البرامج الضارة',
        'استشارة موظفي الشركة المخالفين لاتفاقيات السرية',
        'الاستخدام غير القانوني للمعلومات لتحقيق مكاسب شخصية أو تجارية'
      ],
      type: 'enumerate',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'enum_6',
      question: 'عدد أمثلة البيانات السرية.',
      answer: [
        'الملكية الفكرية (Intellectual property)',
        'معلومات الهوية الشخصية (Personal identity information)',
        'معلومات بطاقة الائتمان (Credit card information)',
        'معلومات الحساب المصرفي (Bank account information)',
        'المعلومات الصحية الشخصية (Personal health information)',
        'الأسرار التجارية (Business or trade secrets)'
      ],
      type: 'enumerate',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'enum_7',
      question: 'عدد المصادر الرئيسية لخرق التوافر.',
      answer: [
        'فشل الأجهزة (Failure of hardware)',
        'خلل في البرنامج (Malfunction of software)',
        'خنق عرض النطاق الترددي للبيانات (Choking of data bandwidth)',
        'هجمات رفض الخدمة (DoS attacks)'
      ],
      type: 'enumerate',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'enum_8',
      question: 'عدد الطرق التي يحقق بها المتسللون اختراق سلامة البيانات.',
      answer: [
        'إدخال البرمجيات الخبيثة على الخادم (Introduction of malware on the server)',
        'التشفير الخبيث للبيانات (Undoable malicious encryption of data)',
        'التلاعب بالبيانات الأصلية (Manipulation of original data)',
        'إدخال الفيروسات (Introduction of viruses)'
      ],
      type: 'enumerate',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'enum_9',
      question: 'عدد أنواع القرصنة الحاسوبية.',
      answer: [
        'قراصنة القبعة البيضاء (White Hat Hackers)',
        'قراصنة القبعة السوداء (Black Hat Hackers)',
        'قراصنة القبعة الرمادية (Grey Hat Hackers)'
      ],
      type: 'enumerate',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'enum_10',
      question: 'عدد الخطوات الرئيسية لهجوم الرجل في المنتصف (MITM).',
      answer: [
        'المتسلل يعترض الاتصال بين المستخدم والخادم.',
        'المتسلل يرسل نسخة من حركة مرور الويب إلى المستخدم والخادم.',
        'المتسلل يسرق المعلومات الحساسة.'
      ],
      type: 'enumerate',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'enum_11',
      question: 'عدد الأنواع الرئيسية لهجمات MITM (Man-in-the-Middle).',
      answer: [
        'هجمات انتحال IP (IP Spoofing)',
        'هجمات انتحال DNS (DNS Spoofing)',
        'هجمات انتحال ARP (ARP Spoofing)',
        'هجمات انتحال HTTPS (HTTPS Spoofing)',
        'هجمات انتحال البريد الإلكتروني (Email Spoofing)',
        'هجمات تتبع الجلسة (Session Hijacking)',
        'هجمات Wi-Fi الضارة (Malicious Wi-Fi Hotspots)'
      ],
      type: 'enumerate',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'enum_12',
      question: 'عدد الأنواع الرئيسية لهجمات DoS.',
      answer: [
        'هجوم الفيضان (Flood Attack)',
        'هجوم التعطيل (Crash Attack)',
        'هجوم التضخيم (Amplification Attack)',
        'هجوم Fragmentation (Fragmentation Attack)',
        'هجوم Smurf (Smurf Attack)',
        'هجوم SYN Flood (SYN Flood Attack)'
      ],
      type: 'enumerate',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'enum_13',
      question: 'عدد الأنواع الرئيسية لهجمات DDoS.',
      answer: [
        'هجمات طبقة التطبيق (Application-Layer Attacks)',
        'هجمات البروتوكول (Protocol Attacks)',
        'هجمات الحجم (Volumetric Attacks)',
        'هجمات الموارد (Resource Exhaustion Attacks)'
      ],
      type: 'enumerate',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'enum_14',
      question: 'عدد الطرق الرئيسية للتصيد الاحتيالي (Phishing) المستخدمة في أنشطة التصيد الحديثة.',
      answer: [
        'التصيد الاحتيالي عبر البريد الإلكتروني (Email Phishing)',
        'التصيد عبر الرسائل النصية القصيرة (SMS Phishing - Smishing)',
        'التصيد الصوتي (Voice Phishing - Vishing)'
      ],
      type: 'enumerate',
      category: 'أنواع الهجمات السيبرانية'
    }
  ],

  // أسئلة صح وخطأ
  trueFalse: [
    {
      id: 'tf_1',
      question: 'الأمن السيبراني هو مجرد إجراء يتم إجراؤه لمرة واحدة.',
      answer: false,
      rationale: 'الأمن السيبراني ليس مجرد إجراء يتم إجراؤه لمرة واحدة. بل هو عملية مستمرة تتطلب وعيًا وتخطيطًا وتنفيذًا ومراقبة وتقييمًا دائمًا لمواجهة التهديدات المتطورة.',
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_2',
      question: 'الهدف من نموذج CIA Triad هو أن يكون بمثابة دليل للمنظمات حول الاستراتيجيات الهامة المرتبطة بحماية الشبكة في ابتكار البيانات.',
      answer: true,
      rationale: 'نموذج CIA Triad (السرية، السلامة، التوافر) هو بالفعل إطار عمل أساسي يوجه المنظمات في تطوير استراتيجيات حماية البيانات والشبكات.',
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_3',
      question: 'خرق السرية يحدث عندما يتم الكشف عن المعلومات أو البيانات الشخصية المقدمة من قبل عميل لمنظمة دون الحصول على موافقة.',
      answer: true,
      rationale: 'هذا هو التعريف الدقيق لخرق السرية، حيث يتم الكشف عن معلومات حساسة لأطراف غير مصرح لها.',
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_4',
      question: 'المتسلل يهاجم بيانات العميل المخزنة على خوادم تابعة لمؤسسة ما، وعادة ما يتم ذلك من خلال طرق متعددة للوصول إلى المعلومات التي يتم توفيرها للمنظمة بسرية.',
      answer: true,
      rationale: 'هذا وصف دقيق لكيفية حدوث خرق السرية، حيث يسعى المتسللون للوصول غير المصرح به إلى البيانات السرية.',
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_5',
      question: 'يحدث خرق التوافر عندما يتعذر على المستخدم المصرح له الوصول إلى الخدمات عبر الإنترنت أو المعلومات الشخصية المصرح له.',
      answer: true,
      rationale: 'هذا هو التعريف الدقيق لخرق التوافر، والذي يعني عدم قدرة المستخدمين الشرعيين على الوصول إلى الموارد أو الخدمات.',
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_6',
      question: 'خرق السلامة يؤدي إلى إتلاف البيانات وبعد ذلك قد لا يكون لهذه البيانات أي قيمة.',
      answer: true,
      rationale: 'هذا صحيح، لأن خرق السلامة يعني المساس بدقة البيانات وصلاحيتها، مما قد يجعلها غير صالحة للاستخدام.',
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_7',
      question: 'الخطأ البشري والموظفون الداخليون ليسوا مصادر رئيسية لانتهاكات السرية.',
      answer: false,
      rationale: 'الخطأ البشري والموظفون الداخليون (سواء بقصد أو بدون قصد) هم من المصادر الرئيسية لانتهاكات السرية في العديد من الحالات.',
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_8',
      question: 'وفقًا لتقرير بحثي بجامعة ميريلاند، هناك هجوم متسلل بمعدل 39 ثانية (في المتوسط) على جهاز كمبيوتر متصل بالإنترنت.',
      answer: true,
      rationale: 'البيان صحيح وفقًا للمعلومات المقدمة، مما يشير إلى التهديد المستمر للهجمات السيبرانية.',
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'tf_9',
      question: 'هجوم DDoS أقل فتكًا من هجوم DoS العادي.',
      answer: false,
      rationale: 'هجوم DDoS (رفض الخدمة الموزع) هو أكثر فتكًا وأصعب في التخفيف من هجوم DoS العادي لأنه يستخدم مصادر متعددة لمهاجمة الهدف.',
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'tf_10',
      question: 'في هجوم DDoS، يستخدم المخترق جهاز تحكم لاختراق العديد من الأجهزة المعرضة للخطر في جميع أنحاء العالم.',
      answer: true,
      rationale: 'هذا صحيح، حيث يتم التحكم في الأجهزة المصابة (الروبوتات/الزومبي) لمهاجمة الهدف بشكل منسق في هجوم DDoS.',
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'tf_11',
      question: 'قراصنة القبعة البيضاء (White Hat Hackers) يقومون باختراق النظام بنوايا جيدة بهدف إصلاح الثغرات الأمنية.',
      answer: true,
      rationale: 'قراصنة القبعة البيضاء هم خبراء أمنيون يستخدمون مهاراتهم بشكل أخلاقي لاكتشاف الثغرات وإصلاحها.',
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'tf_12',
      question: 'الرسائل الدعائية أو البريد العشوائي (Spamming) تستخدم فقط لأغراض التسويق ولا يمكن أن تحتوي على برامج ضارة.',
      answer: false,
      rationale: 'الرسائل الدعائية يمكن أن تحتوي على برامج ضارة وفيروسات وروابط تصيد احتيالي، وليست مقتصرة على التسويق.',
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'tf_13',
      question: 'في استغلال يوم الصفر (Zero-Day Exploitation)، يكون لدى مهندسي البرمجيات وقت كافٍ لإصلاح الثغرة الأمنية قبل أن تستغلها الهجمات الضارة.',
      answer: false,
      rationale: 'في استغلال يوم الصفر، تُعرف الثغرة الأمنية وتُستغل في نفس اليوم، مما لا يترك وقتًا كافيًا للمطورين لإصدار إصلاح.',
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'tf_14',
      question: 'النساء هن الأكثر تضرراً من المطاردة عبر الإنترنت.',
      answer: true,
      rationale: 'هذا البيان صحيح وفقًا للمعلومات المقدمة في العديد من الدراسات حول المطاردة عبر الإنترنت.',
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'tf_15',
      question: 'التزوير والتزييف عبر الإنترنت هو استخدام الكمبيوتر لتزييف وتزوير المستندات.',
      answer: true,
      rationale: 'هذا هو التعريف الدقيق للاحتيال والتزوير الإلكتروني في سياق الجرائم السيبرانية.',
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'tf_16',
      question: 'اختراق الويب (Web Jacking) هو عملية يقوم فيها المخترق بالسيطرة على موقع ويب وتغيير محتواه أو حجبه لخدمة مصالح معينة.',
      answer: true,
      rationale: 'هذا هو التعريف الدقيق لاختراق الويب.',
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    }
  ],

  // أسئلة اختيارات متعددة
  multipleChoice: [
    {
      id: 'mc_1',
      question: 'أي مما يلي ليس من مكونات الأمن السيبراني (CIA Triad)؟',
      options: [
        'السرية (Confidentiality)',
        'السلامة (Integrity)',
        'التوافر (Availability)',
        'التشفير (Encryption)'
      ],
      correctAnswer: 3, // التشفير ليس جزءًا من CIA Triad مباشرة
      type: 'multipleChoice',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'mc_2',
      question: 'متى يستطيع المتسللون (hackers) القيام بهجوم ناجح؟',
      options: [
        'عندما يكون النظام غير محمي بشكل جيد ولديه ثغرات أمنية.',
        'عندما يكون النظام محميًا بشكل كامل.',
        'عندما يقوم الموظفون بتحديث البرامج بانتظام.',
        'عندما يتم استخدام جدار حماية قوي.'
      ],
      correctAnswer: 0,
      type: 'multipleChoice',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'mc_3',
      question: 'أي مما يلي ليس هدفًا من أهداف الهجمات السيبرانية؟',
      options: [
        'سرقة البيانات',
        'تلف الأنظمة',
        'تعطيل الخدمات',
        'تعزيز أمن الشبكة' // هذا عكس أهداف الهجمات
      ],
      correctAnswer: 3,
      type: 'multipleChoice',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'mc_4',
      question: 'أي من أنواع الهجمات السيبرانية التالية يندرج ضمن أهداف خرق التوافر؟',
      options: [
        'هجمات البرامج الضارة',
        'هجمات رفض الخدمة (DoS/DDoS)', // DoS attack is a source of availability breach
        'هجمات التصيد الاحتيالي',
        'اختراق الملكية الرقمية'
      ],
      correctAnswer: 1,
      type: 'multipleChoice',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'mc_5',
      question: 'بلغ إجمالي الإنفاق العالمي المتعلق بالأمن السيبراني في بداية عام 2022:',
      options: [
        'حوالي 114 مليار دولار أمريكي.',
        'أقل بقليل من 2 مليار دولار أمريكي.',
        'أكثر من 150 مليار دولار أمريكي.',
        '3.86 مليون دولار أمريكي.'
      ],
      correctAnswer: 2,
      type: 'multipleChoice',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'mc_6',
      question: 'ما هو الفرق الرئيسي بين هجوم DoS و DDoS؟',
      options: [
        'DoS يستهدف خادمًا واحدًا بينما DDoS يستهدف عدة خوادم.',
        'DoS يستخدم جهازًا واحدًا لمهاجمة الهدف، بينما DDoS يستخدم أجهزة متعددة (شبكة روبوتات).',
        'DDoS أسهل في منعه من DoS.',
        'لا يوجد فرق جوهري بينهما.'
      ],
      correctAnswer: 1,
      type: 'multipleChoice',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'mc_7',
      question: 'أي نوع من قراصنة الكمبيوتر (hackers) يكتشف الثغرات الأمنية ويبلغ مسؤولي الموقع ويعرض إصلاح الخطأ مقابل رسوم استشارية؟',
      options: [
        'قراصنة القبعة السوداء',
        'قراصنة القبعة الحمراء',
        'قراصنة القبعة الرمادية',
        'قراصنة القبعة الزرقاء'
      ],
      correctAnswer: 2,
      type: 'multipleChoice',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'mc_8',
      question: 'ما هي لغات البرمجة التي تستغلها هجمات SQL Injection بشكل شائع في مواقع الويب التقليدية؟',
      options: [
        'Java و Python',
        'C++ و C#',
        'PHP و ASP.NET',
        'Ruby و Swift'
      ],
      correctAnswer: 2,
      type: 'multipleChoice',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'mc_9',
      question: 'أي من التالي يُعرف بإرسال رسائل غير مرغوب فيها بالجملة دون موافقة المستخدمين، ويمكن أن ينشر البرامج الضارة والفيروسات؟',
      options: [
        'هجمات DoS',
        'التصيد الاحتيالي',
        'الرسائل الدعائية أو البريد العشوائي (Spamming)',
        'هجمات MITM'
      ],
      correctAnswer: 2,
      type: 'multipleChoice',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'mc_10',
      question: 'الاستغلال الذي يحدث لثغرة أمنية في نظام برمجيات الكمبيوتر في نفس اليوم الذي تُعرف فيه هذه الثغرة، مما لا يترك وقتًا للإصلاح، يُسمى:',
      options: [
        'هجوم DDoS',
        'استغلال يوم الصفر (Zero-Day Exploitation)',
        'هجوم MITM',
        'التصيد الاحتيالي'
      ],
      correctAnswer: 1,
      type: 'multipleChoice',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'mc_11',
      question: 'أي من أشكال التصيد الاحتيالي (Phishing) يستخدم المكالمات الهاتفية كوسيلة للسرقة؟',
      options: [
        'التصيد عبر الرسائل النصية القصيرة (SMS Phishing)',
        'التصيد الصوتي (Vishing)',
        'التصيد الاحتيالي عبر البريد الإلكتروني',
        'هجمات SQL Injection'
      ],
      correctAnswer: 1,
      type: 'multipleChoice',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'mc_12',
      question: 'ما هو الهدف الرئيسي من هجوم التخريب الرقمي (Digital Vandalism)؟',
      options: [
        'سرقة المعلومات المالية',
        'تعطيل الخدمات بشكل مؤقت',
        'إتلاف البيانات أو التلاعب بها لتغيير أهداف النظام',
        'التجسس على الاتصالات'
      ],
      correctAnswer: 2,
      type: 'multipleChoice',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'mc_13',
      question: 'ما هي الجريمة الإلكترونية التي تتضمن تهديد أو مهاجمة أنظمة الكمبيوتر أو البيانات المهمة لأغراض سياسية أو اجتماعية؟',
      options: [
        'التصيد الاحتيالي',
        'القرصنة الحاسوبية',
        'الإرهاب الإلكتروني (Cyber Terrorism)',
        'إساءة استخدام الملكية الرقمية'
      ],
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
export const createMixedQuiz = (numQuestions = 100) => {
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

