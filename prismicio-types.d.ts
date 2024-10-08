// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice =
  | LocationSlice
  | TeamSlice
  | ServicesSlice
  | AboutSlice
  | StatisticsSlice
  | HeroSlice
  | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Settings → Social Media*
 */
export interface SettingsDocumentDataSocialMediaItem {
  /**
   * Icons field in *Settings → Social Media*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social_media[].icons
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icons: prismic.SelectField<"facebook" | "instagram" | "twitter" | "linkedin">;

  /**
   * Icon Link field in *Settings → Social Media*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social_media[].icon_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  icon_link: prismic.LinkField;
}

/**
 * Item in *Settings → Contact*
 */
export interface SettingsDocumentDataContactItem {
  /**
   * Item field in *Settings → Contact*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.contact[].item
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  item: prismic.RichTextField;
}

type SettingsDocumentDataSlicesSlice = never;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Fallback OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.fallback_og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  fallback_og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;

  /**
   * Social Media field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social_media[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social_media: prismic.GroupField<
    Simplify<SettingsDocumentDataSocialMediaItem>
  >;

  /**
   * Contact field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.contact[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  contact: prismic.GroupField<Simplify<SettingsDocumentDataContactItem>>;

  /**
   * Slice Zone field in *Settings*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SettingsDocumentDataSlicesSlice> /**
   * Meta Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: settings.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: settings.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes = PageDocument | SettingsDocument;

/**
 * Item in *About → Default → Primary → About Info*
 */
export interface AboutSliceDefaultPrimaryAboutInfoItem {
  /**
   * Heading field in *About → Default → Primary → About Info*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.about_info[].heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *About → Default → Primary → About Info*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.about_info[].body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Dark field in *About → Default → Primary → About Info*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: about.default.primary.about_info[].dark
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  dark: prismic.BooleanField;
}

/**
 * Primary content in *About → Default → Primary*
 */
export interface AboutSliceDefaultPrimary {
  /**
   * Heading field in *About → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *About → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Image field in *About → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * About Info field in *About → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.about_info[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  about_info: prismic.GroupField<
    Simplify<AboutSliceDefaultPrimaryAboutInfoItem>
  >;
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<"about", AboutSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Location → Default → Primary*
 */
export interface LocationSliceDefaultPrimary {
  /**
   * Heading field in *Location → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: location.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;
}

/**
 * Default variation for Location Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LocationSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LocationSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Location*
 */
type LocationSliceVariation = LocationSliceDefault;

/**
 * Location Shared Slice
 *
 * - **API ID**: `location`
 * - **Description**: Location
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LocationSlice = prismic.SharedSlice<
  "location",
  LocationSliceVariation
>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Item in *Services → Default → Primary → Services*
 */
export interface ServicesSliceDefaultPrimaryServicesItem {
  /**
   * Service field in *Services → Default → Primary → Services*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.services[].service
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  service: prismic.TitleField;

  /**
   * Image field in *Services → Default → Primary → Services*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.services[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *Services → Default → Primary*
 */
export interface ServicesSliceDefaultPrimary {
  /**
   * Heading field in *Services → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Services field in *Services → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.services[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  services: prismic.GroupField<
    Simplify<ServicesSliceDefaultPrimaryServicesItem>
  >;
}

/**
 * Default variation for Services Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ServicesSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Services*
 */
type ServicesSliceVariation = ServicesSliceDefault;

/**
 * Services Shared Slice
 *
 * - **API ID**: `services`
 * - **Description**: Services
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSlice = prismic.SharedSlice<
  "services",
  ServicesSliceVariation
>;

/**
 * Item in *Statistics → Default → Primary →  Statistics*
 */
export interface StatisticsSliceDefaultPrimaryStatisticsItem {
  /**
   * Heading field in *Statistics → Default → Primary →  Statistics*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: statistics.default.primary.statistics[].heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Statistics → Default → Primary →  Statistics*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: statistics.default.primary.statistics[].body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Primary content in *Statistics → Default → Primary*
 */
export interface StatisticsSliceDefaultPrimary {
  /**
   *  Statistics field in *Statistics → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: statistics.default.primary.statistics[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  statistics: prismic.GroupField<
    Simplify<StatisticsSliceDefaultPrimaryStatisticsItem>
  >;
}

/**
 * Default variation for Statistics Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StatisticsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<StatisticsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Statistics*
 */
type StatisticsSliceVariation = StatisticsSliceDefault;

/**
 * Statistics Shared Slice
 *
 * - **API ID**: `statistics`
 * - **Description**: Statistics
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StatisticsSlice = prismic.SharedSlice<
  "statistics",
  StatisticsSliceVariation
>;

/**
 * Item in *Team → Default → Primary → Members*
 */
export interface TeamSliceDefaultPrimaryMembersItem {
  /**
   * Photo field in *Team → Default → Primary → Members*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.members[].photo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo: prismic.ImageField<never>;

  /**
   * Name field in *Team → Default → Primary → Members*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.members[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.TitleField;

  /**
   * Speciality field in *Team → Default → Primary → Members*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.members[].speciality
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  speciality: prismic.RichTextField;
}

/**
 * Primary content in *Team → Default → Primary*
 */
export interface TeamSliceDefaultPrimary {
  /**
   * Heading field in *Team → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Members field in *Team → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.members[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  members: prismic.GroupField<Simplify<TeamSliceDefaultPrimaryMembersItem>>;
}

/**
 * Default variation for Team Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TeamSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Team*
 */
type TeamSliceVariation = TeamSliceDefault;

/**
 * Team Shared Slice
 *
 * - **API ID**: `team`
 * - **Description**: Team
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSlice = prismic.SharedSlice<"team", TeamSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      SettingsDocumentDataSocialMediaItem,
      SettingsDocumentDataContactItem,
      SettingsDocumentDataSlicesSlice,
      AllDocumentTypes,
      AboutSlice,
      AboutSliceDefaultPrimaryAboutInfoItem,
      AboutSliceDefaultPrimary,
      AboutSliceVariation,
      AboutSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      LocationSlice,
      LocationSliceDefaultPrimary,
      LocationSliceVariation,
      LocationSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      ServicesSlice,
      ServicesSliceDefaultPrimaryServicesItem,
      ServicesSliceDefaultPrimary,
      ServicesSliceVariation,
      ServicesSliceDefault,
      StatisticsSlice,
      StatisticsSliceDefaultPrimaryStatisticsItem,
      StatisticsSliceDefaultPrimary,
      StatisticsSliceVariation,
      StatisticsSliceDefault,
      TeamSlice,
      TeamSliceDefaultPrimaryMembersItem,
      TeamSliceDefaultPrimary,
      TeamSliceVariation,
      TeamSliceDefault,
    };
  }
}
