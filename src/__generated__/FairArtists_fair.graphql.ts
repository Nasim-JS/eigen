/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { ArtistListItem_artist$ref } from "./ArtistListItem_artist.graphql";
declare const _FairArtists_fair$ref: unique symbol;
export type FairArtists_fair$ref = typeof _FairArtists_fair$ref;
export type FairArtists_fair = {
    readonly gravityID: string;
    readonly _id: string;
    readonly artists: ({
        readonly pageInfo: {
            readonly hasNextPage: boolean;
            readonly startCursor: string | null;
            readonly endCursor: string | null;
        };
        readonly edges: ReadonlyArray<({
            readonly cursor: string;
            readonly node: ({
                readonly sortable_id: string | null;
                readonly href: string | null;
                readonly _id: string;
                readonly gravityID: string;
                readonly " $fragmentRefs": ArtistListItem_artist$ref;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": FairArtists_fair$ref;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "gravityID",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "FairArtists_fair",
  "type": "Fair",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "artists"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 10
    },
    {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": null
    }
  ],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "kind": "LinkedField",
      "alias": "artists",
      "name": "__Fair_artists_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtistConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "startCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "ArtistEdge",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Artist",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "ArtistListItem_artist",
                  "args": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "sortable_id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "href",
                  "args": null,
                  "storageKey": null
                },
                (v1/*: any*/),
                (v0/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = '76600a5db4c0a4f3b9a9691ad6971184';
export default node;
