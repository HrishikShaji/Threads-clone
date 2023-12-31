import { fetchPosts } from "@/lib/actions/thread.actions";
import { UserButton, currentUser } from "@clerk/nextjs";
import ThreadCard from "@/components/cards/ThreadCard";

export default async function Home() {
  const result = await fetchPosts(1, 30);
  const user = await currentUser();

  console.log(result);
  return (
    <>
      <h1 className="text-left text-2xl font-bold text-white">Home</h1>
      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p>No Threads Found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user?.id || ""}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>
    </>
  );
}
