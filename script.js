const root = document.documentElement;
const m = document.body;
const d = document.querySelector("#d");
const btn = document.querySelectorAll(".btn")
const sk = document.querySelectorAll(".skill-p")
const schema = {
    schema0 : {
        s1: "#FFD297",
        s2: "#F9B470",
        s3: "#DE9F5D",
        s4: "#cc9154"
    },
    schema1 : {
        s1: "#DC7945",
        s2: "#c66e3f",
        s3: "#a25830",
        s4: "#8e4b28"
    },
    schema2 : {
        s1: "#FFFFFF",
        s2: "#EDEDED",
        s3: "#E2E2E2",
        s4: "#d0caca"
    }
}
const schema2 = {
    schema0 : {
        s1: "0%",
        s2: "0%",
        s3: "0%",
        s4: "0%",
        s5: "1000%",
        s6: "100%",
        s7: "100%",
        s8: "100%",
        s9: "100%",
        s10: "100%",
        s11: "0%",
        s12: "100%",
        s13: "100%"
    },
    schema1 : {
        s1: "0%",
        s2: "0%",
        s3: "0%",
        s4: "0%",
        s5: "1000%",
        s6: "100%",
        s7: "100%",
        s8: "100%",
        s9: "100%",
        s10: "100%",
        s11: "0%",
        s12: "100%",
        s13: "100%"
    },
    schema2 : {
        s1: "0%",
        s2: "0%",
        s3: "0%",
        s4: "0%",
        s5: "1000%",
        s6: "100%",
        s7: "100%",
        s8: "100%",
        s9: "100%",
        s10: "100%",
        s11: "0%",
        s12: "100%",
        s13: "100%"
    },

}

/*************************/
/*************************/

let base = (e) => {
    let x = e.pageX / window.innerWidth - 0.5;
    let y = e.pageY / window.innerHeight - 0.5;

    d.style.transform = `
        perspective(10000px)
        rotateX(${ y * 10  + 62}deg)
        rotateZ(-${ x * 30  + 36}deg)
        translateZ(-10vw)
    `;


}
/*---------------------*/
let createCube = (e) =>{
    let s = e.target.id.split('-')[1];
    let cs = sk[s];

    sk[0].style.width = schema2[`schema${s}`].s1;
    sk[1].style.width = schema2[`schema${s}`].s2;
    sk[2].style.width = schema2[`schema${s}`].s3;
    sk[3].style.width = schema2[`schema${s}`].s4;

    root.style.setProperty('--color-a1', schema[`schema${s}`].s1);
    root.style.setProperty('--color-a2', schema[`schema${s}`].s2);
    root.style.setProperty('--color-a3', schema[`schema${s}`].s3);
    root.style.setProperty('--color-a4', schema[`schema${s}`].s4);
}
/*---------------------*/
let mainF = () => {
    m.addEventListener("mousemove", base);
    btn.forEach( b => b.addEventListener("click", createCube) )
}
/*************************/
/*************************/
window.addEventListener("load", mainF);