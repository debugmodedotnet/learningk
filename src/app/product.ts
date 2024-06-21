export interface IProduct {

    Id:number; 
    Title : string; 
    Price : number;
    // Color: string; 
    // inStock : boolean;
    // Quantity: number;
    // starRating : number
}

// Parent will have Products Array 
// Child will have table
// Pass array to Child 
// Child will display the array in table
// what ever is the value of color that should be the color of Update Button 
// Create a new component called RatingComponent 
// Use Rating component in all rows table 
// Use ***** value is 2 then show two start , ifvalue is 3 show three star . keep value form 1 to 5
// Update button is diables for product which has inStock as false 
// Quantity is editable but cant be less than 0 