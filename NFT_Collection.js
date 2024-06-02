/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const holdnft=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_age,_underG_year,_department) {
    const N_nft={
        "name":_name,
        age:_age,                           // JS automatically converts these key into strings if 
        underG_year:_underG_year,           // we don't specify them
        department:_department
    }
    holdnft.push(N_nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("Printing all metadata :- \n");
    for(let i=0;i<holdnft.length;i++){

        console.log("\n Serial_No: \t"+(i+1));
        console.log("\n Name: \t"+holdnft[i].name);
        console.log("\n Age: \t"+holdnft[i].age);
        console.log("\n UnderGraduate Year: \t"+holdnft[i].underG_year);
        console.log("\n Department: \t"+holdnft[i].department);
        console.log("--------------------------------------------\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n Total Length comes out to be "+holdnft.length);
}

// call your functions below this line
mintNFT("Kush","20","2025","CSE");
mintNFT("Ritik","21","2025","CSE");
mintNFT("Bibash","21","2025","CSE");

listNFTs();
getTotalSupply();