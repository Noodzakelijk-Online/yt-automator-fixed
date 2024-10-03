import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface TranscriptionSummaryProps {
  summary: string;
}

const TranscriptionSummary: React.FC<TranscriptionSummaryProps> = ({ summary }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transcription Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{summary}</p>
      </CardContent>
    </Card>
  );
};

export default TranscriptionSummary;