import React from "react";
import PlaylistCardsRow from "components/organisms/PlaylistCardsRow";
import LayoutCards from "pages/LayoutCards";
import HomePageTopButtons from "components/organisms/HomePageTopButtons";
import gradient from "util/gradient";
import { useUser } from "hooks/user";
import PlaylistCardRowSkeleton from "skeletons/PlaylistCardRowSkeleton";
function Home() {
  const { data, isLoading } = useUser();

  return (
    <LayoutCards>
      <HomePageTopButtons />
      {isLoading ? (
        <PlaylistCardRowSkeleton />
      ) : (
        <PlaylistCardsRow
          title="Made For"
          keyword={{ text: data.name, color: gradient.blue2 }}
          list={data.madeForUser}
        />
      )}
      {isLoading ? (
        <PlaylistCardRowSkeleton />
      ) : (
        <PlaylistCardsRow
          title="Your"
          keyword={{ text: "Playlists", color: gradient.blue3 }}
          list={data.playlists}
        />
      )}
      {isLoading ? (
        <PlaylistCardRowSkeleton />
      ) : (
        <PlaylistCardsRow
          title="Playlists"
          keyword={{ text: " You Follow", color: gradient.green2 }}
          list={data.playlistsFollow}
        />
      )}
    </LayoutCards>
  );
}
export default Home;
