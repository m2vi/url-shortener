import { GetServerSideProps } from 'next';
import shortener from '@utils/shortener';
import Page from '@components/pages/Alias';

const Alias = Page;

export default Alias;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const data = await shortener.get({ alias: context?.query?.alias?.toString()! });

    if (data?.error || !data?.link) {
      return {
        notFound: true,
      };
    }

    return {
      redirect: {
        statusCode: 308,
        destination: data.link,
      },
    };
  } catch (error: any) {
    return {
      props: {
        error: JSON.stringify(error?.message),
      },
    };
  }
};
