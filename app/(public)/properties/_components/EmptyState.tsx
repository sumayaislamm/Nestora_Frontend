import { Card, CardContent } from '@/components/ui/card'
import { SearchX } from 'lucide-react'

const EmptyState = () => {
  return (
    <div className="justify-center flex items-center h-[60vh]">
      <Card className="w-full items-center  max-w-lg border-none shadow-xl">
        <CardContent className="flex flex-col items-center py-12 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <SearchX className="h-10 w-10 text-primary" />
          </div>

          <span className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            OOOPPPPSSSS!
          </span>

          <h1 className="mt-3 text-2xl font-bold tracking-tight md:text-5xl">
            Property Not Avilable!
          </h1>

          <p className="mt-4 max-w-md text-sm text-muted-foreground md:text-base">
            Sorry, the property you are looking for does not exist.
            Try changing your filters.
             
          </p>

      
        </CardContent>
      </Card>
  </div>
  )
}

export default EmptyState