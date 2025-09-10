import { useEffect } from 'react';

type TabType = 'overview' | 'jobs' | 'contacts' | 'candidates' | 'activities';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'contacts', label: 'Contacts' },
    { id: 'candidates', label: 'Candidates' },
    { id: 'activities', label: 'Activities' },
  ] as const;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLButtonElement && e.target.getAttribute('role') === 'tab') {
        const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const nextIndex = e.key === 'ArrowRight' 
            ? (currentIndex + 1) % tabs.length 
            : (currentIndex - 1 + tabs.length) % tabs.length;
          
          const nextTab = tabs[nextIndex];
          onTabChange(nextTab.id);
          
          // Focus the next tab
          const nextTabElement = document.querySelector(`[data-testid="tab-${nextTab.id}"]`) as HTMLButtonElement;
          nextTabElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, onTabChange, tabs]);

  return (
    <nav className="border-b border-border mb-6" role="tablist">
      <div className="flex space-x-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            tabIndex={activeTab === tab.id ? 0 : -1}
            aria-selected={activeTab === tab.id}
            aria-label={`${tab.label} tab`}
            data-testid={`tab-${tab.id}`}
            className={`py-3 px-1 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
              activeTab === tab.id
                ? 'tab-active'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
