window.onload = function(){

    const btn=document.getElementById("btn");
    btn.addEventListener("click", ()=>{
        var d= document.getElementById('input-distance').value
            l= document.getElementById('input-length').value
            b= document.getElementById('input-breadth').value
            n= parseInt((l-1)/d)
            m= parseInt((b-1)/d)
            ans= (parseInt(n+1))*(parseInt(m+1))
            ans= parseInt(ans)

            console.log(d)
            console.log(l)
            console.log(b)
            console.log(n)
            console.log(m)    
            console.log(ans)

        const html=`
            <p class="home-content">${ans} people can be accomadated in the room</p>
        `
        document.querySelector('.output').innerHTML=html;
    })
}


