let array = ["Radha ji","Krishana ji","Arjun","Bole baba","Gauri Mata"];
let st = [];
array.forEach(element => {
    if(element==="Radha ji" || element === "Krishana ji" ){
        st.push(element);
    }
});
console.log(st)