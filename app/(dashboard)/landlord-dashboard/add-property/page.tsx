import AddPropertyForm from "./_components/AddPropertyForm";

export default function AddPropertyPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">
          Add Property
        </h1>

        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Create a new rental property.
        </p>
      </div>

      <AddPropertyForm />
    </div>
  );
}