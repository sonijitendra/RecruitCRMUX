import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { Contact } from '@/data/mockData';

interface LogCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  contacts: Contact[];
}

export default function LogCallModal({ isOpen, onClose, contacts }: LogCallModalProps) {
  const [formData, setFormData] = useState({
    contactId: '',
    callType: '',
    duration: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Log call form submitted:', formData);
    onClose();
    setFormData({ contactId: '', callType: '', duration: '', notes: '' });
  };

  const handleClose = () => {
    onClose();
    setFormData({ contactId: '', callType: '', duration: '', notes: '' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Log Call</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="contact-person" className="text-sm font-medium text-muted-foreground">
              Contact Person
            </Label>
            <Select value={formData.contactId} onValueChange={(value) => setFormData(prev => ({ ...prev, contactId: value }))}>
              <SelectTrigger className="w-full mt-2" data-testid="select-contact-person">
                <SelectValue placeholder="Select contact..." />
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

          <div>
            <Label htmlFor="call-type" className="text-sm font-medium text-muted-foreground">
              Call Type
            </Label>
            <Select value={formData.callType} onValueChange={(value) => setFormData(prev => ({ ...prev, callType: value }))}>
              <SelectTrigger className="w-full mt-2" data-testid="select-call-type">
                <SelectValue placeholder="Select type..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="outbound">Outbound</SelectItem>
                <SelectItem value="inbound">Inbound</SelectItem>
                <SelectItem value="follow-up">Follow-up</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="duration" className="text-sm font-medium text-muted-foreground">
              Duration (minutes)
            </Label>
            <Input
              id="duration"
              type="number"
              min="1"
              placeholder="15"
              className="w-full mt-2"
              value={formData.duration}
              onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
              data-testid="input-duration"
            />
          </div>

          <div>
            <Label htmlFor="notes" className="text-sm font-medium text-muted-foreground">
              Notes
            </Label>
            <Textarea
              id="notes"
              rows={3}
              placeholder="Call summary and next steps..."
              className="w-full mt-2"
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              data-testid="textarea-notes"
            />
          </div>

          <div className="flex items-center space-x-3 pt-4">
            <Button 
              type="submit" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              data-testid="button-submit-call"
            >
              Log Call
            </Button>
            <Button 
              type="button" 
              variant="secondary"
              onClick={handleClose}
              data-testid="button-cancel-call"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
