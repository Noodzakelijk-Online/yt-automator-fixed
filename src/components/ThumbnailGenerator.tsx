import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface ThumbnailGeneratorProps {
  thumbnailUrl: string;
}

const ThumbnailGenerator: React.FC<ThumbnailGeneratorProps> = ({ thumbnailUrl }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Thumbnail</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={thumbnailUrl} alt="Generated Thumbnail" className="w-full h-auto mx-auto object-cover rounded-lg" />
      </CardContent>
    </Card>
  );
};

export default ThumbnailGenerator;