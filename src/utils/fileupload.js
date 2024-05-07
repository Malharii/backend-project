import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});
const uploadOnCloudinary= async (filepath)=>{
try {
if(!filepath) return null
//upload file on clodunary
 const respones=await cloudinary.uploader.upload(filepath , {
    resource_type:"auto",
    // file is uploaded successfull
    
} ) 
console.log("file uploaded successfully" ,respones.url)
return respones

} catch (error) {
    fs.unlinkSync(filepath) //remove the locally saved from temprerary file as the upload opreation failed 
}    return null 
}

export {uploadOnCloudinary}