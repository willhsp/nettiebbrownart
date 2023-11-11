/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetHeader {\n    headerCollection(limit: 1) {\n      items {\n        title\n        tagline {\n          json\n        }\n        logo {\n          url\n        }\n      }\n    }\n  }": types.GetHeaderDocument,
    "\n  query GetAboutSections {\n    aboutSectionCollection {\n      items {\n        heading,\n        content {\n          json\n        },\n        image {\n          url\n        }\n      }\n    }\n  }": types.GetAboutSectionsDocument,
    "\n  query GetCommissionPage {\n    commissionsPageCollection(limit: 1) {\n      items {\n        title,\n        content {\n          json\n        },\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }": types.GetCommissionPageDocument,
    "\n  query GetGalleryImages {\n      galleryImagesCollection(limit: 1) {\n      items {\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }": types.GetGalleryImagesDocument,
    "\n  query GetBannerImages {\n    bannerImagesCollection(limit: 1) {\n      items {\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }": types.GetBannerImagesDocument,
    "\n  query GetProductPreviews {\n    productCollection(limit: 10) {\n      items {\n        name,\n        price,\n        primaryImage {\n          url\n        }\n      }\n    }\n  }": types.GetProductPreviewsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetHeader {\n    headerCollection(limit: 1) {\n      items {\n        title\n        tagline {\n          json\n        }\n        logo {\n          url\n        }\n      }\n    }\n  }"): (typeof documents)["\n  query GetHeader {\n    headerCollection(limit: 1) {\n      items {\n        title\n        tagline {\n          json\n        }\n        logo {\n          url\n        }\n      }\n    }\n  }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAboutSections {\n    aboutSectionCollection {\n      items {\n        heading,\n        content {\n          json\n        },\n        image {\n          url\n        }\n      }\n    }\n  }"): (typeof documents)["\n  query GetAboutSections {\n    aboutSectionCollection {\n      items {\n        heading,\n        content {\n          json\n        },\n        image {\n          url\n        }\n      }\n    }\n  }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCommissionPage {\n    commissionsPageCollection(limit: 1) {\n      items {\n        title,\n        content {\n          json\n        },\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }"): (typeof documents)["\n  query GetCommissionPage {\n    commissionsPageCollection(limit: 1) {\n      items {\n        title,\n        content {\n          json\n        },\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetGalleryImages {\n      galleryImagesCollection(limit: 1) {\n      items {\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }"): (typeof documents)["\n  query GetGalleryImages {\n      galleryImagesCollection(limit: 1) {\n      items {\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetBannerImages {\n    bannerImagesCollection(limit: 1) {\n      items {\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }"): (typeof documents)["\n  query GetBannerImages {\n    bannerImagesCollection(limit: 1) {\n      items {\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProductPreviews {\n    productCollection(limit: 10) {\n      items {\n        name,\n        price,\n        primaryImage {\n          url\n        }\n      }\n    }\n  }"): (typeof documents)["\n  query GetProductPreviews {\n    productCollection(limit: 10) {\n      items {\n        name,\n        price,\n        primaryImage {\n          url\n        }\n      }\n    }\n  }"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;