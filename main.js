var images = ["Them.jpg","Sujoyjeet.jpg", "Sonali.jpg" , "Me.jpg", "Us.jpg"];
var names = ["My Parents","Sujoyjeet Mondal", "Sonali Sahoo", "Sophie Mondal (Me)", "My Family"];

var i = 0;
var numbers_of_family_member_in_array = 4
function update()
{ var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member").innerHTML = updatedName;
    i++;
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
}