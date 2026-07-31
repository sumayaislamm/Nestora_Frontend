import { getPropertyAction } from "../../_actions/propertyActions";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PropertyDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const property = await getPropertyAction(id);

  return (
    <main className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold">
        Property Details
      </h1>

      <pre>{JSON.stringify(property, null, 2)}</pre>
    </main>
  );
}