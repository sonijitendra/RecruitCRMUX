import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, Plus, History } from 'lucide-react';

interface QuickActionsToolbarProps {
  onLogCall: () => void;
  onAddJob: () => void;
}

export default function QuickActionsToolbar({ onLogCall, onAddJob }: QuickActionsToolbarProps) {
  return (
    <Card className="p-2 shadow-lg">
      <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2">
        <Button
          onClick={onLogCall}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium whitespace-nowrap"
          data-testid="button-log-call"
        >
          <Phone className="h-4 w-4 mr-2 md:mr-0" />
          <span className="hidden md:inline">Log Call</span>
        </Button>
        
        <Button
          onClick={onAddJob}
          className="bg-green-600 hover:bg-green-700 text-white font-medium whitespace-nowrap"
          data-testid="button-add-job-toolbar"
        >
          <Plus className="h-4 w-4 mr-2 md:mr-0" />
          <span className="hidden md:inline">Add Job</span>
        </Button>
        
        <Button
          variant="secondary"
          className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium whitespace-nowrap"
          data-testid="button-view-history"
        >
          <History className="h-4 w-4 mr-2 md:mr-0" />
          <span className="hidden md:inline">View History</span>
        </Button>
      </div>
    </Card>
  );
}
