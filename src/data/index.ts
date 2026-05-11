export type { Language } from "./translations";
export { translations } from "./translations";

export interface ContactChannel {
  id: string;
  labelKey: string;
  value: string;
  href?: string;
  iconColor: string;
  iconBg: string;
  iconType: "whatsapp" | "email" | "phone" | "location" | "website";
}

export const contactChannels: ContactChannel[] = [
  {
    id: "whatsapp",
    labelKey: "contact_whatsapp",
    value: "+90 544 835 84 01",
    href: "https://wa.me/905448358401",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/20",
    iconType: "whatsapp",
  },
  {
    id: "email",
    labelKey: "contact_email_label",
    value: "celal.aygar@gmail.com",
    href: "mailto:celal.aygar@gmail.com",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/20",
    iconType: "email",
  },
  {
    id: "phone",
    labelKey: "contact_phone_label",
    value: "+90 544 835 84 01",
    href: "tel:+905448358401",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/20",
    iconType: "phone",
  },
  {
    id: "location",
    labelKey: "contact_location_label",
    value: "Ankara / TÜRKİYE",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/20",
    iconType: "location",
  },
  {
    id: "website",
    labelKey: "contact_website_label",
    value: "celalaygar.github.io",
    href: "https://celalaygar.github.io/",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/20",
    iconType: "website",
  },
];

export interface SubjectOption {
  value: string;
  labelKey: string;
}

export const subjectOptions: SubjectOption[] = [
  { value: "project", labelKey: "form_subject_project" },
  { value: "collaboration", labelKey: "form_subject_collaboration" },
  { value: "question", labelKey: "form_subject_question" },
  { value: "other", labelKey: "form_subject_other" },
];

export const tiktokStats = {
  followers: 10700,
  followersDisplay: "11,375",
  likes: "41.7K",
};

export type GradientVariant = "primary" | "secondary" | "accent" | "yellow" | "red"   | "green";

export interface Project {
  id: string;
  title: string;
  subtitleKey: string;
  descriptionKey: string;
  href: string;
  iconName: string;
  gradient: GradientVariant;
}

export const projects: Project[] = [
  {
    id: "wb-language-box",
    title: "Wixtory: Language Box",
    subtitleKey: "wb_language_box_subtitle",
    descriptionKey: "wb_language_box_desc",
    href: "https://celalaygar.github.io/main/project/language-box/",
    iconName: "Languages",
    gradient: "yellow",
  },
  {
    id: "wb-domain-track",
    title: "Wixtory Domain Track",
    subtitleKey: "wb_domain_track_subtitle",
    descriptionKey: "wb_domain_track_desc",
    href: "https://celalaygar.github.io/main/project/wixbook-domain-track/",
    iconName: "Globe2",
    gradient: "green",
  },  
  {
    id: "job-tracking-v2",
    title: "Job TS",
    subtitleKey: "job_tracking_subtitle",
    descriptionKey: "job_tracking_desc",
    href: "https://jobts.probablythebestever.info/",
    iconName: "Briefcase",
    gradient: "accent",
  },
  {
    id: "Lingua-Bubble",
    title: "Lingua Bubble",
    subtitleKey: "lingua_bubble_subtitle",
    descriptionKey: "lingua_bubble_desc",
    href: "https://celalaygar.github.io/main/project/lingua-bubble/",
    iconName: "Braces",
    gradient: "primary",
  },
  {
    id: "Job-Ts",
    title: "Job Ts",
    subtitleKey: "job_tracking_subtitle",
    descriptionKey: "job_tracking_desc",
    href: "https://jobts.probablythebestever.info/",
    iconName: "Briefcase",
    gradient: "red",
  },
];

export interface Game {
  id: string;
  title: string;
  subtitleKey: string;
  descriptionKey: string;
  href: string;
  iconName: string;
  gradient: GradientVariant;
}

export const games: Game[] = [
  { id: "snake-game", title: "Snake Game", subtitleKey: "snake_game_subtitle", descriptionKey: "snake_game_desc", href: "https://celalaygar.github.io/main/game/snake-game/", iconName: "Gamepad2", gradient: "yellow" },
  { id: "flappy-bird", title: "Flappy Bird", subtitleKey: "flappy_bird_subtitle", descriptionKey: "flappy_bird_desc", href: "https://celalaygar.github.io/main/game/flappy-bird-game/", iconName: "Bird", gradient: "green" },
  { id: "tetris", title: "Tetris", subtitleKey: "tetris_subtitle", descriptionKey: "tetris_desc", href: "https://celalaygar.github.io/main/game/tetris-game/", iconName: "Box", gradient: "primary" },
  { id: "pac-man", title: "Pac Man", subtitleKey: "pac_man_subtitle", descriptionKey: "pac_man_desc", href: "https://celalaygar.github.io/main/game/pac-man/", iconName: "Ghost", gradient: "secondary" },
  { id: "break-out", title: "Break Out", subtitleKey: "break_out_subtitle", descriptionKey: "break_out_desc", href: "https://celalaygar.github.io/main/game/breakout-game/", iconName: "Square", gradient: "accent" },
  { id: "scrambled-word", title: "Scrambled Word Game", subtitleKey: "scrambled_word_subtitle", descriptionKey: "scrambled_word_desc", href: "https://celalaygar.github.io/main/game/scrambled-word-game/", iconName: "Type", gradient: "primary" },
  { id: "2048", title: "2048 Game", subtitleKey: "game_2048_subtitle", descriptionKey: "game_2048_desc", href: "https://celalaygar.github.io/main/game/2048-game/", iconName: "Grid3x3", gradient: "yellow" },
  { id: "simon-says", title: "Simon Says", subtitleKey: "simon_says_subtitle", descriptionKey: "simon_says_desc", href: "https://celalaygar.github.io/main/game/simon-says-game/", iconName: "Brain", gradient: "accent" },
  { id: "endless-runner", title: "Endless Runner", subtitleKey: "endless_runner_subtitle", descriptionKey: "endless_runner_desc", href: "https://celalaygar.github.io/main/game/endless-runne-game/", iconName: "Activity", gradient: "primary" },
  { id: "missing-word", title: "Missing Word Game in Sentence", subtitleKey: "missing_word_subtitle", descriptionKey: "missing_word_desc", href: "https://celalaygar.github.io/main/game/missing-word-game-in-sentence/", iconName: "Type", gradient: "secondary" },
  { id: "sentence-builder", title: "Sentence Builder Game", subtitleKey: "sentence_builder_subtitle", descriptionKey: "sentence_builder_desc", href: "https://celalaygar.github.io/main/game/sentence-builder-game/", iconName: "AlignLeft", gradient: "green" },
  { id: "tic-tac-toe", title: "Tic Tac Toe", subtitleKey: "tic_tac_toe_subtitle", descriptionKey: "tic_tac_toe_desc", href: "https://celalaygar.github.io/main/game/tic-tac-toe-game/", iconName: "Hash", gradient: "primary" },
  { id: "asteroids", title: "Asteroids", subtitleKey: "asteroids_subtitle", descriptionKey: "asteroids_desc", href: "https://celalaygar.github.io/main/game/asteroids-game/", iconName: "Mountain", gradient: "secondary" },
  { id: "space-invaders", title: "Space Invaders", subtitleKey: "space_invaders_subtitle", descriptionKey: "space_invaders_desc", href: "https://celalaygar.github.io/main/game/space-invaders-game/", iconName: "Rocket", gradient: "accent" },
  { id: "helicopter", title: "Helicopter", subtitleKey: "helicopter_subtitle", descriptionKey: "helicopter_desc", href: "https://celalaygar.github.io/main/game/helicopter-game/", iconName: "Plane", gradient: "primary" },
  { id: "platform-jumper", title: "Platform Jumper Game", subtitleKey: "platform_jumper_subtitle", descriptionKey: "platform_jumper_desc", href: "https://celalaygar.github.io/main/game/platform-jumper-game/", iconName: "Layers", gradient: "secondary" },
  { id: "tower-blocks", title: "Tower Blocks Game", subtitleKey: "tower_blocks_subtitle", descriptionKey: "tower_blocks_desc", href: "https://celalaygar.github.io/main/game/tower-blocks-game/", iconName: "Building2", gradient: "yellow" },
  { id: "word-search", title: "Word Search Game", subtitleKey: "word_search_subtitle", descriptionKey: "word_search_desc", href: "https://celalaygar.github.io/main/game/word-search-game/", iconName: "Search", gradient: "primary" },
];

export interface InterviewTag {
  label: string;
  colorClass: string;
}

export interface Interview {
  id: string;
  title: string;
  subtitleKey: string;
  descriptionKey: string;
  href: string;
  iconName: string;
  gradient: GradientVariant;
  tags: InterviewTag[];
}

export const interviews: Interview[] = [
  { id: "interview-1", title: "Interview Questions", subtitleKey: "interview_1_subtitle", descriptionKey: "interview_1_desc", href: "https://celalaygar.github.io/main/interview_q-1/", iconName: "CircleHelp", gradient: "accent", tags: [{ label: "Java", colorClass: "bg-yellow-500/20 text-yellow-300" }, { label: "JavaScript", colorClass: "bg-blue-500/20 text-blue-300" }] },
  { id: "interview-2", title: "ELK, Docker and K8S", subtitleKey: "interview_2_subtitle", descriptionKey: "interview_2_desc", href: "https://celalaygar.github.io/main/interview_q-2/", iconName: "Container", gradient: "primary", tags: [{ label: "Docker", colorClass: "bg-blue-500/20 text-blue-300" }, { label: "Kubernetes", colorClass: "bg-cyan-500/20 text-cyan-300" }] },
  { id: "interview-3", title: "Spring & Microservices", subtitleKey: "interview_3_subtitle", descriptionKey: "interview_3_desc", href: "https://celalaygar.github.io/main/interview_q-3/", iconName: "Leaf", gradient: "green", tags: [{ label: "Spring Boot", colorClass: "bg-green-500/20 text-green-300" }, { label: "Microservices", colorClass: "bg-blue-500/20 text-blue-300" }] },
  { id: "interview-4", title: "Kafka and RabbitMQ", subtitleKey: "interview_4_subtitle", descriptionKey: "interview_4_desc", href: "https://celalaygar.github.io/main/interview_q-4/", iconName: "Workflow", gradient: "accent", tags: [{ label: "Kafka", colorClass: "bg-purple-500/20 text-purple-300" }, { label: "RabbitMQ", colorClass: "bg-orange-500/20 text-orange-300" }] },
  { id: "interview-5", title: "ELK Stack", subtitleKey: "interview_5_subtitle", descriptionKey: "interview_5_desc", href: "https://celalaygar.github.io/main/interview_q-5/", iconName: "Search", gradient: "primary", tags: [{ label: "Elasticsearch", colorClass: "bg-yellow-500/20 text-yellow-300" }, { label: "Logstash", colorClass: "bg-blue-500/20 text-blue-300" }] },
  { id: "interview-6", title: "Senior Level Kubernetes", subtitleKey: "interview_6_subtitle", descriptionKey: "interview_6_desc", href: "https://celalaygar.github.io/main/interview_q-6/", iconName: "Settings", gradient: "secondary", tags: [{ label: "Kubernetes", colorClass: "bg-blue-500/20 text-blue-300" }, { label: "Senior Level", colorClass: "bg-cyan-500/20 text-cyan-300" }] },
  { id: "interview-7", title: "Redis Senior Level", subtitleKey: "interview_7_subtitle", descriptionKey: "interview_7_desc", href: "https://celalaygar.github.io/main/interview_q-7/", iconName: "Database", gradient: "yellow", tags: [{ label: "Redis", colorClass: "bg-red-500/20 text-red-300" }, { label: "Senior Level", colorClass: "bg-orange-500/20 text-orange-300" }] },
];

export interface Skill {
  label: string;
  colorClass: string;
}

export const skills: Skill[] = [
  { label: "Java", colorClass: "bg-blue-500/20 text-blue-300" },
  { label: "Python", colorClass: "bg-gray-500/20 text-gray-300" },
  { label: "Spring Boot", colorClass: "bg-green-500/20 text-green-300" },
  { label: "JavaScript", colorClass: "bg-yellow-500/20 text-yellow-300" },
  { label: "Next Js & React", colorClass: "bg-purple-500/20 text-purple-300" },
  { label: "Node Js", colorClass: "bg-orange-500/20 text-orange-300" },
  { label: "Microservices", colorClass: "bg-green-500/20 text-green-300" },
  { label: "Git", colorClass: "bg-blue-500/20 text-blue-300" },
  { label: "Linux", colorClass: "bg-gray-500/20 text-gray-300" },
  { label: "Fast API & Flask", colorClass: "bg-yellow-500/20 text-yellow-300" },
  { label: "HTML/CSS", colorClass: "bg-red-500/20 text-red-300" },
  { label: "SQL", colorClass: "bg-indigo-500/20 text-indigo-300" },
  { label: "Docker", colorClass: "bg-cyan-500/20 text-cyan-300" },
  { label: "Kubernetes", colorClass: "bg-pink-500/20 text-pink-300" },
];

export interface SocialLink {
  id: string;
  name: string;
  href: string;
  iconType: "youtube" | "github" | "linkedin" | "tiktok" | "stackoverflow" | "medium" | "instagram" | "hackerrank" | "website";
  gradient: string;
  hoverColor: string;
  subtitle?: string;
  urlDisplay?: string;
}

export const heroSocialLinks: SocialLink[] = [
  { id: "github", name: "btn_github", href: "https://github.com/celalaygar", iconType: "github", gradient: "bg-gradient-to-r from-gray-700 to-gray-900", hoverColor: "hover:opacity-90" },
  { id: "youtube", name: "btn_youtube", href: "https://www.youtube.com/@celalaygar", iconType: "youtube", gradient: "bg-gradient-to-r from-red-600 to-red-800", hoverColor: "hover:opacity-90" },
  { id: "tiktok", name: "btn_tiktok", href: "https://www.tiktok.com/@wixtory.com", iconType: "tiktok", gradient: "bg-gradient-to-r from-black to-gray-900  ", hoverColor: "hover:opacity-90" },
];

export const socialSectionLinks: SocialLink[] = [
  { id: "youtube", name: "YouTube", href: "https://www.youtube.com/@celalaygar", iconType: "youtube", gradient: "bg-gradient-to-r from-red-600 to-red-800", hoverColor: "hover:opacity-90" },
  { id: "tiktok", name: "TikTok", href: "https://www.tiktok.com/@wixtory.com", iconType: "tiktok", gradient: "bg-gradient-to-r from-black to-gray-900   ", hoverColor: "hover:opacity-90", subtitle: "9785 Followers" },
  { id: "linkedin", name: "LinkedIn", href: "https://www.linkedin.com/in/celalaygar/", iconType: "linkedin", gradient: "bg-gradient-to-r from-blue-600 to-blue-800", hoverColor: "hover:opacity-90" },
  { id: "stackoverflow", name: "Stack Overflow", href: "https://stackoverflow.com/users/12014524/hac%c4%b1-celal-aygar", iconType: "stackoverflow", gradient: "bg-gradient-to-r from-orange-500 to-orange-700", hoverColor: "hover:opacity-90" },
  { id: "medium", name: "Medium", href: "https://medium.com/@celalaygar", iconType: "medium", gradient: "bg-gradient-to-r from-gray-800 to-gray-950", hoverColor: "hover:opacity-90" },
  { id: "github", name: "GitHub", href: "https://github.com/celalaygar", iconType: "github", gradient: "bg-gradient-to-r from-gray-700 to-gray-900", hoverColor: "hover:opacity-90" },
];

export interface MediumArticle {
  id: string;
  title: string;
  shortDescription: string;
  link: string;
}

export const mediumArticles: MediumArticle[] = [
  {
    id: "medium-1",
    title: "Mikroservislerde Yarış Koşulu (Race Condition)",
    shortDescription: "Monolitik sistemlerde, synchronized veya ReentrantLock ile JVM seviyesinde kaynakları koruyabiliriz. Ancak mikroservislerde, uygulamanızın…",
    link: "https://medium.com/@celalaygar/mikroservislerde-yarış-koşulu-race-condition-cbe487450fea",
  },
  {
    id: "medium-2",
    title: "Kafka ile \"Transactional Outbox Pattern\" ve Veri Tutarlılığı",
    shortDescription: "Transactional Outbox Pattern ve Debezium ile Veri Tutarlılığı",
    link: "https://medium.com/@celalaygar/kafka-ile-transactional-outbox-pattern-ve-veri-tutarlılığı-1011f2eed084",
  },
  {
    id: "medium-3",
    title: "Virtual Threads ve Spring Boot'ta Kullanımı",
    shortDescription: "Geleneksel olarak Java'da eşzamanlı (concurrent) programlama, her bir java.lang.Thread'in işletim sistemi (OS) düzeyinde bir iş parçacığına…",
    link: "https://medium.com/@celalaygar/virtual-threads-sanal-i̇ş-parçacıkları-ve-spring-bootta-kullanımı-d06be37de8f5",
  },
  {
    id: "medium-4",
    title: "Dinamik İstek Gövdeleri (Dynamic Request Bodies) Spring Boot",
    shortDescription: "Bu makalede, Spring Boot uygulamasında tek bir REST endpoint üzerinden, gelen requestin içeriğine göre farklı Java sınıflarına (objelere)…",
    link: "https://medium.com/@celalaygar/dinamik-i̇stek-gövdeleri-dynamic-request-bodies-spring-boot-7f2a13f2710b",
  },
  {
    id: "medium-5",
    title: "Spring Boot: Spring MVC ve WebFlux Arasındaki Farklar",
    shortDescription: "Geleneksel Spring MVC ve imperative (emir kipi) programlama yaklaşımıdır. WebFlux ise reactive (tepkisel) programlama modelini kullanır. Bu…",
    link: "https://medium.com/@celalaygar/spring-boot-spring-mvc-ve-webflux-arasındaki-farklar-158d1fb1b5a8",
  },
  {
    id: "medium-6",
    title: "Spring Boot ve Hystrix kullanımı",
    shortDescription: "Spring Boot ve Hystrix kullanımını detaylı bir şekilde açıklamak için, önce Hystrix'in ne olduğunu ve neden kullanıldığını anlamak…",
    link: "https://medium.com/@celalaygar/spring-boot-ve-hystrix-kullanımı-0bbe9a3a48f7",
  },
  {
    id: "medium-7",
    title: "MongoDB'de normalizasyon ve denormalizasyon",
    shortDescription: "MongoDB'de veritabanı tasarımı iki temel yaklaşıma dayanır: normalizasyon ve denormalizasyon. Bu yaklaşımları ve aralarındaki farkları…",
    link: "https://medium.com/@celalaygar/mongodbde-normalizasyon-ve-denormalizasyon-d9d0ad46c3a1",
  },
  {
    id: "medium-8",
    title: "SQL'de normalizasyon nedir?",
    shortDescription: "SQL veritabanlarında normalizasyon, veritabanı tasarımında veri fazlalığını ve tutarsızlıkları azaltmak amacıyla veritabanı tablolarının…",
    link: "https://medium.com/@celalaygar/sqlde-normalizasyon-nedir-5a2b177e9e10",
  },
  {
    id: "medium-9",
    title: "PostgreSql de UNION ve UNION ALL kullanımı ve arasındaki farklar",
    shortDescription: "PostgreSQL'de UNION ve UNION ALL ifadeleri, iki veya daha fazla sorgunun sonuçlarını birleştirmek için kullanılır. Aralarındaki temel fark…",
    link: "https://medium.com/@celalaygar/postgresql-de-union-ve-union-all-kullanımı-ve-arasındaki-farklar-17b233b188a1",
  },
  {
    id: "medium-10",
    title: "Spring Boot ile Resilience4j",
    shortDescription: "Resilience4j, mikroservislerin hata toleransını ve dayanıklılığını artırmak için kullanılan bir kütüphanedir. Temel olarak, devre kesici…",
    link: "https://medium.com/@celalaygar/spring-boot-ileresilience4j-9219294fe684",
  },
  {
    id: "medium-11",
    title: "Postgresql de index tipleri",
    shortDescription: "1. B-Tree Indeksler",
    link: "https://medium.com/@celalaygar/postgresql-de-index-tipleri-f1315cfb06a5",
  },
  {
    id: "medium-12",
    title: "Spring Boot üzerinde cron job'ları kullanmak",
    shortDescription: "Spring Boot üzerinde cron job'ları kullanmak oldukça basittir. Cron job'lar, belirli zaman aralıklarında veya belirli zamanlarda…",
    link: "https://medium.com/@celalaygar/spring-boot-üzerinde-cron-jobları-kullanmak-5edd336279cd",
  },
  {
    id: "medium-13",
    title: "MongoDB'de indeksleme",
    shortDescription: "MongoDB'de indeksleme, sorgu performansını artırmak ve veri tabanı operasyonlarını hızlandırmak için önemli bir işlemdir. MongoDB'de…",
    link: "https://medium.com/@celalaygar/mongodbde-indeksleme-3f00143a1a59",
  },
  {
    id: "medium-14",
    title: "MongoDB ve SQL veritabanları arasında temel farklar",
    shortDescription: "MongoDB ve SQL veritabanları arasında temel farklar, veri yapıları, sorgulama dilleri, esneklik ve ölçeklenebilirlik gibi çeşitli konularda…",
    link: "https://medium.com/@celalaygar/mongodb-ve-sql-veritabanları-arasında-temel-farklar-dbec9aad4f7f",
  },
  {
    id: "medium-15",
    title: "Spring Boot Security Örneği",
    shortDescription: "Security işlemi için daha önce yaptığım bir örnek üzerinden gitmek istiyorum. Link …",
    link: "https://medium.com/@celalaygar/spring-boot-security-örneği-62f344124f7d",
  },
  {
    id: "medium-16",
    title: "Spring Boot, Spring MVC Anotasyon",
    shortDescription: "Spring Boot üzerinde Spring mvc ile kullanılan bazı annotasyonlar anlatılacaktır.",
    link: "https://medium.com/@celalaygar/spring-boot-ile-spring-mvc-1-478ebcce3756",
  },
];

export const contactSocialLinks: SocialLink[] = [
  { id: "linkedin", name: "Linkedin", href: "https://www.linkedin.com/in/celalaygar/", iconType: "linkedin", gradient: "bg-blue-600/20", hoverColor: "group-hover:text-blue-400", urlDisplay: "linkedin.com/in/celalaygar" },
  { id: "github", name: "GitHub", href: "https://github.com/celalaygar", iconType: "github", gradient: "bg-gray-600/20", hoverColor: "group-hover:text-gray-400", urlDisplay: "github.com/celalaygar" },
  { id: "medium", name: "Medium", href: "https://medium.com/@celalaygar", iconType: "medium", gradient: "bg-gray-800/20", hoverColor: "group-hover:text-gray-400", urlDisplay: "medium.com/@celalaygar" },
  { id: "youtube", name: "Youtube", href: "https://www.youtube.com/@celalaygar", iconType: "youtube", gradient: "bg-red-600/20", hoverColor: "group-hover:text-red-400", urlDisplay: "youtube.com/@celalaygar" },
  { id: "hackerrank", name: "HackerRank", href: "https://hackerrank.com/celalaygar", iconType: "hackerrank", gradient: "bg-green-600/20", hoverColor: "group-hover:text-green-400", urlDisplay: "hackerrank.com/celalaygar" },
  { id: "stackoverflow", name: "StackOverflow", href: "https://stackoverflow.com/users/12014524", iconType: "stackoverflow", gradient: "bg-orange-600/20", hoverColor: "group-hover:text-orange-400", urlDisplay: "stackoverflow.com/users/12014524" },
  { id: "tiktok", name: "TikTok", href: "https://www.tiktok.com/@openick.io", iconType: "tiktok", gradient: "bg-pink-600/20", hoverColor: "group-hover:text-pink-400", urlDisplay: "tiktok.com/@openick.io" },
  { id: "instagram", name: "Instagram", href: "https://www.instagram.com/celalaygar", iconType: "instagram", gradient: "bg-pink-600/20", hoverColor: "group-hover:text-pink-400", urlDisplay: "instagram.com/celalaygar" },
];
