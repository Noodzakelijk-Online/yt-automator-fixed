import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

interface MetadataGeneratorProps {
  metadata: {
    title: string;
    description: string;
    tags: string[];
  };
}

const MetadataGenerator: React.FC<MetadataGeneratorProps> = ({ metadata }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Metadata</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <Input id="title" value={metadata.title} readOnly />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <Textarea id="description" value={metadata.description} readOnly className="h-24" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tags</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {metadata.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetadataGenerator;