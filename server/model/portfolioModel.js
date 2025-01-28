import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
    img: {
        type: String,
    },
    firstname: {
        type: String,
        required: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true,
        unique: true
    },
    position: {
        type: String,
        required: true
    },
    bio: {
        type: String,
    },
    linkedinUrl: {
        type: String,
    },
    githubUrl: {
        type: String,
    },
    instagramUrl: {
        type: String,
    },
    youtubeUrl: {
        type: String,
    },
    experience: [
        {
            role: {
                type: String,
            },
            jobtitle: {
                type: String,
            },
            Description: {
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
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        country: {
            type: String,
        },
    },
    getportfolio: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});

export default mongoose.model('portfolio', portfolioSchema);