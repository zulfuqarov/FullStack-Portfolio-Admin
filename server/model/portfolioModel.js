import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
    img: {
        type: String,
        default: null
    },
    imageId: {
        type: String,
        trim: true,
        default: null
    },
    firstname: {
        type: String,
        required: true,
        unique: true,
        default: null
    },
    lastname: {
        type: String,
        required: true,
        unique: true,
        default: null
    },
    position: {
        type: String,
        required: true,
        default: null
    },
    bio: {
        type: String,
        default: null
    },
    linkedinUrl: {
        type: String,
        default: null
    },
    githubUrl: {
        type: String,
        default: null
    },
    instagramUrl: {
        type: String,
        default: null
    },
    youtubeUrl: {
        type: String,
        default: null
    },
    facebookUrl: {
        type: String,
        default: null
    },
    experience: [
        {
            role: {
                type: String,
            },
            jobTitle: {
                type: String,
            },
            description: {
                type: String,
            }
        }
    ],
    projects: [
        {
            title: {
                type: String,
            },
            position: {
                type: String,
            },
            description: {
                type: String,
            },
            projectUrl: {
                type: String,
            }
        }
    ],
    contact: {
        email: {
            type: String,
            default: null
        },
        phone: {
            type: String,
            default: null
        },
        address: {
            type: String,
            default: null
        },
        city: {
            type: String,
            default: null
        },
        country: {
            type: String,
            default: null
        },
    },
    getportfolio: {
        type: String,
        default: null
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default: null
    }

});

export default mongoose.model('portfolio', portfolioSchema);