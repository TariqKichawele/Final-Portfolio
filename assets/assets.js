import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import profile_img_2 from './IMG_0078.jpg';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    profile_img_2,
};

/** Served from /public — use for any “My resume” download link */
export const resumePdf = {
    href: '/tariq-kichawele-resume.pdf',
    downloadFilename: 'Tariq Kichawele Resume.pdf',
};

export const workData = [
    {
        title: 'YouTube to Chapters',
        description:
            'A Next.js app that turns public YouTube watch URLs into timestamped chapter lines you can paste into a video description. It pulls captions through a third-party API, uses GPT-4o to propose natural breakpoints aligned with the transcript, and saves each run to your dashboard with Google or Discord sign-in, usage limits, and optional Stripe subscriptions.',
        bgImage: '/youtube-to-chapters.png',
        link: 'https://youtube-to-chapters-ecru.vercel.app',
        github: 'https://github.com/TariqKichawele/Youtube-to-Chapters',
        status: 'Completed',
        date: 'April 2026',
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'NextAuth.js', 'OpenAI']
    },
    {
        title: 'Architeck AI',
        description: 'An innovative AI-powered architecture design platform that helps users create and visualize architectural plans using artificial intelligence and modern design principles.',
        bgImage: '/architeck.png',
        link: 'https://architeck-ai.vercel.app',
        github: 'https://github.com/TariqKichawele/architeck-ai',
        status: 'Completed',
        date: 'November 2024',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Framer Motion']
    },
    {
        title: 'Mojito',
        description: 'A modern mocktail recipe website with interactive animations and smooth user experience. Features dynamic content presentation and responsive design.',
        bgImage: '/mojito.png',
        link: 'https://mocktail-gsap.vercel.app',
        github: 'https://github.com/TariqKichawele/mojito-website',
        status: 'Completed',
        date: 'October 2024',
        technologies: ['React', 'GSAP', 'Tailwind CSS', 'JavaScript']
    },
    {
        title: 'Resonance',
        description: 'A web application for AI text-to-speech and voice management. Users sign in with organizations, generate speech from text with configurable voices, browse generation history, and manage custom voices with usage-based billing.',
        bgImage: '/resonance.png',
        link: 'https://resonance-eosin.vercel.app',
        github: 'https://github.com/TariqKichawele/Resonance',
        status: 'Completed',
        date: 'April 2026',
        technologies: ['Next.js', 'TypeScript', 'tRPC', 'Prisma', 'Clerk']
    },
]

export const serviceData = [
    {
        icon: assets.web_icon,
        title: 'Web design',
        description:
            'I plan layout structure, typography, and responsive behavior so pages stay readable and consistent from phone to desktop. The goal is clear visual hierarchy, accessible markup, and handoff-friendly design that engineers can implement without guesswork.',
        link: '',
    },
    {
        icon: assets.mobile_icon,
        title: 'Mobile app',
        description:
            'Mobile app development is building software purpose-built for phones and tablets, covering navigation patterns, touch targets, networking, and performance on real devices. I emphasize stable releases, sensible state handling, and experiences that feel natural on small screens.',
        link: '',
    },
    {
        icon: assets.ui_icon,
        title: 'UI/UX design',
        description:
            'UI and UX work starts with understanding what users are trying to accomplish and removing friction from every step of the journey. That includes user flows, wireframes, consistent components, and validation so the final interface feels intuitive before a single line of production code ships.',
        link: '',
    },
    {
        icon: assets.code_icon,
        title: 'Web development',
        description:
            'Web development is the full path from idea to deployed product, including frontends, backend services, data layers, and automation around testing and releases. I rely on modern frameworks, solid API boundaries, and maintainable architecture so features can grow without slowing the team down.',
        link: '',
    },
]

export const infoList = [
    {
        icon: assets.code_icon,
        iconDark: assets.code_icon_dark,
        title: 'Languages',
        description:
            'I work across TypeScript, Python, Java, C++, C#, and HTML/CSS, choosing the right stack for services, scripts, and interfaces.',
    },
    {
        icon: assets.edu_icon,
        iconDark: assets.edu_icon_dark,
        title: 'Education',
        description:
            'I earned a Bachelor of Science from the University of North Carolina at Charlotte with a minor in Communication Studies.',
    },
    {
        icon: assets.project_icon,
        iconDark: assets.project_icon_dark,
        title: 'Projects',
        description:
            'Recent builds include Resonance, an AI text-to-speech platform, and YouTube-to-Chapters, which generates timestamped chapters from transcripts.',
    },
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];