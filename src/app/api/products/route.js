let Products = [
    
        {id:1 , name : "TV" , price : "100$"},
        {id:2 , name : "console" , price : "499$"},
        {id:3 , name : "playstaion" , price : "200$"},

        {id:4 , name : "phone" , price : "199$"},
        {id:5 , name : "laptab" , price : "599$"},
        {id: 6  , name : "jacket" , price : "111$"},

        {id: 7  , name : "shirt" , price : "88$"},
        {id: 8  , name : "Hat" , price : "78$"},
        {id: 9  , name : "shoes" , price : "99$"},

        {id: 10  , name : "jeans" , price : "69$"},
        {id: 11 , name : "table"  , price : "100$"},
        {id: 12, name : "Bed"  , price : "115$"},

        {id: 13 , name : "sofa"  , price : "155$"},
        {id: 14 , name : "chair"  , price : "178$"},
        {id: 15 , name : "door"  , price : "90$"},
         
    
 ]

export async function GET(request) {
    try {
        return new Response(
            JSON.stringify(Products),
            {
                status: 200,
                headers: { "Content-Type": "application/json" }
            }
        )
    } catch (error) {
        console.log(error)
        return new Response(
            JSON.stringify({ error: error.message }), 
            {
                status: 500,
                headers: { "Content-Type": "application/json" }
            }
        )
    }
}

export async function POST(request) {
try{
    let requa =  await request.json()
    Products.push(requa)
    return new Response(
        JSON.stringify(Products),
        {
            status: 200  , 
              headers: { "Content-Type": "application/json" }
        }
    )
    }catch(error){
        return new Response(
            JSON.stringify({error : error.message}), 
              {
            status: 400  , 
              headers: { "Content-Type": "application/json" }
        }
        )
    }
}


export async function PUT(request) {
    try {
        const updatedProduct = await request.json();

        const index = Products.findIndex(
            (product) => product.id === updatedProduct.id
        );

        if (index === -1) {
            return Response.json(
                { message: "Product not found" },
                { status: 404 }
            );
        }

        Products[index] = {
            ...Products[index],
            ...updatedProduct
        };

        return Response.json({
            message: "Product updated successfully",
            product: Products[index]
        });

    } catch (error) {
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
}


export async function DELETE(request) {
    try {
        const requested = await request.json();

        Products = Products.filter(
            (p) => p.id !== requested.id
        );

        if(!Products){
            return new Response ( 
                 JSON.stringify({
                massage: "your products undifind"
                 
                 }),
                 {status: 404 , headers : {"Content-type" : "application/json"}}
            )
        }

        return new Response(
            JSON.stringify({
                message: "محصول با موفقیت حذف شد",
                products: Products
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

    } catch (error) {
        return new Response(
            JSON.stringify({
                error: error.message
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }
}