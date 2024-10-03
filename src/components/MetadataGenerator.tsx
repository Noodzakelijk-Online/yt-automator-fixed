import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</label>
          <Input id="tags" value={metadata.tags.join(', ')} readOnly />
        </div>
      </CardContent>
    </Card>
  );
};

export default MetadataGenerator;