import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

  useEffect(() => {
    if (videoFile) {
      refetch();
    }
  }, [videoFile, refetch]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setVideoFile(event.target.files[0]);
    }
  };

  useEffect(() => {
    if (data) {
      setGeneratedData(data);
    }
  }, [data]);

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <Input 
            id="video-upload" 
            type="file" 
            onChange={handleFileChange} 
            accept="video/*"
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          />
          {isLoading && (
            <div className="mt-4 flex items-center justify-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              <span>Processing video...</span>
            </div>
          )}
        </div>

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
      </div>
    </Card>
  );
};

export default YouTubeAutomation;