/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ConfirmBidRefetchQueryVariables = {
    readonly saleID: string;
};
export type ConfirmBidRefetchQueryResponse = {
    readonly me: ({
        readonly has_qualified_credit_cards: boolean | null;
        readonly bidders: ReadonlyArray<({
            readonly qualified_for_bidding: boolean | null;
        }) | null> | null;
    }) | null;
};
export type ConfirmBidRefetchQuery = {
    readonly response: ConfirmBidRefetchQueryResponse;
    readonly variables: ConfirmBidRefetchQueryVariables;
};



/*
query ConfirmBidRefetchQuery(
  $saleID: String!
) {
  me {
    has_qualified_credit_cards
    bidders(sale_id: $saleID) {
      qualified_for_bidding
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "saleID",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "me",
    "storageKey": null,
    "args": null,
    "concreteType": "Me",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "has_qualified_credit_cards",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bidders",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "sale_id",
            "variableName": "saleID",
            "type": "String"
          }
        ],
        "concreteType": "Bidder",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "qualified_for_bidding",
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
    "name": "ConfirmBidRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ConfirmBidRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ConfirmBidRefetchQuery",
    "id": "12cc69f9d8252cdd1c762eea37e5ae8f",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = '12cc69f9d8252cdd1c762eea37e5ae8f';
export default node;
