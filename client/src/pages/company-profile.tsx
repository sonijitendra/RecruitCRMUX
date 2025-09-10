import { useState } from 'react';
import Header from '@/components/Header';
import SummaryMetrics from '@/components/SummaryMetrics';
import TabNavigation from '@/components/TabNavigation';
import QuickActionsToolbar from '@/components/QuickActionsToolbar';
import LogCallModal from '@/components/LogCallModal';
import AddJobModal from '@/components/AddJobModal';
import { mockCompany, mockMetrics, mockJobs, mockContacts, mockActivities } from '@/data/mockData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Edit, Eye, Phone, Mail, Star, Clock, Calendar, StickyNote, Users, Plus } from 'lucide-react';

type TabType = 'overview' | 'jobs' | 'contacts' | 'candidates' | 'activities';

export default function CompanyProfile() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [showLogCallModal, setShowLogCallModal] = useState(false);
  const [showAddJobModal, setShowAddJobModal] = useState(false);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'call':
        return <Phone className="h-4 w-4 text-blue-600" />;
      case 'email':
        return <Mail className="h-4 w-4 text-green-600" />;
      case 'interview':
        return <Calendar className="h-4 w-4 text-purple-600" />;
      case 'note':
        return <StickyNote className="h-4 w-4 text-amber-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'In Review':
        return 'bg-blue-100 text-blue-800';
      case 'Draft':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Company Details */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Company Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Address</label>
                    <p className="text-foreground mt-1">{mockCompany.address}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Owner</label>
                    <p className="text-foreground mt-1">{mockCompany.owner}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Phone</label>
                    <p className="text-foreground mt-1">{mockCompany.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Industry</label>
                    <p className="text-foreground mt-1">{mockCompany.industry}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Company Size</label>
                    <p className="text-foreground mt-1">{mockCompany.size}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Founded</label>
                    <p className="text-foreground mt-1">{mockCompany.founded}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recent Activity Feed */}
            <div>
              <Card className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {mockActivities.slice(0, 5).map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground font-medium">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="mt-4 text-sm text-primary hover:text-primary/80 font-medium p-0">
                  View all activities →
                </Button>
              </Card>
            </div>
          </div>
        );

      case 'jobs':
        return (
          <Card>
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">Active Jobs</h2>
                <Button 
                  onClick={() => setShowAddJobModal(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  data-testid="button-add-job"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Job
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {mockJobs.map((job) => (
                  <div key={job.id} className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{job.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {job.type} • {job.location} • ${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()}
                        </p>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge className={getStatusBadgeColor(job.status)}>
                            {job.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground">Posted {job.postedDate}</span>
                          <span className="text-xs text-muted-foreground">{job.applications} applications</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" data-testid={`button-edit-job-${job.id}`}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" data-testid={`button-view-job-${job.id}`}>
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        );

      case 'contacts':
        return (
          <Card>
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">Company Contacts</h2>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  data-testid="button-add-contact"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Contact
                </Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {mockContacts.map((contact) => (
                    <tr key={contact.id} className="hover:bg-accent/50">
                      <td className="px-6 py-4 whitespace-nowrap" data-testid={`contact-name-${contact.id}`}>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-primary">{contact.initials}</span>
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-foreground">{contact.name}</div>
                            {contact.isPrimary && (
                              <div className="text-sm text-muted-foreground">Primary Contact</div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{contact.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{contact.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{contact.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" data-testid={`button-call-${contact.id}`}>
                            <Phone className="h-4 w-4 text-primary" />
                          </Button>
                          <Button variant="ghost" size="sm" data-testid={`button-email-${contact.id}`}>
                            <Mail className="h-4 w-4 text-primary" />
                          </Button>
                          <Button variant="ghost" size="sm" data-testid={`button-edit-contact-${contact.id}`}>
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        );

      case 'candidates':
        return (
          <Card className="p-6">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">Candidate Management</h3>
              <p className="text-muted-foreground mb-6">
                Candidate list and pipeline management will be displayed here. This feature allows you to track candidate progress through different stages of the recruitment process.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" data-testid="button-view-candidates">
                View Candidates
              </Button>
            </div>
          </Card>
        );

      case 'activities':
        return (
          <Card>
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">Activity Log</h2>
                <div className="flex items-center space-x-2">
                  <select className="border border-border rounded-lg px-3 py-2 text-sm bg-background" data-testid="select-activity-filter">
                    <option>All Activities</option>
                    <option>Calls</option>
                    <option>Emails</option>
                    <option>Meetings</option>
                    <option>Notes</option>
                  </select>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" data-testid="button-log-activity">
                    <Plus className="h-4 w-4 mr-2" />
                    Log Activity
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {mockActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-foreground">{activity.title}</p>
                        <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        {activity.duration && (
                          <span className="text-xs text-muted-foreground">Duration: {activity.duration}</span>
                        )}
                        <span className="text-xs text-muted-foreground">By: {activity.by}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header company={mockCompany} />
      <SummaryMetrics metrics={mockMetrics} />
      
      <div className="floating-toolbar md:block">
        <QuickActionsToolbar 
          onLogCall={() => setShowLogCallModal(true)}
          onAddJob={() => setShowAddJobModal(true)}
        />
      </div>

      <main className="max-w-7xl mx-auto px-6 py-6">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="mt-6">
          {renderTabContent()}
        </div>
      </main>

      <LogCallModal 
        isOpen={showLogCallModal} 
        onClose={() => setShowLogCallModal(false)}
        contacts={mockContacts}
      />
      
      <AddJobModal 
        isOpen={showAddJobModal} 
        onClose={() => setShowAddJobModal(false)}
        contacts={mockContacts}
      />
    </div>
  );
}
