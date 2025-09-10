import { Briefcase, Users, Clock, Star } from 'lucide-react';
import type { Metrics } from '@/data/mockData';

interface SummaryMetricsProps {
  metrics: Metrics;
}

export default function SummaryMetrics({ metrics }: SummaryMetricsProps) {
  return (
    <section className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-background rounded-lg p-4 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Open Jobs</p>
                <p className="text-2xl font-bold text-foreground" data-testid="metric-open-jobs">
                  {metrics.openJobs}
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-background rounded-lg p-4 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Candidates</p>
                <p className="text-2xl font-bold text-foreground" data-testid="metric-active-candidates">
                  {metrics.activeCandidates}
                </p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-background rounded-lg p-4 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Last Activity</p>
                <p className="text-2xl font-bold text-foreground" data-testid="metric-last-activity">
                  {metrics.lastActivity}
                </p>
              </div>
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-background rounded-lg p-4 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Rating</p>
                <div className="flex items-center space-x-2">
                  <p className="text-2xl font-bold text-foreground" data-testid="metric-rating">
                    {metrics.rating}
                  </p>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-3 w-3 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Star className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
