import { AutoProps, JobsPage } from "./(components)/JobsPage";

export default function Page(props: AutoProps) {
  return (
    <>
      <JobsPage
        {...props}
        env={{
          ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID!,
          ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY!,
        }}
      />
    </>
  );
}
