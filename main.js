// printing favourite pet and responding with a short comment:
// // if else statement for the same code:
var PetName = "Tigers";
//  ["Cat" , "Horse" , "Rabbits", "Dogs", "Python", "Hamster", "african grey"];
if (PetName === "cat") {
    console.log("\n " + PetName + ":" + " " + "These cute furrballs help in relieving stress.");
}
else if (PetName === "horse") {
    console.log("\n " + PetName + ":" + " " + "They are Great companions, \nRemember: You don't choose a horse, let the horse choose you ♥");
}
else if (PetName === "rabbits") {
    console.log("\n " + PetName + ":" + " " + "Who cares about the mess they create?!, They're cute & that's enough!!");
}
else if (PetName === "dogs") {
    console.log("\n " + PetName + ":" + " " + "hmm, Intresting choice! Some dog breeds are intensly loyal and posessive that for their owners, They can kill humans or sacrifice their own lives..!");
}
else if (PetName === "python") {
    console.log("\n " + PetName + ":" + " " + "Creepy creatures, Dangerous enough to keep as pets");
}
else if (PetName === "hamster") {
    console.log("\n " + PetName + ":" + " " + "Neither Mice nor Bunnies, still lovely, They look the cutest while eating.");
}
else {
    console.log("\n Never knew that " + PetName + " can be kept as pets.!");
}
// a bit messy right?! 
// now lets try the same code with switch statements:
// switch statement:

switch (PetName) {
    case "cat":
        console.log("\n " + PetName + ":" + " " + "These cute furrballs help in relieving stress.");
        break;
    case "horse":
        console.log("\n " + PetName + ":" + " " + "They are Great companions, \nRemember: You don't choose a horse, let the horse choose you ♥");
        break;
    case "rabbits":
        console.log("\n " + PetName + ":" + " " + "Who cares about the mess they create?!, They're cute & that's enough!!");
        break;
    case "dogs":
        console.log("\n " + PetName + ":" + " " + "hmm, Intresting choice! Some dog breeds are intensly loyal and posessive that for their owners, They can kill humans or sacrifice their own lives..!");
        break;
    case "python":
        console.log("\n " + PetName + ":" + " " + "Creepy creatures, Dangerous enough to keep as pets");
        break;
    case "hamster":
        console.log("\n " + PetName + ":" + " " + "Neither Mice nor Bunnies, still lovely, They look the cutest while eating.");
        break;
    default:
        console.log("\n Never knew that " + PetName + " can be kept as pets.!");
        break;
}
// same output with different & neater code  which is easy to read:
// --Brackets && ++ readability 
