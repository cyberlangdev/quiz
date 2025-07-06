
export const questionsData = {
  // أسئلة التعريفات
  definitions: [
    {
      id: 'def_1',
      question: 'عرف الأمن السيبراني.',
      [cite_start]answer: 'هو حماية البرامج والأجهزة وموارد البيانات المتصلة والمخزنة على الإنترنت[cite: 258]. [cite_start]إنه عملية مستمرة للوعي الأمني والتخطيط الاستراتيجي والتنفيذ والمراقبة والتقييم[cite: 259].',
      type: 'definition',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'def_2',
      question: 'عرف الهجوم السيبراني (Cyber Attack).',
      [cite_start]answer: 'هو الوصول إلى الأنظمة الشرعية - الخوادم أو أجهزة الكمبيوتر أو الشبكة أو البرامج - بشكل غير قانوني وفرض السيطرة على هذه الأنظمة لتنفيذ أنشطة ضارة مثل سرقة المعلومات وتلف البيانات وتلف الأنظمة وانقطاع التشغيل السلس للشبكات المشروعة والأنظمة[cite: 294].',
      type: 'definition',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'def_3',
      question: 'عرف السرية (Confidentiality) في الأمن السيبراني.',
      [cite_start]answer: 'يقصد به أن البيانات متاحة فقط للأفراد المصرح لهم الوصول إليها بالدخول ولا تقع في الأيدي الخطأ[cite: 266].',
      type: 'definition',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'def_4',
      question: 'عرف السلامة (Integrity) في الأمن السيبراني.',
      [cite_start]answer: 'يقصد به أن البيانات دقيقة وموثوقة بشكل جيد ولم يتم تغييرها أو تعديلها والعبث بها[cite: 267].',
      type: 'definition',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'def_5',
      question: 'عرف التوافر (Availability) في الأمن السيبراني.',
      [cite_start]answer: 'هو ضمان سهولة الوصول إلى البيانات في أي وقت ومن أي مكان لتلبية احتياجات العملاء[cite: 268].',
      type: 'definition',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'def_6',
      question: 'عرف هجوم رفض الخدمة (DoS).',
      [cite_start]answer: 'هو حدث متعلق بأمن الإنترنت يهاجم فيه المتسللون (hackers) خادمًا معينًا (Server) يقوم بتشغيل بعض خدمات الإنترنت لمنعه من العمل بشكل طبيعي أو لإيقاف الخدمات[cite: 346].',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_7',
      question: 'عرف هجوم رفض الخدمة الموزع (DDoS).',
      [cite_start]answer: 'هو نوع من هجمات رفض الخدمة DoS[cite: 355]. [cite_start]يتم فيه تعطيل الخوادم أو إغراقها بحركة المرور الضارة لمنع المستخدمين الشرعيين من الوصول إلى حساباتهم أو الخدمات المشروعة عبر الإنترنت[cite: 356].',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_8',
      question: 'عرف القرصنة الحاسوبية (Computer Hacking).',
      [cite_start]answer: 'إنها ممارسة تعديل أجهزة وبرامج الحاسوب لتحقيق هدف خارج الغرض الأصلي للمستخدم[cite: 363].',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_9',
      question: 'عرف هجمات الرجل في المنتصف (MITM).',
      [cite_start]answer: 'في هجمات الرجل في الوسط "Man-in-the-Middle" يعترض المتسلل (hacker) الاتصال العادي بين المستخدم وخادم الويب (web server) دون أي معرفة بكل من المستخدم والخادم[cite: 376].',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_10',
      question: 'عرف هجوم حقن لغة الاستعلامات المهيكلة (SQL Injection).',
      [cite_start]answer: 'هو نوع من الممارسات الضارة لسرقة البيانات القيمة من خادم قاعدة البيانات (database server)[cite: 384].',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_11',
      question: 'عرف الرسائل الدعائية أو البريد العشوائي (Spamming).',
      [cite_start]answer: 'في مجال تكنولوجيا المعلومات هو اسم إرسال الرسائل غير المرغوب فيها والرسائل إلى المستخدمين بالجملة دون الحصول على موافقة من المستخدمين[cite: 407].',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_12',
      question: 'عرف الإرهاب الإلكتروني (Cyber Terrorism).',
      [cite_start]answer: 'هو نوع من الجرائم الإلكترونية (cyber crime) للهجوم أو التهديد بمهاجمة أنظمة الكمبيوتر أو البيانات المهمة أو شبكات الكمبيوتر [cite: 421] [cite_start]إما لتلف الموارد السيبرانية أو لسرقة المعلومات الهامة[cite: 421].',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_13',
      question: 'عرف إساءة استخدام الملكية الرقمية (Digital Property Misappropriation).',
      [cite_start]answer: 'هو استخدام غير قانوني أو احتيالي للموارد الرقمية مثل البرامج والمحتوى الرقمي، بما في ذلك الكتب الإلكترونية والتسجيلات الصوتية ومقاطع الفيديو والصور والكتابات واللوحات وما شابه ذلك دون إذن لمالك هذه الملكية الرقمية[cite: 429].',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_14',
      question: 'عرف استغلال يوم الصفر (Zero-Day Exploitation).',
      [cite_start]answer: 'هو ثغرة أمنية في نظام برمجيات الكمبيوتر تُعرف بالضبط في نفس اليوم الذي تستغل فيه الهجمات الضارة تلك الثغرة الأمنية[cite: 438].',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_15',
      question: 'عرف التصيد الاحتيالي (Phishing).',
      [cite_start]answer: 'هو نوع من الهجمات الإلكترونية حيث يتم استهداف الشخص المستهدف برسائل البريد الإلكتروني التي تشابه إلى حد كبير رسائل البريد الإلكتروني الواردة من البنوك وشركات التأمين ومقدمي الخدمات الآخرين[cite: 446].',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_16',
      question: 'عرف التخريب الرقمي (Digital Vandalism).',
      [cite_start]answer: 'هو شكل مدمر من تهديدات الأمن السيبراني [cite: 458][cite_start]، والذي يتزايد بسرعة كبيرة في الوقت الحاضر[cite: 458]. [cite_start]تتلف فيه البيانات أو الكمبيوتر أو الشبكات أو يتم التلاعب بها بحيث تتغير الأهداف الحقيقية لنظام تكنولوجيا المعلومات بشكل سيئ[cite: 458].',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_17',
      question: 'عرف المطاردة عبر الإنترنت (Cyber Stalking).',
      [cite_start]answer: 'هي واحدة من أخطر المشاكل في مجال الفضاء السيبراني[cite: 467]. [cite_start]وهي شكل من أشكال المضايقة والتهديد[cite: 468].',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_18',
      question: 'عرف عمليات الاحتيال والتزوير الإلكتروني عبر الإنترنت (Cyber Frauds and Forgery).',
      [cite_start]answer: 'هي شكل جديد من أشكال الهجمات الإلكترونية في العالم الرقمي الحديث[cite: 474]. [cite_start]التزوير والتزييف هو استخدام الكمبيوتر لتزييف وتزوير المستندات[cite: 475].',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'def_19',
      question: 'عرف اختراق الويب (Web Jacking).',
      [cite_start]answer: 'يتمل المخترق من الوصول إلى موقع ويب لمنظمة ما ثم يقوم بحجبه أو تعديله لخدمة مصالح سياسية أو اقتصادية أو اجتماعية[cite: 483].',
      type: 'definition',
      category: 'أنواع الهجمات السيبرانية'
    }
  ],

  // أسئلة العدد
  enumerate: [
    {
      id: 'enum_1',
      question: 'عدد مكونات الأمن السيبراني (CIA Triad).',
      [cite_start]answer: ['السرية (Confidentiality) [cite: 265][cite_start]', 'السلامة (Integrity) [cite: 265][cite_start]', 'التوافر (Availability) [cite: 265]'],
      type: 'enumerate',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'enum_2',
      question: 'عدد عناصر الأمن السيبراني.',
      answer: [
        [cite_start]'أمن المعلومات (Information security - IS) [cite: 270]',
        [cite_start]'أمن الشبكة (Network security - NS) [cite: 270]',
        [cite_start]'أمن التطبيق (Application security - AS) [cite: 270]',
        [cite_start]'تخطيط استمرارية الأعمال / التعافي من الكوارث (Business continuity planning - BCP)/disaster recovery [cite: 270]',
        [cite_start]'الأمن التشغيلي (Operational security - OPSEC) [cite: 270]',
        [cite_start]'الأمن السحابي (The Cloud Security) [cite: 270]',
        [cite_start]'أمن انترنت الأشياء (The IoT (Internet of Things) Security) [cite: 270]'
      ],
      type: 'enumerate',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'enum_3',
      question: 'عدد المناطق المستهدفة بالهجمات السيبرانية.',
      answer: [
        [cite_start]'خوادم البيانات (Data servers) [cite: 298]',
        [cite_start]'خوادم التطبيقات (Application servers) [cite: 298]',
        [cite_start]'خوادم التخزين (Storage servers) [cite: 298]',
        [cite_start]'معلومات مالية (Financial information) [cite: 298]',
        [cite_start]'أنظمة التشغيل (Operational systems) [cite: 298]',
        [cite_start]'شبكات الكمبيوتر (Computer networks) [cite: 298]'
      ],
      type: 'enumerate',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'enum_4',
      question: 'عدد الأهداف الرئيسية للمتسللين (hackers) لإجراء هجمات إلكترونية.',
      answer: [
        [cite_start]'المال [cite: 308]',
        [cite_start]'الانتقام [cite: 309]',
        [cite_start]'المتعة [cite: 310]',
        [cite_start]'عدم الكشف عن الهوية [cite: 312]',
        [cite_start]'التجسس الإلكتروني [cite: 315]'
      ],
      type: 'enumerate',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'enum_5',
      question: 'عدد المصادر الرئيسية لانتهاك السرية.',
      answer: [
        [cite_start]'سرقة أجهزة الكمبيوتر المحمولة للموظفين [cite: 323]',
        [cite_start]'ترك المعلومات السرية لأجهزة الكمبيوتر دون رقابة [cite: 323]',
        [cite_start]'توفير وصول غير مصرح به إلى شخص غير مهتم [cite: 323]',
        [cite_start]'الوصول غير المصرح به من قبل المتسلل من خلال البرامج الضارة [cite: 323]',
        [cite_start]'استشارة موظفي الشركة المخالفين لاتفاقيات السرية [cite: 323]',
        [cite_start]'الاستخدام غير القانوني للمعلومات لتحقيق مكاسب شخصية أو تجارية [cite: 323]'
      ],
      type: 'enumerate',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'enum_6',
      question: 'عدد أمثلة البيانات السرية.',
      answer: [
        [cite_start]'الملكية الفكرية (Intellectual property) [cite: 324]',
        [cite_start]'معلومات الهوية الشخصية (Personal identity information) [cite: 324]',
        [cite_start]'معلومات بطاقة الائتمان (Credit card information) [cite: 324]',
        [cite_start]'معلومات الحساب المصرفي (Bank account information) [cite: 324]',
        [cite_start]'المعلومات الصحية الشخصية (Personal health information) [cite: 324]',
        [cite_start]'الأسرار التجارية (Business or trade secrets) [cite: 324]'
      ],
      type: 'enumerate',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'enum_7',
      question: 'عدد المصادر الرئيسية لخرق التوافر.',
      answer: [
        [cite_start]'فشل الأجهزة (Failure of hardware) [cite: 331]',
        [cite_start]'خلل في البرنامج (Malfunction of software) [cite: 331]',
        [cite_start]'خنق عرض النطاق الترددي للبيانات (Choking of data bandwidth) [cite: 331]',
        [cite_start]'هجمات رفض الخدمة (DoS attacks) [cite: 331]'
      ],
      type: 'enumerate',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'enum_8',
      question: 'عدد الطرق التي يحقق بها المتسللون اختراق سلامة البيانات.',
      answer: [
        [cite_start]'إدخال البرمجيات الخبيثة على الخادم (Introduction of malware on the server) [cite: 339]',
        [cite_start]'التشفير الخبيث للبيانات (Undoable malicious encryption of data) [cite: 339]',
        [cite_start]'التلاعب بالبيانات الأصلية (Manipulation of original data) [cite: 339]',
        [cite_start]'إدخال الفيروسات (Introduction of viruses) [cite: 339]'
      ],
      type: 'enumerate',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'enum_9',
      question: 'عدد أهم أنواع الهجمات الإلكترونية.',
      answer: [
        [cite_start]'هجمات البرامج الضارة (Malware attacks) [cite: 299]',
        [cite_start]'هجمات التصيد الاحتيالي (Phishing attacks) [cite: 299]',
        [cite_start]'هجوم حقن لغة الاستعلامات المهيكلة (Structured Query Language - SQL Injection) [cite: 299]',
        [cite_start]'هجمات رفض الخدمة (Denial-of-service - DoS) attacks [cite: 299]',
        [cite_start]'هجمات رفض الخدمة الموزعة (Distributed Denial-of-service - DDoS) attacks [cite: 299]',
        [cite_start]'هجمات الرجل في الوسط (Man-in-the-middle - MITM) attacks [cite: 299]',
        [cite_start]'هجوم اقتحام العملات المشفرة (Crypto jacking attacks) [cite: 299]',
        [cite_start]'هجوم الرسائل الدعائية والبريد العشوائي (Spamming) [cite: 300]',
        [cite_start]'هجوم الإرهاب الإلكتروني (Cyber terrorism) [cite: 300]',
        [cite_start]'هجوم إساءة استخدام الملكية الرقمية (Digital Property Misappropriation) [cite: 300]',
        [cite_start]'هجوم استغلال يوم الصفر (Zero-Day Exploitation) [cite: 300]',
        [cite_start]'هجوم التخريب الرقمي (Digital Vandalism) [cite: 300]',
        [cite_start]'هجوم المطاردة عبر الإنترنت (Cyber stalking) [cite: 300]',
        [cite_start]'هجوم عمليات الاحتيال والتزوير الرقمي (Cyber Frauds and Forgery) [cite: 300]'
      ],
      type: 'enumerate',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'enum_10',
      question: 'عدد الأنواع الرئيسية لهجمات DoS.',
      answer: [
        [cite_start]'هجوم خادم DNS (DNS server attack) [cite: 354]',
        [cite_start]'هجوم خادم HTTP (HTTP server attack) [cite: 354]',
        [cite_start]'تدفق ICMP (ICMP flooding) [cite: 354]',
        [cite_start]'هجوم الشبكة أو هجوم تجاوز سعة المخزن المؤقت (Network or buffer overflow attack) [cite: 354]',
        [cite_start]'هجوم ملفات الأسماء الكبيرة على الشبكة أو الخادم (Large name files attack on the network or server) [cite: 354]',
        [cite_start]'هجوم الفيضان SYN على بروتوكول جلسة TCP (SYN flood attack on TCP handshake protocol) [cite: 354]'
      ],
      type: 'enumerate',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'enum_11',
      question: 'عدد الأنواع الرئيسية لهجمات DDoS.',
      answer: [
        [cite_start]'هجمات طبقة التطبيقات القائمة على الاتصال (Connection-based application-layer attacks) [cite: 362]',
        [cite_start]'هجمات بروتوكول عديم الاتصال من شبكات روبوت متعددة (Connectionless volumetric attacks from multiple botnets) [cite: 362]',
        [cite_start]'هجمات استنفاذ جدول الحالة (State exhaustion table attacks) [cite: 362]',
        [cite_start]'جميع التقنيات الأخرى المستخدمة في هجمات DoS [cite: 362]'
      ],
      type: 'enumerate',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'enum_12',
      question: 'عدد أنواع القرصنة الحاسوبية.',
      answer: [
        [cite_start]'قراصنة القبعة البيضاء (White Hat) [cite: 367]',
        [cite_start]'قراصنة القبعة السوداء (Black Hat) [cite: 370]',
        [cite_start]'قراصنة القبعة الرمادية (Grey Hat) [cite: 374]'
      ],
      type: 'enumerate',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'enum_13',
      question: 'عدد الأنواع الرئيسية لهجمات MITM (Man-in-the-Middle).',
      answer: [
        [cite_start]'انتحال DNS (DNS spoofing) [cite: 382]',
        [cite_start]'انتحال HTTP (HTTP spoofing) [cite: 382]',
        [cite_start]'انتحال عنوان IP (IP spoofing) [cite: 382]',
        [cite_start]'اختطاف البريد الإلكتروني (Email hijacking) [cite: 382]',
        [cite_start]'اختطاف طبقة مآخذ التوصيل الآمنة SSL (SSL (Secure Sockets Layer) hijacking) [cite: 382]',
        [cite_start]'التنصت على شبكة Wi-Fi (Wi-Fi network eavesdropping) [cite: 382]',
        [cite_start]'سرقة ملفات تعريف الارتباط الموضوعة على المتصفحات (Stealing the cookies set on the browsers) [cite: 382]'
      ],
      type: 'enumerate',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'enum_14',
      question: 'عدد الطرق الرئيسية للتصيد الاحتيالي (Phishing) المستخدمة في أنشطة التصيد الحديثة.',
      answer: [
        [cite_start]'المكالمات الهاتفية (Telephone calls) [cite: 456]',
        [cite_start]'رسائل البريد الإلكتروني (Emails) [cite: 457]',
        [cite_start]'الرسائل النصية القصيرة (SMS) [cite: 457]'
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
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_2',
      [cite_start]question: 'الهدف من نموذج CIA Triad هو أن يكون بمثابة دليل للمنظمات حول الاستراتيجيات الهامة المرتبطة بحماية الشبكة في ابتكار البيانات. [cite: 265]',
      answer: true,
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_3',
      [cite_start]question: 'خرق السرية يحدث عندما يتم الكشف عن المعلومات أو البيانات الشخصية المقدمة من قبل عميل لمنظمة دون الحصول على موافقة. [cite: 319]',
      answer: true,
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_4',
      [cite_start]question: 'المتسلل يهاجم بيانات العميل المخزنة على خوادم تابعة لمؤسسة ما، وعادة ما يتم ذلك من خلال طرق متعددة للوصول إلى المعلومات التي يتم توفيرها للمنظمة بسرية. [cite: 320]',
      answer: true,
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_5',
      [cite_start]question: 'يحدث خرق التوافر عندما يتعذر على المستخدم المصرح له الوصول إلى الخدمات عبر الإنترنت أو المعلومات الشخصية المصرح له. [cite: 326]',
      answer: true,
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_6',
      [cite_start]question: 'خرق السلامة يؤدي إلى إتلاف البيانات وبعد ذلك قد لا يكون لهذه البيانات أي قيمة. [cite: 337]',
      answer: true,
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_7',
      question: 'الخطأ البشري والموظفون الداخليون ليسوا مصادر رئيسية لانتهاكات السرية.',
      answer: false,
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_8',
      [cite_start]question: 'تكلفة الأضرار العالمية المتكبدة بسبب الجرائم الإلكترونية تجاوزت 6 تريليون دولار أمريكي. [cite: 284]',
      answer: true,
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_9',
      [cite_start]question: 'متوسط التكلفة السنوية المتعلقة بالأمن السيبراني يبلغ حوالي 11.7 مليون دولار أمريكي لكل شركة. [cite: 291]',
      answer: true,
      type: 'trueFalse',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'tf_10',
      [cite_start]question: 'وفقًا لتقرير بحثي بجامعة ميريلاند، هناك هجوم متسلل بمعدل 39 ثانية (في المتوسط) على جهاز كمبيوتر متصل بالإنترنت. [cite: 343]',
      answer: true,
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'tf_11',
      [cite_start]question: 'هجوم DDoS أقل فتكًا من هجوم DoS العادي. [cite: 357]',
      answer: false,
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'tf_12',
      [cite_start]question: 'في هجوم DDoS، يستخدم المخترق جهاز تحكم لاختراق العديد من الأجهزة المعرضة للخطر في جميع أنحاء العالم. [cite: 359]',
      answer: true,
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'tf_13',
      question: 'قراصنة القبعة السوداء (Black Hat) يقومون باختراق النظام بنوايا جيدة بهدف إصلاح الثغرات الأمنية.',
      answer: false,
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'tf_14',
      question: 'الرسائل الدعائية (Spamming) تستخدم فقط لأغراض التسويق ولا يمكن أن تحتوي على برامج ضارة.',
      answer: false,
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'tf_15',
      question: 'في استغلال يوم الصفر (Zero-Day Exploitation)، يكون لدى مهندسي البرمجيات وقت كافٍ لإصلاح الثغرة الأمنية قبل أن تستغلها الهجمات الضارة.',
      answer: false,
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'tf_16',
      [cite_start]question: 'النساء هن الأكثر تضرراً من المطاردة عبر الإنترنت. [cite: 468]',
      answer: true,
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'tf_17',
      [cite_start]question: 'التزوير والتزييف عبر الإنترنت هو استخدام الكمبيوتر لتزييف وتزوير المستندات. [cite: 475]',
      answer: true,
      type: 'trueFalse',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'tf_18',
      [cite_start]question: 'الهدف الأساسي في جميع أنماط التصيد الاحتيالي الثلاثة هو سرقة هوية المستخدم الشرعي. [cite: 458]',
      answer: true,
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
        [cite_start]'عندما يتم خرق أحد مكونات الأمن السيبراني (CIA Triad). [cite: 318]',
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
        [cite_start]'المال [cite: 308]',
        [cite_start]'الانتقام [cite: 309]',
        [cite_start]'المتعة [cite: 310]',
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
        [cite_start]'هجمات رفض الخدمة (DoS) [cite: 331]', // DoS attack is a source of availability breach
        'هجمات التصيد الاحتيالي',
        'اختراق الملكية الرقمية'
      ],
      correctAnswer: 1,
      type: 'multipleChoice',
      category: 'أساسيات الأمن السيبراني'
    },
    {
      id: 'mc_5',
      [cite_start]question: 'بلغ إجمالي الإنفاق العالمي المتعلق بالأمن السيبراني في بداية عام 2022: [cite: 282]',
      options: [
        'حوالي 114 مليار دولار أمريكي.',
        'أقل بقليل من 2 مليار دولار أمريكي.',
        'تجاوز تريليون دولار أمريكي.',
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
        [cite_start]'DoS يستخدم مصدرًا واحدًا للهجوم بينما DDoS يستخدم مصادر متعددة. [cite: 357]',
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
        'قراصنة القبعة البيضاء (White Hat)',
        'قراصنة القبعة السوداء (Black Hat)',
        [cite_start]'قراصنة القبعة الرمادية (Grey Hat) [cite: 374]',
        'قراصنة القبعة الحمراء'
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
        [cite_start]'ASP و PHP [cite: 385]',
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
        [cite_start]'الرسائل الدعائية (Spamming) [cite: 407, 409]',
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
        [cite_start]'استغلال يوم الصفر (Zero-Day Exploitation) [cite: 438]',
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
        [cite_start]'التصيد الصوتي (Voice Phishing) [cite: 449]',
        'التصيد الاحتيالي عبر البريد الإلكتروني',
        'هجمات SQL Injection'
      ],
      correctAnswer: 1,
      type: 'multipleChoice',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'mc_12',
      question: 'ما هو أحد الأعراض الرئيسية لهجوم رفض الخدمة (DoS) للضحية؟',
      options: [
        'زيادة سرعة الوصول إلى الخدمة عبر الإنترنت.',
        'زيادة حجم رسائل البريد الإلكتروني العادية.',
        [cite_start]'تأخيرات كبيرة في فتح الملفات على المواقع. [cite: 352]',
        'تحسن أداء الخدمات.'
      ],
      correctAnswer: 2,
      type: 'multipleChoice',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'mc_13',
      question: 'ما هي الطريقة التي يمكن من خلالها تخفيف هجوم رفض الخدمة (DoS)؟',
      options: [
        [cite_start]'توجيه حركة المرور الضارة. [cite: 353]',
        'زيادة التحميل على الخادم.',
        'إيقاف أنظمة كشف التسلل.',
        'إيقاف جدران الحماية الأمنية.'
      ],
      correctAnswer: 0,
      type: 'multipleChoice',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'mc_14',
      question: 'أي من أنواع الهجمات التالية لا يعتمد على مصدر واحد بل على مصادر متعددة للهجوم في نفس الوقت؟',
      options: [
        'هجوم DoS.',
        [cite_start]'هجوم DDoS. [cite: 357]',
        'هجوم حقن SQL.',
        'هجوم التصيد الاحتيالي.'
      ],
      correctAnswer: 1,
      type: 'multipleChoice',
      category: 'أنواع الهجمات السيبرانية'
    },
    {
      id: 'mc_15',
      question: 'أي مما يلي يعتبر شكلاً من أشكال المضايقة والتهديد ويصيب النساء بشكل خاص؟',
      options: [
        'التخريب الرقمي.',
        [cite_start]'المطاردة عبر الإنترنت. [cite: 467, 468]',
        'التزوير الرقمي.',
        'اختراق الويب.'
      ],
      correctAnswer: 1,
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

