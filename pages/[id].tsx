import { GetStaticPaths, GetStaticProps, GetStaticPropsResult, NextPage } from 'next';

interface FancyPageProps {
  id: number,
}

// @ts-ignore
export const getStaticProps: GetStaticProps = async ({ params: { id } }) => {
  return {
    props: {
      id
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

const FancyPage: NextPage<FancyPageProps> = ({ id }) => {
  return (
    <div>This is an ISR&apos;d page. {id}</div>
  )
}

export default FancyPage;
