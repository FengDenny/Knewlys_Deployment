import React from "react";

function Gallery({
  MiddleFlexDisplayed,
  Header,
  CardGridThree,
  post,
  beforeAt,
  Card,
  CardImage,
}) {
  return (
    <MiddleFlexDisplayed
      theme={{
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20vh",
      }}
    >
      <Header
        theme={{
          headerMain: "var(--secondary-color)",
          fontSizeXLG: "var(--font-size-lg)",
          alignItems: "center",
        }}
      >
        {beforeAt}'s Gallery
      </Header>
      <CardGridThree theme={{ width: "100%" }}>
        {post &&
          post.map((posts) => (
            <Card key={posts._id}>
              {posts.photo && posts.photo.contentType ? (
                <CardImage
                  src={`/api/v1/post/photo/${posts._id}`}
                  alt={posts.body}
                />
              ) : (
                <CardImage
                  src={
                    "https://res.cloudinary.com/dis7ep3yq/image/upload/v1607809957/1024px-No_image_available.svg_p8eu6x.png"
                  }
                  alt='default image'
                />
              )}
            </Card>
          ))}
      </CardGridThree>
    </MiddleFlexDisplayed>
  );
}

export default Gallery;
