import styles from "../styles/PostList.module.css";
import Link from "next/link";

import CardPost from "./cardpost";

export default function PostList({ posts }) {
  if (posts === "undefined") return null;
  // const blogCategory = props.params;

  const postList = posts;

  const newPostList = postList.sort(
    (a, b) =>
      new Date(b.frontmatter.date.replace(/['"]+/g, "")) -
      new Date(a.frontmatter.date.replace(/['"]+/g, ""))
  );

  return (
    <div className={styles.content}>
      {!newPostList && <div>No posts!</div>}
      <div>
        {newPostList &&
          newPostList.map((post) => {
            // newPostList.slice(0, 5).map((post) => {
            return (
              <Link
                href={{ pathname: `/${post.slug}` }}
                key={post?.frontmatter.title}
              >
                <a>
                  <CardPost
                    postDate={new Date(
                      post.frontmatter.date.replace(/['"]+/g, "")
                    ).toLocaleString("pt-BR", {
                      day: "2-digit",
                      month: "short",
                      timeZone: "UTC",
                    })}
                    title={post?.frontmatter?.title}
                    type={post?.frontmatter?.type}
                    category={post?.frontmatter?.category}
                  />
                </a>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
