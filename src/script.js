function press(){
    //console.log("getDate "+getData());
    data=getData({});
    let output="";
    if(data["age"]>4 && data["age"]<=7){
        
    }
};
function getData(data){
    m_name= document.getElementById(tag).value;
    age=Number(document.getElementById("age"));
    weight=Number(document.getElementById("weight"));
    data.push({"name":m_name,"age":age,"weight":weight})
    return data;
}