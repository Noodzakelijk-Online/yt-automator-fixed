import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import TitleGenerator from './TitleGenerator';
import TranscriptionSummary from './TranscriptionSummary';
import SocialMediaLinks from './SocialMediaLinks';
import RelevantTextGenerator from './RelevantTextGenerator';
import PlaylistAssigner from './PlaylistAssigner';
import HierarchicalNumbering from './HierarchicalNumbering';

const YouTubeAutomation = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [generatedData, setGeneratedData] = useState<any>(null);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['automateYouTube'],
    queryFn: async () => {
      if (!videoFile) throw new Error('No video file selected');
      // Here you would typically send the video file to your backend for processing
      // For now, we'll simulate the response
      await new Promise(resolve => setTimeout(resolve, 2000));
      return {
        title: 'Exciting New Features in Web Development 2024',
        summary: 'This video covers the latest trends and features in web development for 2024, including new JavaScript APIs, CSS improvements, and performance optimizations.',
        relevantText: 'Explore the cutting-edge advancements in web development technologies. Learn how these new features can enhance your projects and improve user experience.',
        playlist: 'Web Development',
        hierarchicalNumber: '#003.2A',
      };
    },
    enabled: false,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setVideoFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await refetch();
    if (result.data) {
      setGeneratedData(result.data);
    }
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="video-upload">Upload Video</Label>
          <Input id="video-upload" type="file" onChange={handleFileChange} accept="video/*" />
        </div>
        <Button type="submit" disabled={!videoFile || isLoading}>
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Generate YouTube Data
        </Button>
      </form>

      {error && <p className="text-red-500 mt-4">Error: {(error as Error).message}</p>}

      {generatedData && (
        <div className="mt-8 space-y-6">
          <TitleGenerator title={generatedData.title} />
          <TranscriptionSummary summary={generatedData.summary} />
          <SocialMediaLinks />
          <RelevantTextGenerator text={generatedData.relevantText} />
          <PlaylistAssigner playlist={generatedData.playlist} />
          <HierarchicalNumbering number={generatedData.hierarchicalNumber} />
        </div>
      )}
    </Card>
  );
};

export default YouTubeAutomation;