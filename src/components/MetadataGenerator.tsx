import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

interface MetadataGeneratorProps {
  metadata: {
    title: string;
    description: string;
    tags: string[];
    category: string;
    privacyStatus: string;
    license: string;
    embeddable: boolean;
    publicStatsViewable: boolean;
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
          <Label htmlFor="title">Title</Label>
          <Input id="title" value={metadata.title} readOnly />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" value={metadata.description} readOnly className="h-24" />
        </div>
        <div>
          <Label>Tags</Label>
          <div className="flex flex-wrap gap-2 mt-2">
            {metadata.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Input id="category" value={metadata.category} readOnly />
        </div>
        <div>
          <Label htmlFor="privacyStatus">Privacy Status</Label>
          <Input id="privacyStatus" value={metadata.privacyStatus} readOnly />
        </div>
        <div>
          <Label htmlFor="license">License</Label>
          <Input id="license" value={metadata.license} readOnly />
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="embeddable" checked={metadata.embeddable} onCheckedChange={() => {}} />
          <Label htmlFor="embeddable">Embeddable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="publicStatsViewable" checked={metadata.publicStatsViewable} onCheckedChange={() => {}} />
          <Label htmlFor="publicStatsViewable">Public Stats Viewable</Label>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetadataGenerator;