import React from 'react';
import { BookOpen, Scale, Stethoscope, Leaf, Cpu, Zap, Building2, Globe, ShoppingBag, Truck, Lock, Heart, Video, Rocket } from 'lucide-react';

export const PROBLEM_STATEMENTS = [
    {
        domain: "EdTech",
        icon: <BookOpen className="w-6 h-6" />,
        desc: "Learning, skills, access",
        isPriority: true,
        problems: [
            {
                title: "High Dropout Rates",
                desc: "1.42 crore students drop out annually in India. Schools lack real-time data to identify at-risk students before it's too late.",
                solution: "Build a low-cost SMS/WhatsApp chatbot that tracks attendance/grades and triggers auto-alerts to parents & mentors."
            },
            {
                title: "Workforce Skills Mismatch",
                desc: "Universities teach theory, but industry demands execution. 48% of graduates are deemed unemployable.",
                solution: "Build a 'micro-internship' platform that converts real company backlogs into student-sized projects."
            },
            {
                title: "Teachers Overwhelmed",
                desc: "Teachers spend 40% of their time on admin work (grading, roll calls) instead of actual teaching.",
                solution: "Build an AI grading assistant that scans handwritten sheets or a voice-based lesson planner."
            }
        ]
    },
    {
        domain: "FinTech",
        icon: <Scale className="w-6 h-6" />,
        desc: "Fraud, payments, inclusion",
        isPriority: true,
        problems: [
            {
                title: "Synthetic Identity Fraud",
                desc: "Fraudsters combine real and fake data to create new identities. Standard KYC fails to catch this.",
                solution: "Build a behavioral biometrics tool that analyzes typing speed/mouse movement to distinguish humans from bots."
            },
            {
                title: "Phishing & UPI Fraud",
                desc: "UPI scams are rising, targeting the elderly and less tech-savvy. Recovery is nearly impossible.",
                solution: "Build a 'Check-Before-Pay' overlay app that scans phone numbers against a crowdsourced scammer database."
            },
            {
                title: "Rural Trust Gap",
                desc: "Rural users avoid digital payments due to language barriers and UI complexity.",
                solution: "Build a voice-first vernacular banking interface that works entirely through audio commands."
            }
        ]
    },
    {
        domain: "MedTech",
        icon: <Stethoscope className="w-6 h-6" />,
        desc: "Healthcare access, data",
        isPriority: true,
        problems: [
            {
                title: "Rural Healthcare Access",
                desc: "70% of India's population has limited access to specialized doctors and diagnostics.",
                solution: "Build an offline-first diagnostic guide that helps ASHA workers triage symptoms."
            },
            {
                title: "Maternal Health",
                desc: "High maternal mortality due to lack of timely nutritional and medical tracking.",
                solution: "Build a low-tech SMS tracker for prenatal checkups, nutrition reminders, and emergency transport."
            },
            {
                title: "Data Fragmentation",
                desc: "Medical records are scattered on paper across random clinics, leading to poor diagnosis.",
                solution: "Build a privacy-preserving 'Health Wallet' allowing patients to store records via simple QR scans."
            }
        ]
    },
    {
        domain: "AgriTech",
        icon: <Leaf className="w-6 h-6" />,
        desc: "Small farmers, climate risk",
        isPriority: true,
        problems: [
            {
                title: "Small Farmer Tech",
                desc: "Advanced IoT sensors are too expensive for farmers with <2 acres of land.",
                solution: "Build a ₹500 soil moisture alert system using basic electronics and GSM modules."
            },
            {
                title: "Debt & Middlemen",
                desc: "Farmers lose 30-40% of value to intermediaries and lack access to fair credit.",
                solution: "Build a direct-to-buyer Whatsapp marketplace or a cooperative lending circle manager."
            },
            {
                title: "Climate Risk",
                desc: "Unpredictable micro-climates destroy harvest. Generic weather apps are too broad.",
                solution: "Build a crowdsourced micro-weather network where farmers validate local conditions for rewards."
            }
        ]
    },
    {
        domain: "AI & DeepTech",
        icon: <Cpu className="w-6 h-6" />,
        desc: "Deepfakes, trust, agents",
        isPriority: true,
        problems: [
            {
                title: "Deepfake Misinformation",
                desc: "AI-generated fake content spreads 6x faster than truth, causing social unrest.",
                solution: "Build a browser extension or API that flags AI-generated faces/audio in real-time."
            },
            {
                title: "AI Fraud & Impersonation",
                desc: "Voice cloning is being used to scam families by impersonating distress calls.",
                solution: "Build a 'Family Safe-Word' authenticator that validates caller identity via encrypted tokens."
            },
            {
                title: "AI Literacy Gap",
                desc: "Non-tech employees fear AI will replace them, leading to resistance.",
                solution: "Build a gamified AI literacy benchmarking tool to help teams understand and adopt LLMs."
            }
        ]
    },
    {
        domain: "DevTools",
        icon: <Zap className="w-6 h-6" />,
        desc: "Productivity, automation",
        problems: [
            {
                title: "Context Switching",
                desc: "Developers lose hours switching between Jira, GitHub, Slack, and IDEs.",
                solution: "Build a unified 'Dev-Stream' that aggregates diverse notifications into a single timeline."
            },
            {
                title: "AI Code Quality",
                desc: "AI writes code fast, but often introduces subtle bugs and security holes.",
                solution: "Build a 'Hallucination Checker' that validates LLM-generated code against security standards."
            },
            {
                title: "Developer Burnout",
                desc: "DORA metrics measure speed but ignore developer well-being and flow state.",
                solution: "Build a privacy-first 'Flow State' tracker that blocks interruptions during deep work sessions."
            }
        ]
    },
    {
        domain: "Smart Cities",
        icon: <Building2 className="w-6 h-6" />,
        desc: "Urban infra, sanitation",
        problems: [
            {
                title: "Sewage Crisis",
                desc: "72k MLD of sewage is generated, but treatment capacity is low. Leaks go undetected.",
                solution: "Build a leak detection system using flow rate analysis or IoT pressure sensors."
            },
            {
                title: "Urban Flooding",
                desc: "Annual monsoons paralyze cities. Forecasting is not hyper-local enough.",
                solution: "Build a crowdsourced street-level flood map for real-time safe route navigation."
            },
            {
                title: "Fragmented Systems",
                desc: "City departments (Roads, Water, Power) operate in silos.",
                solution: "Build a unified 'City Dashboard' API that aggregates grievance data for better planning."
            }
        ]
    },
    {
        domain: "ClimateTech",
        icon: <Globe className="w-6 h-6" />,
        desc: "Carbon, energy, waste",
        problems: [
            {
                title: "SME Carbon Accounting",
                desc: "Small businesses can't afford expensive carbon audit consultants.",
                solution: "Build an invoice-based carbon calculator that estimates footprint from spending data."
            },
            {
                title: "Industrial Emissions",
                desc: "Factories waste energy due to inefficient machine scheduling.",
                solution: "Build a peak-load optimizer that suggests optimal run-times for heavy machinery."
            },
            {
                title: "Grid Instability",
                desc: "Renewable energy is intermittent, causing grid stress.",
                solution: "Build a P2P energy trading ledger for rooftop solar owners to share excess power."
            }
        ]
    },
    {
        domain: "E-Commerce",
        icon: <ShoppingBag className="w-6 h-6" />,
        desc: "Retail, logistics, payment",
        problems: [
            {
                title: "Payment Failures",
                desc: "Payment gateway downtimes kill conversion rates for small merchants.",
                solution: "Build a smart-router that automatically switches between different payment gateways on failure."
            },
            {
                title: "Last-Mile Bottleneck",
                desc: "Addresses in India are unstructured, leading to failed deliveries.",
                solution: "Build a 'Landmark-Based' address standardizer that visualizes delivery locations."
            },
            {
                title: "Small Retailer Digitization",
                desc: "Kirana stores rely on manual notebooks and fear complex ERPs.",
                solution: "Build a voice-ledger apps that records inventory/sales via simple speech commands."
            }
        ]
    },
    {
        domain: "Logistics",
        icon: <Truck className="w-6 h-6" />,
        desc: "Supply chain, tracking",
        problems: [
            {
                title: "Invisible Supply Chain",
                desc: "Small fleet owners rely on phone calls to track trucks, leading to delays.",
                solution: "Build a SIM-based triangulation tracker that works without expensive GPS hardware."
            },
            {
                title: "Address Accuracy",
                desc: "Delivery agents waste time finding correct doors.",
                solution: "Build a photo-based proof-of-delivery validator with geo-tagging."
            },
            {
                title: "Warehouse Inefficiency",
                desc: "Warehouse space is often underutilized or overbooked.",
                solution: "Build an 'Airbnb for Warehousing' to aggregate and rent out spare storage capacity."
            }
        ]
    },
    {
        domain: "Cybersecurity",
        icon: <Lock className="w-6 h-6" />,
        desc: "Safety, privacy, fraud",
        problems: [
            {
                title: "Supply Chain Ransomware",
                desc: "Small vendors are the weakest link, often used to attack larger partners.",
                solution: "Build a simplified automated vendor risk scorecard for SMEs."
            },
            {
                title: "Phishing at Scale",
                desc: "AI can generate perfect phishing emails at scale.",
                solution: "Build a stylistic analysis tool that flags email patterns typical of LLMs."
            },
            {
                title: "Cloud Misconfigs",
                desc: "Developers accidentally leave S3 buckets and databases open.",
                solution: "Build a 'One-Click' security scanner for AWS/GCP setups."
            }
        ]
    },
    {
        domain: "Social Impact",
        icon: <Heart className="w-6 h-6" />,
        desc: "Inclusion, livelihood",
        problems: [
            {
                title: "Banking the Unbanked",
                desc: "Millions lack a credit score and cannot get loans.",
                solution: "Build a credit score proxy based on utility bill payments and mobile recharge history."
            },
            {
                title: "Rural Maternal Health",
                desc: "Community health workers rely on paper forms, leading to data loss.",
                solution: "Build a voice-form app for ASHA workers to digitally record health stats."
            },
            {
                title: "Youth Unemployment",
                desc: "Youth lack formal degrees but have practical skills.",
                solution: "Build a skill-verification platform for gig workers (plumbers, electricians)."
            }
        ]
    },
    {
        domain: "Media & Creator",
        icon: <Video className="w-6 h-6" />,
        desc: "IP rights, misinformation",
        problems: [
            {
                title: "AI Misinformation",
                desc: "Fake news travels fast on private messaging channels.",
                solution: "Build a 'Source-Checker' plugin for chat apps."
            },
            {
                title: "Creator IP Theft",
                desc: "Artists' work is scraped by AI training models without consent.",
                solution: "Build a watermark generator that poisons image data for AI scrapers."
            },
            {
                title: "Influencer Fraud",
                desc: "Fake gurus give dangerous financial/health advice.",
                solution: "Build a verification badge system that validates qualifications of influencers."
            }
        ]
    },
    {
        domain: "Open Innovation",
        icon: <Rocket className="w-6 h-6" />,
        desc: "Heritage, governance",
        problems: [
            {
                title: "Heritage Industries",
                desc: "Traditional weavers and artisans are losing to mass production.",
                solution: "Build an AI pattern generator that helps artisans create modern designs."
            },
            {
                title: "Corp-Startup Mismatch",
                desc: "Corporate-Startup pilots often fail due to legal complexity.",
                solution: "Build a standardized MOU generator for quick Proof-of-Concept agreements."
            },
            {
                title: "Privacy Collaboration",
                desc: "Companies cannot share data due to privacy laws.",
                solution: "Build a synthetic data generator that creates safe, shareable datasets."
            }
        ]
    }
];
