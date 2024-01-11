const alpabets = ("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,z".toUpperCase()).split(",")
const nameNumber = (req,res)=>{
    let name = req.query.name.toUpperCase()
    let sum = 0
    for(let i=0;i< name.length;i++)
    {
        sum += (alpabets.indexOf(name[i]) + 1)
    }
    while((sum.toString()).length > 1)
    {
        sum = ((sum.toString()).split('')).reduce((total,num)=>{return parseInt(total)+parseInt(num)})
    }
    res.send(
        {
            sum
        }
    )
}

module.exports = {
    nameNumber
}