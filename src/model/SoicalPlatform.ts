import { SocialSection } from "./Social";

export type SocialPlatform = {
    key: keyof Omit<SocialSection, "updatedAt">;
    label: string;
    category: "Social" | "Video & Streaming" | "Professional" | "Creative" | "Developer";
    network: string;
    baseUrl: string;
};

export const socialPlatforms: SocialPlatform[] = [
    {
        key: "instagram",
        label: "Instagram",
        category: "Social",
        network: "instagram",
        baseUrl: "https://instagram.com/",
    },
    {
        key: "facebook",
        label: "Facebook",
        category: "Social",
        network: "facebook",
        baseUrl: "https://facebook.com/",
    },
    {
        key: "x",
        label: "X",
        category: "Social",
        network: "x",
        baseUrl: "https://x.com/",
    },
    {
        key: "tiktok",
        label: "TikTok",
        category: "Social",
        network: "tiktok",
        baseUrl: "https://tiktok.com/",
    },
    {
        key: "threads",
        label: "Threads",
        category: "Social",
        network: "threads",
        baseUrl: "https://threads.net/",
    },
    {
        key: "snapchat",
        label: "Snapchat",
        category: "Social",
        network: "snapchat",
        baseUrl: "https://snapchat.com/add/",
    },
    {
        key: "youtube",
        label: "YouTube",
        category: "Video & Streaming",
        network: "youtube",
        baseUrl: "https://youtube.com/",
    },
    {
        key: "twitch",
        label: "Twitch",
        category: "Video & Streaming",
        network: "twitch",
        baseUrl: "https://twitch.tv/",
    },
    {
        key: "linkedin",
        label: "LinkedIn",
        category: "Professional",
        network: "linkedin",
        baseUrl: "https://linkedin.com/in/",
    },
    {
        key: "pinterest",
        label: "Pinterest",
        category: "Creative",
        network: "pinterest",
        baseUrl: "https://pinterest.com/",
    },
    {
        key: "behance",
        label: "Behance",
        category: "Creative",
        network: "behance",
        baseUrl: "https://behance.net/",
    },
    {
        key: "dribbble",
        label: "Dribbble",
        category: "Creative",
        network: "dribbble",
        baseUrl: "https://dribbble.com/",
    },
    {
        key: "patreon",
        label: "Patreon",
        category: "Creative",
        network: "patreon",
        baseUrl: "https://patreon.com/",
    },
    {
        key: "github",
        label: "GitHub",
        category: "Developer",
        network: "github",
        baseUrl: "https://github.com/",
    },
    {
        key: "gitlab",
        label: "GitLab",
        category: "Developer",
        network: "gitlab",
        baseUrl: "https://gitlab.com/",
    },
    {
        key: "codepen",
        label: "CodePen",
        category: "Developer",
        network: "codepen",
        baseUrl: "https://codepen.io/",
    },
    {
        key: "stackoverflow",
        label: "Stack Overflow",
        category: "Developer",
        network: "stackoverflow",
        baseUrl: "https://stackoverflow.com/users/",
    },
];