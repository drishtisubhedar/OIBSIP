const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const { userModel } = require("../models/userModel")
const createError = require("../utils/appError")

//Register User
exports.signup = async(req,res,next)=>{
    try{
        const user = await userModel.findOne({ email: req.body.email});

        if(user){
            return next(new createError('User already Exists!',400));
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        
        const  newUser = await userModel.create({
            ...req.body,
            password: hashedPassword,
        });

        //Assign jsonwebtoken
        const token = jwt.sign({ _id: newUser._id}, 'secretkey123',{
            expiresIn: '90d',
        })

        res.status(201).json({
            status: "success",
            message: "User registered succesfully",
            token,
            user:{
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            },
        })
    } catch (error) {
        next (error);
    }
};

//Logging user
exports.login = async (req,res,next) =>{
    try{
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) return next(new createError('User not found!',404));

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return next(new createError("Invalid email or password",401));
        }

        const token = jwt.sign({ _id: user._id}, 'secretkey123',{
            expiresIn: '90d',
        });

        res.status(200).json({
            status: 'success',
            token,
            message: 'Logged in succesfully',
            user:{
                _id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        next(error);
    }
};