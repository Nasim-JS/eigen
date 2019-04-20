/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { ArtworkRailHeader_rail$ref } from "./ArtworkRailHeader_rail.graphql";
import { GenericGrid_artworks$ref } from "./GenericGrid_artworks.graphql";
declare const _ArtworkRail_rail$ref: unique symbol;
export type ArtworkRail_rail$ref = typeof _ArtworkRail_rail$ref;
export type ArtworkRail_rail = {
    readonly __id: string;
    readonly key: string | null;
    readonly params: ({
        readonly medium: string | null;
        readonly price_range: string | null;
    }) | null;
    readonly context: ({
        readonly artist?: ({
            readonly href: string | null;
        }) | null;
        readonly href?: string | null;
    }) | null;
    readonly results?: ReadonlyArray<({
        readonly " $fragmentRefs": GenericGrid_artworks$ref;
    }) | null> | null;
    readonly " $fragmentRefs": ArtworkRailHeader_rail$ref;
    readonly " $refType": ArtworkRail_rail$ref;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "href",
    "args": null,
    "storageKey": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "artist",
    "storageKey": null,
    "args": null,
    "concreteType": "Artist",
    "plural": false,
    "selections": (v0/*: any*/)
  }
];
return {
  "kind": "Fragment",
  "name": "ArtworkRail_rail",
  "type": "HomePageArtworkModule",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "fetchContent",
      "type": "Boolean!",
      "defaultValue": false
    }
  ],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "ArtworkRailHeader_rail",
      "args": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "key",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "params",
      "storageKey": null,
      "args": null,
      "concreteType": "HomePageModulesParams",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "medium",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "price_range",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "context",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "type": "HomePageModuleContextSale",
          "selections": (v0/*: any*/)
        },
        {
          "kind": "InlineFragment",
          "type": "HomePageModuleContextGene",
          "selections": (v0/*: any*/)
        },
        {
          "kind": "InlineFragment",
          "type": "HomePageModuleContextFair",
          "selections": (v0/*: any*/)
        },
        {
          "kind": "InlineFragment",
          "type": "HomePageModuleContextRelatedArtist",
          "selections": (v1/*: any*/)
        },
        {
          "kind": "InlineFragment",
          "type": "HomePageModuleContextFollowedArtist",
          "selections": (v1/*: any*/)
        }
      ]
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "fetchContent",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "results",
          "storageKey": null,
          "args": null,
          "concreteType": "Artwork",
          "plural": true,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "GenericGrid_artworks",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = '41d01e4231ca8c5ff67d56e8989582d5';
export default node;
