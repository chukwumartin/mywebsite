var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
 

const nav = document.querySelector(".nav"),
      navlist = nav.querySelectorAll("li"),
      totalNavlist = navlist.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for (let i = 0; i<totalNavlist; i++)
      {
         const a = navlist [i].querySelector("a");
         a.addEventListener("click", function()
         {
             for(let j=0; j<totalNavlist; j++)
             {
                if(navlist[j].querySelector("a").classList.contains("active"))
                {
                    console.log(navlist[i].querySelector("a"))
                }
                navlist[j].querySelector("a").classList.remove("active")
             }
             this.classList.add("active")
             showSection(this);
         })
      }
      function showSection(element)
      {
         for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
         }
         const target = element.getAttribute("href").split("#")[1];
         document.querySelector("#" + target).classList.add("active")
      }
      