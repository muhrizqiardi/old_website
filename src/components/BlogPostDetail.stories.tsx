import BlogPostDetail from "./BlogPostDetail";
import BlogLayout from "./BlogLayout";
import Nav from "./BlogNav";

const content = (
  <>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quod
      error aliquam ipsum saepe quasi odit voluptas voluptatibus reiciendis
      sint, atque sunt! Cumque consequatur maiores magni voluptatem id, dolorem
      possimus provident culpa architecto optio blanditiis fuga ipsam illum
      aspernatur, quam officiis ipsum consequuntur voluptatum corporis quidem
      amet deserunt non ad!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quod
      error aliquam ipsum saepe quasi odit voluptas voluptatibus reiciendis
      sint, atque sunt! Cumque consequatur maiores magni voluptatem id, dolorem
      possimus provident culpa architecto optio blanditiis fuga ipsam illum
      aspernatur, quam officiis ipsum consequuntur voluptatum corporis quidem
      amet deserunt non ad!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quod
      error aliquam ipsum saepe quasi odit voluptas voluptatibus reiciendis
      sint, atque sunt! Cumque consequatur maiores magni voluptatem id, dolorem
      possimus provident culpa architecto optio blanditiis fuga ipsam illum
      aspernatur, quam officiis ipsum consequuntur voluptatum corporis quidem
      amet deserunt non ad!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quod
      error aliquam ipsum saepe quasi odit voluptas voluptatibus reiciendis
      sint, atque sunt! Cumque consequatur maiores magni voluptatem id, dolorem
      possimus provident culpa architecto optio blanditiis fuga ipsam illum
      aspernatur, quam officiis ipsum consequuntur voluptatum corporis quidem
      amet deserunt non ad!
    </p>
  </>
);

const blogPostDetailProps = {
  title: "title 1",
  coverImage: "https://picsum.photos/id/237/1600/900",
  snippet: "snippet 1",
  content,
  createdAt: "2022-08-28T14:01:00.00",
  updatedAt: "2022-08-28T14:01:00.00",
};

export const defaultStory = () => <BlogPostDetail {...blogPostDetailProps} />;

export const exampleUsage = () => (
  <BlogLayout
    navMenu={
      <Nav
        navItems={[
          {
            href: "/",
            title: "Home",
            isCurrentPage: true,
          },
          {
            href: "/blog",
            title: "Blog",
            isCurrentPage: false,
          },
          {
            href: "/resume",
            title: "Resume",
            isCurrentPage: false,
          },
        ]}
      />
    }
  >
    <BlogPostDetail {...blogPostDetailProps} />
  </BlogLayout>
);
