import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

interface TranscriptionServiceProps {
  transcription: string;
}

const TranscriptionService: React.FC<TranscriptionServiceProps> = ({ transcription }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Video Transcription</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea value={transcription} readOnly className="h-48" />
      </CardContent>
    </Card>
  );
};

export default TranscriptionService;