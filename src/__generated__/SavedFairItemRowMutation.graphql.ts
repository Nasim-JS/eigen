/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type FollowProfileInput = {
    readonly profile_id?: string | null;
    readonly unfollow?: boolean | null;
    readonly clientMutationId?: string | null;
};
export type SavedFairItemRowMutationVariables = {
    readonly input: FollowProfileInput;
};
export type SavedFairItemRowMutationResponse = {
    readonly followProfile: ({
        readonly profile: ({
            readonly gravityID: string;
            readonly is_followed: boolean | null;
            readonly __id: string;
        }) | null;
    }) | null;
};
export type SavedFairItemRowMutation = {
    readonly response: SavedFairItemRowMutationResponse;
    readonly variables: SavedFairItemRowMutationVariables;
};



/*
mutation SavedFairItemRowMutation(
  $input: FollowProfileInput!
) {
  followProfile(input: $input) {
    profile {
      gravityID
      is_followed
      __id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "FollowProfileInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "followProfile",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "FollowProfileInput!"
      }
    ],
    "concreteType": "FollowProfilePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "profile",
        "storageKey": null,
        "args": null,
        "concreteType": "Profile",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "gravityID",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "is_followed",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SavedFairItemRowMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SavedFairItemRowMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SavedFairItemRowMutation",
    "id": "aa6dae754811d3cc380a3c475680fad6",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = 'aa6dae754811d3cc380a3c475680fad6';
export default node;
