import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { Contact } from '@/data/mockData';

interface AddJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  contacts: Contact[];
}

export default function AddJobModal({ isOpen, onClose, contacts }: AddJobModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    employmentType: 'full-time',
    workLocation: 'remote',
    minSalary: '',
    maxSalary: '',
    description: '',
    hiringManagerId: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Add job form submitted:', formData);
    onClose();
    setFormData({
      title: '',
      employmentType: 'full-time',
      workLocation: 'remote',
      minSalary: '',
      maxSalary: '',
      description: '',
      hiringManagerId: ''
    });
  };

  const handleClose = () => {
    onClose();
    setFormData({
      title: '',
      employmentType: 'full-time',
      workLocation: 'remote',
      minSalary: '',
      maxSalary: '',
      description: '',
      hiringManagerId: ''
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Add New Job</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="job-title" className="text-sm font-medium text-muted-foreground">
              Job Title *
            </Label>
            <Input
              id="job-title"
              type="text"
              placeholder="e.g. Senior Frontend Developer"
              required
              className="w-full mt-2"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              data-testid="input-job-title"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="employment-type" className="text-sm font-medium text-muted-foreground">
                Employment Type
              </Label>
              <Select value={formData.employmentType} onValueChange={(value) => setFormData(prev => ({ ...prev, employmentType: value }))}>
                <SelectTrigger className="w-full mt-2" data-testid="select-employment-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="freelance">Freelance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="work-location" className="text-sm font-medium text-muted-foreground">
                Work Location
              </Label>
              <Select value={formData.workLocation} onValueChange={(value) => setFormData(prev => ({ ...prev, workLocation: value }))}>
                <SelectTrigger className="w-full mt-2" data-testid="select-work-location">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="onsite">On-site</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="min-salary" className="text-sm font-medium text-muted-foreground">
                Min Salary
              </Label>
              <Input
                id="min-salary"
                type="number"
                placeholder="90000"
                className="w-full mt-2"
                value={formData.minSalary}
                onChange={(e) => setFormData(prev => ({ ...prev, minSalary: e.target.value }))}
                data-testid="input-min-salary"
              />
            </div>

            <div>
              <Label htmlFor="max-salary" className="text-sm font-medium text-muted-foreground">
                Max Salary
              </Label>
              <Input
                id="max-salary"
                type="number"
                placeholder="120000"
                className="w-full mt-2"
                value={formData.maxSalary}
                onChange={(e) => setFormData(prev => ({ ...prev, maxSalary: e.target.value }))}
                data-testid="input-max-salary"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="job-description" className="text-sm font-medium text-muted-foreground">
              Job Description
            </Label>
            <Textarea
              id="job-description"
              rows={4}
              placeholder="Describe the role, responsibilities, and requirements..."
              className="w-full mt-2"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              data-testid="textarea-job-description"
            />
          </div>

          <div>
            <Label htmlFor="hiring-manager" className="text-sm font-medium text-muted-foreground">
              Hiring Manager
            </Label>
            <Select value={formData.hiringManagerId} onValueChange={(value) => setFormData(prev => ({ ...prev, hiringManagerId: value }))}>
              <SelectTrigger className="w-full mt-2" data-testid="select-hiring-manager">
                <SelectValue placeholder="Select hiring manager..." />
              </SelectTrigger>
              <SelectContent>
                {contacts.map((contact) => (
                  <SelectItem key={contact.id} value={contact.id}>
                    {contact.name} - {contact.role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-3 pt-4">
            <Button 
              type="submit" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              data-testid="button-submit-job"
            >
              Create Job
            </Button>
            <Button 
              type="button" 
              variant="secondary"
              onClick={handleClose}
              data-testid="button-cancel-job"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
