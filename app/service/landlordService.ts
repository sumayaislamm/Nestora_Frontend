const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function getLandlordDashboardData(
  token:string
){

  const res = await fetch(
    `${API_URL}/properties/my-properties`,
    {
      headers:{
        Authorization: token,
      },
      cache:"no-store",
    }
  );


  const data = await res.json();


  if(!res.ok){
    throw new Error(
      data.message || "Failed to fetch dashboard data"
    );
  }


  return data;

}