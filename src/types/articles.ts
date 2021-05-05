export interface HomeGridProps {
  data: NewsItem[];
}
export interface NewsItem {
  badgeText: string;
  categoryId: number;
  categoryName: string;
  id: number;
  postId: string;
  publishTimeUnix: number;
  publisher: string;
  publisherId: string;
  publisherImageCdnHash: string;
  source: string;
  status: string;
  thumbnail: ImageNews;
  title: string;
  type: number;
  url?: UrlItem;
}
export interface UrlItem {
  hash: string;
  url: string;
}
export interface ImageNews {
  hash: string;
  quality: number;
  type: string;
}

export interface CardNewsProps {
  data: NewsItem;
  margined?: any;
}

export interface SectionListProps {
  item: any;
}

export interface BannerProps {
  data: NewsItem[];
}
