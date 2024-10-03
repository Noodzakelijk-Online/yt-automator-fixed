import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import VideoUploader from './VideoUploader';
import MetadataGenerator from './MetadataGenerator';
import TranscriptionService from './TranscriptionService';
import SummaryGenerator from './SummaryGenerator';
import ThumbnailGenerator from './ThumbnailGenerator';
import KeywordSuggestions from './KeywordSuggestions';
import RelevantTextGenerator from './RelevantTextGenerator';
import SocialMediaLinks from './SocialMediaLinks';
import SchedulingFeature from './SchedulingFeature';

const YouTubeAutomation = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [generatedData, setGeneratedData] = useState<any>(null);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['automateYouTube'],
    queryFn: async () => {
      if (!videoFile) throw new Error('No video file selected');
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000));
      return {
        title: "Exciting New Features in Web Development 2024",
        description: "Explore the latest trends and innovations in web development for 2024. This video covers new JavaScript APIs, CSS improvements, and performance optimizations that will revolutionize how we build websites.",
        tags: ['web development', '2024 trends', 'JavaScript', 'CSS', 'performance'],
        transcription: "In this video, we'll be discussing the exciting new features coming to web development in 2024...",
        summary: "This video provides an overview of upcoming web development trends for 2024, focusing on new JavaScript APIs, CSS enhancements, and performance optimization techniques.",
        thumbnailUrl: "https://example.com/thumbnail.jpg",
        keywordSuggestions: ['frontend development', 'web optimization', 'JavaScript features', 'CSS advancements', 'performance tuning'],
        relevantText: "Web development is constantly evolving, and 2024 brings exciting new features that will enhance both developer productivity and user experience. From advanced JavaScript APIs to cutting-edge CSS capabilities, these innovations will shape the future of web applications.",
        category: "Science & Technology",
        privacyStatus: "public",
        license: "youtube",
        embeddable: true,
        publicStatsViewable: true,
      };
    },
    enabled: false,
  });

  useEffect(() => {
    if (videoFile) {
      refetch();
    }
  }, [videoFile, refetch]);

  useEffect(() => {
    if (data) {
      setGeneratedData(data);
    }
  }, [data]);

  return (
    <Card className="p-6 space-y-6">
      <VideoUploader onFileSelect={setVideoFile} />
      
      {isLoading && (
        <div className="flex items-center justify-center">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          <span>Processing video...</span>
        </div>
      )}

      {error && <p className="text-red-500">Error: {(error as Error).message}</p>}

      {generatedData && (
        <div className="space-y-6">
          <MetadataGenerator metadata={generatedData} />
          <TranscriptionService transcription={generatedData.transcription} />
          <SummaryGenerator summary={generatedData.summary} />
          <ThumbnailGenerator thumbnailUrl={generatedData.thumbnailUrl} />
          <KeywordSuggestions keywords={generatedData.keywordSuggestions} />
          <RelevantTextGenerator text={generatedData.relevantText} />
          <SocialMediaLinks />
          <SchedulingFeature />
        </div>
      )}
    </Card>
  );
};

export default YouTubeAutomation;