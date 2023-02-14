import LogoIcon from "../assets/Logo.png"
import ilust_a from "../assets/Illustration1.png"
import iconUser from "../assets/Icon/user.png"
import iconLocation from "../assets/Icon/location.png"
import iconServer from "../assets/Icon/Server.png"
import ilust_b from "../assets/Illustration2.png"
import iconFeature from "../assets/iconFeatures.png"
import iconPricing from "../assets/Illustration/Free.png"
import iconCheck from "../assets/iconCheck.png"
import hugeImage from "../assets/hugeGlobal.png"
import netflix from "../assets/netflix.png"
import reddit from "../assets/reddit.png"
import spotify from "../assets/spotify.png"
import discord from "../assets/discord.png"
import amazon from "../assets/amazon.png"
import testi1 from "../assets/testi1.png"
import star from "../assets/star.png"
import testi2 from "../assets/testi2.png"
import testi3 from "../assets/testi3.png"
import left from "../assets/left.png"
import right from "../assets/right.png"

import facebook from "../assets/Socmed/Facebook.png"
import twitter from "../assets/Socmed/Twitter.png"
import instagram from "../assets/Socmed/Instagram.png"

export const navData = {
    image: LogoIcon,
    navMenu: [
        "About",
        "Features",
        "Pricing",
        'Network',
        "Testimonials",
        "Help"
    ]
}

export const firstSection = {
    title: 'Want anything to be easy with LaslesVPN.',
    subtitle: 'Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.',
    img: ilust_a
}

export const secondSection = [
    {
        icon: iconUser,
        title: '90+',
        subtitle: 'Users'
    },
    {
        icon: iconLocation,
        title: '30+',
        subtitle: 'Locations'
    },
    {
        icon: iconServer,
        title: '50+',
        subtitle: 'Servers'
    },
]

export const featuresSection = {
    img: ilust_b,
    icon: iconFeature,
    title: 'We Provide Many Features You Can Use',
    subtitle: 'You can explore the features that we provide with fun and have their own functions each feature.',
    content: [
        'Powerfull online protection.',
        'Internet without borders.',
        'Supercharged VPN',
        'No specific time limits.'
    ]
}

export const pricing = {
    title : 'Choose Your Plan',
    subtitle : "Let's choose the package that is best for you and explore it happily and cheerfully.",
    isi: [{
        title: 'Free Plan',
        content: [
            'Unlimited Bandwitch',
            'Encrypted Connection',
            'No Traffic Logs',
            'Works on All Devices'
        ],
        price: 'Free',
        img: iconPricing,
        icon: iconCheck
    },
    {
        title: 'Standard Plan',
        content: [
            'Unlimited Bandwitch',
            'Encrypted Connection',
            'No Traffic Logs',
            'Works on All Devices',
            'Connect Anyware'
        ],
        price: '$9/mo',
        img: iconPricing,
        icon: iconCheck
    },
    {
        title: 'Premium Plan',
        content: [
            'Unlimited Bandwitch',
            'Encrypted Connection',
            'No Traffic Logs',
            'Works on All Devices',
            'Connect Anyware',
            'Get New Features'
        ],
        price: '$12/mo',
        img: iconPricing,
        icon: iconCheck
    }],
}

export const huge = {
    title : 'Huge Global Network of Fast VPN',
    subtitle : 'See LaslesVPN everywhere to make it easier for you when you move locations.',
    img : hugeImage,
    netflix : netflix,
    reddit : reddit,
    spotify : spotify,
    discord : discord,
    amazon : amazon,
}

export const testimonials = {
    title : 'Trusted by Thousands of Happy Customer',
    subtitle : 'These are the stories of our customers who have joined us with great pleasure when using this crazy feature.',
    star : star,
    left : left,
    right : right,
    content : [
        {
            img : testi1,
            nama : 'Viezh Robert',
            loc : 'Warsaw, Poland',
            rating : '4.5',
            word : '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
        },

        {
            img : testi2,
            nama : 'Viezh Robert',
            loc : 'Shanxi, China',
            rating : '4.5',
            word : '“I like it because I like to travel far and still can connect with high speed.”'
        },

        {
            img : testi3,
            nama : 'Kim Young Jou',
            loc : 'Seoul, South Korea',
            rating : '4.5',
            word : '“This is very unusual for my business that currently requires a virtual private network that has high security.”'
        },

        {
            img : testi1,
            nama : 'Viezh Robert',
            loc : 'Warsaw, Poland',
            rating : '4.5',
            word : '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
        },

    ]
}


export const footer = {
    word : 'LaslesVPN is a private virtual network that has unique features and has high security.',
    mediaIcon : {
        facebook : facebook,
        twitter : twitter,
        instagram : instagram,
    },
    copyRight : '©2020LaslesVPN',
    product : [
        'Download',
        'Pricing',
        'Locations',
        'Server',
        'Countries',
        'Blog'
    ],
    engage : [
        'LaslesVPN ?',
        'FAQ',
        'Tutorials',
        'About Us',
        'Privacy Policy',
        'Terms of Service'
    ],
    earnMoney : [
        'Affiliate',
        'Become Partner'
    ]
}