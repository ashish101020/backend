import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { upload } from "../middlewares/multer.middleware.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const  registerUser = asyncHandler(async (req, res) => {
//     // get user detail from fronted
//     // validation - not entry
//     // check if user already exists; username email
//     // check for images, check for avatar
//     // upload them to cloudinary, avatar
//     // craete user object - crete entry in db
//     // remove password and refresh token field from response
//     // check for user creation
//     // return res

//     const {fullName, email, username, password} = req.body
//     console.log("email: ", email);

//     if (
//         [fullName, email, username, password].some((field) => field?.trim() === "")
//     ) {
//         throw new ApiError(400, "All fields are required")
//     }

//     const existedUser = await User.findOne({
//         $or: [{ username }, { email }]
//     })

//     if (existedUser) {
//         throw new ApiError(409, "User with email or username already exists")
//     }

//     const avatarLocalPath = req.files?.avatar[0]?.path
//     const coverImageLocalPath = req.files?.coverIamge[0]?.path;

//     if (!avatarLocalPath) {
//         throw new ApiError(400, "Avatar file is required")
//     }

//     const avatar = await uploadOnCloudinary(avatarLocalPath)
//     const coverImage = await uploadOnCloudinary(coverImageLocalPath)

//     if (!avatar) {
//         throw new ApiError(400, "Avatar file is required")
//     }

//     const user =  await User.create({
//         fullName,
//         avatar: avatar.url,
//         coverImage: coverImage?.url || "",
//         email,
//         password,
//         username: username.toLowerCase()
//     })

//     const createdUser = await User.findById(user._id).select(
//         "-password -refreseToken"
//     )

//     if(!createdUser) {
//         throw new ApiError(500, "Something went wrong while registring the user")
//     }

//     return res.status(201).json(
//         new ApiResponse(200, createdUser, "User registered Successfully")
//     )

})

const loginUser = asyncHandler(async (req, res) =>{
    // req body -> data
    // username of mail
    // find the user
    // password check
    //access and refresh token 
    //send cookies

    cosnt (email, username, password) = req.b

})

export {registerUser,}