import { Flex, Sans, Separator, space, Spacer } from "@artsy/palette"
import { ViewingRoomsList_query$key } from "__generated__/ViewingRoomsList_query.graphql"
import { ViewingRoomsListFeatured_featured$key } from "__generated__/ViewingRoomsListFeatured_featured.graphql"
import { ViewingRoomsListQuery } from "__generated__/ViewingRoomsListQuery.graphql"
import { SectionTitle } from "lib/Components/SectionTitle"
import { PAGE_SIZE } from "lib/data/constants"
import { extractNodes } from "lib/utils/extractNodes"
import { PlaceholderBox, PlaceholderText, ProvidePlaceholderContext } from "lib/utils/placeholders"
import { useScreenDimensions } from "lib/utils/useScreenDimensions"
import _ from "lodash"
import React, { useRef, useState } from "react"
import { FlatList, RefreshControl } from "react-native"
import { ConnectionConfig } from "react-relay"
import { graphql, usePagination, useQuery } from "relay-hooks"
import { RailScrollRef } from "../Home/Components/types"
import { FeaturedRail } from "./Components/ViewingRoomsListFeatured"
import { ViewingRoomsListItem } from "./Components/ViewingRoomsListItem"

const fragmentSpec = graphql`
  fragment ViewingRoomsList_query on Query @argumentDefinitions(count: { type: "Int" }, after: { type: "String" }) {
    viewingRooms(first: $count, after: $after) @connection(key: "ViewingRoomsList_viewingRooms") {
      edges {
        node {
          internalID
          ...ViewingRoomsListItem_item
        }
      }
    }
  }
`

const useNumColumns = () => {
  const { width, orientation } = useScreenDimensions()
  const isIPad = width > 700

  if (!isIPad) {
    return 1
  }

  return orientation === "portrait" ? 2 : 3
}

interface ViewingRoomsListProps {
  query: ViewingRoomsList_query$key
  featured: ViewingRoomsListFeatured_featured$key
}

export const ViewingRoomsListContainer: React.FC<ViewingRoomsListProps> = props => {
  const [queryData, { isLoading, hasMore, loadMore, refetchConnection }] = usePagination(fragmentSpec, props.query)
  const viewingRooms = extractNodes(queryData.viewingRooms)

  const handleLoadMore = () => {
    if (!hasMore() || isLoading()) {
      return
    }
    loadMore(connectionConfig, PAGE_SIZE)
  }

  const [refreshing, setRefreshing] = useState(false)
  const handleRefresh = () => {
    setRefreshing(true)
    refetchConnection(connectionConfig, PAGE_SIZE)
    setRefreshing(false)
    scrollRef.current?.scrollToTop()
  }

  const numColumns = useNumColumns()
  const scrollRef = useRef<RailScrollRef>(null)

  return (
    <Flex flexDirection="column" justifyContent="space-between" height="100%">
      <Sans size="4t" weight="medium" textAlign="center" mb={1} mt={2}>
        Viewing Rooms
      </Sans>
      <Separator />
      {numColumns === 1 ? (
        <FlatList
          ListHeaderComponent={() => (
            <>
              <Spacer mt="2" />
              <Flex mx="2">
                <SectionTitle title="Featured" />
              </Flex>
              <FeaturedRail featured={props.featured} scrollRef={scrollRef} />
              <Spacer mt="4" />
              <Flex mx="2">
                <SectionTitle title="Latest" />
              </Flex>
            </>
          )}
          data={viewingRooms}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
          keyExtractor={item => item.internalID}
          renderItem={({ item }) => (
            <Flex mx="2">
              <ViewingRoomsListItem item={item} />
            </Flex>
          )}
          ItemSeparatorComponent={() => <Spacer mt="3" />}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={1}
        />
      ) : (
        <FlatList
          contentContainerStyle={{ marginHorizontal: space(2) }}
          ListHeaderComponent={() => (
            <>
              <Flex mx="2">
                <SectionTitle title="Featured" />
              </Flex>
              <FeaturedRail featured={props.featured} scrollRef={scrollRef} />
              <Spacer mt="4" />
              <Flex mx="2">
                <SectionTitle title="Latest" />
              </Flex>
            </>
          )}
          key={`${numColumns}`}
          numColumns={numColumns}
          data={viewingRooms}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
          keyExtractor={item => `${item.internalID}-${numColumns}`}
          renderItem={({ item, index }) => (
            <Flex flex={1 / numColumns} flexDirection="row">
              {index % numColumns > 0 && <Spacer ml="1" />}
              <Flex flex={1}>
                <ViewingRoomsListItem item={item} />
              </Flex>
              {index % numColumns < numColumns - 1 && <Spacer mr="1" />}
            </Flex>
          )}
          ItemSeparatorComponent={() => <Spacer mt="3" />}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={1}
        />
      )}
    </Flex>
  )
}

const query = graphql`
  query ViewingRoomsListQuery($count: Int!, $after: String) {
    ...ViewingRoomsList_query @arguments(count: $count, after: $after)

    featured: viewingRooms(featured: true) {
      ...ViewingRoomsListFeatured_featured
    }
  }
`

const connectionConfig: ConnectionConfig = {
  query,
  getVariables: (_props, { count, cursor }, _fragmentVariables) => ({
    count,
    after: cursor,
  }),
}

const Placeholder = () => (
  <ProvidePlaceholderContext>
    <PlaceholderText width={100 + Math.random() * 100} marginTop={30} alignSelf="center" />
    <Separator mt="1" mb="2" />
    <Flex ml="2">
      <PlaceholderText width={100 + Math.random() * 100} marginBottom={20} />
      <Flex flexDirection="row">
        {_.times(4).map(i => (
          <PlaceholderBox key={i} width={280} height={370} marginRight={15} />
        ))}
      </Flex>
    </Flex>
    <Flex mx="2" mt="4">
      <PlaceholderText width={100 + Math.random() * 100} marginBottom={20} />
      {_.times(2).map(i => (
        <React.Fragment key={i}>
          <PlaceholderBox width="100%" height={220} />
          <PlaceholderText width={120 + Math.random() * 100} marginTop={10} />
          <PlaceholderText width={80 + Math.random() * 100} marginTop={5} />
        </React.Fragment>
      ))}
    </Flex>
  </ProvidePlaceholderContext>
)

export const ViewingRoomsListQueryRenderer: React.FC = () => {
  const { props, error } = useQuery<ViewingRoomsListQuery>(query, { count: PAGE_SIZE })

  if (props) {
    return <ViewingRoomsListContainer query={props} featured={props.featured!} />
  }
  if (error) {
    throw error
  }

  return <Placeholder />
}
