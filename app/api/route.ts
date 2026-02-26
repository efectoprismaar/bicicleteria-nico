// /app/api/products/route.ts
export async function GET() {
  const response = await fetch(
    "https://api.airtable.com/v0/appMi9Wd8htNj5zec/Productos",
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
      },
    }
  );

  const data = await response.json();

  const products = data.records.map((record: any) => ({
    id: record.id,
    name: record.fields.name,
    price: record.fields.price,
    category: record.fields.category,
    shortDescription: record.fields.shortDescription,
    image: record.fields.images?.[0]?.url,
    whatsappMessage: record.fields.whatsappMessage
  }));

  return Response.json(products);
}