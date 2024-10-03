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
  const [transcription, setTranscription] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const [relevantText, setRelevantText] = useState<string>('');
  const [metadata, setMetadata] = useState<any>(null);

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
        thumbnailUrl: "https://example.com/thumbnail.jpg",
        keywordSuggestions: ['frontend development', 'web optimization', 'JavaScript features', 'CSS advancements', 'performance tuning'],
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
      setMetadata(data);
    }
  }, [data]);

  const handleTranscriptionComplete = (newTranscription: string) => {
    setTranscription(newTranscription);
  };

  const handleSummaryGenerated = (newSummary: string) => {
    setSummary(newSummary);
  };

  const handleRelevantTextGenerated = (newRelevantText: string) => {
    setRelevantText(newRelevantText);
  };

  const handleMetadataChange = (newMetadata: any) => {
    setMetadata(newMetadata);
  };

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

      {metadata && (
        <div className="space-y-6">
          <MetadataGenerator metadata={metadata} onMetadataChange={handleMetadataChange} />
          <TranscriptionService videoFile={videoFile} onTranscriptionComplete={handleTranscriptionComplete} />
          <SummaryGenerator transcription={transcription} onSummaryGenerated={handleSummaryGenerated} />
          <RelevantTextGenerator transcription={transcription} summary={summary} onRelevantTextGenerated={handleRelevantTextGenerated} />
          <ThumbnailGenerator thumbnailUrl={metadata.thumbnailUrl} />
          <KeywordSuggestions keywords={metadata.keywordSuggestions} />
          <SocialMediaLinks />
          <SchedulingFeature />
        </div>
      )}
    </Card>
  );
};

export default YouTubeAutomation;