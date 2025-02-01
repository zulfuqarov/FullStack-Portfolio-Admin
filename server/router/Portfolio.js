import express from "express";
import portfolioModel from "../model/portfolioModel.js";
import { CheckToken } from "../middleware/CheckToken.js";
import cloudinary from "cloudinary"
const router = express.Router();

router.use(CheckToken);

// router.put("/:id", async (req, res) => {
//     const { id } = req.params
//     const data = req.body
//     let image = req.files && req.files.image;

//     let updatePortfolio = { ...data };

//     try {

//         const portfolio = await portfolioModel.finById(id)

//         if (!portfolio) {
//             return res.status(404).json({ message: "Portfolio not found" });
//         }

//         if (portfolio.userId !== req.user.id) {
//             return res.status(403).json({ message: "Unauthorized to update this portfolio" });
//         }

//         if (image) {
//             try {
//                 if (portfolio.imageId && portfolio.imageId !== updatePortfolio.imageId) {
//                     await cloudinary.uploader.destroy(portfolio.imageId);
//                 }

//                 const uploadImg = await cloudinary.uploader.upload(
//                     image.tempFilePath,
//                     {
//                         use_filename: true,
//                         folder: "Home",
//                     }
//                 );

//                 updatePortfolio.imageId = uploadImg.public_id;
//                 updatePortfolio.img = uploadImg.secure_url;

//             } catch (error) {
//                 console.log(error)
//                 res.status(500).json({ message: "Error uploading image" });
//             }
//         }

//         const updatedPortfolio = await portfolioModel.findByIdAndUpdate(
//             { _id: id },
//             { $set: updatePortfolio },
//             { new: true }
//         );

//         if (!updatedPortfolio) {
//             return res.status(404).json({ message: "Portfolio not found" });
//         }

//         return res.status(200).json(updatedPortfolio);

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ message: "Server error" });
//     }
// })

router.put("/", async (req, res) => {
    const data = req.body
    let image = req.files && req.files.img;

    let updatePortfolio = { ...data };

    try {

        const portfolio = await portfolioModel.findOne({ userId: req.user.id });

        if (!portfolio) {
            return res.status(404).json({ message: "Portfolio not found" });
        }

        if (image) {
            try {
                if (portfolio.imageId && portfolio.imageId !== updatePortfolio.imageId) {
                    await cloudinary.uploader.destroy(portfolio.imageId);
                }

                const uploadImg = await cloudinary.uploader.upload(
                    image.tempFilePath,
                    {
                        use_filename: true,
                        folder: "Home",
                    }
                );

                updatePortfolio.imageId = uploadImg.public_id;
                updatePortfolio.img = uploadImg.secure_url;

            } catch (error) {
                console.log(error)
                res.status(500).json({ message: "Error uploading image" });
            }
        }

        const updatedPortfolio = await portfolioModel.findByIdAndUpdate(
            { _id: portfolio._id },
            { $set: updatePortfolio },
            { new: true }
        );

        if (!updatedPortfolio) {
            return res.status(404).json({ message: "Portfolio not found" });
        }

        return res.status(200).json(updatedPortfolio);

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" });
    }
})

export default router;

