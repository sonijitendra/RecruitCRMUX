import { Button } from '@/components/ui/button';
import { Users, Edit, Globe, MapPin } from 'lucide-react';
import type { Company } from '@/data/mockData';

interface HeaderProps {
  company: Company;
}

export default function Header({ company }: HeaderProps) {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Users className="text-primary-foreground text-lg" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-foreground" data-testid="text-company-name">
                  {company.name}
                </h1>
                <p className="text-sm text-muted-foreground">Recruit CRM Company Profile</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2" data-testid="text-website">
                <Globe className="h-4 w-4 text-primary" />
                <span>{company.website}</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="text-location">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{company.location}</span>
              </div>
            </div>
            <Button 
              variant="secondary"
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium"
              data-testid="button-edit-company"
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
