export function smallwalletaddress(wall)
{
    console.log("hdhdhddhdhdjdkdldlddl;dl")
    let a = wall.slice(0, 4)
    let b = wall.slice(-3)
    console.log(a + "..." + b)
    return a + "..." + b;
}

export function smdate(dateall)
{
    console.log("hdhdhddhdhdjdkdldlddl;dl")
    let a = dateall.slice(0, 10)
  
    console.log(a)
    return a ;
}


export function get_user()
{
    let user_details = null;
    if (localStorage.getItem('userauth')) {
        user_details = JSON.parse(localStorage.getItem('userauth'));
    }
    const userauth = user_details;
    return userauth;
}
export function removesession() {
    localStorage.removeItem('userauth');
}