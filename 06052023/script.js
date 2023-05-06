document.addEventListener("DOMContentLoaded",  () =>{

    fetch("teamMembers.json")
    .then(response => response.json())
    .then(teamData =>{
        const tm = document.querySelector(".teamMembers");
        teamData.forEach(member => {
            tm.appendChild(CreateMember(member))
            {
                
            }
        });
    });

});


    
function CreateMember(member)
{
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("member");

    const img = document.createElement("img");
    img.src = member.img;
    img.alt = "Here can be your photo";
    memberDiv.appendChild(img);

    const name = document.createElement("h1");
    name.textContent = member.name;
    memberDiv.appendChild(name);

    const role = document.createElement("p");
    role.textContent = member.role;
    memberDiv.appendChild(role);

    return memberDiv;
}