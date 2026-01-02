import { api } from "@/lib/axios";
import { useCallback, useEffect, useState } from "react";


import { Post } from "./components/Post";
import { PostsListContainer } from "./styles";
import { Spinner } from "@/components/Spinner";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        setIsLoading(true);
        const url = `/search/issues?q=${query}%20label:published%20repo:${username}/${repoName}`;
        console.log("URL da API:", url);
        console.log("Username:", username);
        console.log("RepoName:", repoName);
        
        const response = await api.get(url);
          
        console.log("Resposta da API:", response.data);

        setPosts(response.data.items);
      } finally {
        setIsLoading(false);
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? (
        <Spinner />
      ) : (
        <PostsListContainer>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </PostsListContainer>
      )}
    </>
  );
}
