import AddPropertyForm from "./_components/AddPropertyForm";

export default function AddPropertyPage() {
  return (
    <div className="space-y-6 w-0 flex-1 p-8 md:w-full">
      <div>
        <h1 className="text-3xl font-bold">
          Add Property
        </h1>

        <p className="text-muted-foreground">
          Create a new rental property.
        </p>
      </div>

      <AddPropertyForm />
    </div>
  );
}