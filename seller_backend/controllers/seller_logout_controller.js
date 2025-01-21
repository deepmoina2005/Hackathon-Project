const seller_logout=(req,res)=>{
    res.cookie("token","")
    res.status(200).json("seller logout")
}
export default seller_logout