window.C2 = window.C2 || {};
window.C2.fr = {
  meta: { name: "Français", short: "FR", title: "cardio2 · Assistant IA pour se remettre d’un problème cardiaque" },
  nav: { home: "Accueil", product: "Produit", ai: "IA", safety: "Sécurité", partners: "Partenaires", evidence: "Données", grants: "Impact", about: "À propos", pricing: "Tarifs", faq: "Questions", contact: "Contact", privacy: "Confidentialité", legal: "Mentions légales", cta: "Accès anticipé", menu: "Menu", close: "Fermer", theme: "Changer de thème", language: "Langue", skip: "Aller au contenu" },
  status: "En développement · Pas encore certifié comme dispositif médical · Pas encore utilisable pour un traitement",
  emergency: "Douleur dans la poitrine ou essoufflement soudain ? Appelez le 112 maintenant.",
  common: { source: "Source", sources: "Sources", learn: "En savoir plus", top: "Haut de page", notFound: "Cette page n’existe pas.", goHome: "Retour à l’accueil", illustrative: "Exemple à titre d’illustration" },

  phone: { day: "Jour 18 sur 84", greet: "Bonjour, Anna", done: "Suivi du jour fait", bp: "Tension", hr: "Pouls", wt: "Poids", walk: "Aujourd’hui : 20 minutes de marche, à un rythme où vous pouvez encore parler", meds: "Médicaments : 2 sur 3 pris", q: "Pourquoi je prends du bisoprolol ?", a: "Il ralentit et régularise les battements du cœur, qui a ainsi besoin de moins d’oxygène.", src: "Source : Société européenne de cardiologie" },

  home: {
    eyebrow: "Assistant IA pour la réadaptation cardiaque",
    title: "Un cœur reçoit une seconde vie. Il mérite un guide.",
    lead: "cardio2 accompagne les personnes chez elles après un infarctus, la pose d’un stent, une opération du cœur ou un diagnostic d’insuffisance cardiaque. Il transforme une pile de papiers de sortie d’hôpital en un plan quotidien simple et tient le cardiologue informé entre les consultations.",
    cta1: "Demander un accès anticipé", cta2: "Pour les hôpitaux et les assureurs",
    trust: ["En cours de développement comme dispositif médical certifié (MDR de l’UE, classe IIa)", "Données protégées selon le RGPD et stockées dans l’UE", "Conçu pour respecter le règlement européen sur l’IA", "Cinq langues dès le premier jour"],
    statsTitle: "Le vide dangereux après la sortie de l’hôpital",
    statsLead: "La réadaptation cardiaque sauve des vies, pourtant la plupart des patients en Europe n’en bénéficient jamais. C’est pendant les premiers mois à la maison que l’on abandonne ses nouvelles habitudes, et que la plupart des patients retournent à l’hôpital.",
    stats: [
      { v: "29,1 %", l: "des personnes atteintes de maladie coronaire en Europe ont suivi au moins une séance de réadaptation cardiaque", s: "EUROASPIRE VI, 2026", u: "https://www.emjreviews.com/?p=475919" },
      { v: "44 %", l: "des personnes hospitalisées pour une insuffisance cardiaque avec un cœur affaibli sont retournées à l’hôpital dans l’année", s: "Registre ESC HF III", u: "https://www.eurekalert.org/news-releases/1117308" },
      { v: "≈83 %", l: "du coût annuel de la prise en charge d’une personne en insuffisance cardiaque part dans les séjours à l’hôpital", s: "ARNO Observatory, Congrès de l’ESC", u: "https://blogs.the-hospitalist.org/content/esc-most-heart-failure-patients-rehospitalizations-are-other-reasons" }
    ],
    problemTitle: "Quatre raisons pour lesquelles la guérison cale à la maison",
    problems: [
      { t: "Accès", d: "Les centres de réadaptation sont rares, éloignés et complets. Le trajet est l’une des raisons les plus fréquentes pour ne jamais commencer." },
      { t: "Compréhension", d: "Les comptes rendus de sortie sont écrits pour les médecins. On rentre chez soi avec cinq nouveaux médicaments sans savoir à quoi sert chacun." },
      { t: "Persévérance", d: "La motivation est au plus haut les premières semaines et s’essouffle vers le troisième mois. Sans soutien, les nouvelles habitudes disparaissent peu à peu." },
      { t: "Peur", d: "Puis-je monter les escaliers ? Avoir des relations sexuelles ? Est-ce mon cœur ou suis-je simplement fatigué ? L’anxiété après un problème cardiaque est fréquente et ralentit la guérison." }
    ],
    howTitle: "Comment fonctionne cardio2",
    how: [
      { t: "Envoyer le compte rendu de sortie", d: "Une photo ou un PDF suffit. L’IA repère les diagnostics, les médicaments et les restrictions, puis une infirmière vérifie et valide le plan." },
      { t: "Suivre un programme de 12 semaines", d: "Marche, exercices, alimentation, sommeil et médicaments, ajustés chaque semaine selon l’état de la personne." },
      { t: "Faire le point une minute par jour", d: "Bien-être, tension, pouls, poids, essoufflement et gonflements. À saisir soi-même ou à synchroniser depuis une montre ou un tensiomètre." },
      { t: "Partager un rapport clair", d: "Avant chaque consultation, le cardiologue reçoit un résumé d’une page sur l’évolution, au lieu de « je crois que ça allait »." }
    ],
    demoTitle: "Essayez le point quotidien d’une minute",
    demoLead: "Voici à quoi ressemble le point quotidien dans cardio2. Choisissez « Douleur thoracique » pour voir ce qui se passe quand un signe de danger apparaît.",
    aiTitle: "Une IA qui explique. Des règles qui protègent.",
    aiLead: "cardio2 utilise l’IA là où elle excelle : lire des documents, expliquer la médecine avec des mots simples et entretenir la motivation. Chaque décision de sécurité est prise par des règles médicales fixes, écrites et vérifiées par des médecins. Ces règles passent avant l’IA et donnent toujours le même résultat.",
    aiPoints: ["Les signes de danger ne passent pas par l’IA : ils mènent directement au 112 ou à l’équipe soignante", "Les réponses viennent uniquement d’une bibliothèque médicale vérifiée, fondée sur les recommandations officielles, toujours avec leur source", "L’IA ne modifie jamais un médicament, une dose ou un plan de traitement"],
    aiCta: "Voir comment fonctionne l’IA",
    audTitle: "Pensé pour tous ceux qui entourent le patient",
    aud: [
      { t: "Patients", d: "Un plan clair et rassurant pour chaque jour, des réponses aux questions qui font peur et le sentiment de reprendre le contrôle." },
      { t: "Familles", d: "Une vue simple de l’évolution et des conseils pratiques pour aider, même depuis une autre ville ou un autre pays." },
      { t: "Médecins et infirmiers", d: "Voir comment va le patient entre les consultations, être alerté seulement quand c’est important et recevoir un rapport d’une page avant chaque rendez-vous." },
      { t: "Hôpitaux et assureurs", d: "La réadaptation pour plus de patients sans nouveaux bâtiments, et moins de réhospitalisations coûteuses." }
    ],
    closingTitle: "Nous sélectionnons des centres fondateurs en Europe",
    closingLead: "Centres de cardiologie, cliniques de réadaptation, assureurs et équipes de recherche : participez à notre première étude clinique et aidez à façonner cardio2.",
    closingCta: "Devenir centre fondateur"
  },

  demo: {
    label: "Point quotidien", step: "Étape", of: "sur",
    q1: "Comment vous sentez-vous en ce moment ?",
    f: ["Bien", "Fatigué", "Essoufflé", "Douleur thoracique"],
    q1b: "Cet essoufflement est-il nouveau, ou le ressentez-vous même au repos ?",
    yes: "Oui", no: "Non",
    q2: "Votre poids ce matin", q2hint: "Il y a 3 jours : 77,9 kg", q2gain: "kg d’écart en 3 jours",
    q3: "Avez-vous pris vos médicaments du matin ?",
    next: "Suivant", restart: "Recommencer",
    redT: "Appelez le 112 maintenant",
    redD: "Une douleur dans la poitrine ou un essoufflement soudain et fort peuvent être une urgence cardiaque. N’attendez pas. cardio2 n’essaie pas d’analyser ces symptômes : il vous dirige directement vers les secours et prévient votre proche désigné.",
    redBtn: "Appeler le 112",
    orangeT: "Votre équipe soignante a été prévenue",
    orangeD: "Une infirmière vous contactera aujourd’hui. En attendant, reposez-vous, prenez vos médicaments comme prescrit et appelez le 112 en cas de douleur dans la poitrine ou si votre respiration s’aggrave.",
    weightT: "2 kg de plus en 3 jours",
    weightD: "En cas d’insuffisance cardiaque, une prise de poids rapide peut signifier que le corps retient de l’eau. Votre infirmière a été prévenue et vous appellera aujourd’hui. Ne modifiez pas vos médicaments vous-même.",
    greenT: "Tout se passe comme prévu",
    greenD: "Jour 18 sur 84. Aujourd’hui : 20 minutes de marche, à un rythme où vous pouvez encore parler. Demain commencent les exercices de la semaine 4.",
    medsD: "Prenez-les maintenant s’il n’est pas trop tard. L’application explique quoi faire en cas d’oubli.",
    disclaimer: "Exemple à titre d’illustration, pas un avis médical. Les seuils affichés sont des exemples ; dans cardio2, ils sont fixés par le médecin du patient."
  },

  product: {
    eyebrow: "Produit",
    title: "La réadaptation cardiaque dans votre poche",
    lead: "Au cœur de cardio2, un programme de 12 semaines à domicile, construit comme la réadaptation proposée par les hôpitaux après la sortie. Ensuite, un mode plus léger aide à garder de bonnes habitudes sur le long terme.",
    modulesTitle: "Huit choses que fait cardio2",
    modules: [
      { t: "Plan de rétablissement personnel", d: "À partir du compte rendu de sortie et des conseils du médecin, l’IA prépare un plan semaine par semaine pour la marche, l’exercice, l’alimentation et le sommeil. Une infirmière ou un médecin le valide." },
      { t: "Point quotidien d’une minute", d: "Bien-être, tension, pouls, poids, essoufflement et gonflements. Fonctionne avec Apple Santé, Google Health Connect, les montres connectées et les tensiomètres Bluetooth." },
      { t: "La sécurité avant tout", d: "Les signes de danger, comme une douleur dans la poitrine, un essoufflement soudain ou une prise de poids rapide en cas d’insuffisance cardiaque, ne sont jamais jugés par l’IA. Des règles claires orientent directement vers le 112 ou vers l’équipe soignante." },
      { t: "Des médicaments sans confusion", d: "Des rappels, des explications simples sur l’utilité de chaque comprimé et quoi faire en cas d’oubli. On prend mieux un traitement que l’on comprend." },
      { t: "Des réponses aux questions qui font peur", d: "Escaliers, sexualité, conduite, travail, voyages. Des réponses rassurantes fondées sur les recommandations des sociétés de cardiologie, toujours avec leur source." },
      { t: "Soutien émotionnel", d: "De courts exercices contre l’anxiété et pour mieux dormir, un point hebdomadaire sur le moral et le conseil de consulter un spécialiste si cela s’aggrave." },
      { t: "Rapport pour le cardiologue", d: "Un résumé d’une page de la tension, du pouls, du poids et de l’activité du dernier mois, prêt avant chaque rendez-vous." },
      { t: "Mode famille", d: "Avec l’accord du patient, les proches voient l’évolution et reçoivent des conseils pratiques pour aider." }
    ],
    journeyTitle: "Le chemin du rétablissement, semaine après semaine",
    journey: [
      { w: "Jour 0", t: "À l’hôpital", d: "Une infirmière inscrit le patient avec un QR code et photographie le compte rendu de sortie. L’IA prépare un projet de plan, l’infirmière le valide." },
      { w: "Semaine 1", t: "Apaiser la peur", d: "De courtes leçons quotidiennes sur ce qui est arrivé au cœur, 5 à 10 minutes de marche et la vérification que chaque médicament est compris." },
      { w: "Semaines 2–8", t: "Reprendre des forces", d: "L’activité augmente pas à pas, avec un point quotidien et un bilan hebdomadaire. Si quelque chose s’écarte du plan, l’infirmière est prévenue." },
      { w: "Semaines 9–12", t: "Retour à la vie normale", d: "Travail, sexualité, voyages et conduite. Un test de marche simple de 6 minutes à la maison et un rapport final pour le cardiologue." },
      { w: "Après la semaine 12", t: "Garder le cap", d: "Un point hebdomadaire, des rappels pour les médicaments et les prises de sang, et un bilan annuel du risque cardiaque." }
    ],
    principlesTitle: "Notre façon de concevoir",
    principles: [
      { t: "Une action par écran", d: "Grands boutons, saisie vocale et très peu de texte. Conçu d’abord pour une personne de 74 ans qui voit mal." },
      { t: "Expliquer, jamais diagnostiquer", d: "Chaque information médicale vient d’une bibliothèque vérifiée et renvoie à la recommandation sur laquelle elle s’appuie." },
      { t: "Aucune publicité pharmaceutique", d: "La confiance compte plus que l’argent facile. Nous ne vendons ni publicité ni données." },
      { t: "L’humain garde la main", d: "Infirmiers et médecins valident chaque plan et répondent aux alertes." }
    ],
    langsTitle: "Cinq langues dès le premier jour",
    langsD: "Anglais, allemand, espagnol, français et ukrainien. D’autres langues européennes sont prévues."
  },

  ai: {
    eyebrow: "Intelligence artificielle",
    title: "L’IA pour expliquer. Des règles médicales fixes pour protéger.",
    lead: "cardio2 sépare strictement deux rôles. L’IA lit les documents, explique et motive. Un ensemble distinct de règles médicales fixes, testé comme tout logiciel médical, décide quand une situation est dangereuse.",
    pipeTitle: "Ce qui arrive à chaque information",
    pipe: [
      { t: "Entrée", d: "Réponses au point quotidien, données des appareils, photo du compte rendu de sortie ou question." },
      { t: "Contrôle de sécurité", d: "Les règles fixes validées par notre comité clinique consultatif sont vérifiées en premier." },
      { t: "IA avec sources", d: "L’IA répond uniquement à partir d’une bibliothèque médicale vérifiée, fondée sur les recommandations officielles." },
      { t: "Garde-fous", d: "Chaque réponse doit citer sa source. Les réponses hors sujet ou sans fondement sont bloquées." },
      { t: "Équipe soignante", d: "Infirmiers et médecins valident les plans et examinent les alertes." }
    ],
    branch: "Signe de danger → écran d’urgence, appel au 112, proche prévenu. Le chat IA se met en pause.",
    capsTitle: "Ce que fait l’IA",
    caps: [
      { t: "Lit les comptes rendus de sortie", d: "La reconnaissance de texte et l’IA transforment une photo ou un PDF en une liste claire de diagnostics, de médicaments et de restrictions, qu’une infirmière confirme ensuite.", tag: "Dans la première version" },
      { t: "Explique avec des mots simples", d: "Transforme les recommandations médicales en réponses courtes, rassurantes et faciles à lire, dans la langue du patient.", tag: "Dans la première version" },
      { t: "Adapte le programme", d: "Ajuste la marche et les exercices selon les réponses au point quotidien, le rythme cardiaque et l’effort ressenti, dans les limites fixées par le médecin.", tag: "Prévu" },
      { t: "Soutient les bonnes habitudes", d: "Des techniques de motivation éprouvées pour les médicaments, l’activité, l’alimentation et l’arrêt du tabac, aux moments où l’on a tendance à abandonner.", tag: "Prévu" },
      { t: "Rédige le rapport pour le médecin", d: "Résume sur une page un mois de mesures, d’événements et de prises de médicaments. Chaque chiffre peut être relié à la mesure d’origine.", tag: "Dans la première version" },
      { t: "Repère tôt une aggravation", d: "Un modèle d’alerte précoce pour l’insuffisance cardiaque, fondé sur l’évolution du poids, du pouls et de l’activité. Il sera testé et validé avant toute utilisation dans les soins.", tag: "En recherche" }
    ],
    guardTitle: "Les règles de sécurité auxquelles nous ne renonçons jamais",
    guards: [
      "L’IA ne commence, n’arrête et ne modifie jamais un médicament ou une dose.",
      "Les signes de danger sont traités par des règles fixes, jamais par l’IA.",
      "Une réponse sans source vérifiable n’est jamais affichée.",
      "Chaque mise à jour de l’IA doit réussir un test sur plus de 1 000 situations cliniques réelles, vérifiées par des cardiologues.",
      "Chaque réponse de l’IA est enregistrée pour pouvoir être vérifiée plus tard, comme l’exige la réglementation des dispositifs médicaux.",
      "Les services d’IA fonctionnent sur des serveurs dans l’UE, avec des contrats de protection des données. Les données des patients ne servent jamais à entraîner l’IA d’autres entreprises."
    ],
    evalTitle: "Objectifs de qualité pour l’IA",
    eval: [
      { v: "1 000+", l: "situations cliniques de test, vérifiées par des cardiologues, avant chaque mise à jour" },
      { v: "100 %", l: "des réponses médicales affichent leur source ; sinon, elles ne sont pas affichées" },
      { v: "0", l: "modification de médicament ou de dose par l’IA" },
      { v: "<5 %", l: "objectif de fausses alertes d’urgence lors de la première étude clinique" }
    ],
    actTitle: "Prêts pour le règlement européen sur l’IA",
    actD: "Le règlement européen sur l’IA classe l’IA des dispositifs médicaux comme « à haut risque ». Ses principales obligations s’appliquent à partir du 2 août 2028. cardio2 intègre dès le départ les protections exigées : contrôle de la qualité des données, supervision humaine, transparence et traçabilité.",
    actSrc: "https://www.techuk.org/insights/news/eu-ai-omnibus-deal-reached-more-clarity-on-ai-act-obligations"
  },

  safety: {
    eyebrow: "Sécurité clinique",
    title: "La sécurité suit des règles fixes, pas les suppositions d’une IA",
    lead: "Les signes de danger ne sont jamais traités par l’IA. Des règles médicales fixes les repèrent en premier et orientent la personne vers les secours ou son équipe soignante. Les seuils sont validés par notre comité clinique consultatif.",
    levelsTitle: "Quatre niveaux de réponse",
    cols: ["Niveau", "Exemples de signes d’alerte", "Ce que fait cardio2"],
    levels: [
      { c: "red", t: "Rouge", trig: "Douleur dans la poitrine de plus de 5 minutes, essoufflement soudain et fort, malaise avec perte de connaissance, signes d’AVC", act: "Un message plein écran « Appelez le 112 maintenant », un bouton d’appel en un geste et le proche désigné est prévenu. Le chat IA se met en pause." },
      { c: "amber", t: "Orange", trig: "En cas d’insuffisance cardiaque : 2 kg de plus en 3 jours. Tension ou pouls au repos en dehors des limites fixées par le médecin", act: "Une infirmière ou un médecin est prévenu le jour ouvré même. Le patient reçoit des consignes claires en attendant l’appel." },
      { c: "yellow", t: "Jaune", trig: "Médicaments oubliés 2 jours ou plus, moral en baisse, activité physique abandonnée", act: "Un encouragement bienveillant, la proposition de parler à un spécialiste et une note dans le rapport pour le médecin." },
      { c: "green", t: "Vert", trig: "Tout se passe comme prévu", act: "Des encouragements et l’étape suivante du programme." }
    ],
    limitsTitle: "Ce que cardio2 n’est pas",
    limits: ["Pas un service d’urgence. En cas d’urgence, appelez le 112.", "Pas un outil de diagnostic. Il ne dit à personne de quelle maladie il souffre.", "Pas un remplaçant du cardiologue. Il soutient le traitement fixé par le médecin."],
    govTitle: "Qui veille à la sécurité",
    gov: [
      { t: "Comité clinique consultatif", d: "Des cardiologues, des spécialistes de la réadaptation et un représentant des patients valident toutes les règles et tous les seuils médicaux." },
      { t: "L’humain décide", d: "Une infirmière valide chaque plan de rétablissement et répond aux alertes orange." },
      { t: "Contrôles de sécurité continus", d: "Chaque alerte et chaque réponse de l’IA sont enregistrées et régulièrement vérifiées pour détecter les problèmes." },
      { t: "Facile à utiliser", d: "Gros caractères, saisie vocale et fort contraste, testés avec des personnes âgées et des personnes dont les mains tremblent." }
    ],
    stdTitle: "Certification et normes",
    std: [
      { k: "MDR de l’UE 2017/745", v: "Objectif : certification comme logiciel médical de classe IIa, évaluée par un organisme de certification indépendant, avec marquage CE." },
      { k: "ISO 13485", v: "Système de management de la qualité, dès le mois 3." },
      { k: "IEC 62304 · ISO 14971 · IEC 62366", v: "Normes internationales pour développer un logiciel médical, gérer les risques et le rendre facile à utiliser." },
      { k: "Règlement européen sur l’IA", v: "Exigences pour l’IA à haut risque intégrées dès la première version." },
      { k: "RGPD · ISO 27001", v: "Données stockées dans l’UE et chiffrées, et seules les données nécessaires sont collectées. Certification de sécurité de l’information ISO 27001 prévue d’ici le mois 24." },
      { k: "Prise en charge", v: "Des voies de remboursement par l’assurance maladie, comme la DiGA en Allemagne et la PECAN en France, et la compatibilité avec l’Espace européen des données de santé (norme HL7 FHIR)." }
    ],
    notice: "cardio2 est en développement et n’est pas encore certifié comme dispositif médical (pas encore de marquage CE). Il ne peut pas encore être utilisé pour un traitement."
  },

  partners: {
    eyebrow: "Partenaires",
    title: "La réadaptation à domicile, reliée à l’hôpital",
    lead: "cardio2 prolonge les soins de l’hôpital jusqu’au domicile du patient, sans nouvelles salles ni personnel supplémentaire, et donne aux assureurs un moyen mesurable de réduire les réhospitalisations.",
    segs: [
      { t: "Hôpitaux et centres de cardiologie", who: "Services de cardiologie, cliniques de réadaptation, unités d’insuffisance cardiaque", val: ["Atteindre les patients qui ne commencent jamais la réadaptation", "Moins de réhospitalisations et de meilleurs indicateurs de qualité", "Un tableau de bord infirmier qui montre qui a besoin d’attention maintenant", "Des rapports d’une page avant les consultations de suivi", "Connexion aux systèmes de l’hôpital (HL7 FHIR)"] },
      { t: "Assureurs santé", who: "Assurance maladie publique et complémentaires", val: ["De la prévention pour vos patients cardiaques les plus coûteux", "Des contrats où le paiement dépend des résultats", "Des rapports clairs sur l’usage de l’application et les événements de santé", "Un accompagnement des assurés même sans prescription"] },
      { t: "Fabricants d’appareils", who: "Tensiomètres, balances, montres connectées", val: ["Vos appareils font partie d’un plan de soins médical", "Des offres communes pour les patients qui sortent de l’hôpital", "Une intégration fondée sur des standards ouverts", "Des études cliniques communes"] }
    ],
    pilotTitle: "Programme des centres fondateurs",
    pilotD: "Notre première étude clinique vérifiera que cardio2 est sûr, facile à utiliser et utile. Elle commencera dans 2 à 3 centres européens avec environ 200 patients. Les centres fondateurs utilisent cardio2 gratuitement et sont coauteurs des publications.",
    pilotSteps: [
      { t: "Premier échange", d: "Nous découvrons comment vos patients sont suivis après leur sortie de l’hôpital." },
      { t: "Plan d’étude et autorisations", d: "Nous établissons ensemble le plan de l’étude et obtenons les autorisations éthiques et de protection des données." },
      { t: "Démarrage", d: "Nous formons vos infirmiers ; vos cardiologues fixent les seuils d’alerte." },
      { t: "Étude et résultats", d: "Nous incluons les patients, assurons leur suivi et analysons les résultats ensemble." }
    ],
    cta: "Candidater comme centre fondateur"
  },

  evidence: {
    eyebrow: "Données",
    title: "Pourquoi la réadaptation cardiaque numérique est nécessaire",
    lead: "Les études européennes montrent toutes la même chose : la réadaptation fonctionne, mais trop peu de patients en bénéficient, et le coût finit en lits d’hôpital.",
    dataTitle: "Ce que montrent les données",
    data: [
      { v: "29,1 %", l: "des personnes atteintes de maladie coronaire ont suivi au moins une séance de réadaptation. Selon les pays, de 0 % à 79 %", s: "EUROASPIRE VI, 2026", u: "https://www.emjreviews.com/?p=475919" },
      { v: "≈10 %", l: "y ont participé dans les régions d’Europe où le risque cardiaque est le plus élevé. Ceux qui en ont le plus besoin en bénéficient le moins", s: "EUROASPIRE VI, 2026", u: "https://www.emjreviews.com/?p=475919" },
      { v: "17 sur 42", l: "pays interrogés par la Société européenne de cardiologie indiquent que seuls 0 à 25 % des patients suivent une réadaptation après un infarctus", s: "Enquête ESC OCRE", u: "https://www.escardio.org/static-file/Escardio/Subspecialty/EAPC/Documents/CVD%20Prevention%20Summit%20Nov%202019/Session%201_Abreu.pdf" },
      { v: "11 %", l: "des personnes en insuffisance cardiaque ont suivi une réadaptation, selon une étude nationale aux Pays-Bas", s: "European Journal of Preventive Cardiology", u: "https://esc365.escardio.org/journal/71351" },
      { v: "44 %", l: "des personnes hospitalisées pour une insuffisance cardiaque avec un cœur affaibli sont retournées à l’hôpital dans l’année", s: "Registre ESC HF III", u: "https://www.eurekalert.org/news-releases/1117308" },
      { v: "62 % · 58 %", l: "des personnes en insuffisance cardiaque prennent encore leurs principaux médicaments du cœur après un an : bêtabloquants (62 %) et IEC ou équivalents (58 %)", s: "ARNO Observatory", u: "https://blogs.the-hospitalist.org/content/esc-most-heart-failure-patients-rehospitalizations-are-other-reasons" }
    ],
    planTitle: "Comment nous prouverons que ça marche",
    cols: ["Étape", "Qui participe", "Ce que nous mesurons", "Quand"],
    plan: [
      { p: "Première étude (faisabilité)", d: "2 à 3 centres, environ 200 patients", e: "Si les patients restent 12 semaines, si l’application est facile à utiliser, si les alertes fonctionnent en toute sécurité", w: "Mois 3–9" },
      { p: "Étude comparative", d: "Plusieurs centres, environ 400 patients, comparés aux soins habituels", e: "Combien terminent la réadaptation, prennent leurs médicaments, et leur qualité de vie", w: "Mois 9–24" },
      { p: "Essai randomisé", d: "Environ 600 patients, répartis en groupes par tirage au sort", e: "Réhospitalisations et événements cardiaques graves sur 12 mois", w: "Mois 18–36" }
    ],
    kpiTitle: "Nos objectifs pour le produit",
    kpis: [
      { v: ">70 %", l: "des patients commencent à utiliser l’application après la sortie de l’hôpital" },
      { v: ">60 %", l: "font encore leur point quotidien en semaine 12" },
      { v: ">55 %", l: "terminent le programme complet de 12 semaines" },
      { v: ">50", l: "score de recommandation des utilisateurs (Net Promoter Score)" }
    ],
    note: "Ce sont des objectifs pour la première étude, pas encore des résultats."
  },

  grants: {
    eyebrow: "Pour les institutions et les partenaires",
    title: "Un dispositif médical à base d’IA pour l’une des plus grandes lacunes de soins en Europe",
    lead: "Les maladies cardiaques sont la première cause de décès en Europe. cardio2 aide les personnes déjà touchées à éviter un deuxième infarctus ou une nouvelle hospitalisation, grâce à une IA digne de confiance, conçue dès le départ selon les règles de l’UE. Cette page résume le projet pour les comités de programmes, les institutions et les partenaires stratégiques.",
    snapTitle: "Le projet en bref",
    snap: [
      { k: "Le problème", v: "La plupart des patients cardiaques en Europe ne bénéficient d’aucune réadaptation, et les réhospitalisations font grimper les coûts." },
      { k: "Notre solution", v: "La réadaptation cardiaque à domicile, guidée par l’IA, avec des règles de sécurité fixes et une supervision médicale." },
      { k: "Ce qui est nouveau", v: "L’IA qui explique est strictement séparée des règles de sécurité fixes, et le produit fonctionne en plusieurs langues dès le départ." },
      { k: "Stade de développement", v: "Niveau de maturité technologique (TRL) 3–4 aujourd’hui : concept prouvé, prototype en cours. Objectif : TRL 7, en usage dans de vraies cliniques, d’ici 24 mois." },
      { k: "Certification", v: "Objectif : dispositif médical de classe IIa selon le MDR de l’UE, avec les exigences du règlement européen sur l’IA à haut risque intégrées." },
      { k: "Budget de la première phase", v: "0,5 à 0,8 M€ sur 24 mois." }
    ],
    fitTitle: "Adéquation avec les programmes européens",
    fit: [
      { t: "EU4Health", d: "Prévention des maladies chroniques, transformation numérique de la santé, réduction des inégalités de santé." },
      { t: "Horizon Europe, Cluster 1 Santé", d: "Outils numériques pour la prévention et les soins, IA de confiance en santé, soins centrés sur le patient." },
      { t: "EIC Accelerator", d: "Un dispositif médical innovant, avec un chemin clair vers la certification et le remboursement, et un modèle économique capable de croître." },
      { t: "Europe numérique et EEDS", d: "Échange de données selon la norme HL7 FHIR et réutilisation responsable des données de santé dans l’Espace européen des données de santé." },
      { t: "EIT Health", d: "Innovation avec des hôpitaux, des assureurs et des associations de patients dans plusieurs pays de l’UE." },
      { t: "Programmes nationaux et régionaux", d: "Programmes d’innovation en santé numérique et en technologies médicales dans les pays de l’UE." }
    ],
    wpTitle: "Plan de travail",
    wps: [
      { c: "LT1", t: "Protocoles cliniques et règles de sécurité", m: "M1–M6" },
      { c: "LT2", t: "IA : lecture des documents, réponses sourcées, tests de qualité", m: "M1–M18" },
      { c: "LT3", t: "Applications pour patients, familles, médecins et infirmiers", m: "M3–M18" },
      { c: "LT4", t: "Système qualité et dossier de certification (MDR, règlement IA)", m: "M3–M24" },
      { c: "LT5", t: "Première étude et étude comparative", m: "M6–M24" },
      { c: "LT6", t: "Diffusion des résultats, mise sur le marché, implication des patients", m: "M1–M24" }
    ],
    budgetTitle: "Répartition prévue du budget",
    budget: [
      { k: "Développement de l’IA et du produit", p: 38 },
      { k: "Études cliniques", p: 24 },
      { k: "Certification et qualité", p: 16 },
      { k: "Protection des données et sécurité", p: 8 },
      { k: "Diffusion des résultats et implication des patients", p: 8 },
      { k: "Gestion du projet", p: 6 }
    ],
    impactTitle: "Impact attendu",
    impacts: [
      { t: "Patients", d: "Plus de personnes terminent la réadaptation, prennent leurs médicaments régulièrement et sont moins anxieuses." },
      { t: "Systèmes de santé", d: "Moins de réhospitalisations évitables, et la réadaptation pour plus de personnes sans nouveaux bâtiments." },
      { t: "Accès équitable", d: "Atteint les personnes âgées, les zones rurales et les personnes migrantes dans leur propre langue, là où la réadaptation est aujourd’hui la plus rare." },
      { t: "Une IA européenne", d: "Un modèle d’usage sûr de l’IA dans un dispositif médical certifié." }
    ],
    ethicsTitle: "Éthique, données et transparence",
    ethics: ["Avis d’un comité d’éthique pour chaque étude clinique", "Analyse d’impact sur la protection des données ; données stockées uniquement dans l’UE", "Études conçues pour inclure équitablement femmes, hommes et personnes âgées", "Résultats publiés en accès libre et gratuit", "Associations de patients impliquées dans la conception et l’évaluation", "Contribue à l’objectif de développement durable 3.4 de l’ONU : moins de décès prématurés dus aux maladies cardiaques et aux autres maladies chroniques"],
    packTitle: "Demander le dossier du projet",
    packD: "Résumé du projet, plan de travail, budget et lettres de soutien disponibles sur demande pour les comités de programmes, les institutions et les partenaires de consortium.",
    packCta: "Demander par e-mail"
  },

  about: {
    eyebrow: "À propos",
    title: "Personne ne devrait traverser seul les mois qui suivent un infarctus",
    lead: "cardio2 est une start-up européenne de santé numérique qui développe un assistant IA pour se remettre d’une maladie cardiaque. Notre nom le dit : une seconde vie pour le cœur, et une seconde chance pour celui ou celle à qui il appartient.",
    valuesTitle: "Nos valeurs",
    values: [
      { t: "La sécurité d’abord", d: "En cas de doute, un humain décide. Toujours." },
      { t: "Des faits, pas des promesses", d: "Nous publions ce que nous mesurons, y compris ce qui ne marche pas." },
      { t: "Clair pour tous", d: "Si une patiente âgée ne peut pas l’utiliser, ce n’est pas terminé." },
      { t: "Vie privée dès le départ", d: "Les données de santé ne sont pas une marchandise. Nous ne vendons ni données ni publicité." }
    ],
    teamTitle: "Équipe",
    team: [
      { n: "Roman Rybchak", r: "Fondateur et CEO", d: "Roman crée une IA pour les mois qui suivent un infarctus, quand la plupart des patients en Europe ne bénéficient d’aucune réadaptation cardiaque. Depuis huit ans, il travaille là où se rencontrent le logiciel, l’IA et la médecine : IA médicale certifiée, suivi à distance des patients cardiaques et recherche sur le risque cardiaque. Il a étudié l’informatique biomédicale à l’Université technique de Munich." },
      { n: "Poste à pourvoir", r: "Directeur médical (CMO)", d: "Cardiologue avec une expérience de la réadaptation cardiaque." },
      { n: "Poste à pourvoir", r: "Directeur technique (CTO)", d: "IA, applications mobiles et logiciel médical." },
      { n: "Poste à pourvoir", r: "Responsable réglementaire et qualité", d: "Certification des dispositifs médicaux (MDR de l’UE), normes de qualité (ISO 13485), règlement européen sur l’IA." }
    ],
    boardTitle: "Comité clinique consultatif",
    boardD: "Nous constituons un comité de 3 à 5 cardiologues et spécialistes de la réadaptation de plusieurs pays de l’UE, avec un représentant des patients. Intéressé ? Écrivez-nous.",
    roadmapTitle: "Feuille de route",
    roadmap: [
      { w: "Mois 0–3", t: "Comité consultatif constitué, règles de sécurité écrites, prototype réalisé, système qualité lancé" },
      { w: "Mois 3–9", t: "Première version de l’application et première étude dans 2 à 3 centres" },
      { w: "Mois 9–18", t: "Dossier de certification préparé et déposé, premiers contrats avec des hôpitaux" },
      { w: "Mois 18–24", t: "Certification CE, module insuffisance cardiaque, demandes de remboursement" },
      { w: "Mois 24–36", t: "Remboursé par les assureurs dans les premiers pays, plus de 15 centres, modèle d’alerte précoce" }
    ],
    joinTitle: "Travailler avec nous",
    joinD: "Nous recherchons des médecins, des ingénieurs et des experts réglementaires qui veulent créer une technologie attentive pour des personnes à un moment fragile de leur vie."
  },

  pricing: {
    eyebrow: "Tarifs",
    title: "La plupart des patients ne paieront rien",
    lead: "cardio2 est conçu pour être proposé par les hôpitaux, les assureurs et les systèmes de santé nationaux. Un abonnement personnel existe pour les personnes sans prescription.",
    plans: [
      { n: "Essentiel", p: "0 €", per: "", d: "Pour tous après un problème cardiaque.", f: ["Point quotidien et journal", "Rappels de médicaments", "Que faire en cas d’urgence", "Vue simple pour la famille"] },
      { n: "Premium", p: "9,90 €", per: "par mois", alt: "ou 89 € par an", d: "Le programme complet de 12 semaines, sans prescription.", f: ["Tout l’Essentiel", "Programme personnel de 12 semaines", "Réponses de l’IA avec sources", "Connexion à vos appareils", "Rapport mensuel pour votre cardiologue", "Mode famille complet"], badge: "Le plus complet" },
      { n: "Par votre équipe soignante", p: "0 €", per: "pour vous", alt: "payé par votre hôpital ou votre assureur", d: "Quand votre hôpital, votre assureur ou votre système de santé propose cardio2.", f: ["Tout le Premium", "Plan validé par vos médecins", "Une infirmière suit vos alertes", "Aucun coût pour vous"] }
    ],
    b2bTitle: "Hôpitaux, assureurs et fabricants",
    b2bD: "Une licence par patient pour les hôpitaux, un forfait mensuel par assuré pour les assureurs, ou des contrats où le paiement dépend des résultats. Tarifs sur demande.",
    b2bCta: "Parlons-en",
    note: "Tarifs prévus en euros, TVA comprise. Le service n’est pas encore disponible."
  },

  faq: {
    eyebrow: "Questions",
    title: "Les questions qu’on nous pose",
    items: [
      { q: "À qui s’adresse cardio2 ?", a: "Aux adultes après un infarctus, la pose d’un stent (un petit tube qui maintient une artère ouverte), une opération du cœur comme un pontage ou une chirurgie de valve, et aux personnes en insuffisance cardiaque. Mais aussi à leurs proches, leurs médecins et leurs infirmiers." },
      { q: "cardio2 est-il un dispositif médical ?", a: "Il est développé comme logiciel médical certifié selon les règles de l’UE (MDR, classe IIa). Il n’est pas encore certifié et ne peut donc pas encore être utilisé pour un traitement." },
      { q: "Que se passe-t-il si je signale une douleur dans la poitrine ?", a: "cardio2 n’essaie pas d’en trouver la cause. Un écran d’urgence s’affiche aussitôt avec un bouton pour appeler le 112, et votre proche désigné est prévenu." },
      { q: "L’IA peut-elle modifier mes médicaments ?", a: "Non. Seul votre médecin le peut. cardio2 explique les médicaments que votre médecin a prescrits et vous rappelle de les prendre." },
      { q: "D’où viennent les réponses de l’IA ?", a: "D’une bibliothèque médicale vérifiée, fondée sur les recommandations européennes et internationales de cardiologie et relue par des médecins. Chaque réponse affiche sa source. Pas de source, pas de réponse." },
      { q: "cardio2 remplace-t-il la réadaptation cardiaque ?", a: "Il apporte à domicile l’essentiel d’un programme de réadaptation pour ceux qui ne peuvent pas en suivre un, et accompagne ceux qui vont dans un centre." },
      { q: "Qui peut voir mes données ?", a: "Vous, l’équipe soignante que vous choisissez et, seulement avec votre accord, vos proches. Les données sont stockées dans l’UE et ne sont jamais vendues." },
      { q: "Quels appareils fonctionnent avec cardio2 ?", a: "D’abord Apple Santé et Google Health Connect, puis les tensiomètres, balances et montres connectées Bluetooth des grandes marques." },
      { q: "Quelles langues sont disponibles ?", a: "Anglais, allemand, espagnol, français et ukrainien. D’autres langues européennes sont prévues." },
      { q: "Comment mon hôpital ou mon organisation peut-il participer ?", a: "Écrivez à admin@cardio2.info. Nous sélectionnons des centres fondateurs pour notre première étude clinique." }
    ]
  },

  contact: {
    eyebrow: "Contact",
    title: "Parlons-en",
    lead: "Vous souhaitez devenir centre fondateur, discuter d’un partenariat ou d’un projet de recherche, écrire sur nous ou simplement poser une question ? Écrivez-nous. Nous répondons sous deux jours ouvrés.",
    emailLabel: "E-mail", copy: "Copier l’adresse", copied: "Copié",
    topicsTitle: "Nous aimerions surtout avoir des nouvelles de",
    topics: ["Centres de cardiologie et de réadaptation", "Assureurs santé", "Consortiums de recherche et universités", "Associations de patients", "Investisseurs"],
    form: { name: "Votre nom", email: "Votre e-mail", org: "Organisation (facultatif)", role: "J’écris en tant que", roles: ["Hôpital ou clinique", "Assureur santé", "Recherche", "Patient ou proche", "Investisseur", "Journaliste", "Autre"], msg: "Message", consent: "J’accepte que cardio2 utilise ces informations pour me répondre.", send: "Préparer le message" },
    sentT: "Votre message est prêt",
    sentD: "Ce site n’enregistre pas ce que vous saisissez dans le formulaire. Copiez le message ci-dessous et envoyez-le à admin@cardio2.info, ou ouvrez-le dans votre messagerie.",
    copyMsg: "Copier le message", openMail: "Ouvrir dans la messagerie",
    errors: { name: "Indiquez votre nom.", email: "Indiquez une adresse e-mail valide.", msg: "Écrivez un court message.", consent: "Confirmez que nous pouvons utiliser vos informations pour vous répondre." },
    urgent: "Cette adresse n’est pas destinée aux urgences médicales. En cas d’urgence, appelez le 112."
  },

  privacy: {
    eyebrow: "Confidentialité",
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : 13 novembre 2026",
    sections: [
      { h: "Qui sommes-nous", p: "Ce site, cardio2.info, est géré par l’équipe du projet cardio2. Contact : privacy@cardio2.info. Les informations sur la société seront publiées dans les mentions légales dès son immatriculation." },
      { h: "Ce que ce site collecte", p: "Ce site n’utilise pas de cookies de mesure d’audience, de publicité ou de suivi. Il mémorise seulement votre langue et votre thème de couleur dans votre propre navigateur. Le formulaire de contact n’envoie et n’enregistre rien : il prépare un message que vous envoyez vous-même par e-mail. Les polices et tous les autres fichiers sont chargés depuis notre propre serveur, sans requête vers des tiers. Comme pour tout site, notre hébergeur enregistre brièvement des données techniques (adresse IP, heure, page) dans les journaux du serveur afin de fournir le site en toute sécurité (art. 6, par. 1, point f du RGPD)." },
      { h: "Les e-mails que vous nous envoyez", p: "Si vous nous écrivez, nous utilisons votre nom, votre adresse e-mail et votre message uniquement pour vous répondre et traiter votre demande (par exemple, participer à une étude ou à un projet de recherche). Base légale : intérêt légitime ou mesures précontractuelles (RGPD, art. 6.1 b et f). Nous conservons ces échanges jusqu’à 3 ans, sauf si un contrat exige plus longtemps." },
      { h: "L’application cardio2 (à venir)", p: "Les données de santé de l’application cardio2 seront traitées uniquement avec votre consentement explicite ou pour les soins que vous recevez (RGPD, art. 9). Elles seront stockées dans l’UE, chiffrées, et jamais vendues ni utilisées pour de la publicité. Une politique de confidentialité propre à l’application sera publiée avant son lancement." },
      { h: "Vos droits", p: "Vous avez le droit de consulter, corriger, supprimer et récupérer vos données, d’en limiter l’usage et de vous y opposer. Vous pouvez aussi déposer une plainte auprès de l’autorité de protection des données de votre pays." },
      { h: "Modifications", p: "Nous mettrons cette politique à jour au fil du projet et indiquerons ci-dessus la date de la dernière modification." }
    ]
  },

  legal: {
    eyebrow: "Mentions légales",
    title: "Mentions légales et conditions",
    sections: [
      { h: "Mentions légales", p: "cardio2, assistant IA pour la réadaptation cardiaque. Site : cardio2.info. E-mail : legal@cardio2.info. Responsable du contenu : Roman Rybchak. La raison sociale, l’adresse et le numéro d’immatriculation seront ajoutés dès l’immatriculation de la société." },
      { h: "Avertissement médical", p: "Les informations de ce site sont générales et ne remplacent pas l’avis d’un médecin. cardio2 est en développement, n’est pas encore certifié comme dispositif médical et ne doit pas être utilisé pour un diagnostic ou un traitement. En cas d’urgence, appelez le 112." },
      { h: "Conditions d’utilisation", p: "Vous pouvez lire et partager le contenu de ce site à des fins non commerciales, à condition de citer cardio2 comme source. Les démonstrations de ce site sont des exemples et n’utilisent aucune donnée personnelle." },
      { h: "Autres sources", p: "Les statistiques de ce site proviennent de publications externes, vers lesquelles nous renvoyons. Nous ne sommes pas responsables du contenu des autres sites." },
      { h: "Marques", p: "cardio2 et le logo cardio2 sont des noms de ce projet. Les autres noms appartiennent à leurs propriétaires." }
    ]
  },

  footer: {
    tagline: "Assistant IA pour la seconde vie d’un cœur.",
    colProduct: "Découvrir", colCompany: "Entreprise", colLegal: "Juridique",
    noCookies: "Aucun cookie de suivi. Votre choix de langue et de thème reste dans votre navigateur.",
    rights: "© 2026 cardio2. Tous droits réservés."
  }
};
