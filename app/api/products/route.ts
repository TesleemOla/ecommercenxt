const data =[
    { id: 1,
     name: "PS5 pads",
     price: "$500",
     avgRatings: 4,
     noOfReviews: 92,
     imgsrc: "pads" }
]


export async function GET(){
    const res = data
    

    return Response.json({ res })

}