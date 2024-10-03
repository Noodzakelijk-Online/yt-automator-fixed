import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

interface SummaryGeneratorProps {
  summary: string;
}

const SummaryGenerator: React.FC<SummaryGeneratorProps> = ({ summary }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Video Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea value={summary} readOnly className="h-24" />
      </CardContent>
    </Card>
  );
};

export default SummaryGenerator;