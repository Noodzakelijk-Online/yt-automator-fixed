import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

interface RelevantTextGeneratorProps {
  text: string;
}

const RelevantTextGenerator: React.FC<RelevantTextGeneratorProps> = ({ text }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Relevant Text</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea value={text} readOnly className="h-32" />
      </CardContent>
    </Card>
  );
};

export default RelevantTextGenerator;