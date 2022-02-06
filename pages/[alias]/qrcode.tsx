import { GetServerSideProps } from 'next';
import shortener from '@utils/shortener';
import Page from '@components/pages/Qrcode';

const Qrcode = Page;

export default Qrcode;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const data = await shortener.get({ alias: context?.query?.alias?.toString()! });

    return {
      props: {
        data,
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
