
export default async function blogDetailsPage({ params }) {
    const p = await params
  return (
    <div>
        {JSON.stringify(p)}
    </div>
  )
}
