/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

export type AboutSection = Entry & {
  __typename?: 'AboutSection';
  content?: Maybe<AboutSectionContent>;
  contentfulMetadata: ContentfulMetadata;
  heading?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<AboutSectionLinkingCollections>;
  sys: Sys;
};


export type AboutSectionContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type AboutSectionHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type AboutSectionImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AboutSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AboutSectionCollection = {
  __typename?: 'AboutSectionCollection';
  items: Array<Maybe<AboutSection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AboutSectionContent = {
  __typename?: 'AboutSectionContent';
  json: Scalars['JSON']['output'];
  links: AboutSectionContentLinks;
};

export type AboutSectionContentAssets = {
  __typename?: 'AboutSectionContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type AboutSectionContentEntries = {
  __typename?: 'AboutSectionContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type AboutSectionContentLinks = {
  __typename?: 'AboutSectionContentLinks';
  assets: AboutSectionContentAssets;
  entries: AboutSectionContentEntries;
  resources: AboutSectionContentResources;
};

export type AboutSectionContentResources = {
  __typename?: 'AboutSectionContentResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type AboutSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<AboutSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AboutSectionFilter>>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type AboutSectionLinkingCollections = {
  __typename?: 'AboutSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AboutSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AboutSectionOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  aboutSectionCollection?: Maybe<AboutSectionCollection>;
  bannerImagesCollection?: Maybe<BannerImagesCollection>;
  commissionsPageCollection?: Maybe<CommissionsPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  galleryImagesCollection?: Maybe<GalleryImagesCollection>;
  headerCollection?: Maybe<HeaderCollection>;
  productCollection?: Maybe<ProductCollection>;
};


export type AssetLinkingCollectionsAboutSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsAboutSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsBannerImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsBannerImagesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsCommissionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsCommissionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsGalleryImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsGalleryImagesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsHeaderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsProductCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetLinkingCollectionsAboutSectionCollectionOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsBannerImagesCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UniqueAsc = 'unique_ASC',
  UniqueDesc = 'unique_DESC'
}

export enum AssetLinkingCollectionsCommissionsPageCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UniqueAsc = 'unique_ASC',
  UniqueDesc = 'unique_DESC'
}

export enum AssetLinkingCollectionsGalleryImagesCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UniqueAsc = 'unique_ASC',
  UniqueDesc = 'unique_DESC'
}

export enum AssetLinkingCollectionsHeaderCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UniqueAsc = 'unique_ASC',
  UniqueDesc = 'unique_DESC'
}

export enum AssetLinkingCollectionsProductCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PromotionAsc = 'promotion_ASC',
  PromotionDesc = 'promotion_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type BannerImages = Entry & {
  __typename?: 'BannerImages';
  contentfulMetadata: ContentfulMetadata;
  imagesCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<BannerImagesLinkingCollections>;
  sys: Sys;
  unique?: Maybe<Scalars['Int']['output']>;
};


export type BannerImagesImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type BannerImagesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BannerImagesUniqueArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type BannerImagesCollection = {
  __typename?: 'BannerImagesCollection';
  items: Array<Maybe<BannerImages>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BannerImagesFilter = {
  AND?: InputMaybe<Array<InputMaybe<BannerImagesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BannerImagesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  unique?: InputMaybe<Scalars['Int']['input']>;
  unique_exists?: InputMaybe<Scalars['Boolean']['input']>;
  unique_gt?: InputMaybe<Scalars['Int']['input']>;
  unique_gte?: InputMaybe<Scalars['Int']['input']>;
  unique_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  unique_lt?: InputMaybe<Scalars['Int']['input']>;
  unique_lte?: InputMaybe<Scalars['Int']['input']>;
  unique_not?: InputMaybe<Scalars['Int']['input']>;
  unique_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type BannerImagesLinkingCollections = {
  __typename?: 'BannerImagesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BannerImagesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BannerImagesOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UniqueAsc = 'unique_ASC',
  UniqueDesc = 'unique_DESC'
}

export type CommissionsPage = Entry & {
  __typename?: 'CommissionsPage';
  content?: Maybe<CommissionsPageContent>;
  contentfulMetadata: ContentfulMetadata;
  imagesCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<CommissionsPageLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  unique?: Maybe<Scalars['Boolean']['output']>;
};


export type CommissionsPageContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type CommissionsPageImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CommissionsPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CommissionsPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type CommissionsPageUniqueArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CommissionsPageCollection = {
  __typename?: 'CommissionsPageCollection';
  items: Array<Maybe<CommissionsPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CommissionsPageContent = {
  __typename?: 'CommissionsPageContent';
  json: Scalars['JSON']['output'];
  links: CommissionsPageContentLinks;
};

export type CommissionsPageContentAssets = {
  __typename?: 'CommissionsPageContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CommissionsPageContentEntries = {
  __typename?: 'CommissionsPageContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CommissionsPageContentLinks = {
  __typename?: 'CommissionsPageContentLinks';
  assets: CommissionsPageContentAssets;
  entries: CommissionsPageContentEntries;
  resources: CommissionsPageContentResources;
};

export type CommissionsPageContentResources = {
  __typename?: 'CommissionsPageContentResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type CommissionsPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<CommissionsPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CommissionsPageFilter>>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  unique_exists?: InputMaybe<Scalars['Boolean']['input']>;
  unique_not?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommissionsPageLinkingCollections = {
  __typename?: 'CommissionsPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CommissionsPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CommissionsPageOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UniqueAsc = 'unique_ASC',
  UniqueDesc = 'unique_DESC'
}

export type ContactDetails = Entry & {
  __typename?: 'ContactDetails';
  contentfulMetadata: ContentfulMetadata;
  email?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContactDetailsLinkingCollections>;
  sys: Sys;
  whatsapp?: Maybe<Scalars['String']['output']>;
};


export type ContactDetailsEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContactDetailsInstagramArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ContactDetailsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContactDetailsWhatsappArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContactDetailsCollection = {
  __typename?: 'ContactDetailsCollection';
  items: Array<Maybe<ContactDetails>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContactDetailsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContactDetailsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactDetailsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  instagram_contains?: InputMaybe<Scalars['String']['input']>;
  instagram_exists?: InputMaybe<Scalars['Boolean']['input']>;
  instagram_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  instagram_not?: InputMaybe<Scalars['String']['input']>;
  instagram_not_contains?: InputMaybe<Scalars['String']['input']>;
  instagram_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
  whatsapp_contains?: InputMaybe<Scalars['String']['input']>;
  whatsapp_exists?: InputMaybe<Scalars['Boolean']['input']>;
  whatsapp_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  whatsapp_not?: InputMaybe<Scalars['String']['input']>;
  whatsapp_not_contains?: InputMaybe<Scalars['String']['input']>;
  whatsapp_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContactDetailsLinkingCollections = {
  __typename?: 'ContactDetailsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ContactDetailsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContactDetailsOrder {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  InstagramAsc = 'instagram_ASC',
  InstagramDesc = 'instagram_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WhatsappAsc = 'whatsapp_ASC',
  WhatsappDesc = 'whatsapp_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type GalleryImages = Entry & {
  __typename?: 'GalleryImages';
  contentfulMetadata: ContentfulMetadata;
  imagesCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<GalleryImagesLinkingCollections>;
  sys: Sys;
  unique?: Maybe<Scalars['Int']['output']>;
};


export type GalleryImagesImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type GalleryImagesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type GalleryImagesUniqueArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type GalleryImagesCollection = {
  __typename?: 'GalleryImagesCollection';
  items: Array<Maybe<GalleryImages>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type GalleryImagesFilter = {
  AND?: InputMaybe<Array<InputMaybe<GalleryImagesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GalleryImagesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  unique?: InputMaybe<Scalars['Int']['input']>;
  unique_exists?: InputMaybe<Scalars['Boolean']['input']>;
  unique_gt?: InputMaybe<Scalars['Int']['input']>;
  unique_gte?: InputMaybe<Scalars['Int']['input']>;
  unique_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  unique_lt?: InputMaybe<Scalars['Int']['input']>;
  unique_lte?: InputMaybe<Scalars['Int']['input']>;
  unique_not?: InputMaybe<Scalars['Int']['input']>;
  unique_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type GalleryImagesLinkingCollections = {
  __typename?: 'GalleryImagesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type GalleryImagesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum GalleryImagesOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UniqueAsc = 'unique_ASC',
  UniqueDesc = 'unique_DESC'
}

export type Header = Entry & {
  __typename?: 'Header';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<HeaderLinkingCollections>;
  logo?: Maybe<Asset>;
  sys: Sys;
  tagline?: Maybe<HeaderTagline>;
  title?: Maybe<Scalars['String']['output']>;
  unique?: Maybe<Scalars['Int']['output']>;
};


export type HeaderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HeaderLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type HeaderTaglineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type HeaderTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type HeaderUniqueArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HeaderCollection = {
  __typename?: 'HeaderCollection';
  items: Array<Maybe<Header>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeaderFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  tagline_contains?: InputMaybe<Scalars['String']['input']>;
  tagline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tagline_not_contains?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Int']['input']>;
  unique_exists?: InputMaybe<Scalars['Boolean']['input']>;
  unique_gt?: InputMaybe<Scalars['Int']['input']>;
  unique_gte?: InputMaybe<Scalars['Int']['input']>;
  unique_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  unique_lt?: InputMaybe<Scalars['Int']['input']>;
  unique_lte?: InputMaybe<Scalars['Int']['input']>;
  unique_not?: InputMaybe<Scalars['Int']['input']>;
  unique_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type HeaderLinkingCollections = {
  __typename?: 'HeaderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HeaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeaderOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UniqueAsc = 'unique_ASC',
  UniqueDesc = 'unique_DESC'
}

export type HeaderTagline = {
  __typename?: 'HeaderTagline';
  json: Scalars['JSON']['output'];
  links: HeaderTaglineLinks;
};

export type HeaderTaglineAssets = {
  __typename?: 'HeaderTaglineAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HeaderTaglineEntries = {
  __typename?: 'HeaderTaglineEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HeaderTaglineLinks = {
  __typename?: 'HeaderTaglineLinks';
  assets: HeaderTaglineAssets;
  entries: HeaderTaglineEntries;
  resources: HeaderTaglineResources;
};

export type HeaderTaglineResources = {
  __typename?: 'HeaderTaglineResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export enum ImageFormat {
  Avif = 'AVIF',
  Jpg = 'JPG',
  JpgProgressive = 'JPG_PROGRESSIVE',
  Png = 'PNG',
  Png8 = 'PNG8',
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  Bottom = 'BOTTOM',
  BottomLeft = 'BOTTOM_LEFT',
  BottomRight = 'BOTTOM_RIGHT',
  Center = 'CENTER',
  Face = 'FACE',
  Faces = 'FACES',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP',
  TopLeft = 'TOP_LEFT',
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  Crop = 'CROP',
  Fill = 'FILL',
  Fit = 'FIT',
  Pad = 'PAD',
  Scale = 'SCALE',
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<ImageFormat>;
  height?: InputMaybe<Scalars['Dimension']['input']>;
  quality?: InputMaybe<Scalars['Quality']['input']>;
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

export type Product = Entry & {
  __typename?: 'Product';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ProductDescription>;
  linkedFrom?: Maybe<ProductLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  primaryImage?: Maybe<Asset>;
  promotion?: Maybe<Scalars['String']['output']>;
  secondaryImagesCollection?: Maybe<AssetCollection>;
  sys: Sys;
};


export type ProductDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ProductLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ProductPriceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ProductPrimaryImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProductPromotionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ProductSecondaryImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductCollection = {
  __typename?: 'ProductCollection';
  items: Array<Maybe<Product>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ProductDescription = {
  __typename?: 'ProductDescription';
  json: Scalars['JSON']['output'];
  links: ProductDescriptionLinks;
};

export type ProductDescriptionAssets = {
  __typename?: 'ProductDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ProductDescriptionEntries = {
  __typename?: 'ProductDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ProductDescriptionLinks = {
  __typename?: 'ProductDescriptionLinks';
  assets: ProductDescriptionAssets;
  entries: ProductDescriptionEntries;
  resources: ProductDescriptionResources;
};

export type ProductDescriptionResources = {
  __typename?: 'ProductDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type ProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<Scalars['String']['input']>;
  price_contains?: InputMaybe<Scalars['String']['input']>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price_not?: InputMaybe<Scalars['String']['input']>;
  price_not_contains?: InputMaybe<Scalars['String']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  primaryImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  promotion?: InputMaybe<Scalars['String']['input']>;
  promotion_contains?: InputMaybe<Scalars['String']['input']>;
  promotion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  promotion_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  promotion_not?: InputMaybe<Scalars['String']['input']>;
  promotion_not_contains?: InputMaybe<Scalars['String']['input']>;
  promotion_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  secondaryImagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ProductLinkingCollections = {
  __typename?: 'ProductLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProductOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PromotionAsc = 'promotion_ASC',
  PromotionDesc = 'promotion_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  aboutSection?: Maybe<AboutSection>;
  aboutSectionCollection?: Maybe<AboutSectionCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  bannerImages?: Maybe<BannerImages>;
  bannerImagesCollection?: Maybe<BannerImagesCollection>;
  commissionsPage?: Maybe<CommissionsPage>;
  commissionsPageCollection?: Maybe<CommissionsPageCollection>;
  contactDetails?: Maybe<ContactDetails>;
  contactDetailsCollection?: Maybe<ContactDetailsCollection>;
  entryCollection?: Maybe<EntryCollection>;
  galleryImages?: Maybe<GalleryImages>;
  galleryImagesCollection?: Maybe<GalleryImagesCollection>;
  header?: Maybe<Header>;
  headerCollection?: Maybe<HeaderCollection>;
  product?: Maybe<Product>;
  productCollection?: Maybe<ProductCollection>;
};


export type QueryAboutSectionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAboutSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AboutSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AboutSectionFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBannerImagesArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBannerImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BannerImagesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BannerImagesFilter>;
};


export type QueryCommissionsPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCommissionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CommissionsPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommissionsPageFilter>;
};


export type QueryContactDetailsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContactDetailsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContactDetailsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactDetailsFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryGalleryImagesArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGalleryImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<GalleryImagesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GalleryImagesFilter>;
};


export type QueryHeaderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeaderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeaderFilter>;
};


export type QueryProductArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProductOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFilter>;
};

export type ResourceLink = {
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  type: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type GetHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHeaderQuery = { __typename?: 'Query', headerCollection?: { __typename?: 'HeaderCollection', items: Array<{ __typename?: 'Header', title?: string | null, tagline?: { __typename?: 'HeaderTagline', json: any } | null, logo?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type GetAboutSectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAboutSectionsQuery = { __typename?: 'Query', aboutSectionCollection?: { __typename?: 'AboutSectionCollection', items: Array<{ __typename?: 'AboutSection', heading?: string | null, content?: { __typename?: 'AboutSectionContent', json: any } | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type GetCommissionPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCommissionPageQuery = { __typename?: 'Query', commissionsPageCollection?: { __typename?: 'CommissionsPageCollection', items: Array<{ __typename?: 'CommissionsPage', title?: string | null, content?: { __typename?: 'CommissionsPageContent', json: any } | null, imagesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null } | null> } | null } | null> } | null };

export type GetGalleryImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGalleryImagesQuery = { __typename?: 'Query', galleryImagesCollection?: { __typename?: 'GalleryImagesCollection', items: Array<{ __typename?: 'GalleryImages', imagesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null } | null> } | null } | null> } | null };

export type GetBannerImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBannerImagesQuery = { __typename?: 'Query', bannerImagesCollection?: { __typename?: 'BannerImagesCollection', items: Array<{ __typename?: 'BannerImages', imagesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null } | null> } | null } | null> } | null };

export type GetProductPreviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductPreviewsQuery = { __typename?: 'Query', productCollection?: { __typename?: 'ProductCollection', items: Array<{ __typename?: 'Product', name?: string | null, price?: string | null, primaryImage?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };


export const GetHeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headerCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tagline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetHeaderQuery, GetHeaderQueryVariables>;
export const GetAboutSectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAboutSections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutSectionCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAboutSectionsQuery, GetAboutSectionsQueryVariables>;
export const GetCommissionPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCommissionPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commissionsPageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imagesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCommissionPageQuery, GetCommissionPageQueryVariables>;
export const GetGalleryImagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGalleryImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"galleryImagesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imagesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetGalleryImagesQuery, GetGalleryImagesQueryVariables>;
export const GetBannerImagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBannerImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bannerImagesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imagesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBannerImagesQuery, GetBannerImagesQueryVariables>;
export const GetProductPreviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductPreviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"primaryImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductPreviewsQuery, GetProductPreviewsQueryVariables>;