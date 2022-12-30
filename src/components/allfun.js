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
    const userauth = localStorage.getItem('userauth');
    const json_userauth = JSON.parse(userauth)
    return json_userauth ;
}